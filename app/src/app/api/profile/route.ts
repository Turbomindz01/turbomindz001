/**
 * Profile API — handles privileged writes to the profiles table.
 *
 * GET  /api/profile?address=0x...
 *      Public read of a profile by wallet address.
 *
 * POST /api/profile
 *      Body: { address, signature, nonce, updates }
 *      Verifies the wallet signature, then upserts the profile using
 *      the service-role key (bypassing RLS).
 */
import { NextResponse, type NextRequest } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/supabase/admin';
import { verifyWalletSignature } from '@/lib/auth/verify-wallet';
import type { ProfileUpdate } from '@/lib/supabase/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_FIELDS = new Set<keyof ProfileUpdate>([
  'username',
  'bio',
  'avatar_url',
  'twitter',
  'discord',
  'opensea',
  'email',
  'email_notifications',
  'marketplace_alerts',
  'privacy_level',
]);

function sanitizeUpdates(input: Record<string, unknown>): ProfileUpdate {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(input)) {
    if (ALLOWED_FIELDS.has(k as keyof ProfileUpdate)) out[k] = v;
  }
  return out as ProfileUpdate;
}

// ───────────────────────── GET ──────────────────────────────────
export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get('address')?.toLowerCase();
  if (!address || !/^0x[a-f0-9]{40}$/.test(address)) {
    return NextResponse.json({ error: 'invalid address' }, { status: 400 });
  }

  try {
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('wallet_address', address)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ profile: data });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'internal error' },
      { status: 500 }
    );
  }
}

// ───────────────────────── POST ─────────────────────────────────
export async function POST(req: NextRequest) {
  let body: {
    address?: string;
    signature?: string;
    nonce?: string;
    updates?: Record<string, unknown>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid JSON' }, { status: 400 });
  }

  const { address, signature, nonce, updates } = body;
  if (!address || !signature || !nonce || !updates) {
    return NextResponse.json(
      { error: 'address, signature, nonce, updates required' },
      { status: 400 }
    );
  }

  // 1. Verify wallet ownership.
  const auth = await verifyWalletSignature({ address, signature, nonce });
  if (!auth.ok || !auth.address) {
    return NextResponse.json(
      { error: `unauthorized: ${auth.reason}` },
      { status: 401 }
    );
  }

  // 2. Sanitize updates to a known field whitelist.
  const sanitized = sanitizeUpdates(updates);
  if (Object.keys(sanitized).length === 0) {
    return NextResponse.json({ error: 'no valid updates' }, { status: 400 });
  }

  // 3. Upsert via service role (bypasses RLS).
  try {
    const supabase = getSupabaseAdminClient();

    // Ensure row exists (insert) then update. Two queries keeps the
    // logic obvious; can be unified with .upsert() once we rely on it.
    const { data: existing } = await supabase
      .from('profiles')
      .select('id')
      .eq('wallet_address', auth.address)
      .maybeSingle();

    if (!existing) {
      const { error: insertError } = await supabase
        .from('profiles')
        .insert({
          wallet_address: auth.address,
          email_notifications: true,
          marketplace_alerts: true,
          privacy_level: 'public',
          ...sanitized,
        });
      if (insertError) {
        return NextResponse.json(
          { error: insertError.message },
          { status: 500 }
        );
      }
    } else {
      const { error: updateError } = await supabase
        .from('profiles')
        .update(sanitized)
        .eq('wallet_address', auth.address);
      if (updateError) {
        return NextResponse.json(
          { error: updateError.message },
          { status: 500 }
        );
      }
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('wallet_address', auth.address)
      .maybeSingle();

    return NextResponse.json({ profile });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'internal error' },
      { status: 500 }
    );
  }
}
