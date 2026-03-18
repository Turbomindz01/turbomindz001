# TURBOMINDZ — Development Reference & Master README

**Welcome to the Turbomindz Development Hub**  
**Last Updated:** March 18, 2026  
**Status:** 🚀 Ready for Week 1 Implementation

---

## Quick Start: Daily Workflow

**Every time you start a coding session:**

1. **Read Today's Status**
   - Open [SESSION_STATUS.md](./SESSION_STATUS.md)
   - Confirm current week/day

2. **Copy Daily Prompt**
   - Open [DAILY_PROMPT_TEMPLATE.md](./DAILY_PROMPT_TEMPLATE.md)
   - Copy the appropriate example (Week X, Day Y)
   - Paste into Claude Chat

3. **The 4-Step Build Cycle**
   - 📖 Read: Check task list in [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)
   - 🛠️ Build: Write code (use @/* imports, test breakpoints)
   - ✅ Test: Run `npm run build`, test at 375px/768px/1024px
   - 📝 Commit: Git commit with descriptive message

---

## Master Reference Documents (The 4 Pillars)

### 1. [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) — The Roadmap
**What:** Complete 12-week build plan with day-by-day tasks  
**When:** Read at start of each week  
**Why:** Know exactly what to build and when  
**Use Cases:**
- Week overview: "What am I building this week?"
- Daily tasks: "What are my 2-3 tasks today?"
- Build verification: Checklist before every commit
- Resource links: Tech stack documentation

### 2. [TESTING_PROTOCOL.md](./TESTING_PROTOCOL.md) — The Quality Gate
**What:** Complete testing strategy with checklists  
**When:** Read before first commit each day  
**Why:** Verify build passes and features work  
**Use Cases:**
- Daily checklist: 15-item verification before commit
- Weekly automated tests: Lighthouse, aXe DevTools
- Feature testing: How to test forms, animations, wallets
- Deployment testing: Week 12 final checklist

### 3. [DAILY_PROMPT_TEMPLATE.md](./DAILY_PROMPT_TEMPLATE.md) — The Daily Brief
**What:** Copy-paste prompt template for Claude  
**When:** Use at start of each session  
**Why:** Claude loads your progress and tasks automatically  
**Use Cases:**
- Week 1 examples: Day 1, Day 2, Day 3 templates
- Week-by-week quick reference: What each day includes
- End-of-session checklist: What to verify before ending

### 4. [SESSION_STATUS.md](./SESSION_STATUS.md) — The Status Board
**What:** Current progress tracker and quick reference  
**When:** Update after each day  
**Why:** Quick view of where you are  
**Use Cases:**
- At-a-glance status: Current week, day, phase
- Quick nav: "What do I build today?"
- Checklists: Build verification, deployment checklist
- Emergency procedures: Git rollback, cache clear

---

## Project Structure

```
TMDZ/
├── DEVELOPMENT_PLAN.md          ← READ THIS FIRST (roadmap)
├── TESTING_PROTOCOL.md            ← Testing checklist
├── DAILY_PROMPT_TEMPLATE.md       ← Copy-paste daily prompt
├── SESSION_STATUS.md              ← Current status & quick nav
├── README.md                       ← This file
│
├── app/                            ← Next.js application
│   ├── CLAUDE.md                   ← Session context (brand, tech stack)
│   ├── COPILOT_INSTRUCTIONS.md    ← AI coding guidelines
│   ├── package.json                ← Dependencies
│   ├── tailwind.config.ts          ← Brand colors & utilities
│   ├── tsconfig.json               ← TypeScript config (@/* alias)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx          ← Root layout (Navbar + Footer)
│   │   │   ├── page.tsx            ← Homepage
│   │   │   ├── globals.css         ← Brand styles + custom classes
│   │   │   ├── gallery/page.tsx    ← Gallery page
│   │   │   ├── story/page.tsx      ← Story page
│   │   │   ├── marketplace/page.tsx ← Marketplace page
│   │   │   └── about/page.tsx      ← About page
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── sections/           ← Homepage sections
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── FeaturedNFTs.tsx
│   │   │   │   ├── ThemeGrid.tsx
│   │   │   │   ├── CharacterShowcase.tsx
│   │   │   │   ├── StoryPreview.tsx
│   │   │   │   └── NewsletterSignup.tsx
│   │   │   └── ui/                 ← Reusable components (being built)
│   │   ├── lib/
│   │   │   ├── data.ts            ← Mock data (themes, characters, NFTs)
│   │   │   └── cn.ts              ← Tailwind class merge utility
│   │   ├── types/
│   │   │   └── index.ts           ← TypeScript types
│   │   └── hooks/                 ← Custom React hooks (being built)
│   └── public/
│       └── images/                ← Images (hero, placeholders, etc.)
│
├── art/                           ← Design assets (not code)
├── content/                       ← Blog, social, newsletter content
├── docs/                          ← Project documentation
├── financials/                    ← Business & revenue tracking
├── marketing/                     ← Marketing materials
└── SOURCES/                       ← Reference materials
```

---

## The 12-Week Timeline (MP1-5)

| Week | Phase | Focus | Status |
|------|-------|-------|--------|
| 1-2 | **MP1** | Foundation & Layout | 🔵 IN PROGRESS |
| 3-4 | **MP2** | Core Pages & Animations | ⬜ Planned |
| 5-6 | **MP3** | Wallet & Auth | ⬜ Planned |
| 7-8 | **MP4** | Supabase & Live Data | ⬜ Planned |
| 9-10 | **MP5** | Marketplace & PWA | ⬜ Planned |
| 11 | **P1** | QA & Polish | ⬜ Planned |
| 12 | **P2** | Deploy & Launch | ⬜ Planned |

---

## Critical Rules (NEVER BREAK)

```
🚨 CORE RULES — APPLY TO EVERY CODING SESSION

1. npm run build MUST pass with ZERO errors
   → Test before every commit
   → If broken, fix it immediately

2. Mobile-first responsive design
   → Test at 375px first (most constrained)
   → Then 768px, then 1024px
   → Never assume desktop layout

3. Build with mock/placeholder data first
   → Connect live Supabase later (Week 7)
   → Connect live blockchain later (Week 5)
   → Use @/lib/data.ts during Weeks 1-6

4. All imports use @/* alias
   → ✅ import MyComponent from '@/components/MyComponent'
   → ❌ import MyComponent from '../components/MyComponent'
   → Alias defined in tsconfig.json

5. Dark mode is DEFAULT
   → Background: Deep Teal #004D5C or Black #0A0A0A
   → Text: Warm White #FFF8F0
   → Accent: Gold #C9A227
   → No light mode toggle

6. Commit frequently with descriptive messages
   → 1-2 commits per day
   → Format: "day-X: feature description"
   → Example: "day-1: responsive navbar hamburger menu"

7. Use TypeScript strict mode
   → @types required for all dependencies
   → No 'any' types unless absolutely necessary
   → Full type inference for state/data
```

---

## Build Verification (Before Every Commit)

This is THE checklist you must pass every single day:

```powershell
# Navigate to app directory
cd c:\Users\hugog\Desktop\TMDZ\app

# Run build verification
npm run build

# Expected result: "✓ Ready to ship" with 0 errors
```

**Then verify these 10 items manually:**
- [ ] `npm run dev` starts without errors
- [ ] Test at 375px — no overflow, responsive
- [ ] Test at 768px — grid/layout good
- [ ] Test at 1024px — full layout visible
- [ ] Browser DevTools Console → NO red errors
- [ ] VS Code → NO TypeScript errors
- [ ] All navigation links work (no 404s)
- [ ] Images load properly (no broken img tags)
- [ ] Animations smooth (no jank on mobile)
- [ ] Ready to commit? → `git add . && git commit -m "..."`

---

## Commands You'll Use Most

### Development
```bash
cd c:\Users\hugog\Desktop\TMDZ\app

npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build verification (MUST PASS before commit)
npm run lint     # Check for errors (0 errors required)
```

### Git Workflow
```bash
cd c:\Users\hugog\Desktop\TMDZ

git status                          # See changes
git add .                           # Stage all changes
git commit -m "day-X: description"  # Commit
git push                            # Push to GitHub
git log --oneline -5                # See last 5 commits
```

### Emergency (If Build Breaks)
```bash
cd c:\Users\hugog\Desktop\TMDZ\app

# Clear cache and reinstall
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm cache clean --force
npm install
npm run build  # Try again
```

---

## Key Reference Data

### Brand Colors (Use These)
```
Deep Teal:    #004D5C    ← Main background
Gold:         #C9A227    ← Primary accent
Warm White:   #FFF8F0    ← Text color
Rich Black:   #0A0A0A    ← Dark backgrounds
```

### Characters (4 Total)
```
🚀 Cosmo   (60% voice) — The Curious Astronaut
🔮 Nova    (20% voice) — The Pattern Seeker
🌟 Stella  (15% voice) — The Community Weaver
🌙 Luna    (5% voice)  — The Heart Keeper (later)
```

### 9 Philosophical Themes
```
Classical Foundations, Enlightenment & Reason, Existentialism & Modern,
Mysticism & Esoterica, Eastern Wisdom, Science & Modernity,
Poetry & Aesthetics, Civic & Social, Psychology & Mind
```

---

## Testing at Breakpoints

**Always test these 3 widths when you code:**

### 375px (Mobile: iPhone SE, Galaxy A53)
```
DevTools: Ctrl+Shift+M → Set to 375px
Check:
- No horizontal scroll
- Buttons ≥ 44px tall (touch-friendly)
- Text ≥ 16px (readable)
- Hamburger menu visible
- Images scale correctly
```

### 768px (Tablet: iPad, Galaxy Tab)
```
DevTools: Ctrl+Shift+M → Set to 768px
Check:
- 2-column layouts
- Navigation responsive
- Padding appropriate (not too cramped)
- Cards display 2 per row
```

### 1024px (Desktop: MacBook, 1024p monitor)
```
DevTools: Ctrl+Shift+M → Set to 1024px
Check:
- Full navigation visible
- 3-4 column grids
- max-w-7xl container works
- Sidebar/columns appear properly
```

---

## When to Reference Each Document

| Situation | Read | Why |
|-----------|------|-----|
| Starting new session | DAILY_PROMPT_TEMPLATE.md | Load today's tasks |
| Need weekly overview | DEVELOPMENT_PLAN.md | See week's goals |
| About to commit | TESTING_PROTOCOL.md | Verify quality |
| Want to know status | SESSION_STATUS.md | Quick view |
| Need brand details | app/CLAUDE.md | Colors, fonts, tech |
| Help! Something's broken | SESSION_STATUS.md (emergency section) | Troubleshooting |

---

## Git Commit Examples (Week 1)

```
day-1: root layout with navbar and footer structure
day-1: responsive navbar hamburger menu

day-2: homepage sections and mock data structure
day-2: hero section with gradient and CTA

day-3: philosophy themes grid and character showcase
day-3: story preview and newsletter signup sections
```

**Format rules:**
- Always start with `day-X:` (day number)
- Use lowercase
- Keep under 60 characters
- Be specific about what changed

---

## File Editing Quick Guide

### Files You WILL Edit (Most Common)
```
app/src/app/page.tsx               ← Homepage content
app/src/app/layout.tsx             ← Root layout wrapper
app/src/app/globals.css            ← Brand styles
app/src/lib/data.ts                ← Mock data
app/src/types/index.ts             ← TypeScript types
app/src/components/layout/*.tsx    ← Layout components
app/src/components/sections/*.tsx  ← Homepage sections
```

### Files You Reference (Don't Edit)
```
app/CLAUDE.md                      ← Session context (read only)
app/tailwind.config.ts             ← Brand config (read only)
app/tsconfig.json                  ← Alias config (read only)
app/package.json                   ← Dependencies (read only)
```

---

## Common Questions & Answers

**Q: Where do I find my tasks for today?**  
A: Open [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md), find current week section, read "Day X" subsection.

**Q: What breakpoints should I test?**  
A: Always test 375px (mobile), 768px (tablet), 1024px (desktop). Use DevTools responsive mode.

**Q: My build is broken. What do I do?**  
A: Check [SESSION_STATUS.md](./SESSION_STATUS.md) "Troubleshooting" section or the "Emergency Procedures" section.

**Q: I forgot to commit. Can I go back?**  
A: Yes! Use `git reset --hard HEAD~1` to undo the last commit (careful!). Or use `git stash` to save uncommitted changes.

**Q: I have an error I don't understand.**  
A: Check console error, google the error message, or check the TypeScript strict mode rules in [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md).

**Q: How much time should development take each day?**  
A: 60-90 minutes of active coding per day (3-4 days/week, 20-30 hours/week for Track B).

**Q: When do I connect Supabase/thirdweb?**  
A: Supabase in Week 7 (MP4). thirdweb in Week 5 (MP3). Build with mock data first.

---

## Progress Tracking

Update this after each session (takes 30 seconds):

```
📅 SESSION LOG
Date: March 18, 2026
Week: 1 → Day: 1
Completed: [List 2-3 things]
Build: ✅ Passes
Commits: [Git messages]
Blockers: [Any issues?]
Next Session: [What's next?]
```

---

## Success Criteria by Week

### Week 1 ✅ (Weeks 1-2 MP1)
- [ ] Build passes with 0 errors
- [ ] Root layout with Navbar + Footer complete
- [ ] Homepage has all 5 sections
- [ ] Responsive at all 3 breakpoints
- [ ] At least 3 meaningful commits

### Week 2 ✅
- [ ] Gallery page built with filters
- [ ] NFT detail modal works
- [ ] All reusable components created
- [ ] Gallery responsive at all breakpoints

---

## Resources & Links

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Context
- [app/CLAUDE.md](./app/CLAUDE.md) — Full session context
- [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) — 12-week roadmap
- [TESTING_PROTOCOL.md](./TESTING_PROTOCOL.md) — Complete QA guide

### Tools
- VS Code (Editor)
- DevTools (Chrome: Ctrl+Shift+I)
- Lighthouse (DevTools → Lighthouse tab)
- aXe DevTools (Chrome extension)

---

## First Steps (Right Now)

If you're just starting:

1. ✅ **You are here** (reading this README)
2. 📖 **Next:** Open [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) → read "MP1: Weeks 1-2" section
3. 📋 **Then:** Open [DAILY_PROMPT_TEMPLATE.md](./DAILY_PROMPT_TEMPLATE.md) → copy "Example 1: Week 1, Day 1"
4. 💬 **Paste:** Paste that into Claude Chat
5. 🛠️ **Build:** Claude will confirm tasks → you start coding

---

## Support & Troubleshooting

**Is something unclear?**
- Check [SESSION_STATUS.md](./SESSION_STATUS.md) → "Troubleshooting" section
- Check [TESTING_PROTOCOL.md](./TESTING_PROTOCOL.md) → "Common Errors"
- Re-read [app/CLAUDE.md](./app/CLAUDE.md) → "Core Rules"

**Build broken?**
- Run: `npm run build`
- If error, google it or check errors section
- If still stuck: `git reset --hard HEAD~1` (undo last commit)

**Lost track of progress?**
- Open [SESSION_STATUS.md](./SESSION_STATUS.md)
- Update the date/week/day
- Open [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) to your current week
- You're back on track!

---

## Meta: How to Use This Hub

This README is your entry point. The other documents are:

- 📋 **DEVELOPMENT_PLAN.md** — THE ROADMAP (read weekly)
- ✅ **TESTING_PROTOCOL.md** — THE QUALITY GATE (read daily)
- 📝 **DAILY_PROMPT_TEMPLATE.md** — THE DAILY BRIEF (copy-paste daily)
- 📊 **SESSION_STATUS.md** — THE STATUS BOARD (update daily)
- 📖 **app/CLAUDE.md** — THE CONTEXT (reference as needed)

**30-second workflow:**
1. Open SESSION_STATUS.md → confirm date/week/day
2. Copy DAILY_PROMPT_TEMPLATE.md (current week example)
3. Paste to Claude Chat
4. Claude confirms tasks
5. Code → Test → Commit → Update SESSION_STATUS.md

You're set up for success. Now go build Turbomindz! 🚀

---

**Last Updated:** March 18, 2026  
**Version:** 1.0  
**Status:** Ready for Week 1 Implementation  
**Track:** B (50% time, 3-4 days/week, 20-30 hours/week)
