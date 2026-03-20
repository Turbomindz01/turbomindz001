'use client';

import { TokenGate } from '@/components/ui/TokenGate';

const MOCK_LISTINGS = [
  { id: 'TM-152', title: 'The Cave of Shadows', seller: '0x1a2b...3c4d', price: 45, theme: 'Classical' },
  { id: 'TM-261', title: 'The Quantum Observer', seller: '0x5e6f...7g8h', price: 62, theme: 'Science' },
  { id: 'TM-153', title: 'The Garden of Forking Paths', seller: '0x9i0j...1k2l', price: 38, theme: 'Eastern' },
  { id: 'TM-270', title: 'Digital Dharma', seller: '0x3m4n...5o6p', price: 55, theme: 'Mysticism' },
];

export function MarketplacePreview() {
  return (
    <div className="mb-16">
      <h2 className="font-heading text-gold text-2xl mb-3 text-center">Live Listings Preview</h2>
      <p className="text-warm-white/50 text-sm text-center mb-8">
        Connect your wallet and hold a Turbomindz NFT to access the marketplace
      </p>

      <TokenGate
        requiredAsset="a Turbomindz NFT"
        message="Marketplace access requires holding at least one Turbomindz NFT. Connect your wallet to verify."
      >
        <div className="space-y-3 p-6">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2 text-warm-white/40 text-xs font-mono uppercase tracking-wider">
            <div className="col-span-2">ID</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-3">Seller</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-1" />
          </div>

          {/* Listings */}
          {MOCK_LISTINGS.map((listing) => (
            <div
              key={listing.id}
              className="grid grid-cols-12 gap-4 items-center px-4 py-3 rounded-lg bg-warm-white/5 border border-warm-white/10 hover:border-gold/30 transition-all"
            >
              <div className="col-span-2 text-gold font-mono text-sm">{listing.id}</div>
              <div className="col-span-4 text-warm-white text-sm font-medium">{listing.title}</div>
              <div className="col-span-3 text-warm-white/50 font-mono text-xs">{listing.seller}</div>
              <div className="col-span-2 text-gold text-sm font-semibold text-right">
                {listing.price} MATIC
              </div>
              <div className="col-span-1 text-right">
                <button className="px-3 py-1 text-xs rounded bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20 transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}

          <p className="text-warm-white/30 text-xs text-center pt-4">
            Showing mock data — live trading coming Q2 2026
          </p>
        </div>
      </TokenGate>
    </div>
  );
}
