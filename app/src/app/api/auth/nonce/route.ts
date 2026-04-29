/**
 * GET /api/auth/nonce?address=0x...
 * Returns a short-lived nonce for the wallet to sign.
 */
import { NextResponse, type NextRequest } from 'next/server';
import { generateNonce } from '@/lib/auth/verify-wallet';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get('address');
  if (!address) {
    return NextResponse.json({ error: 'address required' }, { status: 400 });
  }
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return NextResponse.json({ error: 'invalid address' }, { status: 400 });
  }

  const nonce = generateNonce(address);
  return NextResponse.json({ nonce });
}
