'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useWalletStore } from '@/lib/wallet-store';
import { ProfileEditForm } from '@/components/profile/ProfileEditForm';
import { ProfilePreferences } from '@/components/profile/ProfilePreferences';
import { TokenGate } from '@/components/ui/TokenGate';

const CHAIN_NAMES: Record<number, string> = {
  1: 'Ethereum Mainnet',
  5: 'Goerli Testnet',
  11155111: 'Sepolia Testnet',
  137: 'Polygon',
  80001: 'Mumbai Testnet',
  42161: 'Arbitrum One',
  10: 'Optimism',
  8453: 'Base',
};

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { address, isConnected, balance, chainId, isLoading, error, connect, disconnect } = useWalletStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-reconnect: if store says connected but we don't have fresh balance, refresh
  useEffect(() => {
    if (mounted && isConnected && address && !balance) {
      connect();
    }
  }, [mounted, isConnected, address, balance, connect]);

  const handleCopyAddress = useCallback(async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = address;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [address]);

  const networkName = chainId ? (CHAIN_NAMES[chainId] || `Chain ${chainId}`) : 'Unknown';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-teal via-philosophy-dark to-deep-teal">
      {/* Breadcrumbs */}
      <div className="border-b border-gold/20 bg-deep-teal/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-4">Your Profile</h1>
          <p className="text-lg text-warm-white/70">
            Manage your wallet and view your Turbomindz presence
          </p>
        </motion.div>

        {/* Wallet Status Card */}
        {!mounted ? (
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-gold/5 to-transparent border border-gold/30 rounded-xl"
          >
            <p className="text-warm-white/50">Loading wallet status...</p>
          </motion.div>
        ) : isConnected && address ? (
          <>
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            {/* Wallet Card */}
            <div className="p-6 bg-gradient-to-r from-gold/10 to-transparent border border-gold/40 rounded-xl backdrop-blur-sm">
              <h2 className="text-gold font-semibold mb-4">💳 Connected Wallet</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-warm-white/60 text-sm mb-1">Wallet Address</p>
                  <button
                    onClick={handleCopyAddress}
                    className="group flex items-center gap-2 w-full text-left"
                    title={copied ? 'Copied!' : 'Click to copy full address'}
                  >
                    <p className="font-mono text-gold text-sm sm:text-lg break-all group-hover:text-yellow-400 transition-colors">
                      {address}
                    </p>
                    <span className="shrink-0 text-xs text-warm-white/40 group-hover:text-gold transition-colors">
                      {copied ? '✓' : '📋'}
                    </span>
                  </button>
                  {copied && (
                    <p className="text-green-400 text-xs mt-1">Address copied to clipboard</p>
                  )}
                </div>
                <div>
                  <p className="text-warm-white/60 text-sm mb-1">Network</p>
                  <p className="text-warm-white">{networkName}</p>
                </div>
                {balance && (
                  <div>
                    <p className="text-warm-white/60 text-sm mb-1">Balance</p>
                    <p className="text-warm-white text-lg font-semibold">{balance} ETH</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Profile Edit Form */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-900/10 to-transparent border border-blue-400/20 rounded-xl backdrop-blur-sm">
              <h2 className="text-blue-300 font-semibold mb-6">👤 Edit Profile</h2>
              <ProfileEditForm />
            </div>
          </motion.div>

          {/* Profile Preferences */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-400/20 rounded-xl backdrop-blur-sm">
              <h2 className="text-purple-300 font-semibold mb-6">⚙️ Preferences</h2>
              <ProfilePreferences />
            </div>
          </motion.div>
          </>
        ) : (
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-amber-900/10 to-transparent border border-amber-400/30 rounded-xl text-center"
          >
            <h3 className="text-xl text-amber-300 mb-2">Wallet Not Connected</h3>
            <p className="text-warm-white/70 mb-6">
              Connect your wallet to access your profile and manage your Turbomindz presence
            </p>
            <button
              onClick={connect}
              disabled={isLoading}
              className="px-6 py-3 bg-gold text-rich-black font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Connecting...' : 'Connect Wallet'}
            </button>
            {error && (
              <p className="text-red-400 text-sm mt-3">{error}</p>
            )}
          </motion.div>
        )}

        {/* Token-Gated: Your NFT Collection */}
        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-bold text-gold mb-6">🎨 Your NFT Collection</h3>
          <TokenGate requiredAsset="a Turbomindz NFT">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {[
                { id: 'TM-152', title: 'The Cave of Shadows', theme: 'Classical Foundations' },
                { id: 'TM-256', title: 'The Eternal Return', theme: 'Existentialism & Modern' },
                { id: 'TM-270', title: 'Digital Dharma', theme: 'Eastern Wisdom' },
              ].map((nft) => (
                <div
                  key={nft.id}
                  className="p-4 bg-warm-white/5 border border-warm-white/10 rounded-lg"
                >
                  <div className="aspect-square bg-gradient-to-br from-gold/20 to-deep-teal/40 rounded-lg mb-3 flex items-center justify-center text-4xl">
                    🖼️
                  </div>
                  <p className="text-gold font-mono text-xs mb-1">{nft.id}</p>
                  <h4 className="text-warm-white font-semibold text-sm">{nft.title}</h4>
                  <p className="text-warm-white/40 text-xs">{nft.theme}</p>
                </div>
              ))}
            </div>
          </TokenGate>
        </motion.div>

        {/* Disconnect */}
        {isConnected && address && (
          <motion.div variants={itemVariants} className="mt-12">
            <button
              onClick={disconnect}
              className="px-6 py-3 border border-red-400/50 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-colors"
            >
              Disconnect Wallet
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
