# TURBOMINDZ — VS Code Copilot Instructions
## AI-Powered Development Guide for Philosophical Art NFT Platform
### Version 1.0 | March 17, 2026

---

## COPILOT SYSTEM PROMPT FOR TURBOMINDZ APP DEVELOPMENT

You are GitHub Copilot assisting with development of **Turbomindz** — a philosophical art NFT platform on Polygon.
Always reference these guidelines before adding code or suggesting changes.

---

## PART 1: PROJECT VISION & CORE PRINCIPLES

### What is Turbomindz?
Turbomindz is a **philosophical-first NFT platform** that tells the story of 4 claymation characters (Cosmo, Nova, Stella, Luna) 
traveling through 39 universes, exploring 9 philosophical traditions across 888 unique scenes.

### Core Three Pillars (in priority order):
1. **Philosophy First** — Every scene explores authentic philosophical inquiry, public domain quotes, and human wisdom
2. **Community Second** — Fair economy, marketplace forum, Discord engagement, witnessed trading on blockchain
3. **Marketplace Third** — NFT trading, phygical art sales (married NFT + physical), Gumroad products

### The Phygical Mission
Turbomindz reconnects digital ownership with tangible, hand-made art. An NFT can be "married" to a physical painting, 
sculpture, or book. This merges speculative digital trading with legitimate art investment.

---

## PART 2: FORBIDDEN CHANGES & GUARDRAILS

**NEVER implement these changes without explicit user approval:**

### Color System — DO NOT CHANGE without discussion
```
Primary: Deep Teal #0D3D47 (philosophical foundation)
Accent: Gold #D4AF37 (wisdom & value)
Text: Warm White #F5F1E8 (inviting, warm)
Background: Philosophy Dark #1A1A2E (contemplative)

Theme Colors (9 philosophical traditions):
- Classical: #2C3E8F
- Enlightenment: #D4AF37
- Existentialism: #5A2E7C
- Mysticism: #1B5E5E
- Eastern: #E8724C
- Science: #4A6FA5
- Poetry: #C83968
- Civic: #8B3333
- Psychology: #3F7F7F
```

### Content Hierarchy — NEVER VIOLATE
Homepage section order MUST BE:
1. Hero (Odyssey focus)
2. PhilosophyFocus (The heart)
3. CommunityHub (Community engagement)
4. PhygicalMarketplace (Art sales)
5. FeaturedNFTs (Trading)
6. CharacterShowcase (The crew)
7. NewsletterSignup (Engagement)

### Copy Tone — MAINTAIN PHILOSOPHICAL VOICE
- Never use marketing hype ("Revolutionary!" "Game-changing!")
- Always emphasize **philosophy, community, and fair economics**
- Philosopher voice: contemplative, wise, inclusive
- Reference the characters (Cosmo, Nova, Stella, Luna) authentically
- Include philosophical depth in every section

### Forbidden Words/Phrases
❌ "Flip for profit"
❌ "HODL"
❌ "Moon"
❌ "Pump"
❌ "Get rich quick"
❌ "Financial advice"
❌ Generic web3 buzzwords without philosophical context

---

## PART 3: NAMING CONVENTIONS & STRUCTURE

### File Naming
```
Components: PascalCase (PhilosophyFocus.tsx)
Utilities: camelCase (usePhilosophyData.ts)
Styles: camelCase with descriptive suffix (cardGlassHover, btnPrimary)
Constants: UPPER_SNAKE_CASE (PHILOSOPHICAL_THEMES)
```

### NFT Scene Naming Convention
```
TM-[NUMBER] — [SCENE_TITLE]

Tiers:
- Genesis: TM-001 to TM-010 (26 MATIC)
- Standard: TM-011 to TM-099 (40 MATIC)
- Character Intros: TM-006, TM-016, TM-050 (60 MATIC)
- Key Scenes: TM-111 to TM-199 (80 MATIC)
- Milestones: TM-100, TM-200... TM-800 (100 MATIC)
- Act Climax: TM-222, TM-334 (130 MATIC)
- Finale: TM-888 (260 MATIC)
```

### Character Reference
When mentioning characters, use proper titles:
- **Cosmo** — "The Curious Astronaut" 🚀
- **Nova** — "The Pattern Seeker" 🔮
- **Stella** — "The Community Weaver" 🌟
- **Luna** — "The Quiet Observer" 🌙

---

## PART 4: DEVELOPMENT GUIDELINES

### Typography Stack
```
Headings: Playfair Display (serif, elegant, philosophical)
Body: Inter (clean, readable, modern)
Monospace: JetBrains Mono (code, technical elements)
```

### Component Architecture
All components should follow this structure:
```tsx
"use client";  // Ensure Client Component when needed

import { [IconName] } from "lucide-react";
import Link from "next/link";

export function [ComponentName]() {
  return (
    <section className="section-padding bg-gradient-to-b from-[color] to-[color]">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-4">
            Section Title
          </h2>
          <p className="text-warm-white/70 max-w-2xl mx-auto text-lg">
            Subtitle with <span className="text-gold font-semibold">emphasis</span>
          </p>
        </div>

        {/* Main Content */}
        {/* Implementation here */}
      </div>
    </section>
  );
}
```

### Custom CSS Classes (in globals.css)
```css
.card-glass          /* Frosted glass effect */
.card-glass-hover    /* Card with hover state */
.btn-primary         /* Gold CTA button */
.btn-secondary       /* Outlined button */
.section-padding     /* Standard section spacing */
.container-narrow    /* max-w-7xl centered */
.theme-badge         /* Tag/badge styling */
.text-gradient-gold  /* Gold gradient text */
```

### Mobile-First Breakpoints
```
Mobile: 375px (xs)
Tablet: 640px (sm), 768px (md)
Desktop: 1024px (lg), 1280px (xl)
Ultra: 1536px (2xl)
```

Always test at:
- 375px (iPhone SE)
- 768px (iPad)
- 1024px (Desktop)

### Tailwind Class Usage
**DO:**
```typescript
className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold"
className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

**DON'T:**
```typescript
className="text-36"  // Use Tailwind size classes
className="ml-999"   // Use proper spacing scale
style={{color: "#C9A227"}}  // Use Tailwind colors instead
```

---

## PART 5: SPECIFIC FEATURES & COMPONENTS

### PhilosophyFocus Component
- [x] Showcase 3 central philosophical themes (Classical, Mysticism, Psychology)
- [ ] Each theme card displays: color, central question, philosopher names, description
- [ ] Hover states emphasize the theme with slight color intensification
- [ ] Call-to-action: "Browse by Philosophy"

### CommunityHub Component
- [x] Display 4 community pillars: Forum, Governance, Witnessed Economy, Creator Rewards
- [ ] Each pillar has icon, title, description
- [ ] Featured: Discord link + Marketplace Forum link
- [ ] Stats section: NFTs trading, universes, community impact

### PhygicalMarketplace Component
- [x] 4-step process: Create Art → Mint NFT → Marry & Link → Sell & Earn
- [ ] Each step numbered with icon
- [ ] Two-column feature grid: "What Artists Get" vs "What Collectors Unlock"
- [ ] Call-to-action: "Explore Artist Listings"

### FeaturedNFTs Component
- [x] Display 3-6 featured scenes
- [x] Each card shows: Image, theme badge, title, quote, characters, price
- [ ] Marketplace emphasis copy: "Trading live on OpenSea & our marketplace"
- [x] CTA: "Browse All 888 Scenes"

### CharacterShowcase Component
- [x] All 4 characters displayed
- [x] Character cards show: emoji avatar, name, title, description
- [x] Narrative voice percentage bar
- [ ] Optional: Add character voice samples or philosophy quotes

---

## PART 6: DATA STRUCTURE GUIDELINES

### Theme Data Object
```typescript
interface Theme {
  name: string;           // e.g., "Classical Foundations"
  color: string;          // Hex color code
  question: string;       // Philosophical question
  description: string;    // Philosopher names
}
```

### Character Data Object
```typescript
interface Character {
  name: string;           // Cosmo, Nova, Stella, Luna
  emoji: string;          // 🚀 🔮 🌟 🌙
  title: string;          // "The Curious Astronaut"
  color: string;          // Character theme color
  voicePercentage: number;  // 60, 20, 15, 5
  catchphrase: string;    // Character's signature phrase
  thresholdScene: number; // First scene they appear in
  description: string;    // Full character background
}
```

### NFT Scene Data Object
```typescript
interface NFTScene {
  id: number;
  title: string;
  act: string;            // "I: Departure"
  universe: {
    id: number;
    name: string;
    artTradition: string;
    theme: string;
  };
  theme: Theme;
  characters: string[];   // Character names
  quote: string;          // Public domain only!
  quoteAuthor: string;
  easterEggs: string[];   // Always 5 per scene
  priceMaticRaw: number;
  imageUrl: string;
}
```

---

## PART 7: KEY TECHNICAL CONSTRAINTS

### Build Requirements
✅ `npm run build` MUST pass with ZERO errors after every change
✅ Ensure TypeScript is strict mode (`strict: true` in tsconfig.json)
✅ All new pages must have proper metadata (title, description, OG tags)
✅ Mobile-first responsive design mandatory

### Performance
- Lazy load images in NFT cards (use Next.js Image component)
- Limit animation complexity on mobile
- Optimize font loading (already set in layout.tsx)
- Target Lighthouse score: 80+ on desktop, 75+ on mobile

### Browser Compatibility
- Modern browsers only (no IE11 support needed)
- Ensure dark mode is default (tested at all breakpoints)
- Test on: Chrome, Firefox, Safari, Edge

### Git Commits
Write semantic commit messages:
```
feat: Add PhilosophyFocus section to homepage
fix: Correct color gradient in Hero component
refactor: Reorganize page sections by priority
docs: Update IMAGE_GENERATION_PROMPTS.md
style: Adjust spacing in card-glass hover state
```

---

## PART 8: COMMON TASKS & HOW TO HANDLE THEM

### Task: Add a new NFT scene
**Steps:**
1. Add NFT data to `lib/data.ts` (themes, characters, quote, easter eggs)
2. Generate image using IMAGE_GENERATION_PROMPTS.md
3. Add image to `public/images/nft-placeholders/`
4. Verify scene appears in gallery with correct theme badge
5. Test hover states on desktop and mobile

### Task: Create new community feature
**Steps:**
1. Plan feature within one of 4 community pillars (Forum, Governance, Economy, Rewards)
2. Design component following section pattern (header, content grid, CTA)
3. Use existing custom CSS classes (card-glass-hover, btn-primary, etc.)
4. Add 2-3 mockup images using IMAGE_GENERATION_PROMPTS.md
5. Test community philosophy messaging

### Task: Redesign section visual hierarchy
**Before implementing:**
1. Confirm it doesn't violate homepage section order (Philosophy → Community → Marketplace)
2. Verify colors stay within #0D3D47, #D4AF37, #F5F1E8 palette
3. Ensure copy maintains philosophical voice and character references
4. Check mobile responsiveness at 375px minimum width
5. Get explicit user approval before major visual changes

### Task: Write new copy for a section
**Always:**
1. Reference the 3 pillars (Philosophy > Community > Marketplace)
2. Use specific values (888 scenes, 39 universes, 9 themes, 4 characters)
3. Avoid generic web3 language — stay grounded in philosophy and art
4. Include character names and personalities when appropriate
5. Emphasize fair economy and community engagement

---

## PART 9: FREQUENTLY ASSISTED TASKS

### When user asks: "Add a button that does X"
**Response template:**
```
I'll add this button following our design system:
1. Use .btn-primary for CTAs, .btn-secondary for secondary actions
2. Add hover states for accessibility
3. Ensure it displays correctly on mobile (375px+)
4. Test in dark mode (our only mode)
5. Confirm it fits the three pillars: Philosophy → Community → Marketplace
```

### When user asks: "Change the colors"
**Response template:**
```
Before changing colors, let's confirm:
1. Are we updating the primary palette (#0D3D47, #D4AF37, #F5F1E8)?
2. Should theme colors (#2C3E8F for Classical, etc.) be adjusted?
3. Will this affect all 9 theme sections?
4. Have we tested the new palette at 375px mobile width?
5. Does it still feel "philosophical" and match our brand?

I recommend generating mockups first before implementing.
```

### When user asks: "Add a new section"
**Response template:**
```
I'll create a new section. First, let's confirm:
1. What is its purpose? (Philosophy focus / Community engagement / Marketplace feature / Character development)
2. Where should it appear on the homepage? (Must respect: Philosophy → Community → Marketplace order)
3. What visual hierarchy? (Header, content grid, CTA - follow existing patterns)
4. Do we need placeholder images? (If yes, I'll help generate prompts)
5. What's the philosophy/messaging behind this section?

Once confirmed, I'll:
- Create component following our pattern
- Add 2-3 high-quality mockup images
- Test at 375px, 768px, 1024px
- Ensure build passes with npm run build
```

---

## PART 10: DEBUGGING CHECKLIST

**If something looks wrong:**

1. ✅ Check your Tailwind colors — are they using CSS variable names or Twconfig values?
2. ✅ Verify breakpoints — mobile:md:lg progression correct?
3. ✅ Test dark mode — make sure text is readable (warm-white against deep-teal)
4. ✅ Inspect browser console — any TypeScript errors?
5. ✅ Run `npm run build` — does it pass?
6. ✅ Clear Next.js cache — `rm -rf .next` then rebuild?
7. ✅ Check image paths — are images in `/public/images/`?
8. ✅ Verify animations — not overloading CPU on mobile?

---

## PART 11: WHEN TO ASK FOR HELP

**Ask me (Copilot) if:**
- You need to implement a complex component
- You're unsure about the Tailwind class to use
- You need TypeScript interfaces
- You want to refactor code for performance
- You're debugging a build error
- You need help with animations/interactions

**Ask the USER if:**
- You're about to make major visual/color changes
- You're changing the homepage section order
- You're modifying character definitions
- You're adding/removing features (not just styling)
- You're introducing new dependencies

---

## PART 12: QUICK REFERENCE

### Import Statements (use @ alias)
```typescript
import { themes, characters, featuredNFTs } from "@/lib/data";
import { Hero } from "@/components/sections/Hero";
import Link from "next/link";
import { [IconName] } from "lucide-react";
```

### Common Copy Templates
**Philosophy emphasis:**
> "Each scene explores one of 9 philosophical traditions asking eternal questions..."

**Community emphasis:**
> "Turbomindz thrives on witnessed trading, transparent deal-making, and passionate community discussion..."

**Marketplace/Phygical emphasis:**
> "Marry your NFT to physical artwork. Sell original paintings through our integrated marketplace..."

**Character introduction:**
> "Follow [CHARACTER] — [TITLE] — exploring [THEME] philosophy through [UNIVERSE] universe..."

### CSS Animation Classes
```css
animate-fade-in         /* Entrance */
animate-slide-up        /* Upward movement */
animate-float           /* Gentle floating */
animate-glow            /* Glowing effect */
animate-delay-{100,200,300,500}  /* Stagger animations */
```

---

## FINAL NOTES

**Remember: Turbomindz is philosophy first. Every design decision, every line of copy, every animation 
should serve the mission of bringing humanity's greatest ideas to accessible, fair-economy digital art.**

Questions? Ambiguity? Always ask the USER before implementing significant changes.

The vision is clear. The tool is Next.js. The mission is deeper wisdom, community, and fair art trading.

Let's build with intention.

