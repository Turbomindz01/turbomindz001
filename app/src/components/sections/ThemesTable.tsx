"use client";

import { themes } from "@/lib/data";

export function ThemesTable() {
  return (
    <section className="section-padding bg-gradient-to-b from-deep-teal/30 to-philosophy-dark/40">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-4">
            9 Philosophical Traditions
          </h2>
          <p className="text-warm-white/70 max-w-2xl mx-auto text-lg">
            Each of the 888 scenes explores one of nine philosophical traditions, asking fundamental questions that have shaped human thought across millennia.
          </p>
        </div>

        {/* Themes table */}
        <div className="overflow-x-auto rounded-lg border border-gold/20">
          <table className="table-elegant w-full">
            <thead>
              <tr>
                <th className="w-1/3">Philosophical Tradition</th>
                <th className="w-1/2">Central Question</th>
                <th className="w-1/3">Key Philosophers</th>
              </tr>
            </thead>
            <tbody>
              {themes.map((theme, index) => (
                <tr key={theme.name} className="hover:bg-gold/5 transition-colors duration-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.color }}
                        title={theme.name}
                      />
                      <span className="font-heading font-semibold text-warm-white">
                        {theme.name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <p className="text-warm-white/80 italic">
                      &ldquo;{theme.question}&rdquo;
                    </p>
                  </td>
                  <td>
                    <p className="text-warm-white/70 text-sm">
                      {theme.description}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table legend */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-gold/5 border border-gold/20 rounded-lg p-4">
            <p className="text-gold font-heading font-semibold mb-2">888 Total Scenes</p>
            <p className="text-warm-white/70 text-sm">Distributed across 9 philosophical traditions and 39 universes</p>
          </div>
          <div className="bg-gold/5 border border-gold/20 rounded-lg p-4">
            <p className="text-gold font-heading font-semibold mb-2">Public Domain Quotes</p>
            <p className="text-warm-white/70 text-sm">Each scene features verified quotes from philosophers (pre-1956)</p>
          </div>
          <div className="bg-gold/5 border border-gold/20 rounded-lg p-4">
            <p className="text-gold font-heading font-semibold mb-2">Eternal Questions</p>
            <p className="text-warm-white/70 text-sm">Humanity&apos;s oldest mysteries explored through collectible scenes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
