# TURBOMINDZ — MASTER DEVELOPMENT PLAN
## 30-Day Parallel Execution: App + Content + Platforms + Marketing

**Created:** April 18, 2026
**Owner:** Hugo
**Method:** Daily task lists delivered on request. Progress tracked across sessions.

---

## GOAL ASSESSMENT & SHORTCOMINGS ADDRESSED

### The Real Goal
Ship a functional PWA at turbomindz.com that serves as the single hub for all 11+ revenue streams, the 39-episode animated series, the 1,111-NFT collection, the marriage system, and the community — while simultaneously producing NFT content, setting up monetization platforms, and building a pre-launch audience.

### 7 Structural Shortcomings in Previous Workflows

**1. Sequential thinking, parallel reality.** Previous plans treated app development, content production, platform setup, and marketing as sequential phases. A solo founder must run all four in parallel or the timeline balloons to 6+ months.

**2. App designed in isolation from revenue.** The app blueprint defined a gallery with a purchase button. The Monetization Plan defined 11+ revenue streams. They were never connected. This plan integrates them from Day 1.

**3. No "Day 0" infrastructure.** Previous plans assumed accounts, domains, and tools were already configured. They weren't. This plan starts with the unglamorous work of account creation and environment setup.

**4. Design before code.** The Development Guide jumped to `npx create-next-app` without defining what the screens look like. You can't code what you haven't designed. This plan sequences design → code correctly.

**5. No definition of "done" per day.** Previous daily templates listed tasks but not acceptance criteria. This plan defines exactly what "complete" means for each task.

**6. Content production disconnected from app needs.** The Production Pipeline produces 4 NFTs/day but doesn't specify how those NFTs populate the app. This plan connects production output to app content.

**7. No Web3 newcomer path.** Every flow assumed crypto literacy. This plan builds the email-first, wallet-optional architecture from Day 1.

---

## 4 PARALLEL WORKSTREAMS

Every day has tasks in 1-4 of these streams. They run simultaneously.

### Stream A: APP DEVELOPMENT
Design screens → Code components → Integrate Web3 → Test → Deploy

### Stream B: CONTENT PRODUCTION
Generate NFT images → Write metadata → Assemble episodes → Build product catalog

### Stream C: PLATFORM SETUP
Create accounts → Configure storefronts → Connect payment → List products

### Stream D: MARKETING & COMMUNITY
Social media setup → Pinterest strategy → Email funnels → Discord architecture → Pre-launch hype

---

## 30-DAY OVERVIEW

### WEEK 1 (Days 1-7): FOUNDATION
All four streams begin simultaneously. The goal is infrastructure — accounts, tools, design system, first content.

| Day | Stream A (App) | Stream B (Content) | Stream C (Platforms) | Stream D (Marketing) |
|-----|---------------|-------------------|---------------------|---------------------|
| 1 | Environment setup: Node, VS Code, Git, GitHub repo, Vercel, Supabase, thirdweb accounts | Generate first 4 NFT images (Episode 1: TM-001 to TM-004) | Create OpenSea, Gumroad, Ko-fi, Patreon accounts | Create Instagram, Twitter/X, Pinterest business accounts |
| 2 | Design system in Claude Design: colors, typography, components | Generate TM-005 to TM-008 + write metadata for TM-001–004 | Configure OpenSea collection, upload banner/profile | Pinterest: Claim domain, create 10 boards, write descriptions |
| 3 | Design Homepage mobile screen | Generate TM-009 to TM-012 + metadata TM-005–008 | Patreon: Write 5 tier descriptions, upload images | Instagram: First post (project announcement carousel) |
| 4 | Design Gallery + Scene Detail mobile | Generate TM-013 to TM-016 (Stella's intro!) + metadata | Gumroad: Upload first 5 digital products | Twitter/X: Launch thread explaining the project |
| 5 | Design Episodes + Shop mobile screens | Generate TM-017 to TM-020 + metadata | Ko-fi: Set up tip jar + shop, cross-list products | Pinterest: Generate + upload first 5 brand pins |
| 6 | Design Purchase Modal + Account Creation flows | Generate TM-021 to TM-024 + metadata | Etsy: Create shop, connect Printful, list 5 POD items | Create Discord server: 8 categories, 38 channels |
| 7 | Design Profile + Marketplace + review all screens | Generate TM-025 to TM-028 (Episode 1 complete!) + metadata | Amazon KDP: Upload first 3 guides | Newsletter: Set up Buttondown, design template, create lead magnet |

**Week 1 Exit Criteria:**
- 10+ mobile screens designed in Claude Design or exported as reference
- 28 NFT images generated (Episode 1 complete)
- 28 NFT metadata entries written
- 8 platform accounts created and configured
- 10 Pinterest boards live with descriptions
- Instagram + Twitter/X + Pinterest accounts active with first posts
- Discord server structured (not yet public)
- Email newsletter configured with 1 lead magnet

---

### WEEK 2 (Days 8-14): BUILD PHASE 1
App coding begins. Content production continues. Platforms get first products.

| Day | Stream A (App) | Stream B (Content) | Stream C (Platforms) | Stream D (Marketing) |
|-----|---------------|-------------------|---------------------|---------------------|
| 8 | Code: Next.js project setup, Tailwind config, design system tokens, folder structure | Generate TM-029 to TM-032 (Ep 2 starts) | Gumroad: Upload 5 more products (10 total) | Daily pin + 2 repins. IG post: Episode 1 teaser |
| 9 | Code: Root layout, Header, Footer, Bottom Nav components | Generate TM-033 to TM-036 + metadata | Patreon: Publish first content across all tiers | Daily pin. Twitter thread: "What is Turbomindz?" |
| 10 | Code: Homepage — Hero, Universe Preview, How It Works sections | Generate TM-037 to TM-040 + metadata | Etsy: List 5 more POD products (10 total) | Daily pin. IG: Behind-the-scenes carousel |
| 11 | Code: Homepage — Featured Scenes, Episodes teaser, Marriage, Shop, Newsletter sections | Generate TM-041 to TM-044 + metadata | Medium: Publish first essay, join Partner Program | Daily pin. First Idea Pin (multi-slide) |
| 12 | Code: Gallery page — Explore Mode + Grid Mode + NFT Card component | Generate TM-045 to TM-048 + metadata | Buttondown: Send first newsletter to any subscribers | Daily pin. IG: Character introduction (Cosmo) |
| 13 | Code: Scene Detail page — image, metadata, quote, easter eggs, related scenes | Generate TM-049 to TM-052 (Luna's intro TM-050!) + metadata | YouTube: Create channel, upload first teaser | Daily pin. Twitter: #BuildInPublic first post |
| 14 | Code: Episodes page + Episode Detail + Shop page | Generate TM-053 to TM-056 (Ep 2 complete!) + metadata | Review all platforms: fix any gaps | Weekly Pinterest Idea Pin. IG: Luna introduction |

**Week 2 Exit Criteria:**
- Homepage, Gallery, Scene Detail, Episodes, Shop coded and rendering locally
- 56 NFT images generated (Episodes 1-2 complete)
- 56 metadata entries written
- 15+ digital products listed across Gumroad/Ko-fi/Etsy
- First Patreon content published
- 14+ Pinterest pins live
- Instagram: 5+ posts
- Twitter: 3+ posts
- Newsletter: First issue sent
- YouTube channel created

---

### WEEK 3 (Days 15-21): BUILD PHASE 2 — WEB3 + ACCOUNTS
Web3 integration, account system, and purchase flow.

| Day | Stream A (App) | Stream B (Content) | Stream C (Platforms) | Stream D (Marketing) |
|-----|---------------|-------------------|---------------------|---------------------|
| 15 | Code: Account creation flow (email-first + wallet optional), Supabase auth | Generate TM-057–060 (Ep 3) + metadata | OpenSea: Mint Episode 1 NFTs (TM-001 to TM-028) on Polygon testnet | Daily social posting continues all week |
| 16 | Code: thirdweb wallet connection (MetaMask, WalletConnect, Coinbase, email wallet) | Generate TM-061–064 + metadata | Test: Purchase flow on Polygon testnet | Easter Egg Hunt #1 setup (Discord + IG) |
| 17 | Code: Purchase Modal — dual path (Seaport in-app + OpenSea redirect) | Generate TM-065–068 + metadata | Gumroad: Upload 5 more products (20 total) | IG carousel: "How to collect a Turbomindz NFT" |
| 18 | Code: NFT ownership verification + Membership gate | Generate TM-069–072 + metadata | Testnet: Full purchase → account creation → Discord role flow | Twitter thread: Philosophy Challenge #1 |
| 19 | Code: Profile page (3 states: free, collector, Patreon) | Generate TM-073–076 + metadata | Patreon: Month 1 art book for Tier 2+ | Pinterest: 2nd Idea Pin |
| 20 | Code: Marriage page — explainer + submission form (multi-step, photo upload) | Generate TM-077–080 + metadata | Fix any testnet issues found | IG: "The Marriage Concept" explainer post |
| 21 | Code: Marriage — CardFlip component, Provenance Museum display | Generate TM-081–084 (Ep 3 complete!) + metadata | Review: All integrations working on testnet | Weekly roundup post. Discord: Soft launch to 10 testers |

**Week 3 Exit Criteria:**
- Wallet connection working on testnet
- Purchase modal functional (both paths)
- Account creation (email + wallet) working
- Profile page rendering with 3 states
- Marriage submission form functional
- 84 NFTs generated (Episodes 1-3)
- 20+ digital products across platforms
- Episode 1 NFTs minted on testnet
- Discord soft-launched with testers

---

### WEEK 4 (Days 22-28): POLISH + MARKETPLACE + PRE-LAUNCH
Final features, marketplace, desktop responsive, and launch preparation.

| Day | Stream A (App) | Stream B (Content) | Stream C (Platforms) | Stream D (Marketing) |
|-----|---------------|-------------------|---------------------|---------------------|
| 22 | Code: Marketplace page — married NFT listings, bid system, Witnessed Economy display | Generate TM-085–088 (Ep 4) + metadata | Migrate from testnet to Polygon mainnet | Product Hunt: Prepare launch page |
| 23 | Code: Universe Explorer — interactive constellation/map of 39 universes | Generate TM-089–092 + metadata | OpenSea: Mint Episode 1 on mainnet (TM-001–028) | IG + Twitter: "Launch is coming" countdown |
| 24 | Code: Blog page (Medium sync or native), SEO meta tags, structured data, sitemap | Generate TM-093–096 + metadata | Verify: Mainnet purchase flow end-to-end | Newsletter: Pre-launch announcement |
| 25 | Code: Desktop responsive — Homepage, Gallery, Scene Detail | Generate TM-097–100 (Milestone TM-100!) + metadata | Final Patreon content prep for launch week | Discord: Open to all collectors (Guild.xyz configured) |
| 26 | Code: Desktop responsive — remaining pages + mega-menu nav | Generate TM-101–104 + metadata | All platforms: Final review and fixes | Pinterest: Batch upload 10 pins for launch week |
| 27 | Code: PWA manifest, service worker, offline gallery, analytics (Plausible) | Generate TM-105–108 + metadata | Deploy to Vercel: turbomindz.com live | Pre-launch IG Reel + Twitter countdown |
| 28 | QA: Full end-to-end test on mobile + desktop. Fix all bugs. Lighthouse 90+ | Generate TM-109–112 (Ep 4 complete!) + metadata | DNS: turbomindz.com → Vercel. HTTPS verified. | **LAUNCH DAY PREP**: All social content queued |

**Week 4 Exit Criteria:**
- Full app deployed at turbomindz.com
- All pages responsive (mobile + desktop)
- PWA installable on iOS/Android
- Marketplace functional
- Universe Explorer live
- Blog/SEO implemented
- Lighthouse 90+
- 112 NFTs generated (Episodes 1-4)
- Episode 1 NFTs minted on mainnet
- All platforms configured and live
- Pre-launch marketing complete

---

### Days 29-30: LAUNCH

| Day | Action |
|-----|--------|
| 29 | **SOFT LAUNCH**: NFT Drop #1 (TM-001–028, Episode 1, 0.3 MATIC each). Announce on all channels. Monitor for bugs. |
| 30 | **PUBLIC LAUNCH**: Product Hunt listing. Full social blitz. First newsletter to full list. Monitor analytics. Fix any issues. |

---

## POST-LAUNCH DAILY CADENCE (Day 31+)

After launch, each day follows this rhythm:

| Time Block | Task | Duration |
|------------|------|----------|
| Morning | Generate 4 NFT images + write metadata | 2 hours |
| Midday | Code: Next feature/fix from backlog | 2-3 hours |
| Afternoon | Social: 1 IG post + 1 pin + 2 repins + engagement | 30 min |
| Afternoon | Community: Discord moderation + support | 15 min |
| Evening | Newsletter/Patreon content (weekly cadence) | 30 min (amortized) |

Production rate: 4 NFTs/day = 28/week = 1 episode/week. At this pace, 39 episodes complete in ~39 weeks (Month 10).

---

## TECHNOLOGY DECISIONS & RATIONALE

### Why Next.js 14 (App Router) + Vercel
- Free hosting tier covers launch traffic
- Server-side rendering for SEO (every NFT page indexable)
- API routes for OpenSea proxy (no exposed keys)
- Automatic HTTPS
- PWA support via Serwist

### Why Supabase (not Firebase)
- Free tier: 500MB database, 1GB storage, 50K monthly active users
- PostgreSQL = real SQL (complex marketplace queries)
- Row Level Security for member-only data
- Realtime for marketplace bid updates
- Storage for marriage photos

### Why thirdweb Connect v5 (not RainbowKit/Web3Modal)
- Embedded email wallets (no MetaMask required for newcomers)
- 500+ wallet support
- Free tier covers launch volume
- Polygon native support

### Why Polygon (not Ethereum/Base/Solana)
- Gas fees < $0.01 (critical for $0.15–$2.50 NFTs)
- ERC-721 standard (OpenSea native support)
- Established ecosystem
- thirdweb full support

---

## TRACKING FORMAT

Each day when you ask "What's today's work?", I will provide:

1. **Day number and date**
2. **Today's tasks** across all active streams, with exact steps
3. **Acceptance criteria** — what "done" looks like
4. **Files to produce** — exact filenames and locations
5. **Progress update** — what's complete overall

At the end of each day (when you report completion), I will:
1. Mark completed tasks
2. Note any blockers or changes
3. Adjust the plan if needed

---

*"Every day is one universe closer. Every commit is one question answered."*
