# TURBOMINDZ — CLAUDE CODE SETUP & APP BUILD GUIDE
## How to Set Up Your Windows Machine, Project Files, and Reference Documents to Build the Entire App Using Claude Code

**Created:** April 20, 2026
**Owner:** Hugo
**Purpose:** This is the single document you follow to go from a fresh Windows machine to a fully scaffolded Turbomindz app, with Claude Code as your coding agent.

---

## GOAL ASSESSMENT

### The Goal of This Document
Provide Hugo — a solo founder on Windows using Claude Desktop — with every instruction needed to install Claude Code, structure the project folder so Claude Code can read all Turbomindz reference materials, create the CLAUDE.md configuration file that gives Claude Code full project context, and then use Claude Code as the primary coding agent to execute the 30-day app development timeline. The document must be self-contained: Hugo should never need to Google "how do I..." while following it.

---

## SHORTCOMING ANALYSIS — 11 Shortcomings Identified and Addressed

**1. No distinction between Claude Desktop and Claude Code.** Previous documents said "use Claude Desktop to build the app" without explaining that Claude Desktop (the chat app Hugo is using now) and Claude Code (the CLI coding agent) are different tools with different capabilities. Claude Code is the tool that writes, edits, and runs code. Claude Desktop is for planning and conversation. This guide makes the distinction explicit and explains when to use each.

**2. No CLAUDE.md file was ever created.** The entire 30-day plan assumes Claude Code will understand the Turbomindz project — its tech stack, design system, folder structure, naming conventions, and architecture. Without a CLAUDE.md file, Claude Code starts every session blind. This guide provides the exact CLAUDE.md content, tuned for this project.

**3. Reference files were never organized for Claude Code consumption.** The project has a Master Bible, App Blueprint, Development Guide, Monetization Plan, Pinterest Strategy, and Production Pipeline — but they were scattered across a Google Drive folder structure. Claude Code needs them inside the repo, in a known location, so it can read them on demand. This guide defines where every reference file goes.

**4. No .claude/rules/ files for scoped instructions.** Claude Code supports path-specific rules (e.g., "when editing files in /src/components/, follow this pattern"). Previous plans didn't use this. This guide creates rules for components, pages, API routes, and Web3 integration.

**5. No .env.local template.** The Day 1 tasks collect 6+ API credentials but never explain how to wire them into a Next.js project. This guide provides the exact .env.local template and shows how Claude Code references it.

**6. No folder structure defined before coding starts.** The Development Guide said "run npx create-next-app" but never defined what the folder tree should look like. Claude Code works best when it knows the target structure upfront. This guide defines every folder and its purpose.

**7. No permission mode strategy.** Claude Code has multiple permission modes (plan, default, auto, bypassPermissions). A newcomer won't know which to use when. This guide recommends starting in plan mode for architecture decisions and switching to auto for implementation sprints.

**8. No git workflow defined for Claude Code.** Claude Code creates commits, but without guidance it will commit randomly. This guide defines the branch strategy, commit message format, and when to commit.

**9. No prompting strategy for Claude Code.** The 30-day plan says "Code: Homepage — Hero, Universe Preview, How It Works sections" but doesn't show what to actually type into Claude Code. This guide provides the exact prompts for each development phase.

**10. No session management strategy.** Claude Code sessions have context limits. Long sessions lose early context. This guide defines when to start fresh sessions vs. continue existing ones, and how to use /resume.

**11. No verification workflow.** Previous plans had acceptance criteria but no instructions for how to verify code works. This guide integrates `npm run dev`, `npm run build`, and browser testing into the Claude Code workflow.

---

## PART 1: INSTALL CLAUDE CODE ON WINDOWS

### Prerequisites
You need Git installed first. If you completed Day 1 Task A1, you already have it.

If not:
1. Download Git for Windows: https://git-scm.com/download/win
2. Run the installer. Accept all defaults.
3. Verify: Open PowerShell, type `git --version`. You should see a version number.

### Install Claude Code

Open **PowerShell** (not Command Prompt) and run:

```powershell
irm https://claude.ai/install.ps1 | iex
```

This downloads and installs Claude Code. It auto-updates in the background.

**Alternative** (if the above doesn't work):

```powershell
winget install Anthropic.ClaudeCode
```

Note: The winget method does NOT auto-update. You'll need to run `winget upgrade Anthropic.ClaudeCode` periodically.

### Verify Installation

```powershell
claude --version
```

You should see a version number. Claude Code installs its own runtime — you do NOT need Node.js installed for Claude Code itself. (You still need Node.js for running your Next.js app.)

### Authenticate

```powershell
claude
```

The first time you run it, it will open a browser window to authenticate with your Anthropic account. Sign in, authorize, and return to the terminal.

---

## PART 2: PROJECT FOLDER STRUCTURE

### Where to Put Everything

Create this folder structure on your Windows machine. If you already cloned the GitHub repo from Day 1 Task A2, start inside that folder.

```
C:\Users\Hugo\Projects\turbomindz\          ← Git repo root
│
├── .claude\                                  ← Claude Code configuration
│   ├── CLAUDE.md                            ← Main project instructions (shared via git)
│   ├── settings.json                        ← Shared project settings
│   ├── settings.local.json                  ← Your personal settings (gitignored)
│   └── rules\                               ← Path-scoped rules
│       ├── components.md                    ← Rules for /src/components/
│       ├── pages.md                         ← Rules for /src/app/ (App Router pages)
│       ├── api.md                           ← Rules for /src/app/api/ (API routes)
│       └── web3.md                          ← Rules for Web3 integration files
│
├── docs\                                     ← Project reference documents
│   ├── MASTER_BIBLE.md                      ← Full project bible (copy from Google Drive)
│   ├── APP_BLUEPRINT.md                     ← App UX and page specs
│   ├── DESIGN_SYSTEM.md                     ← Colors, typography, spacing, components
│   ├── MONETIZATION.md                      ← Revenue streams and platform integration
│   ├── NFT_STRUCTURE.md                     ← NFT metadata format, episode structure
│   ├── PINTEREST_STRATEGY.md                ← Pinterest boards and pin strategy
│   └── MARRIAGE_SYSTEM.md                   ← Marriage mechanics and provenance
│
├── src\                                      ← All application source code
│   ├── app\                                  ← Next.js App Router pages
│   │   ├── layout.tsx                       ← Root layout (fonts, providers, metadata)
│   │   ├── page.tsx                         ← Homepage
│   │   ├── gallery\
│   │   │   └── page.tsx                     ← Gallery (Explore + Grid modes)
│   │   ├── scene\
│   │   │   └── [id]\
│   │   │       └── page.tsx                 ← Scene Detail (dynamic route)
│   │   ├── episodes\
│   │   │   ├── page.tsx                     ← Episodes list
│   │   │   └── [slug]\
│   │   │       └── page.tsx                 ← Episode Detail
│   │   ├── shop\
│   │   │   └── page.tsx                     ← Digital products shop
│   │   ├── marriage\
│   │   │   └── page.tsx                     ← Marriage explainer + submission
│   │   ├── marketplace\
│   │   │   └── page.tsx                     ← Secondary market for married NFTs
│   │   ├── universe\
│   │   │   └── page.tsx                     ← Universe Explorer (constellation map)
│   │   ├── profile\
│   │   │   └── page.tsx                     ← User profile (3 states)
│   │   ├── blog\
│   │   │   └── page.tsx                     ← Blog (Medium sync or native)
│   │   ├── auth\
│   │   │   ├── signin\
│   │   │   │   └── page.tsx                 ← Email-first sign in
│   │   │   └── callback\
│   │   │       └── page.tsx                 ← OAuth/wallet callback
│   │   └── api\                             ← API routes (server-side)
│   │       ├── opensea\
│   │       │   └── route.ts                 ← OpenSea proxy (hides API key)
│   │       ├── metadata\
│   │       │   └── [id]\
│   │       │       └── route.ts             ← NFT metadata endpoint
│   │       ├── marriage\
│   │       │   └── route.ts                 ← Marriage submission handler
│   │       └── webhook\
│   │           └── route.ts                 ← Patreon/payment webhooks
│   │
│   ├── components\                           ← Reusable UI components
│   │   ├── ui\                              ← Atomic: Button, Input, Modal, Card, Badge
│   │   ├── layout\                          ← Header, Footer, BottomNav, MegaMenu
│   │   ├── gallery\                         ← NFTCard, ExploreMode, GridMode, Filters
│   │   ├── scene\                           ← SceneImage, MetadataPanel, EasterEggs, RelatedScenes
│   │   ├── purchase\                        ← PurchaseModal, DualPath, PriceDisplay
│   │   ├── marriage\                        ← MarriageForm, CardFlip, ProvenanceMuseum
│   │   ├── marketplace\                     ← ListingCard, BidSystem, TrustScoreboard
│   │   ├── web3\                            ← WalletButton, ConnectModal, NetworkBadge
│   │   └── shared\                          ← Loading, Error, Empty states, SEOHead
│   │
│   ├── lib\                                  ← Utility libraries
│   │   ├── supabase\
│   │   │   ├── client.ts                    ← Browser Supabase client
│   │   │   ├── server.ts                    ← Server Supabase client
│   │   │   └── types.ts                     ← Generated database types
│   │   ├── web3\
│   │   │   ├── thirdweb.ts                  ← thirdweb client config
│   │   │   ├── contracts.ts                 ← Contract addresses and ABIs
│   │   │   └── opensea.ts                   ← OpenSea SDK wrapper
│   │   ├── utils\
│   │   │   ├── format.ts                    ← Price formatting, date formatting
│   │   │   ├── constants.ts                 ← App-wide constants
│   │   │   └── seo.ts                       ← Meta tag generators
│   │   └── hooks\                           ← Custom React hooks
│   │       ├── useNFT.ts                    ← Fetch NFT data
│   │       ├── useAuth.ts                   ← Auth state management
│   │       ├── useWallet.ts                 ← Wallet connection state
│   │       └── usePurchase.ts               ← Purchase flow logic
│   │
│   ├── store\                                ← Zustand global state
│   │   ├── auth.ts                          ← Auth store
│   │   ├── cart.ts                          ← Cart/purchase store
│   │   └── ui.ts                            ← UI state (modals, sidebar, theme)
│   │
│   └── styles\                               ← Global styles
│       └── globals.css                       ← Tailwind directives + custom CSS
│
├── public\                                    ← Static assets
│   ├── fonts\                                ← Self-hosted fonts
│   ├── images\                               ← Logos, icons, placeholders
│   ├── manifest.json                         ← PWA manifest
│   └── sw.js                                 ← Service worker (Serwist)
│
├── supabase\                                  ← Database migrations
│   └── migrations\
│       └── 001_initial_schema.sql
│
├── .env.local                                 ← Environment variables (NEVER commit)
├── .gitignore
├── CLAUDE.local.md                            ← Personal Claude Code notes (gitignored)
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Create the Folder Structure

Open PowerShell in your project root and run:

```powershell
# Create .claude config
mkdir -p .claude/rules

# Create docs folder
mkdir docs

# Create src structure
mkdir -p src/app/gallery
mkdir -p src/app/scene/[id]
mkdir -p src/app/episodes/[slug]
mkdir -p src/app/shop
mkdir -p src/app/marriage
mkdir -p src/app/marketplace
mkdir -p src/app/universe
mkdir -p src/app/profile
mkdir -p src/app/blog
mkdir -p src/app/auth/signin
mkdir -p src/app/auth/callback
mkdir -p src/app/api/opensea
mkdir -p src/app/api/metadata/[id]
mkdir -p src/app/api/marriage
mkdir -p src/app/api/webhook

# Create component folders
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/gallery
mkdir -p src/components/scene
mkdir -p src/components/purchase
mkdir -p src/components/marriage
mkdir -p src/components/marketplace
mkdir -p src/components/web3
mkdir -p src/components/shared

# Create lib folders
mkdir -p src/lib/supabase
mkdir -p src/lib/web3
mkdir -p src/lib/utils
mkdir -p src/lib/hooks

# Create store, styles, public
mkdir -p src/store
mkdir -p src/styles
mkdir -p public/fonts
mkdir -p public/images

# Create supabase migrations
mkdir -p supabase/migrations
```

---

## PART 3: REFERENCE FILES — WHAT TO COPY AND WHERE

Claude Code reads files inside your project repo. For it to understand Turbomindz, it needs the project reference documents in the `docs/` folder.

### Files to Copy from Your Google Drive (TMDZ/TURBOMINDZ_V2/)

| Source File (Google Drive) | Destination (in repo) | What Claude Code Uses It For |
|---|---|---|
| `01_OVERVIEW/MASTER_BIBLE_V2.md` | `docs/MASTER_BIBLE.md` | Characters, universes, themes, lore, identity, design system |
| `04_APP_WEBSITE/APP_WEBSITE_BLUEPRINT.md` | `docs/APP_BLUEPRINT.md` | Page specs, UX flows, information architecture, component library |
| `04_APP_WEBSITE/DEVELOPMENT_GUIDE.md` | `docs/DEVELOPMENT_GUIDE.md` | Supabase schema (6 tables), deployment config, daily workflow |
| `06_MONETIZATION/MONETIZATION_PLAN.md` | `docs/MONETIZATION.md` | Revenue streams, Patreon tiers, pricing, platform integration |
| `08_ASSETS/PINTEREST_STRATEGY.md` | `docs/PINTEREST_STRATEGY.md` | Pinterest boards, pin strategy (not used by Claude Code for app dev, but keeps all docs together) |

### Files to Create (New)

These don't exist yet. You'll create them as part of this setup:

| File | Purpose |
|---|---|
| `docs/DESIGN_SYSTEM.md` | Extracted design tokens for Claude Code to reference when coding components |
| `docs/NFT_STRUCTURE.md` | NFT metadata format, episode-to-NFT mapping, pricing tiers |
| `docs/MARRIAGE_SYSTEM.md` | Marriage mechanics, on-chain flow, UI requirements |

I'll provide the contents for all three below.

### docs/DESIGN_SYSTEM.md

```markdown
# Turbomindz Design System

## Colors
- Primary (Deep Teal): #004D5C
- Accent (Gold): #C9A227
- Background (Warm White): #FFF8F0
- Dark Background: #003844
- Light Teal: #00566A
- Border Teal: #1A6B7D
- Error: #DC2626
- Success: #16A34A
- Warning: #D97706

## Dark Mode Only
The app uses dark mode exclusively. Background is #003844, text is #FFF8F0.

## Typography
- Headings: Playfair Display (serif) — weights 400, 700
- Body: Inter (sans-serif) — weights 400, 500, 600
- Data/Prices: JetBrains Mono (monospace) — weight 400

## Font Sizes (Tailwind)
- Display: text-4xl (mobile) / text-6xl (desktop)
- H1: text-3xl / text-5xl
- H2: text-2xl / text-4xl
- H3: text-xl / text-2xl
- Body: text-base (16px)
- Small: text-sm (14px)
- Caption: text-xs (12px)

## Spacing
Use Tailwind's default scale. Key values: p-4 (card padding), gap-6 (grid gap), py-16 (section padding), py-24 (section padding desktop).

## Border Radius
- Cards: rounded-xl (12px)
- Buttons: rounded-lg (8px)
- Badges: rounded-full
- Images: rounded-2xl (16px)

## Elevation (Box Shadows)
- Level 0: No shadow (flat elements)
- Level 1: shadow-md (cards at rest)
- Level 2: shadow-lg (cards on hover)
- Level 3: shadow-xl (modals, dropdowns)

## Component Patterns
- Buttons: bg-[#C9A227] text-[#003844] font-semibold rounded-lg px-6 py-3 hover:bg-[#D4AF37] transition-colors
- Cards: bg-[#004D5C] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow
- Input fields: bg-[#003844] border border-[#1A6B7D] rounded-lg px-4 py-3 text-[#FFF8F0] placeholder:text-[#FFF8F0]/50 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]

## Animation
Use Framer Motion. Duration: 0.2s for micro-interactions, 0.4s for page transitions, 0.6s for hero animations. Easing: easeOut for entrances, easeIn for exits.

## Responsive Breakpoints
Mobile-first. Use Tailwind defaults: sm (640px), md (768px), lg (1024px), xl (1280px).
```

### docs/NFT_STRUCTURE.md

```markdown
# Turbomindz NFT Structure

## Collection
- Total: 1,111 NFTs
- Blockchain: Polygon (Chain ID 137)
- Standard: ERC-721
- Currency: MATIC

## Episodes
- 39 episodes total
- ~28 NFTs per episode (28 × 39 = 1,092 + 19 special scenes = 1,111)
- Each episode = 1 universe = 1 philosophical tradition

## Seasons
- Season 1 (Departure): Episodes 1-13
- Season 2 (Initiation): Episodes 14-26
- Season 3 (Return): Episodes 27-39

## Characters (4)
- Cosmo: The astronaut-philosopher (protagonist)
- Stella: The architect of worlds
- Luna: The keeper of questions
- The Architect: The mysterious guide

## Pricing Tiers
- Genesis (Episode openers): 26 MATIC (~$13)
- Signature (Character intros): 8 MATIC (~$4)
- Narrative (Story scenes): 3 MATIC (~$1.50)
- Common (Standard scenes): 0.5 MATIC (~$0.25)

## NFT ID Format
TM-001 through TM-1111. Zero-padded to 3 or 4 digits.

## Metadata Schema (ERC-721 compliant)
{
  "name": "TM-XXX: Scene Title",
  "description": "Scene description + philosopher quote + episode context",
  "image": "ipfs://[CID]",
  "external_url": "https://turbomindz.com/scene/TM-XXX",
  "attributes": [
    { "trait_type": "Episode", "value": "N — Episode Name" },
    { "trait_type": "Universe", "value": "UN — Universe Name" },
    { "trait_type": "Theme", "value": "Theme Name" },
    { "trait_type": "Season", "value": "N — Season Name" },
    { "trait_type": "Character", "value": "Character Name" },
    { "trait_type": "Scene Type", "value": "Episode Opener | Character Intro | Narrative | Standard" },
    { "trait_type": "Art Tradition", "value": "Art tradition name" },
    { "trait_type": "Philosopher", "value": "Philosopher Name" },
    { "trait_type": "Core Question", "value": "The philosophical question" },
    { "trait_type": "Pricing Tier", "value": "Genesis | Signature | Narrative | Common" },
    { "trait_type": "Marriage Status", "value": "Unmarried | Married | Divorced" },
    { "trait_type": "Easter Eggs", "value": "N" }
  ],
  "easter_eggs": ["description1", "description2", ...],
  "price_matic": N,
  "price_tier": "Tier Name"
}
```

### docs/MARRIAGE_SYSTEM.md

```markdown
# Turbomindz Marriage System

## Concept
An NFT owner can permanently bind their digital NFT to a physical artwork (print, canvas, etc.) through an on-chain "marriage" ceremony. Once married, the digital and physical are linked forever in the metadata.

## Flow
1. Owner purchases physical print of their NFT
2. Owner goes to turbomindz.com/marriage
3. Fills out multi-step form: NFT ID, wallet verification, photo of physical piece, location, witness name
4. Hugo (admin) reviews and approves
5. On-chain metadata updated: Marriage Status → "Married"
6. Marriage certificate generated (PDF)
7. Entry added to Provenance Museum (public page)

## Re-Marriage (Divorce)
- Community-governed: requires 3 Elder Council votes
- Fee: 10 MATIC
- Original marriage is never deleted — full provenance chain visible

## Witnessed Economy
- All marriages are public
- All secondary market trades are public
- Trust Scoreboard ranks collectors by: marriages performed, trade history, community standing

## UI Components Needed
- MarriageForm: Multi-step wizard (4 steps)
- CardFlip: Shows physical/digital side by side with flip animation
- ProvenanceMuseum: Timeline of marriages and trades
- TrustScoreboard: Leaderboard component
- MarriageCertificate: PDF generation (server-side)
```

---

## PART 4: THE CLAUDE.md FILE

This is the most important file. Claude Code reads it at the start of every session. It tells Claude Code everything about your project.

### Create: `.claude/CLAUDE.md`

```markdown
# Turbomindz — Project Instructions for Claude Code

## Project Overview
Turbomindz is a philosophical art NFT collection (1,111 scenes on Polygon), 39-episode animated series, and community platform, shipped as a PWA at turbomindz.com. Built by a solo founder.

## Tech Stack
- Framework: Next.js 14 (App Router) + TypeScript (strict mode)
- Styling: Tailwind CSS + Framer Motion for animations
- UI Primitives: Radix UI (accessible, unstyled)
- State: Zustand (global) + TanStack Query (server state)
- Auth: Supabase Auth (email-first, wallet-optional)
- Database: Supabase PostgreSQL with Row Level Security
- Storage: Supabase Storage (marriage photos) + Pinata (IPFS for NFT images)
- Web3: thirdweb Connect v5 (wallet connection) + opensea-js (Seaport for purchases)
- Blockchain: Polygon (Chain ID 137, MATIC currency, ERC-721)
- PWA: Serwist (service worker, offline gallery, installable)
- Hosting: Vercel (auto-deploy from main branch)
- Analytics: Plausible (privacy-first)

## Design System
- Dark mode only. Background: #003844, Text: #FFF8F0
- Primary: #004D5C (Deep Teal), Accent: #C9A227 (Gold)
- Headings: Playfair Display (serif), Body: Inter (sans-serif), Data: JetBrains Mono (mono)
- See docs/DESIGN_SYSTEM.md for full tokens

## Key Architecture Decisions
- Mobile-first responsive design
- 4-tier access: Public > Registered (email) > Collector (owns NFT) > Elder (Patreon Tier 5)
- Email-first accounts: users create account with email, connect wallet later (optional)
- Server-side rendering for SEO: every NFT scene has its own indexable page
- API routes proxy OpenSea calls to hide API keys
- All prices displayed in MATIC with USD equivalent

## File Organization
- Pages: src/app/[route]/page.tsx (App Router)
- Components: src/components/[domain]/ComponentName.tsx
- Hooks: src/lib/hooks/useHookName.ts
- Utilities: src/lib/utils/name.ts
- Stores: src/store/name.ts
- Types: colocated with their domain, or src/lib/supabase/types.ts for DB types

## Naming Conventions
- Components: PascalCase (NFTCard.tsx, PurchaseModal.tsx)
- Hooks: camelCase with "use" prefix (useNFT.ts, useAuth.ts)
- Utilities: camelCase (formatPrice.ts, generateMetaTags.ts)
- CSS: Tailwind utility classes only, no CSS modules
- Routes: kebab-case folders (scene-detail/ not sceneDetail/)

## Code Style
- Use 'use client' directive only on components that need browser APIs or hooks
- Default to Server Components (no directive)
- Always define TypeScript interfaces for props
- Export components as named exports, not default (except page.tsx which must be default)
- Use async/await, never .then() chains
- Error boundaries on every page
- Loading states via loading.tsx files in App Router

## Commands
- Dev server: npm run dev (port 3000)
- Build: npm run build
- Lint: npm run lint
- Type check: npx tsc --noEmit
- Test: npm test (Vitest)

## Reference Documents
Read these files for full context on any domain:
- @docs/MASTER_BIBLE.md — Characters, universes, lore, identity
- @docs/APP_BLUEPRINT.md — Page specs, UX flows, component library
- @docs/DESIGN_SYSTEM.md — Colors, typography, spacing, component patterns
- @docs/MONETIZATION.md — Revenue streams, Patreon tiers, pricing
- @docs/NFT_STRUCTURE.md — NFT metadata, episodes, pricing tiers
- @docs/MARRIAGE_SYSTEM.md — Marriage mechanics, provenance, UI requirements

## Git Workflow
- Main branch: main (auto-deploys to Vercel)
- Feature branches: feature/[page-name] or feature/[feature-name]
- Commit messages: "feat: Homepage hero section" / "fix: Gallery filter bug" / "chore: Update deps"
- Commit after each completed component or page section, not after every line change
- Never commit .env.local, credentials, or API keys

## Environment Variables
Required in .env.local (see .env.example for template):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_THIRDWEB_CLIENT_ID
- OPENSEA_API_KEY
- PINATA_API_KEY
- PINATA_SECRET_KEY
```

---

## PART 5: SCOPED RULES

These files give Claude Code context-specific instructions when it's working in certain directories.

### Create: `.claude/rules/components.md`

```markdown
---
paths:
  - "src/components/**"
---

# Component Rules

- Every component gets its own file: ComponentName.tsx
- Define a Props interface: interface ComponentNameProps { ... }
- Use named export: export function ComponentName({ ... }: ComponentNameProps) { ... }
- Mark as 'use client' only if using hooks, event handlers, or browser APIs
- Use Framer Motion for animations: import { motion } from 'framer-motion'
- Use Radix UI for interactive primitives (Dialog, DropdownMenu, Tooltip, etc.)
- All interactive elements must have aria labels
- All images must have alt text
- Use the design tokens from docs/DESIGN_SYSTEM.md — never hardcode colors
- Mobile-first: style for mobile, add responsive modifiers for larger screens
```

### Create: `.claude/rules/pages.md`

```markdown
---
paths:
  - "src/app/**"
---

# Page Rules

- page.tsx files must use default export
- Pages are Server Components by default — no 'use client'
- Use generateMetadata() for SEO on every page
- Create loading.tsx for loading states
- Create error.tsx for error boundaries
- Use generateStaticParams() for dynamic routes where possible (NFT scenes, episodes)
- Fetch data in the page component using server-side Supabase client
- Pass data to client components as props
```

### Create: `.claude/rules/api.md`

```markdown
---
paths:
  - "src/app/api/**"
---

# API Route Rules

- Use Next.js Route Handlers (export async function GET/POST/etc.)
- Always validate request body with Zod
- Use server-side Supabase client (never expose service role key)
- Proxy OpenSea API calls to hide the API key from the browser
- Return NextResponse.json() with appropriate status codes
- Log errors server-side, return generic error messages to client
- Rate limit sensitive endpoints (marriage submission, purchase verification)
```

### Create: `.claude/rules/web3.md`

```markdown
---
paths:
  - "src/lib/web3/**"
  - "src/components/web3/**"
---

# Web3 Rules

- Blockchain: Polygon (Chain ID 137)
- Wallet SDK: thirdweb Connect v5 — use createThirdwebClient() with NEXT_PUBLIC_THIRDWEB_CLIENT_ID
- Support wallets: MetaMask, WalletConnect, Coinbase Wallet, thirdweb embedded email wallet
- NFT purchases: Seaport protocol via opensea-js for in-app, OpenSea redirect as fallback
- Always show MATIC price + USD equivalent
- Never assume user has a wallet — email-first flow, wallet optional
- Handle network switching: prompt user to switch to Polygon if on wrong network
- All Web3 calls must have try/catch with user-friendly error messages
- NFT ownership verification: check on-chain, cache in Supabase for performance
```

---

## PART 6: ENVIRONMENT VARIABLES

### Create: `.env.local`

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# thirdweb
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your-client-id

# OpenSea
OPENSEA_API_KEY=your-opensea-key

# Pinata (IPFS)
PINATA_API_KEY=your-pinata-key
PINATA_SECRET_KEY=your-pinata-secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CHAIN_ID=137
NEXT_PUBLIC_POLYGON_RPC=https://polygon-rpc.com
```

### Create: `.env.example` (committed to git, no real values)

Same file but with placeholder values like `your-project-url-here`. This goes in git so you remember which env vars are needed.

### Add to `.gitignore`

Make sure these lines exist in your `.gitignore`:

```
.env.local
.env*.local
CLAUDE.local.md
.claude/settings.local.json
```

---

## PART 7: HOW TO USE CLAUDE CODE — DAY BY DAY

### Starting a Session

Open PowerShell, navigate to your project folder:

```powershell
cd C:\Users\Hugo\Projects\turbomindz
claude
```

Claude Code automatically reads `.claude/CLAUDE.md` and all scoped rules. It knows your project.

### Key Commands

| Command | What It Does |
|---|---|
| `claude` | Start new interactive session |
| `claude -c` | Continue your most recent session |
| `claude -r "day8-homepage"` | Resume a named session |
| `/init` | Auto-generate CLAUDE.md (skip this — you already have one) |
| `/memory` | View and edit CLAUDE.md and memory files |
| `/config` | Open settings UI |
| `/model opus` | Switch to Opus model (higher quality, slower) |
| `/model sonnet` | Switch to Sonnet model (faster, good for routine code) |
| `Ctrl+C` | Cancel current operation |
| `Ctrl+D` or `/exit` | End session |

### Permission Modes

Use different modes for different phases:

```powershell
# Planning phase — Claude suggests but doesn't edit files
claude --permission-mode plan

# Building phase — Claude writes code, asks before running commands
claude --permission-mode default

# Sprint mode — Claude writes and runs without asking (use when you trust the pattern)
claude --permission-mode auto
```

**Recommendation:** Start every new page/feature in `plan` mode. Once you approve the approach, switch to `default` or `auto` for implementation.

### Session Management Strategy

Claude Code sessions have context limits. Here's how to manage them:

| Situation | Action |
|---|---|
| Starting a new page (e.g., Gallery) | New session: `claude` → name it with `/name day12-gallery` |
| Continuing work on the same page | Continue: `claude -c` |
| Picking up after a break | Resume: `claude -r "day12-gallery"` |
| Context getting long (Claude starts forgetting early instructions) | Start fresh session, reference the completed files |
| Switching between features | Start new session for each distinct feature |

---

## PART 8: EXACT PROMPTS FOR EACH DEVELOPMENT PHASE

These are the exact prompts to type into Claude Code for each phase of the 30-day plan. Copy-paste them.

### Day 8 — Project Scaffolding

```
Read docs/DESIGN_SYSTEM.md and docs/APP_BLUEPRINT.md. Then set up the Next.js project:

1. Run npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
2. Install dependencies: npm install framer-motion @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip zustand @tanstack/react-query @supabase/supabase-js thirdweb opensea-js serwist zod
3. Configure tailwind.config.ts with our design system colors, fonts, and extend theme
4. Create src/styles/globals.css with Tailwind directives and import Playfair Display + Inter + JetBrains Mono from Google Fonts
5. Create src/lib/supabase/client.ts and src/lib/supabase/server.ts with proper Supabase client initialization
6. Create src/lib/web3/thirdweb.ts with thirdweb client initialization
7. Create the folder structure in src/components/ with index.ts barrel files

Follow the tech stack and naming conventions in CLAUDE.md exactly.
```

### Day 9 — Layout Components

```
Read docs/DESIGN_SYSTEM.md. Build the root layout and navigation components:

1. src/app/layout.tsx — Root layout with: dark mode body (#003844), font imports (Playfair Display headings, Inter body, JetBrains Mono data), metadata defaults, ThirdwebProvider + QueryClientProvider + Zustand wrapper
2. src/components/layout/Header.tsx — Mobile: logo left, hamburger right. Desktop: logo left, nav links center, wallet button right. Sticky, glass-morphism background (bg-[#003844]/90 backdrop-blur)
3. src/components/layout/Footer.tsx — 4-column grid: About, Explore, Community, Legal. Social icons row. Copyright.
4. src/components/layout/BottomNav.tsx — Mobile only (hidden lg:hidden), fixed bottom, 5 icons: Home, Gallery, Episodes, Shop, Profile. Active state uses gold accent.
5. src/components/layout/MegaMenu.tsx — Desktop dropdown for Gallery, Episodes, Universe links with preview images

All components use the design tokens from docs/DESIGN_SYSTEM.md. Mobile-first. Use Framer Motion for menu animations.
```

### Day 10-11 — Homepage

```
Read docs/APP_BLUEPRINT.md (Homepage section) and docs/DESIGN_SYSTEM.md. Build the homepage in src/app/page.tsx with these sections:

1. Hero — Full-viewport, background image (placeholder for now), animated title "Four characters. 39 universes. One question at a time.", CTA button "Enter the Collection" (gold), subtle scroll indicator
2. Universe Preview — Horizontal scroll of 3-4 universe cards with parallax tilt effect, each showing episode art + universe name + philosopher name
3. How It Works — 4-step visual: Explore → Collect → Marry → Trade, with icons and short descriptions
4. Featured Scenes — Grid of 4 NFT cards (latest/featured), using the NFTCard component
5. Episodes Teaser — Horizontal timeline showing Season 1-3 with episode dots
6. Marriage Spotlight — Split layout: left shows CardFlip animation concept, right explains the marriage system
7. Shop Preview — 3 product cards linking to Gumroad/Ko-fi products
8. Newsletter CTA — Email capture with "Join the Odyssey" heading, Buttondown integration

Each section gets its own component in src/components/home/. Use intersection observer for scroll-triggered animations via Framer Motion.
```

### Day 12 — Gallery Page

```
Read docs/APP_BLUEPRINT.md (Gallery section) and docs/NFT_STRUCTURE.md. Build the gallery:

1. src/app/gallery/page.tsx — Server component that fetches NFT data from Supabase
2. Two modes toggled by user:
   - Explore Mode: Immersive full-screen view, one scene at a time, swipe/arrow navigation, ambient glow effect behind image
   - Grid Mode: Responsive grid (2 cols mobile, 3 tablet, 4 desktop), filterable by episode/season/character/tier/marriage status
3. src/components/gallery/NFTCard.tsx — Card showing: image (4:5 ratio, rounded-2xl), scene title, episode name, price in MATIC, pricing tier badge (color-coded), marriage status indicator
4. src/components/gallery/Filters.tsx — Slide-out filter panel with checkboxes for each filter category
5. src/components/gallery/ExploreMode.tsx — Fullscreen viewer with gesture support
6. src/components/gallery/GridMode.tsx — Responsive grid with infinite scroll (TanStack Query)

Use TanStack Query for data fetching with infinite scroll pagination. 20 items per page.
```

### Day 13 — Scene Detail Page

```
Read docs/APP_BLUEPRINT.md (Scene Detail section), docs/NFT_STRUCTURE.md, and docs/MARRIAGE_SYSTEM.md. Build the scene detail page:

1. src/app/scene/[id]/page.tsx — Dynamic route, server-rendered with generateMetadata for SEO (title, description, og:image from NFT data)
2. Full-width hero image with ambient glow effect (CSS box-shadow matching dominant color)
3. Metadata panel: Episode, Universe, Season, Character, Art Tradition, Philosopher, Core Question — all as styled badges/chips
4. Philosopher quote block — styled blockquote with attribution
5. Easter eggs section — Expandable accordion, locked behind ownership (show count but blur content for non-owners)
6. Related Scenes — 4-card grid of scenes from same episode
7. Purchase CTA — "Collect This Scene" button → opens PurchaseModal (build that on Day 17)
8. Provenance section — If married: show physical/digital pair, marriage date, witness. If unmarried: show "Available for Marriage" prompt.

Use generateStaticParams to pre-render the first 28 scenes (Episode 1). Use Supabase for NFT data. Each page must have unique meta tags for SEO.
```

### Day 15-16 — Auth + Wallet

```
Read docs/APP_BLUEPRINT.md (Account section) and the web3 rules in .claude/rules/web3.md. Build the authentication system:

1. src/app/auth/signin/page.tsx — Email-first sign in. Two paths side by side:
   Left: "Continue with Email" → Supabase Auth magic link
   Right: "Connect Wallet" → thirdweb Connect modal
   Bottom: "Why create an account?" benefits list

2. src/lib/supabase/auth.ts — Auth helpers: signInWithEmail, signInWithOAuth, signOut, getSession, onAuthStateChange

3. src/components/web3/WalletButton.tsx — Shows "Connect Wallet" when disconnected, shows truncated address + network badge when connected. Uses thirdweb ConnectButton with custom styling.

4. src/components/web3/ConnectModal.tsx — thirdweb Connect modal configured for: MetaMask, WalletConnect, Coinbase Wallet, Email Wallet. Polygon network. Custom theme matching our design system.

5. src/lib/hooks/useAuth.ts — Combined auth hook: checks Supabase session + wallet connection, returns user state with tier (public/registered/collector/elder)

6. src/app/auth/callback/page.tsx — Handles OAuth and magic link callbacks, syncs wallet address to Supabase profile if both exist

The key principle: email accounts work without any wallet. Wallet connection is always optional and adds capabilities (purchasing, ownership verification) without being required.
```

### Day 17 — Purchase Modal

```
Read docs/NFT_STRUCTURE.md and .claude/rules/web3.md. Build the purchase flow:

1. src/components/purchase/PurchaseModal.tsx — Radix Dialog with two paths:
   Path A (In-App): User has wallet connected → Seaport purchase via opensea-js → confirm on Polygon → show success with confetti
   Path B (OpenSea): User prefers OpenSea → redirect to opensea.io listing page in new tab

2. src/components/purchase/PriceDisplay.tsx — Shows MATIC price (large, JetBrains Mono) + USD equivalent (small, Inter). Fetches MATIC/USD rate.

3. src/lib/web3/opensea.ts — OpenSea SDK wrapper: listNFT, buyNFT, getListings, getOffers. All calls proxied through /api/opensea to hide API key.

4. src/app/api/opensea/route.ts — Proxy route that adds OPENSEA_API_KEY header to requests, validates input with Zod, rate-limits to 4 req/sec.

5. src/lib/hooks/usePurchase.ts — Purchase flow hook: handles wallet check, network check, balance check, transaction, confirmation, Supabase profile update (mark as collector).

Handle every error state: wrong network, insufficient balance, transaction rejected, transaction failed. Show user-friendly messages for each.
```

---

## PART 9: VERIFICATION WORKFLOW

After Claude Code writes code, verify it works before moving on.

### After Every Page/Component Session

```powershell
# 1. Type check — catches type errors
npx tsc --noEmit

# 2. Lint — catches code quality issues
npm run lint

# 3. Build — catches SSR/build errors
npm run build

# 4. Visual check — open browser
npm run dev
# Open http://localhost:3000 and check the page
```

### In Claude Code, Ask for Verification

After Claude finishes a page, type:

```
Run npx tsc --noEmit and npm run lint. Fix any errors. Then run npm run build and fix any build errors.
```

### Weekly Full Check (End of Each Week)

```
Run a full build and check: npx tsc --noEmit && npm run lint && npm run build. Report any errors. Then check Lighthouse scores on the homepage using: npx lighthouse http://localhost:3000 --output json --output-path lighthouse.json. Report the performance, accessibility, best practices, and SEO scores.
```

---

## PART 10: QUICK REFERENCE — DAILY WORKFLOW

Every day during the 30-day plan, follow this sequence:

1. **Open PowerShell** → `cd C:\Users\Hugo\Projects\turbomindz`
2. **Start Claude Code** → `claude` (new session) or `claude -c` (continue)
3. **Tell Claude Code what to build** → Use the prompts from Part 8, or adapt them for the day's Stream A tasks
4. **Review the plan** → Claude Code will propose an approach. Approve or adjust.
5. **Let it code** → Claude Code writes files, installs packages, runs commands
6. **Verify** → `npx tsc --noEmit && npm run lint && npm run build`
7. **Visual check** → `npm run dev` → check in browser
8. **Commit** → Ask Claude Code: `Commit the changes with message "feat: [what you built]"`
9. **Push** → `git push origin main` (or feature branch)
10. **End session** → `Ctrl+D` or `/exit`

---

## SUMMARY: FILES TO CREATE BEFORE YOUR FIRST CLAUDE CODE SESSION

| # | File | Action |
|---|---|---|
| 1 | `.claude/CLAUDE.md` | Create — copy from Part 4 above |
| 2 | `.claude/settings.json` | Create — empty `{}` for now |
| 3 | `.claude/rules/components.md` | Create — copy from Part 5 |
| 4 | `.claude/rules/pages.md` | Create — copy from Part 5 |
| 5 | `.claude/rules/api.md` | Create — copy from Part 5 |
| 6 | `.claude/rules/web3.md` | Create — copy from Part 5 |
| 7 | `docs/MASTER_BIBLE.md` | Copy from Google Drive |
| 8 | `docs/APP_BLUEPRINT.md` | Copy from Google Drive |
| 9 | `docs/DESIGN_SYSTEM.md` | Create — copy from Part 3 |
| 10 | `docs/MONETIZATION.md` | Copy from Google Drive |
| 11 | `docs/NFT_STRUCTURE.md` | Create — copy from Part 3 |
| 12 | `docs/MARRIAGE_SYSTEM.md` | Create — copy from Part 3 |
| 13 | `docs/PINTEREST_STRATEGY.md` | Copy from Google Drive |
| 14 | `.env.local` | Create — fill with your real credentials from Day 1 |
| 15 | `.env.example` | Create — same as .env.local but with placeholder values |
| 16 | `.gitignore` | Update — add .env.local, CLAUDE.local.md, .claude/settings.local.json |

Once all 16 files are in place, run `claude` in the project folder. Claude Code reads CLAUDE.md, understands the entire project, and is ready to build.

---

*"The architect draws the blueprints. The builder reads them. Claude Code is both — but only if the blueprints are on the table."*
