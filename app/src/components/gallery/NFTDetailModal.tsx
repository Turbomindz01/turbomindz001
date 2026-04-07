'use client';

import React from "react";
import { themes, characters } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface NFTDetailModalProps {
  nft: {
    id: number;
    title: string;
    theme: string;
    characters: string[];
    price: number;
    imageUrl: string;
    quote: string;
    quoteAuthor: string;
    mintDate?: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export default function NFTDetailModal({ nft, open, onClose }: NFTDetailModalProps) {
  if (!open || !nft) return null;

  const themeData = themes.find(t => t.name === nft.theme);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-rich-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-glass rounded-xl shadow-2xl w-full max-w-lg p-6 relative"
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-warm-white/60 hover:text-gold transition-colors text-xl font-bold"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Image */}
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-gold/10 to-deep-teal/10 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={nft.imageUrl}
                alt={nft.title}
                className="modal-img"
              />
            </div>

            {/* Theme color bar */}
            <div className="theme-bar" style={{ '--theme-color': themeData?.color || '#C9A227', backgroundColor: 'var(--theme-color)' } as React.CSSProperties} />

            {/* Title */}
            <h2 className="font-heading text-2xl font-bold text-warm-white mb-2 line-clamp-2">{nft.title}</h2>

            {/* Theme & Characters badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span
                className="theme-badge"
                style={{ '--theme-color': themeData?.color || '#D4AF37', backgroundColor: `${themeData?.color || '#D4AF37'}20`, color: 'var(--theme-color)', borderColor: `${themeData?.color || '#D4AF37'}40` } as React.CSSProperties}
              >
                {nft.theme.split(" ")[0]}
              </span>
              {nft.characters.map((char) => {
                const charData = characters.find(c => c.name === char);
                return (
                  <span key={char} className="theme-badge bg-warm-white/10 text-warm-white/70 border-warm-white/20">
                    {charData?.emoji || ""} {char}
                  </span>
                );
              })}
            </div>

            {/* Quote */}
            <p className="text-warm-white/50 text-sm italic mb-2">&ldquo;{nft.quote}&rdquo;</p>

            {/* Author, Price, Mint Date */}
            <div className="flex justify-between items-center pt-3 border-t border-warm-white/10 mt-4">
              <div>
                <p className="text-warm-white/40 text-xs font-mono">{nft.quoteAuthor}</p>
                {nft.mintDate && <p className="text-warm-white/30 text-xs mt-1">Minted: {nft.mintDate}</p>}
              </div>
              <p className="text-gold text-lg font-semibold">{nft.price} MATIC</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
