-- ════════════════════════════════════════════════════════════
-- Turbomindz — Initial Schema (MP4, Day 14)
-- Tables: profiles, nfts, marriage_requests, verified_marriages,
--         stats, content
-- Auth model: thirdweb wallet auth (no Supabase Auth). Writes go
-- through Next.js API routes using the service role key after
-- verifying the wallet signature. Anon key is read-mostly.
-- ════════════════════════════════════════════════════════════

-- Enable extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ────────────────────────────────────────────────────────────
-- updated_at trigger helper
-- ────────────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ────────────────────────────────────────────────────────────
-- profiles
-- ────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  wallet_address text unique not null
    check (wallet_address = lower(wallet_address) and length(wallet_address) = 42),
  username text unique,
  bio text,
  avatar_url text,
  twitter text,
  discord text,
  opensea text,
  email text,
  email_notifications boolean not null default true,
  marketplace_alerts boolean not null default true,
  privacy_level text not null default 'public'
    check (privacy_level in ('public', 'private', 'friends')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists profiles_wallet_idx on public.profiles (wallet_address);
create index if not exists profiles_username_idx on public.profiles (username) where username is not null;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- ────────────────────────────────────────────────────────────
-- nfts (cache of the 888 minted scenes)
-- ────────────────────────────────────────────────────────────
create table if not exists public.nfts (
  id integer primary key check (id between 1 and 888),
  token_id text unique not null,
  title text not null,
  act text not null check (act in ('I: Departure', 'II: The Ordeal', 'III: The Return')),
  universe_id integer not null check (universe_id between 1 and 39),
  universe_name text not null,
  art_tradition text not null,
  theme_name text not null,
  characters text[] not null default '{}',
  quote text,
  quote_author text,
  easter_eggs text[] not null default '{}',
  price_matic numeric(18, 4),
  image_url text,
  opensea_url text,
  owner_address text,
  is_minted boolean not null default true,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists nfts_theme_idx on public.nfts (theme_name);
create index if not exists nfts_universe_idx on public.nfts (universe_id);
create index if not exists nfts_owner_idx on public.nfts (owner_address) where owner_address is not null;
create index if not exists nfts_act_idx on public.nfts (act);

drop trigger if exists nfts_set_updated_at on public.nfts;
create trigger nfts_set_updated_at
  before update on public.nfts
  for each row execute function public.set_updated_at();

-- ────────────────────────────────────────────────────────────
-- marriage_requests (proposals between two NFTs / wallets)
-- ────────────────────────────────────────────────────────────
create table if not exists public.marriage_requests (
  id uuid primary key default gen_random_uuid(),
  proposer_address text not null,
  proposer_nft_id integer not null references public.nfts(id) on delete cascade,
  partner_address text not null,
  partner_nft_id integer not null references public.nfts(id) on delete cascade,
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'rejected', 'cancelled', 'expired')),
  message text,
  created_at timestamptz not null default now(),
  responded_at timestamptz,
  -- one open request per (proposer_nft, partner_nft) pair
  constraint marriage_requests_unique_pending
    unique (proposer_nft_id, partner_nft_id, status)
    deferrable initially deferred
);

create index if not exists marriage_requests_proposer_idx on public.marriage_requests (proposer_address);
create index if not exists marriage_requests_partner_idx on public.marriage_requests (partner_address);
create index if not exists marriage_requests_status_idx on public.marriage_requests (status);

-- ────────────────────────────────────────────────────────────
-- verified_marriages (the public, witnessed result)
-- ────────────────────────────────────────────────────────────
create table if not exists public.verified_marriages (
  id uuid primary key default gen_random_uuid(),
  request_id uuid unique references public.marriage_requests(id) on delete set null,
  nft_a_id integer not null references public.nfts(id) on delete cascade,
  nft_b_id integer not null references public.nfts(id) on delete cascade,
  proposer_address text not null,
  partner_address text not null,
  verified_at timestamptz not null default now(),
  dissolved_at timestamptz,
  is_active boolean not null default true,
  constraint verified_marriages_distinct check (nft_a_id < nft_b_id)
);

create index if not exists verified_marriages_nft_a_idx on public.verified_marriages (nft_a_id);
create index if not exists verified_marriages_nft_b_idx on public.verified_marriages (nft_b_id);
create index if not exists verified_marriages_active_idx on public.verified_marriages (is_active) where is_active = true;

-- ────────────────────────────────────────────────────────────
-- stats (rolled-up aggregates, key/value)
-- ────────────────────────────────────────────────────────────
create table if not exists public.stats (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

drop trigger if exists stats_set_updated_at on public.stats;
create trigger stats_set_updated_at
  before update on public.stats
  for each row execute function public.set_updated_at();

-- ────────────────────────────────────────────────────────────
-- content (lessons, scene stories, philosophy pages)
-- ────────────────────────────────────────────────────────────
create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  type text not null check (type in ('lesson', 'character', 'scene', 'quote', 'page', 'theme')),
  title text not null,
  body text,
  metadata jsonb,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists content_type_idx on public.content (type);
create index if not exists content_published_idx on public.content (published) where published = true;

drop trigger if exists content_set_updated_at on public.content;
create trigger content_set_updated_at
  before update on public.content
  for each row execute function public.set_updated_at();

-- ════════════════════════════════════════════════════════════
-- Row-Level Security
-- Read-mostly model: anyone can read public data; writes go
-- through API routes using the service role key after
-- verifying wallet signatures.
-- ════════════════════════════════════════════════════════════

alter table public.profiles enable row level security;
alter table public.nfts enable row level security;
alter table public.marriage_requests enable row level security;
alter table public.verified_marriages enable row level security;
alter table public.stats enable row level security;
alter table public.content enable row level security;

-- profiles: public profiles readable by anyone; private profiles only via service role
drop policy if exists profiles_select_public on public.profiles;
create policy profiles_select_public on public.profiles
  for select using (privacy_level = 'public');

-- nfts: public read
drop policy if exists nfts_select_all on public.nfts;
create policy nfts_select_all on public.nfts
  for select using (true);

-- marriage_requests: public read (witnessed economy)
drop policy if exists marriage_requests_select_all on public.marriage_requests;
create policy marriage_requests_select_all on public.marriage_requests
  for select using (true);

-- verified_marriages: public read (witnessed economy)
drop policy if exists verified_marriages_select_all on public.verified_marriages;
create policy verified_marriages_select_all on public.verified_marriages
  for select using (true);

-- stats: public read
drop policy if exists stats_select_all on public.stats;
create policy stats_select_all on public.stats
  for select using (true);

-- content: published-only public read
drop policy if exists content_select_published on public.content;
create policy content_select_published on public.content
  for select using (published = true);

-- ════════════════════════════════════════════════════════════
-- Realtime publication (for live marriage status updates)
-- ════════════════════════════════════════════════════════════
do $$
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;
end $$;

alter publication supabase_realtime add table public.marriage_requests;
alter publication supabase_realtime add table public.verified_marriages;
