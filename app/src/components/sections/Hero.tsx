"use client";

import { HeroCarousel } from "./HeroCarousel";

// Mock hero carousel images - in production, these would come from your image generator
const heroCarouselImages = [
  {
    id: 1,
    src: "/images/hero/hero-bg-1.svg",
    title: "Begin Your Philosophical Journey",
    description: "Follow Cosmo, Nova, Stella, and Luna through 39 universes exploring 9 philosophical themes.",
  },
  {
    id: 2,
    src: "/images/hero/hero-bg-2.svg",
    title: "Philosophy Meets Art",
    description: "888 scenes of philosophical inquiry crafted as collectible NFT artworks on Polygon.",
  },
  {
    id: 3,
    src: "/images/hero/hero-bg-3.svg",
    title: "The Phygical Revolution",
    description: "Marry digital NFTs to physical artworks. Support artists directly through fair trade.",
  },
  {
    id: 4,
    src: "/images/hero/hero-bg-4.svg",
    title: "A Witnessed Economy",
    description: "Community-driven, transparent trading. Every transaction verified on blockchain.",
  },
];

export function Hero() {
  return <HeroCarousel images={heroCarouselImages} autoPlayInterval={6000} />;
}
