# TURBOMINDZ — Session Status & Quick Reference

**Purpose:** Track daily progress and provide quick lookup of current state  
**Update:** After every session  
**Last Updated:** March 18, 2026

---

## Current Status At-a-Glance

| Item | Status | Details |
|------|--------|---------|
| **Current Phase** | MP1 — Foundation & Layout | Weeks 1-2 |
| **Current Week** | Week 1 | Days 1-5 |
| **Current Day** | Day 1 | Implementation start |
| **Overall Progress** | 8.3% | 1 of 12 weeks |
| **Build Status** | ✅ Ready | `npm run build` passes |
| **Deploy Status** | 🚀 Not yet | Deployment in Week 12 |
| **Blockers** | None | Ready to proceed |

---

## Quick Nav: Today's Tasks

**If implementing Day 1:**
→ Read: [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) (Week 1, Day 1 section)  
→ Tasks: Root layout, Navbar, Footer, responsive testing  
→ Commit: `day-1: root layout with navbar and footer structure`

**If implementing Day 2:**
→ Read: [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) (Week 1, Day 2 section)  
→ Tasks: Mock data, types, Hero section, Featured NFTs  
→ Commit: `day-2: homepage sections and mock data structure`

**If implementing Day 3:**
→ Read: [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) (Week 1, Day 3 section)  
→ Tasks: Themes grid, character showcase, story preview, newsletter  
→ Commit: `day-3: philosophy themes grid and character showcase`

---

## Master Reference Documents

### For Planning & Development
1. **[DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)**
   - Complete 12-week breakdown
   - Daily tasks by day
   - Build verification checklist
   - Week-by-week features

2. **[app/CLAUDE.md](./app/CLAUDE.md)**
   - Session context & brand system
   - Project overview
   - Tech stack
   - Core rules (NEVER VIOLATE)

### For Testing
3. **[TESTING_PROTOCOL.md](./TESTING_PROTOCOL.md)**
   - Daily build checklist ✅
   - Weekly automated tests
   - Feature-specific testing
   - Deployment testing

### For Daily Workflow
4. **[DAILY_PROMPT_TEMPLATE.md](./DAILY_PROMPT_TEMPLATE.md)**
   - Copy-paste daily prompt
   - Examples for each week
   - Quick week reference
   - End-of-session checklist

---

## Critical Rules (Copy to Brain)

🚨 **NEVER VIOLATE THESE:**

1. **Build must pass** — `npm run build` with **ZERO errors** before every commit
2. **Mobile-first** — Test at 375px first, then 768px, then 1024px
3. **Mock data first** — Use mock data before connecting live services
4. **Use @/* imports** — All imports use alias `@/components` not `../components`
5. **Dark mode default** — Deep Teal background, Gold accents, Warm White text
6. **Commit frequently** — 1-2 commits per day with descriptive messages

---

## Build Verification (Do Before Every Commit)

```powershell
cd c:\Users\hugog\Desktop\TMDZ\app

# Build check
npm run build

# Result: Should say "✓ Ready to ship" with no errors
```

**Checklist (yes to all before committing):**
- [ ] Build passes (0 errors)
- [ ] Dev server starts (`npm run dev`)
- [ ] Responsive at 375px (no overflow)
- [ ] Responsive at 768px (layout good)
- [ ] Responsive at 1024px (full layout)
- [ ] No console errors
- [ ] No TypeScript errors in VS Code
- [ ] All links work
- [ ] Images load

---

## Weekly Workflow

### Start of Week (Every Monday)
1. Update this document with new week number
2. Open [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) — read week overview
3. Plan 5 working days (3-4 days × 2 weeks per MP = flexible)

### Each Day (3-4 days/week)
1. Copy [DAILY_PROMPT_TEMPLATE.md](./DAILY_PROMPT_TEMPLATE.md) → paste to Claude
2. Claude confirms tasks
3. Build features
4. Test at breakpoints
5. Commit to git
6. Update this document's "Current Day"

### End of Week (Friday)
1. Run full test suite (Lighthouse, aXe DevTools)
2. verify all features working
3. Update [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) progress
4. Plan next week

---

## Git Workflow

### Daily Commits (Example Week 1)
```
day-1: root layout with navbar and footer structure
day-1: responsive navbar hamburger menu

day-2: homepage sections and mock data structure
day-2: hero section with gradient and CTA

day-3: philosophy themes grid and character showcase
day-3: story preview and newsletter signup sections
```

### Commit Command
```powershell
cd c:\Users\hugog\Desktop\TMDZ
git add .
git commit -m "day-X: feature description"
git push
```

### Emergency: Undo Last Commit
```powershell
git revert HEAD  # Creates new commit that undoes last one
# OR
git reset --soft HEAD~1  # Undo commit, keep changes
```

---

## Common File Locations

| File | Purpose | Edit? |
|------|---------|-------|
| `app/CLAUDE.md` | Session context | No (reference only) |
| `app/src/app/layout.tsx` | Root layout | ✏️ Yes |
| `app/src/app/page.tsx` | Homepage | ✏️ Yes |
| `app/src/app/globals.css` | Brand styles | ✏️ Yes |
| `app/src/lib/data.ts` | Mock data | ✏️ Yes |
| `app/src/types/index.ts` | TypeScript types | ✏️ Yes |
| `app/src/components/layout/Navbar.tsx` | Navbar | ✏️ Yes |
| `app/tailwind.config.ts` | Tailwind config | ⚠️ Reference only |
| `app/package.json` | Dependencies | ⚠️ Reference only |

---

## Color Palette (Quick Copy)

**Primary Colors:**
```
Deep Teal (BG):     #004D5C
Gold (Accent):      #C9A227
Warm White (Text):  #FFF8F0
Rich Black:         #0A0A0A
```

**Theme Colors (9 themes):**
```
Classical:          #1A237E
Enlightenment:      #C9A227
Existentialism:     #4A148C
Mysticism:          #00695C
Eastern:            #E65100
Science:            #607D8B
Poetry:             #AD1457
Civic:              #B71C1C
Psychology:         #00838F
```

---

## Character Reference

For building character components, use this data:

| Name | Emoji | Title | Voice % | Catchphrase | Scene# |
|------|-------|-------|---------|------------|--------|
| Cosmo | 🚀 | Curious Astronaut | 60% | "But wait—" | 1 |
| Nova | 🔮 | Pattern Seeker | 20% | "The pattern is—" | 6 |
| Stella | 🌟 | Community Weaver | 15% | "How do people use this?" | 16 |
| Luna | 🌙 | Heart Keeper | 5% | "I feel..." | (later) |

---

## Deployment Checklist (Week 12)

When you reach Week 12, before deploying to turbomindz.com:

```
Domain Setup:
- [ ] Domain: turbomindz.com (bought on Namecheap)
- [ ] Nameservers: Pointed to Vercel
- [ ] SSL: Auto-generated by Vercel

Vercel Setup:
- [ ] Project created on Vercel
- [ ] Git connected (GitHub)
- [ ] Environment variables set (.env files)
- [ ] Preview deployment successful

Services Connected:
- [ ] Supabase linked (prod database)
- [ ] thirdweb connected (Polygon mainnet)
- [ ] Sentry error tracking enabled
- [ ] n8n workflows activated

Testing:
- [ ] Live site loads
- [ ] All pages accessible
- [ ] Wallet connects on mainnet
- [ ] Transactions work
- [ ] Emails send

Launch:
- [ ] Final commit: "v1.0: production deployment"
- [ ] Push to main
- [ ] Vercel auto-deploys
- [ ] Monitor error logs
```

---

## Emergency Procedures

### Build Broken (Can't run `npm run build`)
```powershell
cd c:\Users\hugog\Desktop\TMDZ\app

# Clear cache
rm -Force -Recurse .next
rm -Force -Recurse node_modules
npm cache clean --force

# Reinstall
npm install
npm run build
```

### Need to Revert Changes
```powershell
# See last 5 commits
git log --oneline -5

# Undo to specific commit
git reset --hard <commit-hash>

# OR undo to previous day
git reset --hard HEAD~1
```

### Performance Degradation
Check:
1. Lighthouse score (DevTools)
2. Bundle size: `npm run build` output
3. Unused imports: `npm run lint`
4. Images > 500KB: check `public/images/`

---

## Troubleshooting Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| `Cannot find module '@/...'` | Path alias broken | Check `tsconfig.json` has `compilerOptions.paths` |
| `Element type is invalid` | React component not imported correctly | Verify import statement, check component exists |
| `Tailwind classes not applying` | Class not in config | Add to `globals.css` or `tailwind.config.ts` |
| `.next cache corrupted` | Build cache issue | Delete `.next/` folder and rebuild |
| `npm install fails` | Dependency conflict | Delete `node_modules/` and try again |
| `Port 3000 already in use` | Dev server still running | Kill old process or use `npm dev -- -p 3001` |
| `Page renders blank` | No data fetched | Check console errors, verify mock data |
| `Responsive issue at 375px` | Not mobile-first | Add `sm:` breakpoints in Tailwind |

---

## Progress Tracking Template

Copy this section and update after each day:

```
## Progress Log

### Week 1
- [x] Day 1: ✅ Completed (Navbar, Footer, layout shell)
- [ ] Day 2: ⏳ In Progress (Mock data, Hero)
- [ ] Day 3: ⏸️ Not Started (Remaining sections)
- [ ] Day 4-5: ⏸️ Planning (Gallery page)

**Commits This Week:**
- day-1: root layout with navbar and footer structure
- day-1: responsive navbar hamburger menu
- day-2: homepage sections and mock data structure (if done)

**Notes:**
- [Any blockers or wins]
```

---

## Daily 5-Minute Checklist

Before you start coding each day:

```
☐ Is today's date/week in this file?
☐ Did I read the daily tasks from DEVELOPMENT_PLAN.md?
☐ Did I paste DAILY_PROMPT_TEMPLATE.md into Claude?
☐ Does `npm run build` pass on current codebase?
☐ Are there any uncommitted changes from yesterday?
  (If yes: git commit or git reset --hard)
☐ Ready to code? → Build today's features
☐ After coding: Test responsive (375px, 768px, 1024px)
☐ After testing: Commit to git
☐ Before ending: Update this file with today's date
```

---

## Next Session Quick Start

**Just opened VS Code?**

1. Open this file → confirm current week/day
2. Read [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) → current day section
3. Copy [DAILY_PROMPT_TEMPLATE.md](./DAILY_PROMPT_TEMPLATE.md) → paste to Claude
4. Claude confirms you're ready
5. Code → Test → Commit → Repeat

---

## Contact & Support

**Questions?**
- Check [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) for feature details
- Check [TESTING_PROTOCOL.md](./TESTING_PROTOCOL.md) for testing questions
- Check [app/CLAUDE.md](./app/CLAUDE.md) for brand/tech stack details

**Project Links:**
- GitHub: (will add after first commit)
- Vercel: (will add after deployment in Week 12)
- Supabase: (will add after Week 7)
- thirdweb: (will add after Week 5)

**Last Updated:** March 18, 2026  
**Maintained By:** Claude Copilot  
**Version:** 1.0

---

```
Mark the day/week you're on below:
📅 CURRENT: Week 1, Day 2 ✅ COMPLETED (March 18, 2026)
   - Hero carousel with 4 intro slides ✅
   - FeaturedNFTs section with mock carousel ✅
   - PhilosophyFocus carousel (9 themes) ✅
   - Character showcase (4 cards: Cosmo, Nova, Stella, Luna) ✅
   - Community Hub (4 pillars + Discord/forum links) ✅
   - Phygical Marketplace (4-step flow) ✅
   - Themes Table (all 9 philosophical traditions) ✅
   - Newsletter signup form (Odyssey Dispatch) ✅
   - npm run build PASSES with 0 errors ✅
   - All pages optimized: 97.8 kB max bundle ✅
   - READY FOR DAY 3 ✅

🔄 NEXT: Week 1, Day 3 — Gallery Page & Responsive Testing
         (Days 4-5 will follow in Week 2)
```
