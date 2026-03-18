import type { Metadata } from "next";
import { characters } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Story — Turbomindz",
  description: "Follow Cosmo, Nova, Stella, and Luna through 39 universes and 888 scenes of philosophical discovery.",
};

export default function StoryPage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
            The Story
          </h1>
          <p className="text-warm-white/60 italic">
            &ldquo;Every great journey begins with a question you can&apos;t answer alone.&rdquo;
          </p>
        </div>

        {/* Story narrative */}
        <div className="prose prose-invert max-w-none space-y-6">
          <div className="card-glass p-8 mb-8">
            <h2 className="font-heading text-gold text-2xl mb-4">Act I: Departure</h2>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              It begins in the Alchemical Renaissance — a universe where Renaissance oil painting meets ancient
              alchemy. Cosmo, a curious astronaut with orange boots and a fishbowl helmet, arrives with a
              question he can&apos;t articulate. Something is missing. Something has always been missing.
            </p>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              By TM-006, Nova appears — an alien guide with three floating orbs and a gold infinity pendant.
              &ldquo;The pattern is everywhere,&rdquo; she says, tracing connections between ideas separated by
              millennia. At TM-016, Stella joins — blue-purple gradient hair, constellation freckles, and an
              unstoppable drive to build community wherever she goes.
            </p>
            <p className="text-warm-white/50 text-sm italic">Scenes TM-001 through TM-222</p>
          </div>

          <div className="card-glass p-8 mb-8">
            <h2 className="font-heading text-existentialism text-2xl mb-4">Act II: The Ordeal</h2>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              The Fade arrives — a force that doesn&apos;t destroy art, but makes people forget why it matters.
              Colors dim. Questions stop being asked. The universes begin to blur at the edges.
            </p>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              At TM-050, Luna finally appears. Leather notebook. Mismatched socks. Violet hair streak. She
              says almost nothing. But at TM-444, she speaks — and what she says changes everything.
            </p>
            <p className="text-warm-white/50 text-sm italic">Scenes TM-223 through TM-666</p>
          </div>

          <div className="card-glass p-8 mb-8">
            <h2 className="font-heading text-gold text-2xl mb-4">Act III: The Return</h2>
            <p className="text-warm-white/70 leading-relaxed mb-4">
              They come back. Not as heroes — as breakfast companions. The final act is about rebuilding:
              not the grand gesture, but the quiet daily practice of keeping wonder alive.
            </p>
            <p className="text-warm-white/70 leading-relaxed">
              Scene 888 is a breakfast. Just four clay figures at a table, sharing food and silence and the
              kind of understanding that only comes from having traveled 39 universes together.
            </p>
            <p className="text-warm-white/50 text-sm italic">Scenes TM-667 through TM-888</p>
          </div>
        </div>

        {/* Characters */}
        <h2 className="font-heading text-gold text-2xl mt-16 mb-8 text-center">The Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {characters.map((char) => (
            <div key={char.name} className="card-glass p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{char.emoji}</span>
                <div>
                  <h3 className="font-heading font-bold text-warm-white">{char.name}</h3>
                  <p className="text-xs font-mono" style={{ color: char.color }}>{char.title}</p>
                </div>
              </div>
              <p className="text-warm-white/60 text-sm">{char.description}</p>
              <p className="text-warm-white/30 text-xs mt-3">
                Appears: TM-{String(char.thresholdScene).padStart(3, "0")}+ | Voice: {char.voicePercentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
