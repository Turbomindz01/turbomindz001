import type { Metadata } from "next";
import { themes } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Turbomindz",
  description: "Turbomindz is an 888-scene philosophical art NFT project on Polygon. Built by a solo founder with AI tools.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
            About Turbomindz
          </h1>
          <p className="text-gold italic font-heading">
            Create. Connect. Trade Fair.
          </p>
        </div>

        <div className="space-y-8">
          <div className="card-glass p-8">
            <h2 className="font-heading text-gold text-xl mb-4">What Is This?</h2>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              Turbomindz is an 888-scene philosophical art NFT project on Polygon. Four claymation characters —
              Cosmo, Nova, Stella, and Luna — travel through 39 universes exploring wisdom from history&apos;s
              greatest thinkers across 9 philosophical themes.
            </p>
            <p className="text-warm-white/70 leading-relaxed">
              Every AI-generated scene (Midjourney) contains a public domain quote, 5 hidden easter eggs, and
              connects to a continuous narrative spanning 3 acts. NFTs can be permanently &ldquo;married&rdquo;
              to physical artworks through a verification system. All trading happens publicly — the
              Witnessed Economy.
            </p>
          </div>

          <div className="card-glass p-8">
            <h2 className="font-heading text-gold text-xl mb-4">The Philosophy</h2>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              We believe art should make you think. That philosophy isn&apos;t an ivory tower discipline — it&apos;s
              the operating system for a meaningful life. That transparency builds more trust than marketing.
              That a solo founder with the right tools can build something that matters.
            </p>
            <p className="text-warm-white/70 leading-relaxed">
              Every quote in Turbomindz is verified public domain. Every transaction is witnessed by the
              community. Every character speaks with a consistent voice. Every scene hides exactly 5 easter eggs.
              No exceptions.
            </p>
          </div>

          <div className="card-glass p-8">
            <h2 className="font-heading text-gold text-xl mb-4">The Motto</h2>
            <div className="text-center py-6">
              <p className="text-warm-white/80 text-lg leading-loose font-heading italic">
                The NFT is the soul.<br />
                The art is the body.<br />
                The community is the village.<br />
                The story is the mirror.<br />
                <span className="text-gold/80">The notebook was always open.</span>
              </p>
            </div>
          </div>

          <div className="card-glass p-8">
            <h2 className="font-heading text-gold text-xl mb-4">Built With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Next.js 14", "TypeScript", "Tailwind CSS", "Polygon",
                "Midjourney", "Supabase", "thirdweb", "Vercel",
                "Claude AI", "Framer Motion", "Pinata IPFS", "Buttondown",
              ].map((tech) => (
                <div key={tech} className="px-3 py-2 bg-warm-white/5 rounded-lg text-center">
                  <span className="text-warm-white/60 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass p-8">
            <h2 className="font-heading text-gold text-xl mb-4">The 9 Questions</h2>
            <div className="space-y-3">
              {themes.map((theme) => (
                <div key={theme.name} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="text-warm-white/80 text-sm font-medium">{theme.name}</span>
                  <span className="text-warm-white/30 text-sm">—</span>
                  <span className="text-warm-white/50 text-sm italic">&ldquo;{theme.question}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
