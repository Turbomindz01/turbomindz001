# Midjourney Prompt Generator (CANVAS Agent)

## Overview
Generates complete, ready-to-paste Midjourney prompts for Turbomindz NFT scenes, promotional images, product covers, social graphics, coloring pages, and stickers. Every prompt follows the Turbomindz visual DNA: claymation, stop-motion, plasticine, Pixar meets Aardman.

## Trigger Words
Midjourney, MJ prompt, MJ, CANVAS, art prompt, image prompt, generate prompt, visual, scene art

## Inputs Required
- **Type**: nft-scene, promo, product-cover, social-graphic, coloring-page, sticker, brand-asset (required)
- **Description**: What the image should depict (required)
- **Characters**: Which characters appear (optional — will check thresholds)
- **Universe/Theme**: If applicable (optional)

## Output Format
Save to `art/mj-prompts/mj-[type]-[descriptor]-[YYYY-MM-DD].md`

## Prompt Formulas by Type

### NFT Scene (--ar 2:3)
```
[Detailed scene description with specific visual elements], [characters with ALL visual anchors],
in [art tradition from universe] style, [5 easter egg elements described naturally],
[philosophical mood description], [theme color palette as specific colors],
claymation stop-motion plasticine figures in a handcrafted miniature world,
Pixar meets Aardman aesthetic, warm tactile textures, visible fingerprints in clay,
[composition: wide shot / medium shot / close-up], [lighting: warm golden / cool blue / dramatic],
photographed with Nikon D850, shallow depth of field, studio lighting
--ar 2:3 --v 7 --s [250-350] --q 2
```

### Promotional Image (--ar 4:5)
```
[Promotional concept description], [characters with visual anchors],
claymation stop-motion plasticine Pixar meets Aardman,
[brand colors: Deep Teal #004D5C, Gold #C9A227, Warm White #FFF8F0],
warm inviting composition, professional product photography feel,
soft studio lighting, clean background
--ar 4:5 --v 7 --s [250-300] --q 2
```

### Product Cover (--ar 1:1 or --ar 2:3)
```
[Product type and theme], elegant minimalist design,
[theme color palette], [relevant philosophical symbols],
claymation style decorative elements, tactile textures,
clean typography-friendly layout with negative space for text overlay,
professional product photography, studio lighting
--ar [ratio] --v 7 --s 200 --q 2
```

### Social Graphic (--ar 1:1 or --ar 9:16)
```
[Content of graphic], [character if applicable with visual anchors],
claymation stop-motion style, [platform-specific composition],
[brand colors], bold readable composition,
warm lighting, clean background for text overlay
--ar [ratio] --v 7 --s 200 --q 2
```

### Coloring Page (--ar 2:3)
```
[Scene description], black and white line art only, thick outlines,
no shading no gradients no fills, coloring book style,
[characters as simple line drawings], clear distinct shapes,
suitable for all ages, whimsical and detailed
--ar 2:3 --v 7 --s 100
```

### Sticker (--ar 1:1)
```
[Character] [expression/pose], chibi proportions,
claymation plasticine style, [character's visual anchors],
simple clean background, sticker-ready,
cute expressive face, bold outlines,
[character's theme color accent]
--ar 1:1 --v 7 --s 200 --q 2
```

## Character Visual Anchors (ALWAYS Include ALL)

### Cosmo 🚀
- Orange boots (always visible)
- Fishbowl helmet (transparent, shows face)
- Space suit with mission patches
- Curious wide-eyed expression
- Theme color: Deep Teal #004D5C

### Nova 🔮
- 3 floating orbs (always present, orbiting)
- Gold infinity pendant on chain
- Iridescent skin with subtle shimmer
- Calm knowing expression
- Theme color: Gold #C9A227

### Stella 🌟 (TM-016+ ONLY)
- Blue-to-purple gradient hair (always flowing, never static)
- Gold star earring (single, left ear — NOT a clip)
- Constellation/sparkle freckles on cheeks
- Energetic open expression
- 6 outfit variants available
- Theme color: Rose #AD1457

### Luna 🌙 (TM-050+ ONLY)
- Leather notebook (always carrying or nearby)
- Mismatched socks (visible when possible)
- Violet hair streak (single streak in otherwise dark hair)
- Quiet observant expression, often looking slightly away
- Theme color: Purple #4A148C

## Quality Rules
1. **Character thresholds**: NEVER include a character before their scene threshold
2. **Visual anchors are MANDATORY**: If a character appears, ALL their anchors must be described
3. **Claymation DNA**: Every prompt must include the plasticine/claymation style descriptors
4. **Nikon D850**: Include in NFT scene prompts for consistent photographic quality
5. **Correct aspect ratio**: NFTs are 2:3, promos are 4:5, socials vary by platform
6. **Stylize range**: NFT scenes 250-350, products 200, coloring pages 100
7. **Version**: Always --v 7
8. **Quality**: Always --q 2 (except coloring pages)

## Process
1. Determine image type and collect inputs
2. Verify character threshold compliance
3. Select the correct prompt formula
4. Build the prompt with ALL required elements
5. Double-check visual anchors for all characters present
6. Add correct parameters (--ar, --v, --s, --q)
7. Save to `art/mj-prompts/`
8. Note: User will manually paste into Midjourney Discord
