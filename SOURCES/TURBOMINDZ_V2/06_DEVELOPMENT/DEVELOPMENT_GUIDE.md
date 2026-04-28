# TURBOMINDZ DEVELOPMENT GUIDE
## VS Code + Claude Opus 4.6 — Step by Step

---

## 1. PREREQUISITES

### Required Software
- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **VS Code** — [code.visualstudio.com](https://code.visualstudio.com)
- **Git** — [git-scm.com](https://git-scm.com)
- **Claude Code CLI** — Anthropic's Claude Code (Opus 4.6)

### VS Code Extensions to Install
1. **Claude Code** — AI pair programming
2. **ESLint** — Code linting
3. **Prettier** — Code formatting
4. **Tailwind CSS IntelliSense** — Autocomplete for Tailwind
5. **TypeScript Importer** — Auto-import suggestions
6. **GitLens** — Git visualization

### Accounts Needed
- **Vercel** — vercel.com (free, deploy with GitHub)
- **Supabase** — supabase.com (free tier)
- **thirdweb** — thirdweb.com (free tier)
- **OpenSea** — opensea.io (API key, free)
- **Pinata** — pinata.cloud (free tier, 500 files)

---

## 2. PROJECT SETUP

### Step 1: Create the Next.js Project

Open your terminal in VS Code and run:

```bash
npx create-next-app@14 turbomindz --typescript --tailwind --app --src-dir --import-alias "@/*"
cd turbomindz
```

### Step 2: Install Dependencies

```bash
# Core UI
npm install framer-motion zustand @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-tooltip lucide-react

# Web3
npm install @thirdweb-dev/react @thirdweb-dev/sdk opensea-js ethers@5

# Backend
npm install @supabase/supabase-js @tanstack/react-query

# PWA
npm install @serwist/next
npm install -D serwist

# Utilities
npm install clsx tailwind-merge zod
```

### Step 3: Configure PWA (Serwist)

Create `src/app/sw.ts`:
```typescript
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();
```

Update `next.config.mjs`:
```javascript
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

export default withSerwist({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.ipfs.dweb.link" },
      { protocol: "https", hostname: "gateway.pinata.cloud" },
    ],
  },
});
```

Add to `src/app/manifest.ts`:
```typescript
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Turbomindz",
    short_name: "Turbomindz",
    description: "1,111 philosophical art NFTs + animated series",
    start_url: "/",
    display: "standalone",
    background_color: "#004D5C",
    theme_color: "#004D5C",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

### Step 4: Set Up Environment Variables

Create `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# thirdweb
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id

# OpenSea
OPENSEA_API_KEY=your_api_key

# Pinata
PINATA_API_KEY=your_key
PINATA_SECRET_KEY=your_secret
```

**CRITICAL: Never commit .env.local to git. It's already in .gitignore by default.**

### Step 5: Configure Tailwind with Turbomindz Design System

Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "tm-teal": "#004D5C",
        "tm-gold": "#C9A227",
        "tm-white": "#FFF8F0",
        "tm-black": "#0A0A0A",
        "theme-classical": "#1A237E",
        "theme-enlightenment": "#C9A227",
        "theme-existentialism": "#4A148C",
        "theme-mysticism": "#00695C",
        "theme-eastern": "#E65100",
        "theme-science": "#607D8B",
        "theme-poetry": "#AD1457",
        "theme-civic": "#B71C1C",
        "theme-psychology": "#00838F",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "card-flip": "cardFlip 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { transform: "translateY(20px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        cardFlip: { "0%": { transform: "rotateY(0deg)" }, "100%": { transform: "rotateY(180deg)" } },
      },
    },
  },
  plugins: [],
};
export default config;
```

### Step 6: Create Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, providers, dark mode)
│   ├── page.tsx            # Homepage
│   ├── gallery/
│   │   └── page.tsx        # Gallery grid
│   ├── scene/
│   │   └── [id]/
│   │       └── page.tsx    # Individual NFT detail
│   ├── episodes/
│   │   └── page.tsx        # Episode hub
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── marriage/
│   │   └── page.tsx        # Marriage explainer
│   ├── marketplace/
│   │   └── page.tsx        # Members-only marketplace
│   ├── api/
│   │   └── opensea/
│   │       └── route.ts    # Server-side OpenSea API proxy
│   ├── sw.ts               # Service worker
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Modal)
│   ├── layout/             # Header, Footer, Navigation
│   ├── gallery/            # NFTCard, FilterBar, NFTGrid
│   ├── purchase/           # PurchaseModal, WalletConnect
│   ├── marriage/           # CardFlip, MarriageForm
│   ├── episodes/           # EpisodeCard, VideoPlayer
│   └── community/          # ForumPost, BidPanel
├── lib/
│   ├── supabase.ts         # Supabase client
│   ├── thirdweb.ts         # thirdweb config
│   ├── opensea.ts          # OpenSea API helpers
│   ├── constants.ts        # NFT data, universes, themes
│   └── utils.ts            # Utility functions
├── stores/
│   └── useStore.ts         # Zustand global store
├── hooks/
│   ├── useNFTs.ts          # NFT data hooks
│   ├── useWallet.ts        # Wallet connection hooks
│   └── useMembership.ts    # Membership verification hooks
└── types/
    └── index.ts            # TypeScript interfaces
```

Run this to create the structure:
```bash
mkdir -p src/{components/{ui,layout,gallery,purchase,marriage,episodes,community},lib,stores,hooks,types,app/{gallery,scene/[id],episodes,about,marriage,marketplace,api/opensea}}
```

---

## 3. DEVELOPMENT PHASES

### Phase 1: Foundation (Week 1-2)
**Goal:** Static site with gallery, dark mode, and Turbomindz design system

**Claude Opus 4.6 Prompt for Phase 1:**

> You are building the Turbomindz PWA — a philosophical art NFT platform. Tech stack: Next.js 14 App Router, TypeScript strict, Tailwind CSS, Framer Motion.
>
> Design system: Dark mode default. Background: #004D5C (deep teal). Text: #FFF8F0 (warm white). Accents: #C9A227 (gold). Fonts: Playfair Display for headings, Inter for body, JetBrains Mono for NFT IDs and data.
>
> Build the following for Phase 1:
> 1. Root layout with dark mode, Google Fonts (Playfair Display, Inter, JetBrains Mono), global styles
> 2. Header component with logo ("TURBOMINDZ" in Playfair Display gold), navigation (Gallery, Episodes, About, Marriage), and a "Connect Wallet" button placeholder
> 3. Footer with links to Discord, Instagram, Twitter, OpenSea, and the newsletter signup
> 4. Homepage with all sections from the blueprint: Hero (headline + subline + 2 CTAs), Membership Explainer (3 steps), Featured NFTs (6-card carousel), Nine Questions section, Marriage Concept, Character Showcase (4 cards), Newsletter Signup
> 5. Gallery page with a filterable grid of NFT cards. Use placeholder data for now (create a constants file with 28 sample NFTs from Episode 1). Filters: Universe, Theme, Character, Season. Grid: responsive, 1-4 columns.
> 6. Scene Detail page with full NFT metadata display, PD quote, 5 easter eggs, dual purchase CTAs (placeholder)
> 7. About page with mission statement, three pillars, FAQ accordion
> 8. Framer Motion page transitions and scroll animations
>
> All copy comes from the App/Website Blueprint. Voice: 35% witty, 30% warm, 20% curious, 15% artfully simple. Never corporate.
>
> Zero build errors required. Run `npm run build` and fix all issues.

### Phase 2: Web3 Integration (Week 3-4)
**Goal:** Wallet connection, NFT data from OpenSea API, purchase flow

**Claude Opus 4.6 Prompt for Phase 2:**

> Continue building the Turbomindz PWA. Phase 2: Web3 integration.
>
> 1. Set up thirdweb Connect v5 for wallet connection. Support MetaMask, WalletConnect, Coinbase Wallet, and embedded email wallets. Chain: Polygon (chainId: 137).
> 2. Create /api/opensea/route.ts — a Next.js API route that proxies OpenSea API v2 calls. Endpoints: GET /api/opensea/listings (fetch all Turbomindz listings), GET /api/opensea/nft/[id] (fetch specific NFT). Cache client-side with 60-second TTL. NEVER expose the API key in frontend code.
> 3. Build the PurchaseModal component with dual paths: Path A (in-app via opensea-js Seaport), Path B (redirect to OpenSea deep-link). Show both options on every NFT detail page.
> 4. Implement NFT ownership verification using thirdweb SDK's useOwnedNFTs() hook. Check if connected wallet holds any Turbomindz NFT.
> 5. Build the MembershipGate middleware — protect /marketplace, /community, /profile routes. Non-members see: "Own a scene to enter the village."
> 6. Create Supabase tables: profiles (wallet_address, display_name, email, is_member, created_at), membership_log (wallet_address, event_type, nft_token_id, timestamp).
> 7. Account creation flow: after purchase detection, prompt "Welcome, Traveler" → create profile in Supabase.
>
> Zero build errors. Test wallet connection with MetaMask on Polygon testnet first.

### Phase 3: Community Features (Week 5-6)
**Goal:** Discord-synced forum, marriage request form, member profiles

**Claude Opus 4.6 Prompt for Phase 3:**

> Continue building Turbomindz PWA. Phase 3: Community features.
>
> 1. Build the Marriage Request Form — multi-step form: (a) Select NFT from owned collection, (b) Upload 6-8 photos of physical artwork, (c) Enter artwork details (title, medium, dimensions, artist, description), (d) Pay marriage fee ($20 MATIC, first free), (e) Submit. Store in Supabase marriage_requests table. Photos stored in Supabase Storage.
> 2. Build the CardFlip component — CSS 3D transform with Framer Motion. Front: NFT artwork. Back: physical art photos in embla-carousel. Perspective: 1000px. Duration: 0.6s. Used in marketplace and profiles.
> 3. Create the Episodes page — grid of 39 episode cards. Each shows: episode number, universe name, thumbnail (placeholder), title, "Watch" button (links to YouTube for now). Organize by season (3 tabs).
> 4. Build member Profile page — shows owned NFTs, marriage status, trading history.
> 5. Create Supabase tables: marriage_requests (id, wallet_address, nft_token_id, photos, artwork_details, status, created_at), verified_marriages (id, nft_token_id, artwork_hash, verified_at).
>
> Zero build errors.

### Phase 4: Marketplace + Polish (Week 7-8)
**Goal:** Married NFT marketplace, bid system, final polish

**Claude Opus 4.6 Prompt for Phase 4:**

> Final phase of Turbomindz PWA. Phase 4: Marketplace and polish.
>
> 1. Build the Marketplace page — grid of married NFTs only. Each shows CardFlip component. Filter by universe, theme, price range. Only members can access.
> 2. Implement listing flow: Member → Profile → "My NFTs" → select married NFT → "List for Sale" → set price in MATIC → confirm.
> 3. Build bid system: Buyers can bid on listed married NFTs. Bids stored in Supabase (marketplace_bids table). Sellers can accept, reject, or counter. All activity public (Witnessed Economy).
> 4. SEO optimization: meta tags for every page, Open Graph images, structured data for NFTs. **Add Pinterest domain verification to `app/layout.tsx` metadata:** `other: { 'p:domain_verify': '71cc5b5895524aa4e57ed58c420e48a2' }` — see `08_ASSETS/PINTEREST_VERIFICATION.md` for full details.
> 5. Performance: lazy load images, optimize Lighthouse score (target 90+), compress assets.
> 6. PWA testing: test install on iOS Safari, Android Chrome, Windows Edge. Verify offline gallery works.
> 7. Final QA: test entire user flow end-to-end (browse → purchase → account → discord → marketplace).
>
> Zero build errors. `npm run build` must succeed. Deploy to Vercel.

---

## 4. DEPLOYMENT

### Vercel Deployment

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Turbomindz PWA"
git remote add origin https://github.com/YOUR_USERNAME/turbomindz.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the turbomindz repo
4. Add environment variables (copy from .env.local)
5. Deploy

### Custom Domain

1. In Vercel dashboard → Settings → Domains → Add "turbomindz.com"
2. In Namecheap DNS: Add CNAME record pointing to `cname.vercel-dns.com`
3. Wait for DNS propagation (5-30 minutes)
4. Vercel automatically provisions HTTPS

### Post-Deployment Checklist
- [ ] Site loads at turbomindz.com
- [ ] PWA installs on mobile (test iOS + Android)
- [ ] Wallet connection works
- [ ] Gallery loads with real NFT data
- [ ] Purchase flow completes (test with testnet first)
- [ ] SEO meta tags render correctly (check with Open Graph debugger)
- [ ] Lighthouse score 90+
- [ ] Service worker caches gallery for offline use

---

## 5. SUPABASE DATABASE SCHEMA

```sql
-- Profiles
CREATE TABLE profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  wallet_address TEXT UNIQUE NOT NULL,
  display_name TEXT,
  email TEXT,
  discord_id TEXT,
  is_member BOOLEAN DEFAULT false,
  membership_since TIMESTAMPTZ,
  nfts_owned_count INTEGER DEFAULT 0,
  last_verified TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Membership Log
CREATE TABLE membership_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  wallet_address TEXT NOT NULL,
  event_type TEXT CHECK (event_type IN ('GAINED', 'REVOKED')) NOT NULL,
  nft_token_id TEXT,
  timestamp TIMESTAMPTZ DEFAULT now()
);

-- Marriage Requests
CREATE TABLE marriage_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  wallet_address TEXT NOT NULL REFERENCES profiles(wallet_address),
  nft_token_id TEXT NOT NULL,
  artwork_title TEXT NOT NULL,
  artwork_medium TEXT,
  artwork_dimensions TEXT,
  artwork_artist TEXT,
  artwork_description TEXT,
  photos JSONB NOT NULL,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  review_notes TEXT,
  marriage_fee_paid BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Verified Marriages
CREATE TABLE verified_marriages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nft_token_id TEXT UNIQUE NOT NULL,
  marriage_request_id UUID REFERENCES marriage_requests(id),
  artwork_metadata_hash TEXT,
  on_chain_tx_hash TEXT,
  verified_at TIMESTAMPTZ DEFAULT now()
);

-- Marketplace Listings
CREATE TABLE marketplace_listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nft_token_id TEXT NOT NULL,
  seller_wallet TEXT NOT NULL,
  price_matic DECIMAL NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('active', 'sold', 'cancelled')) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Marketplace Bids
CREATE TABLE marketplace_bids (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  listing_id UUID REFERENCES marketplace_listings(id),
  bidder_wallet TEXT NOT NULL,
  bid_amount_matic DECIMAL NOT NULL,
  status TEXT CHECK (status IN ('pending', 'accepted', 'rejected', 'countered')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Forum Posts (Discord sync)
CREATE TABLE forum_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_wallet TEXT,
  author_discord_id TEXT,
  channel_id TEXT NOT NULL,
  content TEXT NOT NULL,
  discord_message_id TEXT,
  synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE marriage_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_bids ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
```

---

## 6. DAILY DEVELOPMENT WORKFLOW

Each day when you sit down to develop:

1. **Open VS Code** in the turbomindz project folder
2. **Open Claude Code** (Opus 4.6) in the terminal
3. **Check the current phase** — what components need building today?
4. **Give Claude the prompt** from the appropriate phase above, plus any specific component you need
5. **Review the code** Claude generates — test locally with `npm run dev`
6. **Fix any TypeScript errors** — `npm run build` must pass with zero errors
7. **Commit your work** — meaningful commit messages
8. **Push to GitHub** — Vercel auto-deploys from main branch

### Testing Commands
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build (catch all errors)
npm run start        # Test production build locally
npm run lint         # ESLint check
```

---

*"The code is the bridge. The design is the question. The user is the traveler."*
