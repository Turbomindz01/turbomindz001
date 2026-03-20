'use client';

import { motion } from 'framer-motion';
import { useWalletStore } from '@/lib/wallet-store';

interface TokenGateProps {
  /** What the user needs to hold (e.g. "a Turbomindz NFT") */
  requiredAsset: string;
  /** Optional descriptive message */
  message?: string;
  /** Content to show when the gate is passed */
  children: React.ReactNode;
  /** Override: force gate open (for testing/admin) */
  forceOpen?: boolean;
}

/**
 * Mock token gate check.
 * In production this would call a contract read to verify NFT holdings.
 * For now: connected wallet = gate passed (Day 13 will add real gating logic).
 */
function useHasRequiredToken(): boolean {
  const { isConnected } = useWalletStore();
  // Mock: connected = has token. Real implementation will query ERC-721 balanceOf.
  return isConnected;
}

export function TokenGate({ requiredAsset, message, children, forceOpen }: TokenGateProps) {
  const hasToken = useHasRequiredToken();
  const { isConnected, connect, isLoading } = useWalletStore();

  if (forceOpen || hasToken) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-xl border border-gold/20"
    >
      {/* Blurred preview of gated content */}
      <div className="pointer-events-none select-none blur-md opacity-30" aria-hidden="true">
        {children}
      </div>

      {/* Gate overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-rich-black/70 backdrop-blur-sm">
        <div className="text-center px-6 py-8 max-w-md">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-heading font-bold text-gold mb-2">
            Content Locked
          </h3>
          <p className="text-warm-white/70 mb-2">
            {message || `You need ${requiredAsset} to view this content.`}
          </p>
          <p className="text-warm-white/40 text-sm mb-6">
            Connect your wallet to verify your holdings.
          </p>
          {!isConnected && (
            <button
              onClick={connect}
              disabled={isLoading}
              className="px-6 py-3 bg-gold text-rich-black font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Connecting...' : 'Connect Wallet'}
            </button>
          )}
          {isConnected && (
            <p className="text-amber-400 text-sm">
              Wallet connected — but you don&apos;t hold {requiredAsset} yet.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
