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

// ══════════════════════════════════════════════
// MARRIAGE / PHYGITAL TYPES
// ══════════════════════════════════════════════

export type MarriageStatus = "Unmarried" | "Pending" | "Married";

export interface PhysicalArt {
  title: string;
  medium: string;
  dimensions: string;
  yearCreated?: number;
  artistName?: string;
  description: string;
  /** Photos: front, back, top, bottom, left, right, detail1, detail2 */
  photos: string[];
  condition?: string;
  shippingInfo?: string;
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
  marriageStatus?: MarriageStatus;
  physicalArt?: PhysicalArt;
}

// ══════════════════════════════════════════════
// MARKETPLACE TYPES
// ══════════════════════════════════════════════

export interface MarketplaceListing {
  id: string;
  nftId: number;
  nft: NFTScene;
  sellerAddress: string;
  priceMaticRaw: number;
  listedAt: string;
  bids: Bid[];
}

export interface Bid {
  id: string;
  bidderAddress: string;
  bidderDisplayName?: string;
  amountMaticRaw: number;
  createdAt: string;
  status: "Active" | "Accepted" | "Rejected" | "Expired";
}

export interface MarriageRequest {
  nftTokenId: number;
  artTitle: string;
  medium: string;
  dimensions: string;
  yearCreated?: number;
  artistName?: string;
  description: string;
  photos: File[];
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

// ══════════════════════════════════════════════
// USER PROFILE TYPES
// ══════════════════════════════════════════════

export interface UserProfile {
  username: string;
  bio: string;
  avatarUrl: string;
  socialLinks: {
    twitter: string;
    discord: string;
    opensea: string;
  };
  preferences: {
    emailNotifications: boolean;
    marketplaceAlerts: boolean;
    privacyLevel: 'public' | 'private' | 'friends';
  };
}
