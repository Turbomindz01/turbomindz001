import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WalletState {
  address: string | null;
  isConnected: boolean;
  balance: string | null;
  chainId: number | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setAddress: (address: string | null) => void;
  setConnected: (connected: boolean) => void;
  setBalance: (balance: string | null) => void;
  setChainId: (chainId: number | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  connect: () => Promise<void>;
  disconnect: () => void;
  reset: () => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      address: null,
      isConnected: false,
      balance: null,
      chainId: null,
      isLoading: false,
      error: null,

      setAddress: (address) => set({ address }),
      setConnected: (connected) => set({ isConnected: connected }),
      setBalance: (balance) => set({ balance }),
      setChainId: (chainId) => set({ chainId }),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),

      connect: async () => {
        set({ isLoading: true, error: null });
        try {
          if (typeof window !== 'undefined' && window.ethereum) {
            const accounts = (await window.ethereum.request({
              method: 'eth_requestAccounts',
            })) as string[];
            if (accounts && accounts.length > 0) {
              const chainIdHex = (await window.ethereum.request({
                method: 'eth_chainId',
              })) as string;
              const balanceHex = (await window.ethereum.request({
                method: 'eth_getBalance',
                params: [accounts[0], 'latest'],
              })) as string;
              set({
                address: accounts[0],
                isConnected: true,
                chainId: parseInt(chainIdHex, 16),
                balance: (parseInt(balanceHex, 16) / 1e18).toFixed(4),
                isLoading: false,
              });
            }
          } else {
            set({ error: 'No wallet detected. Please install MetaMask.', isLoading: false });
          }
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to connect wallet';
          set({ error: errorMessage, isLoading: false });
        }
      },

      disconnect: () => {
        set({
          address: null,
          isConnected: false,
          balance: null,
          chainId: null,
          error: null,
        });
      },

      reset: () => {
        set({
          address: null,
          isConnected: false,
          balance: null,
          chainId: null,
          isLoading: false,
          error: null,
        });
      },
    }),
    {
      name: 'turbomindz-wallet',
      partialize: (state) => ({
        address: state.address,
        isConnected: state.isConnected,
        chainId: state.chainId,
      }),
    }
  )
);
