// ══════════════════════════════════════════════
// TURBOMINDZ TYPE DEFINITIONS
// ══════════════════════════════════════════════

export type ThemeName =
  | "Classical Foundations"
  | "Enlightenment & Reason"
  | "Existentialism & Modern"
  | "Mysticism & Esoterica"
  | "Eastern Wisdom"
  | "Science & Modernity"
  | "Poetry & Aesthetics"
  | "Civic & Social"
  | "Psychology & Mind";

export type CharacterName = "Cosmo" | "Nova" | "Stella" | "Luna";

export type ActName = "I: Departure" | "II: The Ordeal" | "III: The Return";

export interface Theme {
  name: ThemeName;
  color: string;
  question: string;
  description: string;
}

export interface Character {
  name: CharacterName;
  emoji: string;
  title: string;
  color: string;
  voicePercentage: number;
  catchphrase: string;
  thresholdScene: number;
  description: string;
}

export interface Universe {
  id: number;
  name: string;
  artTradition: string;
  theme: ThemeName;
  description: string;
}

export interface NFTScene {
  id: number;
  title: string;
  act: ActName;
  universe: Universe;
  theme: Theme;
  characters: CharacterName[];
  quote: string;
  quoteAuthor: string;
  easterEggs: string[];
  priceMaticRaw: number;
  imageUrl?: string;
  openseaUrl?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}
