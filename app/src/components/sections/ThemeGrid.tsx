"use client";

import { themes } from "@/lib/data";

export function ThemeGrid() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-warm-white mb-4">
            9 Philosophical Themes
          </h2>
          <p className="text-warm-white/60 max-w-lg mx-auto">
            Every scene belongs to one of nine philosophical traditions — each asking a question that has
            echoed through centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {themes.map((theme) => (
            <div
              key={theme.name}
              className="card-glass-hover p-6 group cursor-pointer"
              style={{ borderColor: `${theme.color}30` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  style={{
                    backgroundColor: theme.color,
                    boxShadow: `0 0 0 4px ${theme.color}20`,
                  }}
                />
                <div>
                  <h3 className="font-heading font-semibold text-warm-white group-hover:text-gold transition-colors mb-1">
                    {theme.name}
                  </h3>
                  <p
                    className="text-sm font-heading italic mb-2"
                    style={{ color: theme.color }}
                  >
                    &ldquo;{theme.question}&rdquo;
                  </p>
                  <p className="text-warm-white/50 text-xs">
                    {theme.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
