# NFT Scene Production Package (MINT Agent)

## Overview
Generates a complete production package for one or more Turbomindz NFT scenes, including metadata, Midjourney prompt, OpenSea listing, and social media posts.

## Trigger Words
scene, NFT, TM-, scene package, MINT, mint scene, nft production, scene batch

## Inputs Required
- **Scene number**: TM-001 through TM-888 (required)
- **Universe number**: U1-U39 (required)
- **Theme**: One of 9 Turbomindz philosophical themes (required)
- **Batch mode**: Optionally generate multiple scenes at once (e.g., TM-151 through TM-153)

## Output Format
Save a Markdown file to `art/nft-scenes/TM-[NUMBER].md` containing all sections below.

### Section 1: Scene Metadata
```
ID: TM-[NUMBER]
Title: [Descriptive poetic title]
Act: [I: Departure (001-222) | II: The Ordeal (223-666) | III: The Return (667-888)]
Chapter: [Chapter number within the act]
Universe: U[NUMBER] — [Universe Name]
Theme: [Theme Name] ([Hex Color])
Characters Present: [List — MUST respect thresholds below]
```

### Section 2: Public Domain Quote
```
Quote: "[Exact quote — NEVER invented or paraphrased]"
Author: [Full name]
PD Status: VERIFIED (death year: [YYYY], before 1956) OR "Ancient"
```

### Section 3: Five Easter Eggs
List EXACTLY 5 hidden elements in the scene. Each must be:
- Visually distinct and findable in the artwork
- Connected to the philosopher, theme, or universe
- Varied in type (symbol, object, text, creature, pattern)

### Section 4: Midjourney Prompt
```
[Detailed scene description] in [art tradition from universe] style,
featuring [characters present with visual anchors],
[5 easter egg elements woven naturally into scene],
[philosophical mood and atmosphere],
[theme color palette],
claymation stop-motion plasticine Pixar meets Aardman,
[composition direction], [lighting description],
photographed with Nikon D850 --ar 2:3 --v 7 --s [250-350] --q 2
```

### Section 5: OpenSea Listing
```
Title: Turbomindz #[NUMBER]: [Scene Title]
Description: [200-400 word description in character voice, using Turbomindz voice mix]
Price: [MATIC amount per pricing formula]
Traits JSON:
{
  "Universe": "[Name]",
  "Theme": "[Name]",
  "Act": "[I/II/III]",
  "Characters": "[List]",
  "Rarity": "[Genesis/Standard/Character Intro/Key Scene/Milestone/Act Climax/Finale]",
  "Easter Eggs": 5
}
```

### Section 6: Social Media Posts
- **Instagram caption**: Under 2,200 characters. Include motto footer.
- **Twitter/X post**: Under 280 characters. Hook + link.
- **Discord announcement**: 3-4 sentences for #announcements channel.

## CRITICAL RULES (NEVER VIOLATE)

### Character Thresholds
Characters CANNOT appear before their story arrival:
- **Cosmo** (curious astronaut, orange boots, fishbowl helmet): TM-001+
- **Nova** (alien guide, 3 floating orbs, gold infinity pendant): TM-006+
- **Stella** (blue-purple gradient hair, gold star earring, constellation freckles): TM-016+
- **Luna** (leather notebook, mismatched socks, violet hair streak): TM-050+

### Quote Rules
- ALL quotes MUST be public domain: author died BEFORE 1956 or attributed as "Ancient"
- NEVER invent, approximate, or fabricate quotes
- If uncertain, flag as "⚠️ PD STATUS UNCERTAIN — VERIFY BEFORE PUBLISHING"

### Easter Egg Rules
- Every scene has EXACTLY 5 easter eggs. No more, no less.

### Pricing Formula (MATIC on Polygon)
- TM-001 to TM-010: 26 MATIC (Genesis)
- TM-006, TM-016, TM-050: 60 MATIC (Character Intro)
- Key Scenes (marked ⭐): 80 MATIC
- TM-100, 200, 300, 400, 500, 600, 700, 800: 100 MATIC (Milestone)
- TM-222, 334, 444, 666: 130 MATIC (Act Climax)
- TM-888: 260 MATIC (Finale)
- All others: 40 MATIC (Standard)
- FLOOR: NEVER below 26 MATIC

### Voice Mix for Descriptions
- 35% witty, 30% warm, 20% curious, 15% artfully simple
- Character split: Cosmo 60%, Nova 20%, Stella 15%, Luna 5%
- NEVER corporate, preachy, or hard-sell

### Caption Footer (EVERY Instagram post)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
💫 The NFT is the soul
🎨 The art is the body
🏘 The community is the village
📖 The story is the mirror
━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 9 Themes Reference
1. Classical Foundations (#1A237E) — "What is virtue?"
2. Enlightenment & Reason (#C9A227) — "What can we know?"
3. Existentialism & Modern (#4A148C) — "What is freedom?"
4. Mysticism & Esoterica (#00695C) — "What is hidden?"
5. Eastern Wisdom (#E65100) — "What is balance?"
6. Science & Modernity (#607D8B) — "What is progress?"
7. Poetry & Aesthetics (#AD1457) — "What is beauty?"
8. Civic & Social (#B71C1C) — "What is justice?"
9. Psychology & Mind (#00838F) — "What is the self?"

## 39 Universes Reference
U1 Alchemical Renaissance, U2 Cybernetic Baroque, U3 Floating Sumi-e, U4 Stardust Impressionism, U5 Botanical Bioluminescence, U6 Geometric Sacred, U7 Crystalline Dreamscape, U8 Mechanical Botanical, U9 Aboriginal Star Maps, U10 Venetian Mask, U11 Stained Glass Cosmos, U12 Persian Miniature Dreams, U13 Graffiti Oracle, U14 Brass Meridian Observatory, U15 Microscopic Cathedral, U16 Polaroid Mysticism, U17 Neon Calligraphy Void, U18 Vaporwave Antiquity, U19 Origami Architecture, U20 Catacomb Cathedral, U21 Fractal Wilderness, U22 Marionette Cosmos, U23 Volcanic Genesis, U24 Clockwork Garden, U25 Crystal Frequency, U26 The Fade Border, U27 Shadow Puppet Epic, U28 Mosaic Memory Palace, U29 Coral Architecture, U30 Memento Mori Botanical, U31-U39 (remaining universes per Master Bible)

## Example Output
See `art/nft-scenes/TM-EXAMPLE.md` for a complete example.
