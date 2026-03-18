# The Odyssey Dispatch — Newsletter Writer (HERALD Agent)

## Overview
Composes the weekly Turbomindz newsletter "The Odyssey Dispatch" for Buttondown. Written by Cosmo, this newsletter recaps the week's highlights, features a philosophical insight, promotes products, and connects the community.

## Trigger Words
newsletter, Odyssey Dispatch, dispatch, HERALD, email newsletter, Buttondown, weekly email, newsletter draft

## Inputs Required
- **Week number**: Which production week this covers (required)
- **Scenes produced this week**: List of TM-IDs (optional — Claude can check art/nft-scenes/)
- **Products launched**: Any new Gumroad/Etsy products (optional)
- **Community highlights**: Notable events, comments, sales (optional)
- **Special announcements**: Milestones, launches, updates (optional)

## Output Format
Markdown file saved to `content/newsletter/dispatch-week-[NUMBER]-[YYYY-MM-DD].md`

### Newsletter Structure (500-700 words total)
```markdown
# The Odyssey Dispatch — Week [NUMBER]
*"[One-line philosophical hook or Cosmo quote]"*

---

## 🚀 Cosmo's Log

[Personal opening from Cosmo — 80-120 words. Conversational, warm, slightly vulnerable. Share a reflection from the week. What was learned, what was hard, what was beautiful. This is the human (character) heart of the newsletter.]

## 🎨 This Week's Scenes

[Brief showcase of 2-3 NFT scenes produced this week. For each:
- Scene title and number
- One-sentence description
- The PD quote featured
- Link to OpenSea listing (placeholder until live)]

## 🔮 Nova's Pattern

[Nova identifies a connecting pattern between this week's scenes, quotes, or events. 60-80 words. Analytical but accessible. "The pattern is..." format.]

## 🛒 Featured Product

[Highlight one digital product. Brief description + value proposition + link. 50-80 words. NOT salesy — educational and value-first.]

## 🌟 Community Spotlight

[Highlight a community member, a sale, a marriage, or a discussion. If no community activity yet, share a philosophical question for readers to ponder. 40-60 words.]

## 🥚 Easter Egg Hint

[A cryptic hint about an easter egg hidden in one of this week's scenes. Encourages engagement and replay value. 1-2 sentences. Luna voice.]

---

*Until next week, keep looking up.*
*— Cosmo 🚀*

*[The Odyssey Dispatch is the weekly newsletter from Turbomindz, a philosophical art NFT project. [Unsubscribe] | [View in browser] | [OpenSea Collection]]*
```

## Voice Rules
- **Primary voice**: Cosmo (curious, warm, wonder-filled) — 70% of newsletter
- **Nova's Pattern**: Nova voice (analytical, pattern-seeing) — 15%
- **Easter Egg Hint**: Luna voice (cryptic, brief) — 5%
- **Product Feature**: Stella voice (practical, community-focused) — 10%
- **Overall tone**: Like a letter from a friend who happens to be an astronaut exploring philosophy through art
- **NEVER**: Corporate email tone. No "Dear valued subscriber." No "Click here to buy."

## Quality Rules
1. **500-700 words total** — respect reader time
2. **All quotes PD-verified** — same rules as everywhere
3. **Motto must NOT appear in newsletter** — save it for social media. The newsletter has its own sign-off.
4. **No character before threshold** — same rules
5. **Mobile-friendly formatting** — short paragraphs, clear headers, emoji section markers
6. **One CTA only** — the featured product. Don't link-bomb the reader.
7. **Subject line**: Under 50 characters. Intriguing but honest. Examples: "The astronaut found a pattern this week" / "3 scenes, 2 truths, 1 question"

## Process
1. Check `art/nft-scenes/` for this week's produced scenes
2. Check `products/gumroad/` for new products
3. Select the most interesting scene for the Easter Egg Hint
4. Write the newsletter following the structure
5. Generate 3 subject line options
6. Save to `content/newsletter/`
7. Note: The user will manually copy this into Buttondown for sending
