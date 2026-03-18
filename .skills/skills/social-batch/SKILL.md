# Social Media Content Batch Generator (STELLA Agent)

## Overview
Generates batches of social media content across all Turbomindz channels. Creates ready-to-post content for Instagram, Twitter/X, Discord, Pinterest, TikTok/YouTube Shorts captions, and more.

## Trigger Words
social media, social batch, social post, STELLA, Instagram post, tweet, Discord post, Pinterest pin, content batch, social content, marketing post, caption

## Inputs Required
- **Content type**: scene-reveal, education, behind-scenes, challenge, announcement, product-launch, community-highlight (required)
- **Scene or product reference**: TM-ID or product name if applicable (optional)
- **Number of days to batch**: Default 3 days (optional)
- **Platforms**: Default all platforms, or specify subset (optional)

## Output Format
Markdown file saved to `content/social/batch-[YYYY-MM-DD].md`

### Batch Structure
```markdown
# Social Media Batch — [Date Range]
Content Type: [type]
Reference: [TM-ID or product]

---

## Day 1: [Date]

### Instagram
**Image suggestion**: [Description of what to post — NFT image, product mockup, quote graphic]
**Caption** (under 2,200 characters):
[Full caption text with character voice, hashtags at end]

**Hashtag Set** (30 max):
[Themed hashtags from the Turbomindz pools]

---

### Twitter/X
**Tweet 1** (under 280 chars):
[Hook + scene/product reference]

**Tweet 2 — Thread** (if applicable):
[Deeper thought, educational content, or story beat]

---

### Discord (#announcements)
[3-4 sentence announcement. Engaging, community-focused.]

---

### Pinterest
**Pin Title**: [SEO-optimized, under 100 chars]
**Pin Description**: [Keyword-rich, under 500 chars. Include CTA to OpenSea/Gumroad]
**Board**: [Which board to pin to]

---

### TikTok/YouTube Shorts (Script Concept)
**Hook** (first 3 seconds): [Attention-grabbing opening line]
**Concept**: [15-60 second video concept description]
**Text overlay**: [Key text to display]
**CTA**: [What to tell viewers to do]

---

[Repeat for Day 2, Day 3...]
```

## Content Type Templates

### Scene Reveal
- Lead with the art (Instagram image = the NFT)
- Quote from the scene in the caption
- Easter egg tease ("Can you find all 5 hidden elements?")
- Link to OpenSea

### Education
- Philosophy explainer or art style breakdown
- Use Nova voice (analytical, pattern-finding)
- "Did you know?" format works well on Twitter
- Save educational infographic ideas for Pinterest

### Behind-the-Scenes
- Process reveal: how scenes are made (MJ prompts, concept development)
- Cosmo voice, vulnerable and curious
- Works best on Instagram Stories and TikTok

### Challenge
- Interactive: "Which philosopher said this?" or "Find the easter egg"
- Community engagement driver
- Great for Twitter polls and Discord threads

### Product Launch
- Feature the product with value proposition
- Stella voice (practical, community-building)
- Include link to Gumroad/Etsy
- NOT salesy — educational: "We made this because..."

### Announcement
- Milestones, launches, updates
- All characters can contribute (multi-voice post)
- Celebratory but genuine

## Hashtag Pools (Rotate, Don't Repeat)

### Core (Always include 3-5):
#Turbomindz #PhilosophicalArt #NFTArt #ClaymationArt #DigitalArt

### Theme-Specific:
- Classical: #Stoicism #Philosophy #AncientWisdom #Plato #Aristotle
- Enlightenment: #Reason #Kant #Voltaire #Thinking #Ideas
- Existentialism: #Existentialism #Freedom #Nietzsche #Kierkegaard
- Eastern: #EasternPhilosophy #Zen #Taoism #Confucius #Buddha
- Poetry: #PoetryLovers #ArtAndBeauty #Rilke #Gibran
- Science: #ScienceAndArt #Innovation #DaVinci #Tesla
- Civic: #Justice #Philosophy #MarcusAurelius #Gandhi
- Psychology: #Psychology #SelfKnowledge #Mind #WilliamJames

### Growth (Mix in):
#NFTCommunity #DigitalCollectibles #ArtCollector #PhilosophyQuotes #WisdomQuotes #DailyWisdom #ArtEducation #CreativeProcess

## Quality Rules
1. **Instagram captions under 2,200 characters** — hard limit
2. **Twitter under 280 characters** — hard limit
3. **All quotes PD-verified**
4. **Character thresholds respected**
5. **Voice mix maintained**: 35% witty, 30% warm, 20% curious, 15% artfully simple
6. **Never hard-sell** — value-first, education-first
7. **Caption footer on Instagram EVERY TIME** (see nft-scene skill for format)
8. **Hashtags**: 20-30 per Instagram post, rotated to avoid shadowban
9. **Pinterest descriptions must be SEO-optimized** — include keywords naturally

## Process
1. Determine content type and reference material
2. Generate content for each platform, respecting format constraints
3. Create image/visual suggestions for each post
4. Apply character voices and voice mix
5. Add hashtags from appropriate pools
6. Save batch file to `content/social/`
7. Note which posts need images created (flag for CANVAS agent)
