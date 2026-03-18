# TURBOMINDZ — Complete Development Plan & Reference

**Last Updated:** March 18, 2026  
**Track:** B (50% time, 3-4 days/week, 20-30 hours/week)  
**Timeline:** 12 weeks (Weeks 1-12)  
**Current Week:** Week 1 (MP1 - Foundation & Layout)

---

## Overview

This is the master reference document for the complete development of Turbomindz. It contains:
- ✅ All features broken down by mega-prompt and week
- ✅ Day-by-day build sequence
- ✅ Testing strategy (manual + automated)
- ✅ Build verification checklist
- ✅ Daily prompt template (see DAILY_PROMPT_TEMPLATE.md)

**Use this document with the daily prompt template to maintain continuity across sessions.**

---

## MEGA-PROMPT BREAKDOWN (12 Weeks)

### MP1: Foundation & Layout (Weeks 1-2) — IN PROGRESS
**Goal:** Project init, responsive layout shell, homepage design, mock data

#### Week 1 (Days 1-3) — Project Foundation
- [x] Next.js 14 app init with TypeScript
- [x] Tailwind CSS configured
- [x] Brand system defined (colors, fonts, shadows)
- [x] Root layout (Navbar + Footer structure)
- [x] globals.css with custom component classes
- [x] Mock data structure (themes, characters, scenes)
- [x] TypeScript types defined
- [ ] Git repo initialized with initial commit

**Features to Build:**
1. **Navbar** — Logo, nav links (Home, Gallery, Story, Marketplace, About), responsive hamburger
2. **Footer** — Social links, newsletter signup, copyright
3. **Layout shell** — Hero section with gradient, responsive grid
4. **Homepage sections** (in order):
   - Hero with call-to-action
   - Featured NFTs carousel
   - Philosophy themes grid
   - Character showcase
   - Story preview
   - Community hub teaser
   - Newsletter signup
5. **Responsive breakpoints** — Test at 375px, 768px, 1024px, 1440px

**Testing (Week 1):**
- Manual: Visual inspection at all breakpoints
- Build: `npm run build` must pass with 0 errors
- Mobile: Test Navbar collapse on 375px
- Accessibility: Tab navigation works, contrast meets WCAG AA

#### Week 2 (Days 4-5) — Gallery Page & Component Library
- [ ] Gallery page with NFT grid
- [ ] Basic filtering (by theme, character)
- [ ] Individual NFT detail page (modal or route)
- [ ] Reusable card components (NFTCard, ThemeCard, CharacterCard)
- [ ] Loading states and error boundaries
- [ ] Responsive image optimization

**Features to Build:**
1. **Gallery page layout** — Grid display with pagination
2. **Filter UI** — Theme selector, character filter, search bar
3. **NFT cards** — Image, title, theme badge, price (mock), "View" button
4. **NFT detail modal** — Full artwork, description, theme info, character story, mint date
5. **Sort options** — Recently added, price (low-high), popularity

**Testing (Week 2):**
- Manual: Filter/sort interactions, modal open/close
- Responsive: Grid layout at 375px (1 col), 768px (2 col), 1024px (3-4 col)
- Build: `npm run build` passes
- Performance: Images load quickly, no layout shift

---

### MP2: Core Pages & Advanced Components (Weeks 3-4)
**Goal:** Story page, marketplace shells, animations, theme detail views

#### Week 3 (Days 6-7) — Story Page & Content
- [ ] Story page layout (ASCII timeline or visual journey)
- [ ] Character detail sections
- [ ] Philosophy lesson preview blocks
- [ ] Framer Motion animations for scroll events
- [ ] Quote callout components

**Features to Build:**
1. **Story page** — Timeline of 4 characters' journey through universes
2. **Character profiles** — Full bios, voice clips (mock), gallery of scenes
3. **Theme deep dives** — Philosophy lesson, famous philosophers, key concepts
4. **Scroll animations** — Character entrance, text fade-in, parallax effects
5. **Quote cards** — Philosophical quotes with attribution

**Testing (Week 3):**
- Manual: Animation smoothness, text readability
- Scroll performance: No jank or stutter on mobile
- Build passes with 0 errors
- Mobile: Touch scroll animations perform well

#### Week 4 (Days 8-9) — Marketplace & Related Pages
- [ ] Marketplace page shell (preview of tradings/commissions)
- [ ] About page with project vision
- [ ] FAQ page (mock Q&A)
- [ ] Error pages (404, 500)
- [ ] Dynamic breadcrumbs

**Features to Build:**
1. **Marketplace page** — Coming soon CTA, feature preview cards
2. **About page** — Project vision, team single founder, philosophy mission, links
3. **FAQ** — Accordion component with common questions
4. **Error pages** — Branded 404/500 with navigation back
5. **Contact/Support form** — Email capture (Supabase later)

**Testing (Week 4):**
- Manual: All links work, no 404s
- Form validation: Required fields, email format
- Build passes with 0 errors
- SEO: Meta tags present on all pages

---

### MP3: Wallet Integration & Authentication (Weeks 5-6)
**Goal:** thirdweb Connect v5, user profiles, Zustand state, token gates

#### Week 5 (Days 10-11) — Wallet Connection
- [ ] thirdweb Connect v5 setup
- [ ] Wallet button component
- [ ] User profile page (mock data)
- [ ] Wallet address display & copy
- [ ] Zustand store for wallet state

**Features to Build:**
1. **thirdweb Connect button** — 170+ wallets supported
2. **User profile page** — Address, balance (mock), collected NFTs (mock), transaction history (mock)
3. **Profile navigation** — Breadcrumb or header link to profile
4. **Wallet state store** — Zustand for connected address, chain, balance
5. **Disconnect button** — In profile or Navbar

**Testing (Week 5):**
- Manual: Connect wallet (MetaMask, WalletConnect in testnet)
- State: Zustand store persists across page navigation
- Build passes with 0 errors
- Mobile: Wallet modal responsive on small screens

#### Week 6 (Days 12-13) — User Profiles & Token Gates
- [ ] User profile edit form (mock submission)
- [ ] Token gate display (message if not holding required NFT)
- [ ] Gallery token gate (preview censored if no NFT)
- [ ] Profile preferences (notifications, email)
- [ ] Persisted user state

**Features to Build:**
1. **Profile edit form** — Username, bio, avatar (mock upload), social links
2. **Token gate component** — "You need X NFT to access this" message
3. **Gated pages** — Marketplace preview, premium content
4. **Profile settings** — Email notifications, privacy level
5. **Local storage persistence** — Profile prefs survive refresh

**Testing (Week 6):**
- Manual: Edit form submission feedback
- Token gate: Verify message shows when token is missing
- Build passes with 0 errors
- State: Profile data persists across sessions

---

### MP4: Supabase Integration & Live Data (Weeks 7-8)
**Goal:** Replace mock data, user profiles in DB, marriage system, admin panel

#### Week 7 (Days 14-15) — Supabase Setup & User Data
- [ ] Supabase project created
- [ ] Database schema (users, profiles, nfts, themes, characters)
- [ ] RLS policies configured
- [ ] User profile CRUD operations
- [ ] Replace mock user data with Supabase queries

**Features to Build:**
1. **Supabase database schema** — users, profiles, nfts_owned, marriage_requests, verified_marriages
2. **Auth integration** — Sign up/login via thirdweb + Supabase
3. **Profile sync** — Create Supabase profile on first wallet connect
4. **User data fetch** — Pull collected NFTs, marriage status from DB
5. **Real-time updates** — Useocket for live marriage status

**Testing (Week 7):**
- Manual: Create user, verify profile in Supabase
- Data: Fetch profile, verify fields match schema
- Build passes with 0 errors
- Error handling: Graceful fallback if Supabase is down

#### Week 8 (Days 16-17) — Marriage System & Admin Panel
- [ ] Marriage system database setup
- [ ] Send marriage request UI
- [ ] Accept/reject marriage request UI
- [ ] View married pairs display
- [ ] Admin panel preview (mock)
- [ ] Stats dashboard (total marriages, active users)

**Features to Build:**
1. **Marriage request flow** — Button to "propose marriage" for NFT pair
2. **Pending requests** — Show in-progress marriage requests
3. **Accept/reject UI** — Accept or decline marriage proposals
4. **Marriage display** — Show "This NFT is married to X"
5. **Admin dashboard** — System stats, recent marriages, flag spam
6. **Witnessed trading display** — All trades & marriages are public

**Testing (Week 8):**
- Manual: Send/accept marriage request
- Database: Verify marriage record created
- Build passes with 0 errors
- Real-time: Marriage status updates live

---

### MP5: Marketplace & PWA (Weeks 9-10)
**Goal:** Trade threads (public trading), commissions, PWA setup, push notifications

#### Week 9 (Days 18-19) — Marketplace Trading Interface
- [ ] Trade initiation UI (pick NFT to trade, select partner)
- [ ] Trade thread display (all public trades)
- [ ] Accept trade UI
- [ ] Cancel trade UI
- [ ] Trading history page
- [ ] Price estimation logic (mock or OpenSea API)

**Features to Build:**
1. **Initiate trade** — Select your NFT, select partner's NFT, submit
2. **Trade thread** — Live feed of all active/recent trades
3. **Accept trade** — Atomic swap execution (mock contract calls)
4. **Trade history** — Personal trade log with dates, values
5. **Smart contract integration** — Call Polygon contract for actual NFT swap
6. **Witnessed economy** — All trades public on marketplace

**Testing (Week 9):**
- Manual: Initiate trade, accept from peer wallet
- Contract: Verify NFT transfer on Polygon (Polygon Mumbai testnet)
- Build passes with 0 errors
- Real-time: Trade thread updates live via Supabase

#### Week 10 (Days 20-21) — PWA & Commissions
- [ ] Serwist PWA setup (service worker, manifest)
- [ ] Install prompt on mobile
- [ ] Offline fallback pages
- [ ] Commission request system (UI + mock backend)
- [ ] Commission gallery (displaying artist work)
- [ ] Push notifications setup (mock)

**Features to Build:**
1. **PWA manifest** — App name, icon, colors
2. **Service worker** — Cache assets, offline support
3. **Install prompt** — "Add to home screen" on iOS/Android
4. **Offline page** — Friendly fallback when offline
5. **Commission request form** — Artist selection, brief description, budget
6. **Commission gallery** — Display artist portfolios
7. **Push notification setup** — Ready for n8n workflows

**Testing (Week 10):**
- Manual: Install as PWA on mobile
- Offline: Verify cached pages load without internet
- Build passes with 0 errors
- Notifications: Subscribe to push, receive test notification

---

### Weeks 11-12: Polish & Deployment
**Goal:** Final testing, Vercel deployment, domain connection, app store submissions, n8n workflows

#### Week 11 (Days 22-23) — Polish & QA
- [ ] Full site regression testing (all pages, all features)
- [ ] Performance optimization (Lighthouse score >90)
- [ ] Security audit (OWASP, contract audit)
- [ ] Accessibility audit (axe DevTools, WCAG AA)
- [ ] SEO optimization (meta tags, Open Graph, structured data)
- [ ] Bug fixes from QA

**Testing (Week 11):**
- Automated: Lighthouse, WebAIM WAVE, axe DevTools
- Manual: Cross-browser (Chrome, Firefox, Safari, Edge)
- Mobile: iOS Safari, Chrome Android
- Performance: <3s LCP on 4G, <1s interaction response time
- Build passes with 0 errors

#### Week 12 (Days 24-26) — Deployment & Launch
- [ ] Vercel deployment setup
- [ ] Domain turbomindz.com connected
- [ ] Environment variables configured (Supabase, thirdweb, Sentry)
- [ ] SSL certificate verified
- [ ] App Store submissions (iOS, Android via Android Studio)
- [ ] n8n workflows setup (email funnels, marriage notifications)
- [ ] Analytics setup (Vercel Analytics, Supabase stats)
- [ ] Launch checklist review

**Testing (Week 12):**
- Production: Test all features on live domain
- Transactions: Verify wallet transactions on Polygon mainnet
- Mobile app: Install from app stores
- Build passes with 0 errors
- Post-launch monitoring: Check error logs, user feedback

---

## Daily Workflow

### Before Each Session
1. Read the **week phase** in this document
2. Review the **specific day's tasks** (below)
3. Paste the **daily prompt template** (DAILY_PROMPT_TEMPLATE.md) into Claude
4. Wait for Claude to confirm context loaded

### Each Day - Standard Workflow

```
1. CONTEXT LOAD (2 min)
   - Claude reads this plan + CLAUDE.md
   - Claude confirms current week/day

2. REVIEW CHANGES (5 min)
   - Check git status for uncommitted changes
   - Review last session's commits
   - Verify build still passes: npm run build

3. PLAN TODAY (5 min)
   - List 2-3 specific tasks from daily checklist
   - Prioritize by dependencies (build → test → commit)

4. BUILD & TEST (60-90 min)
   - Write code
   - Run `npm run build` after each change
   - Manual test at 375px, 768px, 1024px
   - Commit with descriptive message

5. VERIFY & WRAP (10 min)
   - Confirm no build errors
   - Verify all breakpoints responsive
   - Final commit with "Day X" reference
   - Note blockers for next session
```

### Build Verification Checklist (MUST DO EVERY DAY)

Before committing, verify:
- [ ] `npm run build` passes with **ZERO errors**
- [ ] `npm run dev` starts without errors
- [ ] Test at 375px (mobile) — no broken layouts
- [ ] Test at 768px (tablet) — navigation works
- [ ] Test at 1024px (desktop) — full layout visible
- [ ] No console errors in browser DevTools
- [ ] No TypeScript errors in VS Code
- [ ] All links work (no 404s)
- [ ] Images load properly
- [ ] Animations smooth (no jank on mobile)

---

## Week 1 Detailed Tasks (Days 1-3)

### Day 1: Project Init & Layout Shell
**Tasks:**
1. Verify git repo initialized with proper config
2. Create root `layout.tsx` with Navbar + Footer structure
3. Build Navbar component (logo, nav links, hamburger for mobile)
4. Build Footer component (social links, copyright, newsletter signup button)
5. Test Navbar collapse on 375px viewport

**Commits:**
- `git commit -m "day-1: root layout with navbar and footer structure"`
- `git commit -m "day-1: responsive navbar hamburger menu"`

---

### Day 2: Homepage Structure & Mock Data
**Tasks:**
1. Create `/homepage.tsx` sections file list
2. Set up mock data in `lib/data.ts` (themes, characters, scenes)
3. Create TypeScript types in `types/index.ts`
4. Build Hero section component (headline, subheading, CTA button)
5. Build FeaturedNFTs section (carousel preview)

**Commits:**
- `git commit -m "day-2: homepage sections and mock data structure"`
- `git commit -m "day-2: hero section with gradient and CTA"`

---

### Day 3: Remaining Homepage Sections
**Tasks:**
1. Build Philosophy themes grid (9 themes displayed, filterable)
2. Build Character showcase (4 characters with cards)
3. Build Story preview section with CTA to story page
4. Build Newsletter signup section
5. Test full homepage at all breakpoints

**Commits:**
- `git commit -m "day-3: philosophy themes grid and character showcase"`
- `git commit -m "day-3: story preview and newsletter signup sections"`

---

## Testing Strategy

### Manual Testing (Every Day)
- **Responsive:** Check at 375px, 768px, 1024px, 1440px
- **Interactions:** Click buttons, fill forms, test modals
- **Navigation:** Visit all pages, verify links work
- **Performance:** Check DevTools Network tab for slow requests
- **Accessibility:** Tab through page, verify focus states

### Automated Testing (Weekly)
- Lighthouse audit (target >90 on Performance, Accessibility)
- TypeScript strict mode (0 errors)
- ESLint (0 warnings)
- Build test (`npm run build`)

### Feature-Specific Testing
- **Forms:** Validate required fields, email format, submission feedback
- **Animations:** Check smooth performance on mobile (60fps target)
- **Real-time:** Compare local state to Supabase data
- **Wallet:** Test connect/disconnect, address display
- **Token gates:** Verify show/hide based on NFT holdings
- **Trading:** Verify atomic swap on testnet before mainnet

---

## Reference: Build Command & Common Errors

### Build Command
```bash
cd c:\Users\hugog\Desktop\TMDZ\app
npm run build
```

### Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Error: Element type is invalid` | Type not proper | Check import path uses `@/*` |
| `Cannot find module '@/...'` | Path alias broken | Verify `tsconfig.json` has `compilerOptions.paths` |
| `Unexpected token 'export'` | Non-module file | Verify file extension is `.tsx` or `.ts` |
| `Property 'X' does not exist` | TypeScript error | Add type definition in `types/index.ts` |
| `Tailwind class not applying` | Custom class missing | Check `globals.css` has class definition |
| `.next cache corrupted` | Build cache issue | Run `rm -r .next && npm run build` |

---

## Git Workflow

### Commit Frequency
- After each completed feature (not each file change)
- Minimum: 1-2 commits per day
- Format: `git commit -m "day-X: feature description"`

### Example Commits (Week 1)
```
day-1: root layout with navbar and footer structure
day-1: responsive navbar hamburger menu
day-2: homepage sections and mock data structure
day-2: hero section with gradient and CTA
day-3: philosophy themes grid and character showcase
day-3: story preview and newsletter signup sections
```

### Push to Remote
- Push after each day: `git push -u origin main`
- Backup frequently to GitHub

---

## Resources & References

### Tech Stack Links
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [thirdweb Connect](https://portal.thirdweb.com/connect/latest)
- [Supabase](https://supabase.com/docs)

### Brand Guidelines (from CLAUDE.md)
- Deep Teal: #004D5C
- Gold: #C9A227
- Warm White: #FFF8F0
- Rich Black: #0A0A0A

### Project Docs
- [CLAUDE.md](../app/CLAUDE.md) — Session context
- [COPILOT_INSTRUCTIONS.md](../app/COPILOT_INSTRUCTIONS.md) — AI coding guidelines

---

## Notes & Reminders

- **Mega-prompts are 2 weeks each** (not 1 week) because of 50% time allocation
- **Mobile-first responsive design** — always test 375px first
- **Build must pass** — never commit code that doesn't build
- **Mock data first** — connect live services (Supabase, thirdweb) later
- **Commit frequently** — easier to roll back if needed
- **Dark mode is default** — no light mode toggle needed

---

## Status Tracking

### MP1 Progress (Weeks 1-2)
- Week 1 Status: **IN PROGRESS** (Days 1-3)
  - [x] Day 1: Project init, layout shell
  - [ ] Day 2: Homepage + mock data
  - [ ] Day 3: Remaining homepage sections
  - [ ] Day 4-5: Gallery page & components

### Next Steps
After completing MP1 gallery pages → Begin MP2 (Story page + animations)

---

**Last Updated by Claude:** March 18, 2026 at Session Start  
**Next Daily Prompt:** See DAILY_PROMPT_TEMPLATE.md
