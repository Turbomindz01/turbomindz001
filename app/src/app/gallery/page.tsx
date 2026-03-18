import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Turbomindz",
  description: "Explore 888 philosophical art scenes across 39 universes. Filter by theme, universe, character, and more.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
            The Gallery
          </h1>
          <p className="text-warm-white/60 max-w-lg mx-auto">
            888 scenes. 39 universes. 9 themes. Every piece hides 5 easter eggs and carries the wisdom of
            history&apos;s greatest thinkers.
          </p>
        </div>

        {/* Filter bar placeholder */}
        <div className="card-glass p-4 mb-8 flex flex-wrap gap-3 items-center justify-center">
          <span className="text-warm-white/40 text-sm">Filters coming soon:</span>
          <span className="theme-badge bg-classical/20 text-classical border border-classical/30">Universe</span>
          <span className="theme-badge bg-gold/20 text-gold border border-gold/30">Theme</span>
          <span className="theme-badge bg-poetry/20 text-poetry border border-poetry/30">Character</span>
          <span className="theme-badge bg-warm-teal/20 text-warm-teal border border-warm-teal/30">Act</span>
        </div>

        {/* Grid placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="card-glass-hover aspect-[2/3] flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl mb-2">🎨</p>
                <p className="text-warm-white/30 text-xs font-mono">TM-{String(i + 1).padStart(3, "0")}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-white/30 text-sm mt-8">
          Full gallery with live NFT data coming in Sprint Week 7-8 (Supabase integration).
        </p>
      </div>
    </div>
  );
}
