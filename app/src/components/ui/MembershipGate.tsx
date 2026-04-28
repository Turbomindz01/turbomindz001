"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useWalletStore } from "@/lib/wallet-store";

interface MembershipGateProps {
  children: React.ReactNode;
  /** Override to force open (admin/testing) */
  forceOpen?: boolean;
}

/**
 * Page-level membership gate.
 * Membership = NFT ownership (on-chain check).
 * Mock: connected wallet = member. Real check (thirdweb useOwnedNFTs / balanceOf) added in MP3.
 */
function useIsMember(): boolean {
  const { isConnected } = useWalletStore();
  // Stub: connected wallet assumed to be a member.
  // Real implementation: useOwnedNFTs(client, { owner: address, contract }) from thirdweb.
  return isConnected;
}

export function MembershipGate({ children, forceOpen }: MembershipGateProps) {
  const isMember = useIsMember();
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
            disabled={isLoading}
            className="px-8 py-3 rounded-xl border border-warm-white/30 text-warm-white/80 font-semibold text-sm hover:border-gold/50 hover:text-gold transition-colors disabled:opacity-50"
          >
            {isLoading ? "Connecting…" : "Connect Wallet"}
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
