/**
 * Wallet signature verification (server-side).
 *
 * The flow:
 *   1. Client requests a nonce: GET /api/auth/nonce?address=0x...
 *      (server returns a short-lived random string)
 *   2. Client signs the nonce with the wallet (personal_sign).
 *   3. Client POSTs the action with { address, signature, nonce }.
 *   4. Server verifies signature recovers `address` from `personal_sign(nonce)`.
 *      If yes → the request is authenticated as `address`.
 *
 * MVP note: nonces are stored in-memory below. Replace with a Supabase
 * `auth_nonces` table for multi-instance deployments.
 */
import 'server-only';
import { recoverAddress, hashMessage } from 'viem';

const NONCE_TTL_MS = 5 * 60 * 1000; // 5 minutes

interface NonceRecord {
  nonce: string;
  address: string;
  expiresAt: number;
}

// In-memory store. NOTE: per-process; works on a single Vercel function
// instance but not across cold starts. Promote to Supabase for production.
const nonceStore = new Map<string, NonceRecord>();

function lowerAddress(address: string): string {
  return address.trim().toLowerCase();
}

/** Generate a fresh nonce for a wallet address. Stores it for verification. */
export function generateNonce(address: string): string {
  const wallet = lowerAddress(address);
  const nonce = `Sign in to Turbomindz at ${new Date().toISOString()} — ${
    crypto.randomUUID()
  }`;

  // Sweep expired entries opportunistically.
  const now = Date.now();
  for (const [k, v] of nonceStore.entries()) {
    if (v.expiresAt < now) nonceStore.delete(k);
  }

  nonceStore.set(wallet, {
    nonce,
    address: wallet,
    expiresAt: now + NONCE_TTL_MS,
  });

  return nonce;
}

/** Verify a wallet signature against a previously-issued nonce. */
export async function verifyWalletSignature(params: {
  address: string;
  signature: string;
  nonce: string;
}): Promise<{ ok: boolean; reason?: string; address?: string }> {
  const wallet = lowerAddress(params.address);
  const record = nonceStore.get(wallet);

  if (!record) {
    return { ok: false, reason: 'nonce-not-found' };
  }
  if (record.nonce !== params.nonce) {
    return { ok: false, reason: 'nonce-mismatch' };
  }
  if (record.expiresAt < Date.now()) {
    nonceStore.delete(wallet);
    return { ok: false, reason: 'nonce-expired' };
  }

  // EOA personal_sign verification via viem.
  // For EIP-1271 smart-wallet verification (Safe, Argent, etc.), wire
  // viem's `verifyMessage` against an RPC client — adds chain dependency
  // and a network round-trip. EOA-only is fine for MVP.
  try {
    const messageHash = hashMessage(params.nonce);
    const recovered = await recoverAddress({
      hash: messageHash,
      signature: params.signature as `0x${string}`,
    });
    if (recovered.toLowerCase() !== wallet) {
      return { ok: false, reason: 'invalid-signature' };
    }
    nonceStore.delete(wallet);
    return { ok: true, address: wallet };
  } catch (err) {
    return {
      ok: false,
      reason: `verify-failed: ${err instanceof Error ? err.message : 'unknown'}`,
    };
  }
}
