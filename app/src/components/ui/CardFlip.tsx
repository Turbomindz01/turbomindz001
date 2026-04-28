"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import type { PhysicalArt, MarriageStatus } from "@/types";

interface CardFlipProps {
  /** NFT display data */
  nftId: number;
  nftTitle: string;
  nftThemeColor?: string;
  nftImageUrl?: string;
  nftPrice?: number;
  marriageStatus?: MarriageStatus;
  physicalArt?: PhysicalArt;
  /** Called when primary CTA is clicked on the NFT face */
  onCollect?: () => void;
  className?: string;
}

export function CardFlip({
  nftId,
  nftTitle,
  nftThemeColor = "#D4AF37",
  nftImageUrl,
  nftPrice,
  marriageStatus = "Unmarried",
  physicalArt,
  onCollect,
  className = "",
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const isMarried = marriageStatus === "Married" && physicalArt;

  const photos = physicalArt?.photos ?? [];

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* ── FRONT FACE (NFT) ── */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="card-glass overflow-hidden flex flex-col h-full">
            {/* Theme bar */}
            <div
              className="h-1 w-full shrink-0"
              style={{ backgroundColor: nftThemeColor }}
            />

            {/* NFT Image area */}
            <div className="relative flex-1 bg-gradient-to-br from-gold/10 to-deep-teal/10 flex items-center justify-center min-h-[200px]">
              {nftImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={nftImageUrl}
                  alt={nftTitle}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <p className="text-4xl mb-2">🎨</p>
                  <p className="text-warm-white/30 text-xs font-mono">
                    TM-{String(nftId).padStart(3, "0")}
                  </p>
                </div>
              )}

              {/* Marriage badge */}
              {marriageStatus === "Married" && (
                <span className="absolute top-2 left-2 bg-gold/90 text-rich-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  💍 Married
                </span>
              )}

              {/* Flip indicator (only for married NFTs) */}
              {isMarried && (
                <button
                  onClick={() => setIsFlipped(true)}
                  className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-mono bg-rich-black/60 backdrop-blur px-2 py-1 rounded-full text-warm-white/60 hover:text-gold hover:bg-rich-black/80 transition-colors"
                  aria-label="Flip to see physical art"
                >
                  <RotateCcw className="w-3 h-3" /> Flip
                </button>
              )}
            </div>

            {/* Card info */}
            <div className="p-4 shrink-0">
              <p className="text-warm-white/40 text-[10px] font-mono mb-1">
                TM-{String(nftId).padStart(3, "0")}
              </p>
              <h3 className="font-heading font-bold text-warm-white text-sm mb-3 line-clamp-2">
                {nftTitle}
              </h3>
              <div className="flex items-center justify-between">
                {nftPrice !== undefined && (
                  <span className="text-gold font-semibold text-sm">{nftPrice} MATIC</span>
                )}
                {onCollect && (
                  <button
                    onClick={onCollect}
                    className="px-4 py-1.5 rounded-lg bg-gold text-rich-black font-semibold text-xs hover:bg-gold/90 transition-colors"
                  >
                    Collect
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── BACK FACE (Physical Art) ── */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="card-glass overflow-hidden flex flex-col h-full">
            {/* Gold bar */}
            <div className="h-1 w-full shrink-0 bg-gold" />

            {/* Photo area */}
            <div className="relative flex-1 bg-gradient-to-br from-warm-white/5 to-deep-teal/10 flex items-center justify-center min-h-[200px]">
              {photos.length > 0 ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photos[photoIndex]}
                    alt={`${physicalArt?.title ?? "Physical art"} — photo ${photoIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {photos.length > 1 && (
                    <>
                      <button
                        onClick={() => setPhotoIndex((p) => (p - 1 + photos.length) % photos.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-rich-black/60 text-warm-white/70 hover:text-gold"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setPhotoIndex((p) => (p + 1) % photos.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-rich-black/60 text-warm-white/70 hover:text-gold"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {photos.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setPhotoIndex(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              i === photoIndex ? "bg-gold" : "bg-warm-white/30"
                            }`}
                            aria-label={`Photo ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-center px-4">
                  <p className="text-3xl mb-2">🖼️</p>
                  <p className="text-warm-white/40 text-xs">Photos pending verification</p>
                </div>
              )}

              {/* Flip back button */}
              <button
                onClick={() => { setIsFlipped(false); setPhotoIndex(0); }}
                className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-mono bg-rich-black/60 backdrop-blur px-2 py-1 rounded-full text-warm-white/60 hover:text-gold hover:bg-rich-black/80 transition-colors"
                aria-label="Flip back to NFT"
              >
                <RotateCcw className="w-3 h-3" /> NFT
              </button>
            </div>

            {/* Art info */}
            {physicalArt && (
              <div className="p-4 shrink-0 space-y-1">
                <h3 className="font-heading font-bold text-warm-white text-sm line-clamp-1">
                  {physicalArt.title}
                </h3>
                <p className="text-warm-white/50 text-xs">
                  {physicalArt.medium}
                  {physicalArt.dimensions && ` · ${physicalArt.dimensions}`}
                </p>
                {physicalArt.artistName && (
                  <p className="text-warm-white/40 text-xs">by {physicalArt.artistName}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
