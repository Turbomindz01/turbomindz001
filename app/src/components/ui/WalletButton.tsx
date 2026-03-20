'use client';

import { useEffect, useState, useCallback } from 'react';
import { useWalletStore } from '@/lib/wallet-store';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, handler: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, handler: (...args: unknown[]) => void) => void;
    };
  }
}

export const WalletButton = () => {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { address, isConnected, isLoading, error, connect, disconnect } = useWalletStore();

  const handleAccountsChanged = useCallback((accounts: unknown) => {
    const store = useWalletStore.getState();
    const accs = accounts as string[];
    if (accs.length === 0) {
      store.disconnect();
    } else {
      store.setAddress(accs[0]);
    }
  }, []);

  const handleChainChanged = useCallback(() => {
    // Reconnect to refresh chainId and balance
    useWalletStore.getState().connect();
  }, []);

  useEffect(() => {
    setMounted(true);

    // Listen for wallet events
    if (typeof window !== 'undefined' && window.ethereum?.on) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (typeof window !== 'undefined' && window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [handleAccountsChanged, handleChainChanged]);

  const handleCopyAddress = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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
  };

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
        <button
          onClick={handleCopyAddress}
          title={copied ? 'Copied!' : 'Copy address'}
          className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gold/10 border border-gold rounded-lg text-gold font-mono hover:bg-gold/20 transition-colors cursor-pointer"
        >
          {copied ? (
            <span className="text-green-400">✓ Copied</span>
          ) : (
            <>{address.slice(0, 6)}...{address.slice(-4)}</>
          )}
        </button>
        <button
          onClick={disconnect}
          className="px-2 sm:px-3 py-2 text-xs font-medium rounded-lg border border-red-400/50 text-red-400 hover:bg-red-400/10 transition-colors"
          aria-label="Disconnect wallet"
        >
          <span className="hidden sm:inline">Disconnect</span>
          <span className="sm:hidden">✕</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        onClick={connect}
        disabled={isLoading}
        className="px-4 py-2 text-sm font-medium rounded-lg bg-gold text-rich-black hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Connecting...' : 'Connect Wallet'}
      </button>
      {error && (
        <p className="text-red-400 text-xs max-w-[200px] truncate" title={error}>
          {error}
        </p>
      )}
    </div>
  );
};
