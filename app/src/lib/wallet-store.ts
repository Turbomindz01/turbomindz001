import { create } from 'zustand';

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

export const useWalletStore = create<WalletState>((set) => ({
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
      // Placeholder for actual wallet connection logic
      // This will be implemented when integrating thirdweb ConnectButton
      set({ isLoading: false });
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
}));
