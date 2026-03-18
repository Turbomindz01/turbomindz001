# TURBOMINDZ — Claude Code Session Context

You are building the Turbomindz web application — a philosophical art NFT platform on Polygon.

## PROJECT OVERVIEW
- 888-scene philosophical art NFT project
- 4 claymation characters (Cosmo, Nova, Stella, Luna) travel through 39 universes
- 9 philosophical themes, each asking a fundamental question
- Phygital: NFTs can be "married" to physical artworks
- Witnessed Economy: all trading is public
- Solo founder project built entirely with AI tools

## TECH STACK
- **Framework**: Next.js 14 (App Router), TypeScript strict mode
- **Styling**: Tailwind CSS + Framer Motion (animations)
- **Wallet/Auth**: thirdweb Connect v5 (170+ wallets + embedded email wallets)
- **Database**: Supabase (PostgreSQL) — profiles, marriage_requests, verified_marriages, stats, content
- **Blockchain**: Polygon (MATIC), ERC-721 NFTs, 150 already minted on OpenSea
- **State**: Zustand
- **UI Components**: Radix UI + Lucide React icons
- **PWA**: Serwist (service worker)
- **Deploy**: Vercel (free tier), domain: turbomindz.com (Namecheap)
- **Automation**: n8n Cloud (5 free workflows)

## BRAND SYSTEM
- **Colors**: Deep Teal #004D5C (bg), Gold #C9A227 (accent), Warm White #FFF8F0 (text), Rich Black #0A0A0A
- **Theme Colors**: Classical #1A237E, Enlightenment #C9A227, Existentialism #4A148C, Mysticism #00695C, Eastern #E65100, Science #607D8B, Poetry #AD1457, Civic #B71C1C, Psychology #00838F
- **Fonts**: Playfair Display (headings), Inter (body), JetBrains Mono (mono)
- **Dark mode is DEFAULT** — no light mode toggle needed
- **Typography**: All headings use font-heading, body uses font-body

## DEVELOPMENT APPROACH (Parallel Path)
This app is being built at 50% time (Track B) alongside revenue generation (Track A).
Each mega-prompt gets 2 weeks instead of 1. The 5 mega-prompts from Build Document v3.0:

1. **MP1 (Weeks 1-2)**: Foundation & Layout — project init, Tailwind, layout shell, homepage
2. **MP2 (Weeks 3-4)**: Core Pages — gallery with filters, NFT detail, story page, components
3. **MP3 (Weeks 5-6)**: Wallet & Auth — thirdweb, user profiles, Zustand, token gates
4. **MP4 (Weeks 7-8)**: Supabase & Live Data — replace mock data, marriage system, admin
5. **MP5 (Weeks 9-10)**: Marketplace & PWA — trade threads, commissions, PWA, push notifications
6. **Weeks 11-12**: Polish, deploy to Vercel, connect domain, app stores, n8n workflows

## CORE RULES (NEVER VIOLATE)
1. `npm run build` MUST pass with ZERO errors after every change
2. Build with mock/placeholder data first, then connect live services one at a time
3. Mobile-first responsive design (test at 375px, 768px, 1024px)
4. All imports use `@/*` alias (maps to `./src/*`)
5. Commit frequently with descriptive messages
6. Dark mode default — Deep Teal background, Gold accents, Warm White text
7. Use existing Tailwind classes from tailwind.config.ts — don't override brand colors

## PROJECT STRUCTURE
```
src/
  app/              ← Pages (Next.js App Router)
    layout.tsx      ← Root layout with Navbar + Footer
    page.tsx        ← Homepage
    globals.css     ← Tailwind + brand styles + custom components
    gallery/        ← Gallery page
    story/          ← Story page
    marketplace/    ← Marketplace page
    about/          ← About page
  components/
    layout/         ← Navbar, Footer
    sections/       ← Homepage sections (Hero, FeaturedNFTs, etc.)
    ui/             ← Reusable UI components
  lib/
    data.ts         ← Mock data (themes, characters, featured NFTs)
    cn.ts           ← Tailwind class merge utility
  types/
    index.ts        ← TypeScript definitions (Theme, Character, NFTScene, etc.)
  hooks/            ← Custom React hooks
```

## CUSTOM CSS CLASSES (defined in globals.css)
- `.card-glass` — frosted glass card with border
- `.card-glass-hover` — same + hover effects
- `.btn-primary` — gold button (CTA)
- `.btn-secondary` — outlined gold button
- `.section-padding` — standard section padding
- `.container-narrow` — max-w-7xl centered container
- `.theme-badge` — small badge for universe/theme labels
- `.text-gradient-gold` — gold gradient text effect

## WHEN ASKED "WHAT SHOULD I BUILD NEXT?"
Check the current mega-prompt phase and build the next component in sequence.
Always run `npm run build` after changes. Fix errors before moving on.
