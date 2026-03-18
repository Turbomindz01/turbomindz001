"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NFTCarouselItem {
  id: number;
  title: string;
  imageUrl: string;
  theme: string;
  price: number;
  characters: string[];
  quote: string;
  quoteAuthor: string;
}

interface NFTCarouselProps {
  items: NFTCarouselItem[];
  itemsPerView?: number;
}

export function NFTCarousel({ items, itemsPerView = 3 }: NFTCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(itemsPerView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, items.length - itemsToShow);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="relative w-full">
      {/* Carousel container */}
      <div className="relative px-4 sm:px-0">
        {/* Items grid */}
        <div className="grid gap-6 transition-all duration-500" style={{ gridTemplateColumns: `repeat(${itemsToShow}, minmax(0, 1fr))` }}>
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="card-glass-hover overflow-hidden group h-full animate-fade-in"
            >
              {/* Image */}
              <div className="aspect-[2/3] bg-gradient-to-br from-warm-white/5 to-warm-white/10 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                />
                {!item.imageUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-6xl">🎨</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Theme badge */}
                <div className="theme-badge mb-3 bg-gold/10 text-gold border border-gold/20">
                  {item.theme}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-warm-white text-lg mb-2 group-hover:text-gold transition-colors">
                  TM-{String(item.id).padStart(3, "0")}: {item.title}
                </h3>

                {/* Quote */}
                <blockquote className="text-warm-white/50 text-sm italic mb-3 line-clamp-2">
                  &ldquo;{item.quote}&rdquo;
                  <span className="block text-gold/50 text-xs not-italic mt-1">— {item.quoteAuthor}</span>
                </blockquote>

                {/* Characters */}
                <div className="flex items-center gap-1 mb-4">
                  {item.characters.map((char) => (
                    <span key={char} className="text-lg" title={char}>
                      {char === "Cosmo" ? "🚀" : char === "Nova" ? "🔮" : char === "Stella" ? "🌟" : "🌙"}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold font-heading font-bold text-lg">{item.price} MATIC</p>
                    <p className="text-warm-white/40 text-xs">~${(item.price * 0.5).toFixed(0)} USD</p>
                  </div>
                  <button className="btn-secondary text-xs px-3 py-2">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {items.length > itemsToShow && (
          <>
            {/* Left button */}
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gold/20 hover:bg-gold/40 disabled:opacity-20 disabled:cursor-not-allowed text-gold transition-all"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right button */}
            <button
              onClick={goToNext}
              disabled={currentIndex >= items.length - itemsToShow}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gold/20 hover:bg-gold/40 disabled:opacity-20 disabled:cursor-not-allowed text-gold transition-all"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Pagination indicator */}
      {items.length > itemsToShow && (
        <div className="mt-6 flex justify-center items-center gap-2">
          <span className="text-warm-white/60 text-sm font-mono">
            Showing {currentIndex + 1}–{Math.min(currentIndex + itemsToShow, items.length)} of {items.length}
          </span>
        </div>
      )}
    </section>
  );
}
