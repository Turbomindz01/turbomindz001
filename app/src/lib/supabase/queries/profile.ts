/**
 * Profile queries (browser-safe). Returns null when Supabase isn't configured
 * so callers can fall back to mock / local-only state.
 */
import { getSupabaseBrowserClient } from '@/lib/supabase/client';
import type { ProfileRow, ProfileUpdate } from '@/lib/supabase/types';

function normalizeWallet(address: string): string {
  return address.trim().toLowerCase();
}

/**
 * Fetch a profile by wallet address. Returns null if not found
 * or if Supabase is not configured.
 */
export async function fetchProfileByWallet(
  walletAddress: string
): Promise<ProfileRow | null> {
  const client = getSupabaseBrowserClient();
  if (!client) return null;

  const { data, error } = await client
    .from('profiles')
    .select('*')
    .eq('wallet_address', normalizeWallet(walletAddress))
    .maybeSingle();

  if (error) {
    // eslint-disable-next-line no-console
    console.error('[profile] fetch failed:', error.message);
    return null;
  }

  return data;
}

/**
 * Insert a profile row if one doesn't already exist for this wallet.
 * Idempotent — safe to call on every wallet connect.
 */
export async function ensureProfileExists(
  walletAddress: string
): Promise<ProfileRow | null> {
  const client = getSupabaseBrowserClient();
  if (!client) return null;

  const wallet = normalizeWallet(walletAddress);

  // Try to fetch first to avoid unnecessary write traffic.
  const existing = await fetchProfileByWallet(wallet);
  if (existing) return existing;

  const { data, error } = await client
    .from('profiles')
    .insert({
      wallet_address: wallet,
      email_notifications: true,
      marketplace_alerts: true,
      privacy_level: 'public',
    })
    .select('*')
    .maybeSingle();

  if (error) {
    // eslint-disable-next-line no-console
    console.error('[profile] ensureProfileExists failed:', error.message);
    return null;
  }

  return data;
}

/**
 * Update an existing profile by wallet address. Returns the updated row
 * or null on failure.
 */
export async function updateProfile(
  walletAddress: string,
  updates: ProfileUpdate
): Promise<ProfileRow | null> {
  const client = getSupabaseBrowserClient();
  if (!client) return null;

  const { data, error } = await client
    .from('profiles')
    .update(updates)
    .eq('wallet_address', normalizeWallet(walletAddress))
    .select('*')
    .maybeSingle();

  if (error) {
    // eslint-disable-next-line no-console
    console.error('[profile] update failed:', error.message);
    return null;
  }

  return data;
}
