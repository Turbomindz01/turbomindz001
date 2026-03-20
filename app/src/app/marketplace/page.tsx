import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/ui/ContactForm";
import { MarketplacePreview } from "@/components/marketplace/MarketplacePreview";

export const metadata: Metadata = {
  title: "Marketplace — Turbomindz",
  description: "The Witnessed Economy. Trade art publicly. Marry NFTs to physical artwork. Every transaction is a story.",
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow max-w-3xl">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <Breadcrumbs items={[{ label: 'Marketplace', href: '/marketplace' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
            The Marketplace
          </h1>
          <p className="text-warm-white/60 text-lg">
            The Witnessed Economy — where every trade is public, every marriage is permanent, and every
            collector is part of the story.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-glass p-8 hover:shadow-lg transition-shadow">
            <p className="text-4xl mb-4">💍</p>
            <h3 className="font-heading font-semibold text-gold text-lg mb-2">Marriage System</h3>
            <p className="text-warm-white/60 text-sm">
              Permanently bind your NFT to a physical artwork. The digital soul meets its physical body.
              Verified. Irreversible. Beautiful.
            </p>
          </div>
          <div className="card-glass p-8 hover:shadow-lg transition-shadow">
            <p className="text-4xl mb-4">🏛</p>
            <h3 className="font-heading font-semibold text-gold text-lg mb-2">Trade Threads</h3>
            <p className="text-warm-white/60 text-sm">
              Every trade happens in public. Buyers and sellers negotiate openly. The community witnesses.
              Trust is built by transparency.
            </p>
          </div>
          <div className="card-glass p-8 hover:shadow-lg transition-shadow">
            <p className="text-4xl mb-4">📜</p>
            <h3 className="font-heading font-semibold text-gold text-lg mb-2">Provenance Museum</h3>
            <p className="text-warm-white/60 text-sm">
              Every NFT has a story — who owned it, who married it, where it traveled. The museum preserves
              every chapter.
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="card-glass p-12 mb-16 text-center">
          <div className="mb-6">
            <p className="text-warm-white/40 text-sm mb-2 font-mono uppercase tracking-wider">🚀 Coming Soon</p>
            <p className="text-4xl font-heading text-gold mb-4">Marketplace Launches Q2 2026</p>
          </div>
          <p className="text-warm-white/60 mb-6 leading-relaxed">
            The full marketplace with wallet integration, NFT trading, marriage system, and provenance museum
            will launch in weeks 9-10 of development. Join our community to be notified when trading goes live.
          </p>
          <p className="text-warm-white/50 text-sm">
            Current Phase: Foundation & Story Building
          </p>
        </div>

        {/* Token-Gated: Live Listings Preview */}
        <MarketplacePreview />

        {/* Early Access Section */}
        <div className="mb-16">
          <h2 className="font-heading text-gold text-2xl mb-8 text-center">Interested in Early Access?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Newsletter Signup */}
            <div className="card-glass p-8">
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-4">Join the Newsletter</h3>
              <p className="text-warm-white/60 text-sm mb-6">
                Get updates on marketplace launch, NFT drops, and exclusive community events. Published weekly to
                your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address for marketplace updates"
                  className="w-full px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold/50 text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gold text-rich-black font-semibold text-sm hover:bg-gold/80 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Discord Community */}
            <div className="card-glass p-8">
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-4">Join Discord</h3>
              <p className="text-warm-white/60 text-sm mb-6">
                Participate in discussions, see marketplace previews, and connect with philosophers and NFT
                collectors building the future.
              </p>
              <a
                href="https://discord.gg/turbomindz"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 rounded-lg border border-gold text-gold font-semibold text-sm hover:bg-gold/10 transition-colors text-center"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-8">
          <h2 className="font-heading text-gold text-2xl mb-8 text-center">Get in Touch</h2>
          <p className="text-warm-white/60 text-center mb-8">
            Have questions about the marketplace, partnership opportunities, or ideas for the platform?
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
