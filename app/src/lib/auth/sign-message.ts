/**
 * Client-side wallet signing helper.
 *
 * Used by ProfileEditForm and any other surface that needs an
 * authenticated write to /api/*.
 */
'use client';

import { signMessage } from 'thirdweb/utils';
import type { Account } from 'thirdweb/wallets';

export interface SignedRequest {
  address: string;
  signature: string;
  nonce: string;
}

/**
 * 1. Fetch a fresh nonce for the wallet from /api/auth/nonce.
 * 2. Ask the wallet (via thirdweb Account) to sign the nonce.
 * 3. Return { address, signature, nonce } for the caller to attach to its
 *    POST body.
 */
export async function signAuthNonce(account: Account): Promise<SignedRequest> {
  const address = account.address.toLowerCase();

  const nonceRes = await fetch(
    `/api/auth/nonce?address=${encodeURIComponent(address)}`,
    { cache: 'no-store' }
  );
  if (!nonceRes.ok) {
    throw new Error(`nonce request failed: ${nonceRes.status}`);
  }
  const { nonce } = (await nonceRes.json()) as { nonce: string };

  const signature = await signMessage({ account, message: nonce });

  return { address, signature, nonce };
}
