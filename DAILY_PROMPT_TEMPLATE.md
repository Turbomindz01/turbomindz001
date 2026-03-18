# TURBOMINDZ — Daily Session Prompt (Template)

**Paste this into Claude Chat each day to resume development. Update the bracketed fields only.**

---

## DAILY SESSION LOAD — [UPDATE: WEEK X, DAY Y, DATE]

You are continuing development of the **Turbomindz** web application — a philosophical art NFT platform on Polygon.

### Quick Status
- **Current Phase:** MP[X] — [PHASE NAME] (Weeks [X-Y])
- **Today's Date:** [DATE, 2026]
- **Today's Focus:** [BRIEF 1-2 LINE DESCRIPTION OF TODAY'S GOAL]
- **Track:** B (50% time, 3-4 days/week)

### What to Do Today

Your tasks for today (in order):

1. **[TASK 1]** — [1 line description]
2. **[TASK 2]** — [1 line description]  
3. **[TASK 3]** — [1 line description]

### Build Checklist (MUST Pass Before Commit)
- [ ] `npm run build` passes with ZERO errors
- [ ] `npm run dev` starts without errors
- [ ] Responsive at 375px, 768px, 1024px
- [ ] No console errors in browser
- [ ] No TypeScript errors in VS Code

### Reference Documents
1. **[DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)** ← The comprehensive build plan (read the current week section)
2. **[app/CLAUDE.md](./app/CLAUDE.md)** ← Session context (already loaded)

### Last Session Notes
- **Completed:** [LIST 1-2 THINGS FINISHED]
- **Blockers:** [IF ANY, LIST THEM, OTHERWISE: "None"]
- **Files to Review Before Starting:** [IF ANY, LIST THEM]

### Workflow
1. Claude reads DEVELOPMENT_PLAN.md (current week section) + this prompt
2. Claude confirms your current week/day/tasks
3. Claude asks if anything needs fixing or if you're ready to proceed
4. Build features → Test → Commit with descriptive message
5. **BEFORE ENDING SESSION:** Report progress & git commit summary

---

## TEMPLATE EXAMPLES

### Example 1: Week 1, Day 1

```
You are continuing development of the **Turbomindz** web application.

### Quick Status
- **Current Phase:** MP1 — Foundation & Layout (Weeks 1-2)
- **Today's Date:** March 18, 2026
- **Today's Focus:** Project initialization, root layout with Navbar + Footer
- **Track:** B (50% time, 3-4 days/week)

### What to Do Today

Your tasks for today (in order):

1. **Verify git repo** — Confirm git initialized with dev@turbomindz.com config
2. **Create root layout** — Root layout.tsx with Navbar + Footer structure
3. **Build Navbar component** — Logo, nav links, responsive hamburger
4. **Build Footer component** — Social links, copyright, newsletter button
5. **Test Navbar responsive** — Verify hamburger collapses at 375px

### Last Session Notes
- **Completed:** Project already initialized, next.js 14 set up, dependencies installed
- **Blockers:** None
- **Files to Review Before Starting:** app/CLAUDE.md, app/package.json
```

### Example 2: Week 1, Day 2

```
You are continuing development of the **Turbomindz** web application.

### Quick Status
- **Current Phase:** MP1 — Foundation & Layout (Weeks 1-2)
- **Today's Date:** March 19, 2026
- **Today's Focus:** Homepage structure and mock data setup
- **Track:** B (50% time, 3-4 days/week)

### What to Do Today

Your tasks for today (in order):

1. **Create mock data file** — Add themes, characters, scenes to lib/data.ts
2. **Define TypeScript types** — Create Theme, Character, NFTScene types in types/index.ts
3. **Build Hero section** — Headline, subheading, gold CTA button with gradient
4. **Build FeaturedNFTs section** — Carousel preview (mock data)
5. **Test Hero at all breakpoints** — 375px, 768px, 1024px

### Last Session Notes
- **Completed:** Day 1 - Navbar and Footer built
- **Blockers:** None
- **Files to Review Before Starting:** src/app/page.tsx, src/components/layout/Navbar.tsx
```

### Example 3: Week 2, Day 5

```
You are continuing development of the **Turbomindz** web application.

### Quick Status
- **Current Phase:** MP1 — Foundation & Layout (Weeks 1-2)
- **Today's Date:** March 21, 2026
- **Today's Focus:** Gallery page with filtering and NFT detail modal
- **Track:** B (50% time, 3-4 days/week)

### What to Do Today

Your tasks for today (in order):

1. **Create gallery page layout** — Grid display with pagination (3-4 columns on desktop, 1-2 on mobile)
2. **Build filter UI** — Theme selector dropdown, character filter, search input
3. **Build NFTCard component** — Image, title, theme badge, price (mock), "View" button
4. **Build NFT detail modal** — Full artwork, description, theme, character story
5. **Test gallery filtering** — Verify filters work, grid responsive, modal opens/closes

### Last Session Notes
- **Completed:** Homepage complete with all 5 sections, responsive at 375/768/1024
- **Blockers:** None
- **Files to Review Before Starting:** src/app/gallery/page.tsx, src/components/sections/
```

---

## How to Update Daily Prompt

Each day, update only these sections:
1. Replace `[WEEK X, DAY Y, DATE]` with actual values
2. Replace `[PHASE NAME]` and `[X-Y]` with current mega-prompt info
3. Replace `[BRIEF 1-2 LINE DESCRIPTION]` with today's focus
4. Replace `[TASK N]` with actual tasks from DEVELOPMENT_PLAN.md
5. Update "Last Session Notes" with what was actually completed

---

## Quick Week Reference

### Week 1 (Days 1-3): Project Foundation
- Day 1: Layout shell + Navbar + Footer
- Day 2: Homepage + mock data structure
- Day 3: Remaining homepage sections (themes, characters, story, newsletter)

### Week 2 (Days 4-5): Gallery & Components
- Day 4: Gallery page, filters, NFT cards
- Day 5: NFT detail modal, loading states, error boundaries

### Week 3 (Days 6-7): Story Page
- Day 6: Story page layout, character profiles
- Day 7: Scroll animations, quote cards, theme deep dives

### Week 4 (Days 8-9): About, FAQ, Marketplace Shell
- Day 8: About page, FAQ accordion, error pages (404/500)
- Day 9: Contact form, breadcrumbs, marketplace preview

### Week 5 (Days 10-11): Wallet Integration
- Day 10: thirdweb Connect v5 setup, wallet button, user profile page
- Day 11: Zustand wallet state, disconnect button

### Week 6 (Days 12-13): Token Gates & User Profiles
- Day 12: Profile edit form, token gate component
- Day 13: Gated pages, profile settings, local storage persistence

### Week 7 (Days 14-15): Supabase Setup
- Day 14: DB schema, auth integration, profile CRUD
- Day 15: Real-time updates, wallet connection sync

### Week 8 (Days 16-17): Marriage System & Admin
- Day 16: Marriage request flow, accept/reject UI
- Day 17: Witnessed trading display, admin dashboard

### Week 9 (Days 18-19): Marketplace Trading
- Day 18: Trade initiation, trade thread display, trading history
- Day 19: Smart contract integration, acceptance flow

### Week 10 (Days 20-21): PWA & Commissions
- Day 20: Serwist PWA setup, install prompt, offline support
- Day 21: Commission request form, commission gallery, push notifications

### Week 11 (Days 22-23): QA & Polish
- Full regression testing, performance optimization, accessibility audit

### Week 12 (Days 24-26): Deployment & Launch
- Vercel deployment, domain connection, app stores, n8n workflows

---

## CMD Copy-Paste at Session Start

After pasting the daily prompt into Claude, you can also run this in terminal to verify build state:

```powershell
cd c:\Users\hugog\Desktop\TMDZ\app
npm run build
```

If build passes → You're ready to start.  
If build fails → Ask Claude to diagnose and fix errors first.

---

## End-of-Session Checklist

Before ending your Claude session, make sure:
1. **Build passes:** `npm run build` output shows no errors
2. **Git committed:** All changes committed with descriptive message  
3. **Next day noted:** Update this template with what's completed for tomorrow
4. **Progress tracked:** Review DEVELOPMENT_PLAN.md and mark today as done

Example end-of-session message to Claude:
```
Session complete! Please:
1. Verify `npm run build` passes with ZERO errors
2. Show me final git commit message
3. Confirm what's ready for Day X tomorrow
```

---

**Template Version: 1.0**  
**Last Updated:** March 18, 2026
