"use client";

import { Palette, Link as LinkIcon, ShoppingCart, Heart } from "lucide-react";

export function PhygicalMarketplace() {
  return (
    <section className="section-padding bg-gradient-to-b from-deep-teal/40 to-philosophy-dark/50">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-4">
            The Phygical Market
          </h2>
          <p className="text-warm-white/70 max-w-2xl mx-auto text-lg">
            <span className="text-gold font-semibold">Marry your NFT</span> to a physical artwork. 
            Sell original paintings, prints, sculptures, and books through our integrated marketplace. 
            One digital scene. One physical masterpiece. One story.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="relative">
            {/* Number circle */}
            <div className="absolute -top-8 left-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-philosophy-dark font-heading font-bold">
              1
            </div>

            <div className="card-glass p-6 pt-8">
              <Palette className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Create/Acquire Art</h3>
              <p className="text-warm-white/70 text-sm">
                Paint, sculpt, photograph, or write. Your creative work comes first.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 left-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-philosophy-dark font-heading font-bold">
              2
            </div>

            <div className="card-glass p-6 pt-8">
              <LinkIcon className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Mint NFT Scene</h3>
              <p className="text-warm-white/70 text-sm">
                Upload to Turbomindz. Mint your philosophical scene on Polygon.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 left-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-philosophy-dark font-heading font-bold">
              3
            </div>

            <div className="card-glass p-6 pt-8">
              <Heart className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Marry & List</h3>
              <p className="text-warm-white/70 text-sm">
                Link your physical work to the digital NFT. Create one unified offering.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 left-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-philosophy-dark font-heading font-bold">
              4
            </div>

            <div className="card-glass p-6 pt-8">
              <ShoppingCart className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Sell & Earn</h3>
              <p className="text-warm-white/70 text-sm">
                Fair splits, recurring royalties, witnessed trading on blockchain.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
            <h3 className="font-heading font-bold text-warm-white text-2xl mb-4">What Artists Get</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Fair artist splits on every sale (not exploitative commission rates)</span>
              </li>
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Recurring royalties when collectors trade your work</span>
              </li>
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Global marketplace reaching NFT collectors and art enthusiasts</span>
              </li>
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Community support through Discord and marketplace forum</span>
              </li>
            </ul>
          </div>

          <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
            <h3 className="font-heading font-bold text-warm-white text-2xl mb-4">What Collectors Unlock</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Dual ownership: Digital NFT + Physical artwork</span>
              </li>
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Certificate of authenticity linked to blockchain</span>
              </li>
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Direct artist connection and commission opportunities</span>
              </li>
              <li className="flex gap-3 text-warm-white/70">
                <span className="text-gold font-bold">✓</span>
                <span>Access to exclusive philosophical salons and community events</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-warm-white/70 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re an artist seeking fair compensation or a collector building a philosophical art collection,
            the phygical marketplace reconnects digital ownership with tangible, precious things.
          </p>
          <a href="/products/gumroad" className="btn-primary inline-flex gap-2">
            <ShoppingCart className="w-5 h-5" />
            Explore Artist Listings
          </a>
        </div>
      </div>
    </section>
  );
}
