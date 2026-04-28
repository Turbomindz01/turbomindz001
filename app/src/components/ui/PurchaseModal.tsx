"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Wallet, X, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useWalletStore } from "@/lib/wallet-store";

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  nft: {
    id: number;
    title: string;
    price: number;
    contractAddress?: string;
    tokenId?: number;
  } | null;
}

type PurchaseStep = "select" | "connecting" | "confirming" | "success" | "error";

export function PurchaseModal({ open, onClose, nft }: PurchaseModalProps) {
  const { isConnected, connect, isLoading, address } = useWalletStore();
  const [step, setStep] = useState<PurchaseStep>("select");
  const [errorMessage, setErrorMessage] = useState("");

  // Build deep-link URL to OpenSea listing
  const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x0000000000000000000000000000000000000000";
  const tokenId = nft?.tokenId ?? nft?.id;
  const openseaUrl = `https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId}`;

  const handleInAppPurchase = async () => {
    if (!isConnected) {
      await connect();
      return;
    }
    setStep("confirming");
    // NOTE: Real Seaport integration via opensea-js will go here (MP3 sprint).
    // This stub simulates the flow for UI/UX purposes.
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate tx
      setStep("success");
    } catch {
      setErrorMessage("Transaction failed or was rejected. Try buying on OpenSea instead.");
      setStep("error");
    }
  };

  const handleOpenSeaRedirect = () => {
    window.open(openseaUrl, "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    setStep("select");
    setErrorMessage("");
    onClose();
  };

  if (!open || !nft) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-rich-black/80 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        <motion.div
          className="modal-glass rounded-2xl w-full max-w-md overflow-hidden"
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-white/10">
            <div>
              <p className="text-warm-white/50 text-xs font-mono uppercase tracking-wider mb-0.5">Collecting Scene</p>
              <h2 className="font-heading font-bold text-warm-white text-lg line-clamp-1">{nft.title}</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-warm-white/40 hover:text-gold transition-colors ml-4 shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Price row */}
          <div className="px-6 py-4 bg-gold/5 border-b border-warm-white/10 flex items-center justify-between">
            <span className="text-warm-white/60 text-sm">Price</span>
            <span className="text-gold font-heading font-bold text-xl">{nft.price} MATIC</span>
          </div>

          {/* Body */}
          <div className="px-6 py-6">
            {step === "select" && (
              <div className="space-y-4">
                {/* Path A — In-app */}
                <button
                  onClick={handleInAppPurchase}
                  disabled={isLoading}
                  className="w-full flex items-start gap-4 p-5 rounded-xl border-2 border-gold/40 bg-gold/5 hover:bg-gold/10 hover:border-gold/70 transition-all text-left group"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-gold/20 group-hover:bg-gold/30 transition-colors shrink-0">
                    <Wallet className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-white text-sm mb-1">
                      {isConnected ? "Purchase In-App" : "Connect Wallet & Purchase"}
                    </p>
                    <p className="text-warm-white/50 text-xs leading-relaxed">
                      {isConnected && address
                        ? `Connected: ${address.slice(0, 6)}…${address.slice(-4)}`
                        : "MetaMask, WalletConnect, Coinbase, and 500+ wallets. New to Web3? We support email wallets too."}
                    </p>
                  </div>
                  {isLoading && <Loader2 className="w-4 h-4 text-gold animate-spin ml-auto shrink-0 mt-1" />}
                </button>

                {/* Path B — OpenSea */}
                <button
                  onClick={handleOpenSeaRedirect}
                  className="w-full flex items-start gap-4 p-5 rounded-xl border border-warm-white/20 bg-warm-white/5 hover:bg-warm-white/10 hover:border-warm-white/40 transition-all text-left group"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-warm-white/10 group-hover:bg-warm-white/20 transition-colors shrink-0">
                    <ExternalLink className="w-5 h-5 text-warm-white/70" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-white/80 text-sm mb-1">View on OpenSea</p>
                    <p className="text-warm-white/40 text-xs leading-relaxed">
                      Opens the exact listing on opensea.io. After purchase, return here to create your account and enter the Village.
                    </p>
                  </div>
                </button>

                <p className="text-warm-white/30 text-xs text-center pt-2">
                  Polygon network · Gas fees &lt; $0.01 · Non-custodial
                </p>
              </div>
            )}

            {step === "confirming" && (
              <div className="flex flex-col items-center py-8 gap-4">
                <Loader2 className="w-12 h-12 text-gold animate-spin" />
                <p className="font-heading font-semibold text-warm-white text-lg">Awaiting Signature</p>
                <p className="text-warm-white/50 text-sm text-center">
                  Confirm the transaction in your wallet. The NFT will transfer on-chain once confirmed.
                </p>
              </div>
            )}

            {step === "success" && (
              <div className="flex flex-col items-center py-8 gap-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <p className="font-heading font-semibold text-warm-white text-lg">Scene Collected!</p>
                <p className="text-warm-white/50 text-sm text-center">
                  Welcome, Traveler. Create your Turbomindz account to enter the Village.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 px-8 py-3 rounded-xl bg-gold text-rich-black font-semibold text-sm hover:bg-gold/90 transition-colors"
                >
                  Create My Account
                </button>
              </div>
            )}

            {step === "error" && (
              <div className="flex flex-col items-center py-8 gap-4">
                <AlertCircle className="w-12 h-12 text-red-400" />
                <p className="font-heading font-semibold text-warm-white text-lg">Purchase Failed</p>
                <p className="text-warm-white/50 text-sm text-center">{errorMessage}</p>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setStep("select")}
                    className="px-5 py-2.5 rounded-xl border border-warm-white/20 text-warm-white/70 text-sm hover:border-warm-white/40 transition-colors"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={handleOpenSeaRedirect}
                    className="px-5 py-2.5 rounded-xl bg-gold text-rich-black font-semibold text-sm hover:bg-gold/90 transition-colors"
                  >
                    Buy on OpenSea
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
