"use client";

import { ExternalLink } from "lucide-react";
import { NFTCarousel } from "./NFTCarousel";
import { featuredNFTs } from "@/lib/data";

export function FeaturedNFTs() {
  return (
    <section className="section-padding bg-philosophy-dark/30 border-t border-gold/10">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-warm-white mb-4">
            Collect & Trade Philosophical Scenes
          </h2>
          <p className="text-warm-white/70 max-w-2xl mx-auto text-lg">
            Each of the 888 scenes is a unique philosophical artwork minted on Polygon. 
            Collect scenes from your favorite universes, trade with community members, 
            and watch the odyssey unfold together.
          </p>
        </div>

        <NFTCarousel 
          items={featuredNFTs.map((nft) => ({
            id: nft.id,
            title: nft.title,
            imageUrl: nft.imageUrl || `/images/nft-placeholders/tm-${String(nft.id).padStart(3, "0")}.svg`,
            theme: nft.theme.name,
            price: nft.priceMaticRaw,
            characters: nft.characters,
            quote: nft.quote,
            quoteAuthor: nft.quoteAuthor,
          }))}
        />

        <div className="text-center mt-12">
          <p className="text-warm-white/60 mb-6 max-w-xl mx-auto">
            Trading live on OpenSea & our marketplace. Fair economy. Witnessed deals. Community-driven.
          </p>
          <a href="/gallery" className="btn-primary inline-flex gap-2">
            Browse All 888 Scenes
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
