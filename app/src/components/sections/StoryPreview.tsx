"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export function StoryPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-rich-black/20">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-poetry/10 border border-poetry/20 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-poetry" />
              <span className="text-poetry text-xs font-mono uppercase tracking-wider">The Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-warm-white mb-6 leading-tight">
              An Astronaut Walks Into a Universe Made of Clay...
            </h2>

            <div className="space-y-4 text-warm-white/60 leading-relaxed">
              <p>
                It starts with a question Cosmo can&apos;t answer. It ends 888 scenes later in a breakfast that
                changes everything. In between: 39 universes, each built from a different art tradition, each
                hiding the wisdom of philosophers who died centuries apart but somehow agree.
              </p>
              <p>
                Act I is the departure — Cosmo meets Nova, who sees patterns everywhere. Stella arrives with
                community blueprints and constellation freckles. Luna appears when you least expect her, says
                almost nothing, and sketches something that reframes everything.
              </p>
              <p>
                Act II brings the Fade — a force that threatens to erase not just the art, but the ideas
                themselves. Act III is the return. But what they bring back isn&apos;t what they expected.
              </p>
            </div>

            <Link href="/story" className="btn-secondary mt-8 inline-flex">
              Read the Full Story
            </Link>
          </div>

          {/* Story Structure Visual */}
          <div className="card-glass p-8">
            <h3 className="font-heading font-semibold text-gold text-lg mb-6">888 Scenes. 3 Acts.</h3>

            <div className="space-y-6">
              {/* Act I */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-enlightenment/20 flex items-center justify-center">
                    <span className="text-enlightenment font-mono text-xs font-bold">I</span>
                  </div>
                  <div>
                    <p className="text-warm-white font-medium text-sm">Act I: Departure</p>
                    <p className="text-warm-white/40 text-xs">TM-001 → TM-222</p>
                  </div>
                </div>
                <div className="ml-4 pl-7 border-l border-enlightenment/20">
                  <p className="text-warm-white/50 text-sm">Characters introduced. Universes explored. Questions asked.</p>
                </div>
              </div>

              {/* Act II */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-existentialism/20 flex items-center justify-center">
                    <span className="text-existentialism font-mono text-xs font-bold">II</span>
                  </div>
                  <div>
                    <p className="text-warm-white font-medium text-sm">Act II: The Ordeal</p>
                    <p className="text-warm-white/40 text-xs">TM-223 → TM-666</p>
                  </div>
                </div>
                <div className="ml-4 pl-7 border-l border-existentialism/20">
                  <p className="text-warm-white/50 text-sm">The Fade threatens. Crisis. Luna speaks at TM-444.</p>
                </div>
              </div>

              {/* Act III */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-mono text-xs font-bold">III</span>
                  </div>
                  <div>
                    <p className="text-warm-white font-medium text-sm">Act III: The Return</p>
                    <p className="text-warm-white/40 text-xs">TM-667 → TM-888</p>
                  </div>
                </div>
                <div className="ml-4 pl-7 border-l border-gold/20">
                  <p className="text-warm-white/50 text-sm">Rebuilding. The breakfast scene. Return to the cathedral.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
