"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveAccount } from "thirdweb/react";
import { getContract, readContract } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { client } from "@/lib/thirdweb-client";
import { useWalletStore } from "@/lib/wallet-store";

interface MembershipGateProps {
  children: React.ReactNode;
  /** Override to force open (admin/testing) */
  forceOpen?: boolean;
}

/**
 * On-chain ERC-721 balanceOf check on the Turbomindz contract.
 * Falls back to "any connected wallet = member" when the contract address
 * isn't configured (development).
 */
function useIsMember(): { isMember: boolean; isChecking: boolean } {
  const account = useActiveAccount();
  const { isConnected: legacyIsConnected } = useWalletStore();
  const [isMember, setIsMember] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const contractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
    const address = account?.address ?? null;

    // No wallet → not a member.
    if (!address) {
      setIsMember(false);
      setIsChecking(false);
      return;
    }

    // Fallback: no contract configured → any connected wallet is a member.
    // (Dev convenience; remove before mainnet launch.)
    if (!contractAddress) {
      setIsMember(true);
      setIsChecking(false);
      return;
    }

    let cancelled = false;
    setIsChecking(true);

    (async () => {
      try {
        const contract = getContract({
          client,
          chain: polygon,
          address: contractAddress as `0x${string}`,
        });
        const balance = (await readContract({
          contract,
          method: "function balanceOf(address) view returns (uint256)",
          params: [address as `0x${string}`],
        })) as bigint;
        if (cancelled) return;
        setIsMember(balance > BigInt(0));
      } catch {
        if (cancelled) return;
        // On RPC failure, fall back to legacy connected-wallet stub so users
        // aren't blocked by transient network errors.
        setIsMember(legacyIsConnected);
      } finally {
        if (!cancelled) setIsChecking(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [account?.address, legacyIsConnected]);

  return { isMember, isChecking };
}

export function MembershipGate({ children, forceOpen }: MembershipGateProps) {
  const { isMember, isChecking } = useIsMember();
  const { connect, isLoading } = useWalletStore();

  if (forceOpen || isMember) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[60vh] flex items-center justify-center px-6"
    >
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🏛</span>
        </div>

        {/* Headline */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-warm-white mb-3">
          Own a Scene, Enter the Village
        </h2>
        <p className="text-warm-white/60 mb-8 leading-relaxed">
          This area is exclusive to Turbomindz NFT holders. Collect any scene from the gallery to unlock the forum, marketplace, and member profiles.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/gallery"
            className="px-8 py-3 rounded-xl bg-gold text-rich-black font-semibold text-sm hover:bg-gold/90 transition-colors"
          >
            Browse the Collection
          </Link>
          <button
            onClick={connect}
            disabled={isLoading || isChecking}
            className="px-8 py-3 rounded-xl border border-warm-white/30 text-warm-white/80 font-semibold text-sm hover:border-gold/50 hover:text-gold transition-colors disabled:opacity-50"
          >
            {isLoading ? "Connecting…" : isChecking ? "Checking holdings…" : "Connect Wallet"}
          </button>
        </div>

        {/* Reassurance */}
        <p className="text-warm-white/30 text-xs mt-6">
          Already own a Turbomindz NFT? Connect the wallet that holds it above.
        </p>
      </div>
    </motion.div>
  );
}
