"use client";

import { characters } from "@/lib/data";

export function CharacterShowcase() {
  return (
    <section className="section-padding bg-rich-black/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-warm-white mb-4">
            Meet the Crew
          </h2>
          <p className="text-warm-white/60 max-w-lg mx-auto">
            Four claymation characters on a philosophical odyssey. No human faces. No corporate personas.
            Just clay, curiosity, and courage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char) => (
            <div
              key={char.name}
              className="card-glass-hover p-6 text-center group"
            >
              {/* Character emoji avatar */}
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                style={{ backgroundColor: `${char.color}20`, border: `2px solid ${char.color}40` }}
              >
                {char.emoji}
              </div>

              <h3 className="font-heading font-bold text-warm-white text-lg group-hover:text-gold transition-colors">
                {char.name}
              </h3>
              <p className="text-sm font-mono tracking-wide uppercase mb-3" style={{ color: char.color }}>
                {char.title}
              </p>

              <p className="text-warm-white/50 text-sm mb-4 leading-relaxed">
                {char.description}
              </p>

              {/* Voice percentage */}
              <div className="mt-auto">
                <div className="w-full bg-warm-white/10 rounded-full h-1.5 mb-1">
                  <div
                    className="h-1.5 rounded-full transition-all duration-700"
                    style={{
                      width: `${char.voicePercentage}%`,
                      backgroundColor: char.color,
                    }}
                  />
                </div>
                <p className="text-warm-white/40 text-xs">
                  {char.voicePercentage}% of narrative voice
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
