import type { Theme, Character, NFTScene } from "@/types";

// ══════════════════════════════════════════════
// THEME DATA
// ══════════════════════════════════════════════
export const themes: Theme[] = [
  { name: "Classical Foundations", color: "#1A237E", question: "What is virtue?", description: "Socrates, Plato, Aristotle, Seneca, Epictetus" },
  { name: "Enlightenment & Reason", color: "#C9A227", question: "What can we know?", description: "Kant, Voltaire, Locke, Newton" },
  { name: "Existentialism & Modern", color: "#4A148C", question: "What is freedom?", description: "Nietzsche, Kierkegaard, Camus" },
  { name: "Mysticism & Esoterica", color: "#00695C", question: "What is hidden?", description: "Hermes Trismegistus, Rumi, Paracelsus" },
  { name: "Eastern Wisdom", color: "#E65100", question: "What is balance?", description: "Laozi, Confucius, Buddha" },
  { name: "Science & Modernity", color: "#607D8B", question: "What is progress?", description: "Tesla, Einstein, Darwin, da Vinci" },
  { name: "Poetry & Aesthetics", color: "#AD1457", question: "What is beauty?", description: "Rilke, Whitman, Gibran, Keats" },
  { name: "Civic & Social", color: "#B71C1C", question: "What is justice?", description: "Paine, Gandhi, Marcus Aurelius" },
  { name: "Psychology & Mind", color: "#00838F", question: "What is the self?", description: "William James, Epictetus, Aristotle" },
];

// ══════════════════════════════════════════════
// CHARACTER DATA
// ══════════════════════════════════════════════
export const characters: Character[] = [
  {
    name: "Cosmo",
    emoji: "🚀",
    title: "The Curious Astronaut",
    color: "#004D5C",
    voicePercentage: 60,
    catchphrase: "But wait—",
    thresholdScene: 1,
    description: "Orange boots, fishbowl helmet, and a heart full of questions. Cosmo leads every expedition with wide-eyed wonder and the courage to ask 'why?' when everyone else has stopped wondering.",
  },
  {
    name: "Nova",
    emoji: "🔮",
    title: "The Pattern Seeker",
    color: "#C9A227",
    voicePercentage: 20,
    catchphrase: "The pattern is—",
    thresholdScene: 6,
    description: "Three floating orbs and a gold infinity pendant. Nova sees connections where others see chaos — tracing golden threads between ideas separated by centuries and continents.",
  },
  {
    name: "Stella",
    emoji: "🌟",
    title: "The Community Weaver",
    color: "#AD1457",
    voicePercentage: 15,
    catchphrase: "How do people use this?",
    thresholdScene: 16,
    description: "Blue-to-purple gradient hair, gold star earring, constellation freckles. Stella turns philosophy into practice and strangers into neighbors.",
  },
  {
    name: "Luna",
    emoji: "🌙",
    title: "The Quiet Observer",
    color: "#4A148C",
    voicePercentage: 5,
    catchphrase: "...",
    thresholdScene: 50,
    description: "Leather notebook, mismatched socks, violet hair streak. Luna rarely speaks. When she does, the universe pauses to listen. Most of the time, she just sketches.",
  },
];

// ══════════════════════════════════════════════
// MOCK NFT DATA (Placeholder until Supabase connected)
// ══════════════════════════════════════════════
export const featuredNFTs: NFTScene[] = [
  {
    id: 1,
    title: "The First Question",
    act: "I: Departure",
    universe: { id: 1, name: "Alchemical Renaissance", artTradition: "Renaissance Oil Painting", theme: "Classical Foundations", description: "Where alchemy meets artistry" },
    theme: themes[0],
    characters: ["Cosmo"],
    quote: "The unexamined life is not worth living.",
    quoteAuthor: "Socrates",
    easterEggs: ["Hidden owl symbol", "Alchemical formula on scroll", "Constellation of Orion", "Small clay philosopher's stone", "The number 001 in gold leaf"],
    priceMaticRaw: 26,
    imageUrl: "/placeholder-nft-1.jpg",
  },
  {
    id: 6,
    title: "The Guide Appears",
    act: "I: Departure",
    universe: { id: 6, name: "Geometric Sacred", artTradition: "Sacred Geometry", theme: "Mysticism & Esoterica", description: "Mathematics as meditation" },
    theme: themes[3],
    characters: ["Cosmo", "Nova"],
    quote: "As above, so below.",
    quoteAuthor: "Hermes Trismegistus",
    easterEggs: ["Flower of Life pattern", "3 orbiting orbs reflected in crystal", "Infinity symbol etched in stone", "Hidden Fibonacci spiral", "The word 'SEEK' in ancient script"],
    priceMaticRaw: 60,
    imageUrl: "/placeholder-nft-2.jpg",
  },
  {
    id: 151,
    title: "The Whispering Constellation",
    act: "I: Departure",
    universe: { id: 7, name: "Crystalline Dreamscape", artTradition: "Crystal Art", theme: "Poetry & Aesthetics", description: "Where crystals remember light" },
    theme: themes[6],
    characters: ["Cosmo", "Nova", "Stella"],
    quote: "If you want to build a ship, teach them to long for the endless immensity of the sea.",
    quoteAuthor: "Antoine de Saint-Exupéry",
    easterEggs: ["The Little Prince's rose", "Constellation of Orion", "A clay fox", "Roman numerals CLI", "An open leather notebook"],
    priceMaticRaw: 40,
    imageUrl: "/placeholder-nft-3.jpg",
  },
];

// ══════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════
export const navigationItems = [
  { label: "Gallery", href: "/gallery" },
  { label: "Story", href: "/story" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
];
