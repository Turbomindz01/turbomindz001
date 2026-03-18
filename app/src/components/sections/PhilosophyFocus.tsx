"use client";

import { useState, useEffect } from "react";
import { themes } from "@/lib/data";
import { BookOpen, Users, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

export function PhilosophyFocus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + themes.length) % themes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % themes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get theme color icon
  const getThemeIcon = () => {
    const currentTheme = themes[currentIndex];
    if (currentTheme.name.includes("Mysticism")) return "✨";
    if (currentTheme.name.includes("Classical")) return "🏛️";
    if (currentTheme.name.includes("Enlightenment")) return "💡";
    if (currentTheme.name.includes("Eastern")) return "🧘";
    if (currentTheme.name.includes("Science")) return "🔬";
    if (currentTheme.name.includes("Psychology")) return "🧠";
    if (currentTheme.name.includes("Poetry")) return "✍️";
    if (currentTheme.name.includes("Civic")) return "⚖️";
    if (currentTheme.name.includes("Existentialism")) return "🌌";
    return "📖";
  };

  return (
    <section className="section-padding pt-12 bg-gradient-to-b from-philosophy-dark/50 to-deep-teal/30">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-4">
            The Philosophical Foundation
          </h2>
          <p className="text-warm-white/70 max-w-2xl mx-auto text-lg">
            Explore <span className="text-gold font-semibold">9 philosophical traditions</span>, 
            each asking fundamental questions that have shaped human thought for millennia.
          </p>
        </div>

        {/* Mobile Carousel View */}
        {isMobile ? (
          <div className="mb-16">
            {/* Carousel Container */}
            <div className="relative mb-8 flex justify-center">
              <div
                className="relative w-5/6 max-w-sm aspect-square rounded-lg overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: `${themes[currentIndex].color}15`,
                  borderLeft: `8px solid ${themes[currentIndex].color}`,
                }}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${themes[currentIndex].color}40, ${themes[currentIndex].color}10)`,
                  }}
                />

                {/* Icon and Content Overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-6">{getThemeIcon()}</div>
                  
                  <h3 className="font-heading font-bold text-2xl text-warm-white mb-3">
                    {themes[currentIndex].name}
                  </h3>

                  <p
                    className="text-lg font-heading italic mb-6"
                    style={{ color: themes[currentIndex].color }}
                  >
                    &ldquo;{themes[currentIndex].question}&rdquo;
                  </p>

                  <p className="text-warm-white/80 text-sm leading-relaxed">
                    <span className="text-gold font-semibold">{themes[currentIndex].description}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-2 rounded-full text-gold hover:bg-gold/10"
                aria-label="Previous theme"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-2 rounded-full text-gold hover:bg-gold/10"
                aria-label="Next theme"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mb-6">
              {themes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold w-6" : "bg-gold/30"
                  }`}
                  aria-label={`Go to theme ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <p className="text-center text-gold/70 text-sm font-mono">
              {currentIndex + 1} / {themes.length}
            </p>
          </div>
        ) : (
          /* Desktop Grid View */
          <div className="mb-16">
            <div className="grid grid-cols-3 gap-12">
              {themes.map((theme) => (
                <div
                  key={theme.name}
                  className="group cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col items-center"
                >
                  {/* Square Card Container */}
                  <div
                    className="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg mb-4"
                    style={{
                      backgroundColor: `${theme.color}15`,
                      borderLeft: `8px solid ${theme.color}`,
                    }}
                  >
                    {/* Background gradient */}
                    <div
                      className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${theme.color}40, ${theme.color}10)`,
                      }}
                    />

                    {/* Icon centered */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-7xl opacity-40 group-hover:opacity-60 transition-opacity">
                        {theme.name.includes("Mysticism") && "✨"}
                        {theme.name.includes("Classical") && "🏛️"}
                        {theme.name.includes("Enlightenment") && "💡"}
                        {theme.name.includes("Eastern") && "🧘"}
                        {theme.name.includes("Science") && "🔬"}
                        {theme.name.includes("Psychology") && "🧠"}
                        {theme.name.includes("Poetry") && "✍️"}
                        {theme.name.includes("Civic") && "⚖️"}
                        {theme.name.includes("Existentialism") && "🌌"}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description Below */}
                  <div>
                    <h3 className="font-heading font-bold text-lg text-warm-white mb-2 group-hover:text-gold transition-colors">
                      {theme.name}
                    </h3>

                    <p className="text-warm-white/70 text-sm mb-2">
                      <span className="italic" style={{ color: theme.color }}>
                        &ldquo;{theme.question}&rdquo;
                      </span>
                    </p>

                    <p className="text-warm-white/60 text-xs">
                      {theme.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to explore */}
        <div className="text-center bg-gold/5 border border-gold/30 rounded-lg p-8 mb-16">
          <h3 className="font-heading font-semibold text-warm-white text-xl mb-4">
            Immerse Yourself in Philosophical Inquiry
          </h3>
          <p className="text-warm-white/70 mb-6 max-w-2xl mx-auto">
            Each of the 888 scenes is rooted in one of these 9 traditions, exploring timeless questions through stunning visual art and interactive storytelling.
          </p>
          <a href="/gallery?filter=philosophy" className="btn-primary inline-flex gap-2">
            <BookOpen className="w-5 h-5" />
            Explore All Scenes
          </a>
        </div>

        {/* Bottom supporting text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Users className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-heading font-semibold text-warm-white mb-2">Community-Driven</p>
            <p className="text-warm-white/60 text-sm">Share interpretations and philosophical discussions in our forum</p>
          </div>
          <div>
            <BookOpen className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-heading font-semibold text-warm-white mb-2">Literary Lineage</p>
            <p className="text-warm-white/60 text-sm">Each scene features public domain philosophical quotes</p>
          </div>
          <div>
            <Lightbulb className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-heading font-semibold text-warm-white mb-2">Eternal Questions</p>
            <p className="text-warm-white/60 text-sm">The questions asked in these scenes are humanity&apos;s oldest mysteries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
