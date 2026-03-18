import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace — Turbomindz",
  description: "The Witnessed Economy. Trade art publicly. Marry NFTs to physical artwork. Every transaction is a story.",
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
          The Marketplace
        </h1>
        <p className="text-warm-white/60 max-w-lg mx-auto mb-8">
          The Witnessed Economy — where every trade is public, every marriage is permanent, and every
          collector is part of the story.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card-glass p-8">
            <p className="text-4xl mb-4">💍</p>
            <h3 className="font-heading font-semibold text-gold text-lg mb-2">Marriage System</h3>
            <p className="text-warm-white/60 text-sm">
              Permanently bind your NFT to a physical artwork. The digital soul meets its physical body.
              Verified. Irreversible. Beautiful.
            </p>
          </div>
          <div className="card-glass p-8">
            <p className="text-4xl mb-4">🏛</p>
            <h3 className="font-heading font-semibold text-gold text-lg mb-2">Trade Threads</h3>
            <p className="text-warm-white/60 text-sm">
              Every trade happens in public. Buyers and sellers negotiate openly. The community witnesses.
              Trust is built by transparency.
            </p>
          </div>
          <div className="card-glass p-8">
            <p className="text-4xl mb-4">📜</p>
            <h3 className="font-heading font-semibold text-gold text-lg mb-2">Provenance Museum</h3>
            <p className="text-warm-white/60 text-sm">
              Every NFT has a story — who owned it, who married it, where it traveled. The museum preserves
              every chapter.
            </p>
          </div>
        </div>

        <div className="card-glass p-12 max-w-xl mx-auto">
          <p className="text-warm-white/40 text-sm mb-4 font-mono uppercase tracking-wider">Coming Soon</p>
          <p className="text-warm-white/60">
            The marketplace launches with the full app in Sprint Week 9-10.
            For now, all 150 minted NFTs are available on{" "}
            <a
              href="https://opensea.io/collection/turbomindz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              OpenSea
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
