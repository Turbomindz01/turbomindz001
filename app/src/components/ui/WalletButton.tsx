'use client';

import { useEffect, useState } from 'react';
import { useWalletStore } from '@/lib/wallet-store';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
    };
  }
}

export const WalletButton = () => {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected, disconnect } = useWalletStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="px-4 py-2 text-sm font-medium rounded-lg border border-gold text-gold hover:bg-gold/10 transition-colors">
        Loading...
      </button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="px-4 py-2 text-sm bg-gold/10 border border-gold rounded-lg text-gold font-mono">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
        <button
          onClick={disconnect}
          className="px-3 py-2 text-xs font-medium rounded-lg border border-red-400/50 text-red-400 hover:bg-red-400/10 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  const handleConnect = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts && accounts.length > 0) {
          const walletStore = useWalletStore.getState();
          walletStore.setAddress(accounts[0]);
          walletStore.setConnected(true);
        }
      } else {
        alert('Please install MetaMask to connect your wallet');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <button
      onClick={handleConnect}
      className="px-4 py-2 text-sm font-medium rounded-lg bg-gold text-rich-black hover:bg-gold/90 transition-colors"
    >
      Connect Wallet
    </button>
  );
};
