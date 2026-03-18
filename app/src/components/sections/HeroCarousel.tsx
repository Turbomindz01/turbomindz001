"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export function HeroCarousel({ images, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden rounded-xl pt-16">
      {/* Carousel slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-philosophy-dark/40 via-philosophy-dark/60 to-rich-black/80" />

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 py-20 pt-40">
              {index === currentIndex && (
                <>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-warm-white mb-4 animate-slide-up">
                    {image.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-warm-white/80 max-w-2xl animate-slide-up animate-delay-100">
                    {image.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gold/20 hover:bg-gold/40 text-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gold/20 hover:bg-gold/40 text-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? "active" : "inactive"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 z-20 bg-gold/10 backdrop-blur border border-gold/30 rounded-full px-4 py-2">
        <p className="text-gold font-mono text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Auto-play indicator */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-6 left-6 z-20 text-xs font-mono px-3 py-2 rounded-full bg-wisdom-bronze/20 border border-wisdom-bronze/40 text-wisdom-bronze hover:bg-wisdom-bronze/30 transition-all duration-200"
      >
        {isAutoPlay ? "⏸ Auto" : "▶ Manual"}
      </button>
    </section>
  );
}
