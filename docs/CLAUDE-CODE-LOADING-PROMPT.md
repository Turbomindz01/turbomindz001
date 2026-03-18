# TURBOMINDZ — Claude Code Loading Prompt
## Paste This Into Claude Code at the Start of Each New Session

---

**NOTE**: If you have a `CLAUDE.md` file in your app/ root folder (which you should — it was created for you), Claude Code reads it automatically. You only need to paste this if CLAUDE.md is missing or you want to add session-specific context.

---

## The Prompt (Copy Everything Below)

```
You are building the Turbomindz web application — a philosophical art NFT platform on Polygon.

TECH STACK: Next.js 14 (App Router), TypeScript strict, Tailwind CSS, Framer Motion, Zustand, Radix UI, Lucide React.

BRAND: Dark mode default. Deep Teal #004D5C bg, Gold #C9A227 accents, Warm White #FFF8F0 text. Fonts: Playfair Display (headings), Inter (body), JetBrains Mono (mono).

CURRENT STATUS:
- Sprint Week: [UPDATE THIS — 1 through 12]
- Mega-Prompt: [UPDATE THIS — 1 through 5]
- Last completed: [DESCRIBE WHAT YOU DID LAST SESSION]

RULES:
1. npm run build must pass with ZERO errors after every change
2. Mobile-first responsive (375px, 768px, 1024px)
3. Mock data first, live services later
4. Use @/* imports (alias for ./src/*)
5. Commit frequently

What should I build next?
```

---

## Session-Specific Updates

Before pasting, update these three lines:

1. **Sprint Week**: Which week of the 12-week sprint are you in?
2. **Mega-Prompt**: Which mega-prompt phase? (1=Foundation, 2=Pages, 3=Wallet, 4=Supabase, 5=Marketplace)
3. **Last completed**: What did you finish in the previous session? (e.g., "Built the gallery page with filters")

## Example (Week 2, Session 3)

```
CURRENT STATUS:
- Sprint Week: 2
- Mega-Prompt: 1
- Last completed: Added Framer Motion animations to Hero and FeaturedNFTs sections. All pages are mobile-responsive. Build passes clean.
```
