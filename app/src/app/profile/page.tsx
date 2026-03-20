'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useWalletStore } from '@/lib/wallet-store';

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected, balance, chainId, disconnect } = useWalletStore();

  useEffect(() => {
    setMounted(true);
  }, []);

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
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {/* Wallet Card */}
            <div className="p-6 bg-gradient-to-r from-gold/10 to-transparent border border-gold/40 rounded-xl backdrop-blur-sm">
              <h2 className="text-gold font-semibold mb-4">💳 Connected Wallet</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-warm-white/60 text-sm mb-1">Wallet Address</p>
                  <p className="font-mono text-gold text-lg break-all">{address}</p>
                </div>
                <div>
                  <p className="text-warm-white/60 text-sm mb-1">Network ID</p>
                  <p className="text-warm-white">{chainId || 'Not connected'}</p>
                </div>
                {balance && (
                  <div>
                    <p className="text-warm-white/60 text-sm mb-1">Balance</p>
                    <p className="text-warm-white">{balance} ETH</p>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Info Card */}
            <div className="p-6 bg-gradient-to-r from-blue-900/10 to-transparent border border-blue-400/20 rounded-xl backdrop-blur-sm">
              <h2 className="text-blue-300 font-semibold mb-4">👤 Profile Settings</h2>
              <div className="space-y-4">
                <p className="text-warm-white/70">
                  Your profile features will unlock upon wallet connection, including NFT holdings, trading history, and personalized recommendations.
                </p>
                <div className="text-sm text-warm-white/50">
                  <p>⏳ Profile customization coming in Q2 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-amber-900/10 to-transparent border border-amber-400/30 rounded-xl text-center"
          >
            <h3 className="text-xl text-amber-300 mb-2">Wallet Not Connected</h3>
            <p className="text-warm-white/70 mb-6">
              Connect your wallet to access your profile and manage your Turbomindz presence
            </p>
            <p className="text-sm text-warm-white/50">
              Use the wallet button in the navigation to connect
            </p>
          </motion.div>
        )}

        {/* Features Preview */}
        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-bold text-gold mb-6">📊 Coming Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: '🎨', title: 'NFT Gallery', desc: 'View your collected NFTs' },
              { emoji: '📈', title: 'Trading History', desc: 'Track your marketplace trades' },
              { emoji: '🏆', title: 'Achievements', desc: 'Display your badges and stats' },
              { emoji: '💰', title: 'Tokens', desc: 'Monitor your token holdings' },
              { emoji: '🔐', title: 'Security', desc: 'Manage wallet security settings' },
              { emoji: '⚙️', title: 'Preferences', desc: 'Customize your experience' },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="p-4 bg-warm-white/5 border border-warm-white/10 rounded-lg hover:bg-warm-white/10 hover:border-gold/30 transition-all"
              >
                <div className="text-2xl mb-2">{feature.emoji}</div>
                <h4 className="text-warm-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-warm-white/50 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        {isConnected && address && (
          <motion.div variants={itemVariants} className="mt-12 flex gap-4">
            <button className="px-6 py-3 bg-gold text-rich-black font-semibold rounded-lg hover:bg-gold/90 transition-colors">
              Edit Profile
            </button>
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
