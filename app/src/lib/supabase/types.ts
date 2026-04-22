/**
 * Database type definitions matching supabase/migrations/0001_initial_schema.sql.
 *
 * Once the Supabase project exists, run:
 *   npx supabase gen types typescript --project-id <ref> > src/lib/supabase/types.ts
 * to regenerate this file from the live schema.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ActName = 'I: Departure' | 'II: The Ordeal' | 'III: The Return';
export type PrivacyLevel = 'public' | 'private' | 'friends';
export type MarriageStatus = 'pending' | 'accepted' | 'rejected' | 'cancelled' | 'expired';
export type ContentType = 'lesson' | 'character' | 'scene' | 'quote' | 'page' | 'theme';

export interface ProfileRow {
  id: string;
  wallet_address: string;
  username: string | null;
  bio: string | null;
  avatar_url: string | null;
  twitter: string | null;
  discord: string | null;
  opensea: string | null;
  email: string | null;
  email_notifications: boolean;
  marketplace_alerts: boolean;
  privacy_level: PrivacyLevel;
  created_at: string;
  updated_at: string;
}

export type ProfileInsert = Omit<ProfileRow, 'id' | 'created_at' | 'updated_at'> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type ProfileUpdate = Partial<Omit<ProfileRow, 'id' | 'wallet_address' | 'created_at'>>;

export interface NftRow {
  id: number;
  token_id: string;
  title: string;
  act: ActName;
  universe_id: number;
  universe_name: string;
  art_tradition: string;
  theme_name: string;
  characters: string[];
  quote: string | null;
  quote_author: string | null;
  easter_eggs: string[];
  price_matic: number | null;
  image_url: string | null;
  opensea_url: string | null;
  owner_address: string | null;
  is_minted: boolean;
  metadata: Json | null;
  created_at: string;
  updated_at: string;
}

export interface MarriageRequestRow {
  id: string;
  proposer_address: string;
  proposer_nft_id: number;
  partner_address: string;
  partner_nft_id: number;
  status: MarriageStatus;
  message: string | null;
  created_at: string;
  responded_at: string | null;
}

export interface VerifiedMarriageRow {
  id: string;
  request_id: string | null;
  nft_a_id: number;
  nft_b_id: number;
  proposer_address: string;
  partner_address: string;
  verified_at: string;
  dissolved_at: string | null;
  is_active: boolean;
}

export interface StatsRow {
  key: string;
  value: Json;
  updated_at: string;
}

export interface ContentRow {
  id: string;
  slug: string;
  type: ContentType;
  title: string;
  body: string | null;
  metadata: Json | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

/** Database shape matching supabase-js v2's expected structure. */
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
        Relationships: [];
      };
      nfts: {
        Row: NftRow;
        Insert: NftRow;
        Update: Partial<NftRow>;
        Relationships: [];
      };
      marriage_requests: {
        Row: MarriageRequestRow;
        Insert: Omit<MarriageRequestRow, 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<MarriageRequestRow>;
        Relationships: [
          {
            foreignKeyName: 'marriage_requests_proposer_nft_id_fkey';
            columns: ['proposer_nft_id'];
            referencedRelation: 'nfts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'marriage_requests_partner_nft_id_fkey';
            columns: ['partner_nft_id'];
            referencedRelation: 'nfts';
            referencedColumns: ['id'];
          },
        ];
      };
      verified_marriages: {
        Row: VerifiedMarriageRow;
        Insert: Omit<VerifiedMarriageRow, 'id' | 'verified_at'> & {
          id?: string;
          verified_at?: string;
        };
        Update: Partial<VerifiedMarriageRow>;
        Relationships: [
          {
            foreignKeyName: 'verified_marriages_request_id_fkey';
            columns: ['request_id'];
            referencedRelation: 'marriage_requests';
            referencedColumns: ['id'];
          },
        ];
      };
      stats: {
        Row: StatsRow;
        Insert: StatsRow;
        Update: Partial<StatsRow>;
        Relationships: [];
      };
      content: {
        Row: ContentRow;
        Insert: Omit<ContentRow, 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<ContentRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
