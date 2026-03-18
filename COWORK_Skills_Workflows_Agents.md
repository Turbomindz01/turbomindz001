# TURBOMINDZ — Claude Cowork Skills, Workflows & Agent System
## Version 1.0 | March 17, 2026

---

## PART 1: CUSTOM SKILLS (8 Skills to Install)

### SKILL 1: turbomindz-nft-producer
**Trigger words:** "NFT", "scene", "mint", "metadata", "listing", "TM-", "batch NFT"
**Description:** Generates complete NFT production packages including metadata JSON, OpenSea listing copy, Midjourney prompts, traits, easter eggs, and pricing. Uses parallel sub-agents for batch processing.

**SKILL.md contents should include:**

#### NFT Naming Convention
`TM-[NUMBER] — [SCENE TITLE]`

#### Pricing Tiers Table
| Tier | Range | Price | Examples |
|------|-------|-------|----------|
| Genesis | TM-001 to TM-010 | 26 MATIC | The Cathedral of First Questions, The Library of Self |
| Standard | TM-011 to TM-099 | 40 MATIC | Most scenes |
| Character Intros | TM-006, TM-016, TM-050 | 60 MATIC | Nova, Stella, Luna introductions |
| Key Scenes | TM-111 to TM-199 | 80 MATIC | Major turning points |
| Milestones | TM-100, TM-200, TM-300, TM-400, TM-500, TM-600, TM-700, TM-800 | 100 MATIC | Century markers |
| Act Climax | TM-222, TM-334, TM-444, TM-666 | 130 MATIC | End of act sequences |
| Finale | TM-888 | 260 MATIC | The grand conclusion |

#### Metadata JSON Template (OpenSea Compatible)
```json
{
  "name": "TM-001 — The Cathedral of First Questions",
  "description": "Scene 1 of 888: Where Cosmo awakens and begins the eternal journey of discovery. In a space between thought and action, the first questions emerge. This is where the Odyssey begins.",
  "image": "ipfs://[CID]",
  "external_url": "https://turbomindz.com/scene/001",
  "attributes": [
    {
      "trait_type": "Theme",
      "value": "Classical Foundations"
    },
    {
      "trait_type": "Universe",
      "value": "U1 Alchemical Renaissance"
    },
    {
      "trait_type": "Act",
      "value": "Act I: Departure"
    },
    {
      "trait_type": "Chapter",
      "value": "Chapter 1: Genesis"
    },
    {
      "trait_type": "Characters",
      "value": "Cosmo"
    },
    {
      "trait_type": "Art Style",
      "value": "Renaissance"
    },
    {
      "trait_type": "Scene Number",
      "display_type": "number",
      "value": 1
    },
    {
      "trait_type": "Marriage Status",
      "value": "Single"
    },
    {
      "trait_type": "Rarity",
      "value": "Genesis"
    }
  ]
}
```

#### Character Appearance Thresholds
- **Cosmo**: Appears in TM-001 and onwards (all scenes)
- **Nova**: First appears in TM-006 "Meet the Analyst"
- **Stella**: First appears in TM-016 "The Practical Path"
- **Luna**: First appears in TM-050 "Whispers in the Dark"

#### Easter Egg Rules
Every scene must include exactly 5 easter eggs:
1. **Story Callback**: Reference to a previous scene or character moment
2. **Future Plant**: Subtle hint about an upcoming scene or revelation
3. **Universe-Specific**: Detail unique to the current universe (U1, U2, U3, etc.)
4. **Thematic Symbol**: Visual or narrative element tied to the scene's philosophical theme
5. **Logo Placement**: Turbomindz logo or brand mark hidden in the scene

#### PD Quote Verification Rules
- ALL quotes must be from authors who died before 1956
- Never invent or paraphrase quotes
- Verify author birth/death dates before inclusion
- If uncertain: flag as "⚠️ PD STATUS UNCERTAIN"
- Acceptable sources: primary texts, established quote databases (Bartleby, Yale Quotations)

#### Midjourney Prompt Template
```
A [ART_STYLE] scene depicting [SCENE_CONCEPT].
Mood: [EMOTIONAL_TONE].
Colors: [PRIMARY_COLORS].
Composition: [LAYOUT_DESCRIPTION].
Details: [SPECIFIC_VISUAL_ELEMENTS].
Character presence: [COSMO/NOVA/STELLA/LUNA if applicable].
Lighting: [LIGHT_QUALITY].
Texture: [SURFACE_QUALITIES].
--ar [ASPECT_RATIO] --style raw --v 6
```

#### Batch Processing Instructions
When given a range (e.g., TM-051 to TM-060):
1. Launch parallel sub-agents to generate each scene's package simultaneously
2. Each sub-agent handles one scene (naming, pricing, metadata, MJ prompt, traits, easter eggs, PD quotes)
3. Compile all results into a structured batch output
4. Return as indexed JSON array or batch directory with individual files

**Usage examples:**
- "Generate NFT package for TM-151" → Full metadata + description + MJ prompt + traits
- "Batch NFT packages TM-051 to TM-060" → 10 packages generated in parallel
- "Price check TM-222" → Returns: Act Climax, 130 MATIC

---

### SKILL 2: turbomindz-content-writer
**Trigger words:** "write", "essay", "article", "copy", "caption", "chapter", "Turbomindz voice"
**Description:** Writes all content in the Turbomindz brand voice. Supports multiple formats: social captions, Medium articles, Patreon posts, product descriptions, newsletter sections, YouTube scripts.

#### Turbomindz Voice Mix Rules
- **35% Witty**: Clever observations, unexpected connections, playful language
- **30% Warm**: Genuine care, approachable tone, human connection
- **20% Curious**: Questions, sense of wonder, "But wait—" moments
- **15% Artfully Simple**: Clear language, no jargon, elegant simplicity

#### Character Voices (Primary Voice Breakdown)
- **Cosmo (60%)**: Curious, introspective, "But wait—", "I used to think—", discovers patterns
- **Nova (20%)**: Analytical, pattern-seeking, "The pattern is—", "Same truth, different clothes"
- **Stella (15%)**: Practical, grounded, "How do PEOPLE use this?", action-oriented
- **Luna (5%)**: Cryptic, brief, mysterious, shows without telling, walks away

#### Content Type Templates

**Instagram Caption (max 2,200 characters)**
- Hook (first line, attention-grabbing)
- Body (2-4 paragraphs)
- CTA (call-to-action)
- Spacing (line breaks for readability)
- 30 hashtags maximum
- Footer with Turbomindz motto: "Create. Connect. Trade Fair."

**Twitter Thread (5-8 tweets, each under 280 characters)**
- Tweet 1: Hook/question
- Tweets 2-7: Expanding ideas
- Final tweet: CTA or reflection
- Use threading format properly

**Medium Article (1,500-3,000 words)**
- SEO-optimized title
- Compelling subtitle
- Body with subheadings every 300-400 words
- Featured image description
- Meta description (160 characters)
- End with newsletter signup CTA

**Patreon Post (varies by tier)**
- Tier 1 (Seeker): 300-500 words, concept introduction
- Tier 2 (Explorer): 700-1,000 words, deeper exploration
- Tier 3 (Architect): 1,200-1,500 words, complete breakdown + exclusive insights

**YouTube Script (5-10 min format)**
- Hook (0-10 seconds)
- Body with natural transitions
- Visuals/cuts markers: [CUT TO: scene description]
- Chapters with timestamps
- Outro with CTA and next video teaser

**Product Description (Gumroad/Etsy format)**
- Hook sentence
- What it is (1 sentence)
- What's included (bulleted list)
- Who it's for (1-2 sentences)
- What you'll get (outcomes/benefits)
- Preview/sample if applicable

**Newsletter Section (500-700 words)**
- Topic introduction
- 3 key insights
- Personal reflection
- CTA (sign up / subscribe / share)

**Discord Announcement**
- Markdown formatting
- Clear hierarchy (headings, bold, italics)
- Embed-ready structure
- Friendly, conversational tone
- Include relevant emoji (sparingly)

**Pinterest Pin Description (under 500 characters)**
- Keyword-rich opening
- Value proposition
- Action-oriented language
- No hashtags (Pinterest doesn't use them)

#### PD Rule
**ALL quotes must be from authors who died before 1956. NEVER invent. Flag uncertain as "⚠️ PD STATUS UNCERTAIN."**

#### Parallel Processing
When asked for multi-platform content for one scene, launch sub-agents for each platform simultaneously and compile results.

---

### SKILL 3: turbomindz-social-poster
**Trigger words:** "post", "social", "Instagram", "Twitter", "caption", "hashtags", "calendar"
**Description:** Generates ready-to-post social media content for all 15 channels. Includes hashtag sets, posting times, and platform-specific formatting.

#### Platform Specifications

| Platform | Char Limit | Image Specs | Hashtags | Format |
|----------|-----------|-------------|----------|--------|
| Instagram | 2,200 | 1080x1080 (square), 1080x1350 (portrait) | 30 max | Caption + image |
| Twitter/X | 280 | 4 images max, 1200x675 each | 2-3 | Thread format |
| Discord | N/A | Embed-ready | N/A | Markdown + embeds |
| Pinterest | N/A | 1000x1500 (vertical) | 0 | Description + image |
| Medium | N/A | 1400x900 | N/A | Full article |
| YouTube | 5,000 (description) | 1280x720 (thumbnail) | 30 max | Title + description + tags |
| TikTok | 150 | 1080x1920 | 2-3 | Caption + hashtags |
| Threads | 500 | 1 image | 0 | Text + image |
| Bluesky | 300 | 1200x675 | 0 | Text + image |
| LinkedIn | 3,000 | 1200x627 | 3 max | Professional tone |
| Reddit | 40,000 | Variable | 0 | Community-specific |
| Mastodon | 500 | Variable | 0 | Open-source feel |
| Tumblr | N/A | Variable | 30 max | Reblog-friendly |
| Substack | N/A | Variable | N/A | Email-native |
| Beehiiv | N/A | Variable | N/A | Email newsletter |

#### Content Rotation (7-Day Cycle)
- **Day 1 (Monday)**: Scene Reveal + Educational Content
- **Day 2 (Tuesday)**: Behind-the-Scenes + Community Engagement
- **Day 3 (Wednesday)**: Philosophy Challenge + Character Spotlight
- **Day 4 (Thursday)**: Product Highlight + Easter Egg Hint
- **Day 5 (Friday)**: Quote Card + Universe Preview
- **Day 6 (Saturday)**: Art Education + Collection Highlight
- **Day 7 (Sunday)**: Newsletter Teaser + Week Recap

#### Hashtag Banks

**General Turbomindz Hashtags**
#Turbomindz #The888Scenes #Odyssey #PhilosophyInArt #AIArt #CreativeJourney #PhilosophyNFT #DigitalArt #WebThreeCreator

**Art & Creation**
#Midjourney #AIGenerated #DigitalArt #ArtisticJourney #CreativeProcess #ArtCommunity #VisualStorytelling #PromptEngineering #AIArtist #ArtisticVision

**Philosophy & Wisdom**
#PhilosophyMatters #WisdomTradition #StoicPhilosophy #GreekPhilosophy #PhilosophyOfLife #FinallyMakingSense #DeepThought #Reflection #SelfKnowledge #TheUnexaminedLife

**Web3 & NFT**
#NFTArt #NFTCommunity #Polygon #BlockchainArt #DigitalCollectible #CreatorEconomy #OwnershipMatters #TradesFair #NFTDrops #Web3Creator

**Community & Engagement**
#CommunityFirst #CreatorsUnited #SupportCreators #BuildTogether #JoinTheJourney #CommunityPower #CreativeComrades #TogetherWeCreate #CreatorSupport

**Universe-Specific (U1 Alchemical Renaissance)**
#Alchemical #Renaissance #Transmutation #GreatWork #Philosopher #Alchemist #MysticalArt #SacredGeometry #Hermetic #Esoteric

**Universe-Specific (U2 Cyberpunk Synthesis)**
#Cyberpunk #FutureNow #DigitalRebellion #Synthesis #TransHuman #TechArt #DystopianBeauty #DigitalRevoltion #SynthWave #Neon

**Universe-Specific (U3 Mythic Ecology)**
#Mythology #EcoWarrior #Mythology #SacredNature #GaiaWisdom #Ecology #Mythic #NatureArt #EnvironmentalArt #WildHeart

**Character-Specific**
#CosmoQuest #NovaPatterns #StellaPath #LunaWhispers #MeetTheCharacters #CharacterDriven #StoryArc

**Theme-Specific (Classical Foundations)**
#ClassicalWisdom #GreatThinkers #Timeless #PhilosophyClassics #AncientWisdom

**Seasonal/Time-Based**
#MondayMotivation #WeeklyWisdom #NewWeekEnergy #WeekendVibes #FridayFeels #ComingNext

#### Parallel Processing
Generate posts for 3+ platforms simultaneously using sub-agents. Compile into ready-to-post format for each platform.

---

### SKILL 4: turbomindz-product-creator
**Trigger words:** "product", "PDF", "journal", "planner", "course", "Gumroad", "Etsy", "KDP"
**Description:** Creates digital product content including PDFs, journals, planners, essay collections, flashcard sets, and course outlines. All in Turbomindz voice with brand styling.

#### Product Catalog & Pricing Strategy

**Free Lead Magnets ($0)**
- "Phygital Art 101": Introduction to blending philosophy + AI art
- "9 Philosophical Questions": Self-reflection guide
- "Know Thyself" coloring pages: Illustrated philosophy

**Low-Price Tier ($1-$10)**
- Wallpaper pack (5-10 designs)
- Quote card sets (20-30 printable cards)
- Cosmos journal (52-page reflective journal)
- Flashcard sets (50-100 cards per theme)
- Bookmarks (10 designs)
- Desktop calendar (monthly or yearly)

**Medium-Price Tier ($10-$30)**
- Daily planner (360+ pages, full year)
- Scene breakdown pack (20 scenes fully analyzed)
- Art style guide (Midjourney prompting mastery)
- Universe anthology (all scenes from one universe)
- Philosophy essays (5-8 collected essays)

**Premium Tier ($30-$100)**
- Complete art book (all scenes, full color, hardcover version)
- Philosophy Through Art course (video + PDF + exercises)
- AI Art Mastery workshop (Midjourney deep dive)
- Creator Kit (templates + prompts + brand guide)
- The Complete Odyssey volume (limited edition compilation)

#### Product Generation Template

For each product, generate:

1. **Product Title & Subtitle**
   - Format: [Concept] — [Value Proposition]
   - Example: "The Daily Odyssey — A Year of Philosophical Reflection"

2. **Full Product Description (Gumroad/Etsy Format)**
   - Opening hook (what problem does it solve?)
   - What's included (detailed bulleted list)
   - Who it's for (target audience)
   - What they'll get (outcomes/benefits)
   - Use Turbomindz voice (witty, warm, curious, simple)

3. **Content Outline**
   - Chapter/section titles
   - Page counts per section
   - Brief description of each section's content

4. **Sample Content for First Section**
   - 200-300 word sample showing voice and quality
   - Markdown or formatted text

5. **Pricing Recommendation with Rationale**
   - Suggested price point
   - 3-sentence justification based on value, market, and positioning

6. **Cover Art Midjourney Prompt**
   - Full prompt following turbomindz-nft-producer MJ template
   - Include composition, mood, colors, style

7. **Marketing Launch Copy**
   - Social media posts for 5 platforms (adapted by turbomindz-content-writer)
   - Newsletter announcement blurb
   - Discord announcement with formatting

#### Parallel Processing
When creating a product bundle, launch sub-agents for each product simultaneously and compile into bundle package.

---

### SKILL 5: turbomindz-newsletter
**Trigger words:** "newsletter", "dispatch", "Buttondown", "email", "welcome sequence"
**Description:** Composes "The Odyssey Dispatch" weekly newsletter and email communications.

#### Newsletter Structure (Weekly)

**Section 1: Personal Opening from Cosmo (100 words)**
- Warm greeting from Cosmo's perspective
- Reflection on the week's meaning
- Personal, conversational tone

**Section 2: This Week's Scenes Recap (150 words)**
- Bulleted list of scenes published
- Highlight reel: most engaging scene, easter egg found, community moment
- Tease upcoming scenes

**Section 3: Nova's Pattern — Philosophical Connection (100 words)**
- Analytical insight from Nova's voice
- Connect this week's scenes to broader themes
- Pattern recognition element

**Section 4: Featured Product with Link (75 words)**
- Introduce one product from the catalog
- Value proposition
- Direct link to purchase/learn more

**Section 5: Community Highlight (75 words)**
- Feature a community member, comment, or moment
- Show appreciation
- Invite more participation

**Section 6: Easter Egg Hint for Next Week (50 words)**
- Cryptic hint in Luna's voice
- Teaser for upcoming scenes
- Encourages re-reading and discussion

**Section 7: Sign-Off**
- Warm closing
- Turbomindz motto: "Create. Connect. Trade Fair."
- Link to unsubscribe + archive

#### Welcome Email Sequence (3 emails)

**Email 1 (Sent immediately after signup): "Welcome to the Odyssey"**
- Subject: Welcome to the Odyssey — Your Journey Begins
- Body: Project introduction (what is The 888 Scenes?)
- CTA: Get free lead magnet (choose one: "Phygital Art 101" or "9 Philosophical Questions")
- Introduce newsletter frequency and what to expect

**Email 2 (Sent 3 days later): "Meet the Characters"**
- Subject: Meet Cosmo, Nova, Stella & Luna
- Body: Character introductions with personality sketches
- Share a highlight from the first few scenes
- CTA: Read the first scene (link to platform)

**Email 3 (Sent 7 days later): "Your First Constellation"**
- Subject: How to Find Easter Eggs (And Why They Matter)
- Body: Explain easter egg mechanics, show one example
- Direct to community (Discord, social channels)
- CTA: Join the community + subscribe to weekly dispatch

---

### SKILL 6: turbomindz-revenue-tracker
**Trigger words:** "revenue", "income", "tracker", "report", "KPI", "metrics", "dashboard"
**Description:** Tracks and reports revenue across all 20 streams. Generates weekly/monthly reports and transparency documents.

#### 20 Revenue Streams to Track

| # | Stream | Platform | Metric Type | Data Source |
|---|--------|----------|-------------|------------|
| 1 | NFT Sales (Polygon) | OpenSea | Sales price × count | OpenSea API |
| 2 | NFT Royalties | OpenSea | 10% per secondary sale | OpenSea API |
| 3 | Gumroad Products | Gumroad | Sales | Gumroad Dashboard |
| 4 | Patreon | Patreon | Monthly pledges | Patreon Dashboard |
| 5 | YouTube Ad Revenue | YouTube | CPM based | YouTube Studio |
| 6 | YouTube Channel Memberships | YouTube | Monthly subs | YouTube Studio |
| 7 | Newsletter Sponsorships | Buttondown | Brand deals | Buttondown + direct |
| 8 | Medium Membership | Medium | Claps/followers revenue | Medium Dashboard |
| 9 | Digital Products (Etsy) | Etsy | Sales | Etsy Dashboard |
| 10 | Physical Products (KDP) | KDP | Royalties | KDP Dashboard |
| 11 | Skillshare | Skillshare | Revenue share | Skillshare Dashboard |
| 12 | Udemy | Udemy | Course sales | Udemy Dashboard |
| 13 | Substack Subscriptions | Substack | Subscriber revenue | Substack Dashboard |
| 14 | Discord Membership | Discord | Tier subscriptions | Discord integrations |
| 15 | Affiliate Marketing | Various | Commission per sale | Tracking links |
| 16 | Sponsorships | Various | Brand partnerships | Direct/contracts |
| 17 | Consulting/Commissions | Direct | Custom work | Stripe/PayPal |
| 18 | Print on Demand | Printful/Redbubble | Product sales | Platform dashboards |
| 19 | Masterclass/Workshop | Gumroad/Teachable | Course sales | Platform dashboards |
| 20 | Grants/Support | Various | Funding rounds | Bank records |

#### Report Templates

**Daily Snapshot (2-3 lines)**
```
Today's Revenue: $XXX | Top performer: [stream name] ($XXX) | Total YTD: $XXXXX
```

**Weekly Summary (1 page)**
- Summary totals (this week vs last week vs YTD)
- Top 5 revenue streams (ranked by week's earnings)
- Notable changes or milestones
- Upcoming expected revenue events

**Monthly Transparency Report (full breakdown)**
- Executive summary (total month revenue, YoY comparison)
- Revenue by stream (detailed table with month/YTD/yearly trends)
- Commentary on major drivers
- Analysis of performance patterns
- Strategy adjustments or observations

**Quarterly Review (trends + strategy)**
- 3-month revenue trends (chart description)
- Seasonal patterns observed
- Stream health assessment (growing/stable/declining)
- Q2+ strategic recommendations
- Plan adjustments based on data

#### KPI Dashboard Fields
- **Total Revenue**: Current month, YTD, yearly totals
- **Revenue by Stream**: Table with weekly/monthly/cumulative
- **NFTs**: Listed count, sold count, total revenue, avg price
- **Subscribers**: Newsletter subscribers, Patreon members, YouTube members, Discord members
- **Community**: Discord members, engagement rate (reactions per message), social followers
- **Products**: Digital products sold (count + revenue), physical products sold
- **Social**: Followers across platforms, engagement rate (comments + shares per post), reach metrics

---

### SKILL 7: turbomindz-opensea-lister
**Trigger words:** "OpenSea", "list", "upload", "collection", "traits", "batch listing"
**Description:** Generates complete OpenSea listing data for individual or batch NFT uploads. Outputs copy-paste ready descriptions, traits, and pricing.

#### Per Listing Output Structure

1. **NFT Title**
   - Format: `TM-[NUMBER] — [SCENE TITLE]`
   - Example: `TM-001 — The Cathedral of First Questions`

2. **Full Description (Brand Voice, Template-Based)**
   - Opening: Hook sentence about the scene's significance
   - Scene narrative: 2-3 sentences describing what happens
   - Philosophical element: Connection to the theme
   - Character involvement: Who appears and their role
   - Rarity statement: Why this scene matters
   - Easter egg tease: Hint at hidden elements
   - Footer: "Part of The 888 Scenes. Create. Connect. Trade Fair."

3. **Properties/Traits List**
   ```
   Theme: [Theme name]
   Universe: [U1/U2/U3/etc]
   Act: [Act I/II/III]
   Chapter: [Chapter number]
   Characters: [Comma-separated names]
   Art Style: [Style]
   Scene Number: [Numeric]
   Marriage Status: [Single/Engaged/Married/Widowed/etc]
   Rarity: [Genesis/Standard/Character Intro/Key Scene/Milestone/Act Climax/Finale]
   ```

4. **Price in MATIC**
   - Auto-calculated from pricing tier
   - Include reasoning: "Genesis tier = 26 MATIC"

5. **Category**: Art

6. **Blockchain**: Polygon

#### Batch Mode Instructions
Given a range (e.g., TM-031 to TM-060):
1. Generate all listings in parallel using sub-agents
2. Each sub-agent handles one NFT
3. Output as:
   - **Structured table**: Filename | Title | Price | Traits
   - **JSON array**: Array of complete listing objects
   - **Individual files**: One Markdown file per scene with all listing data

#### Example Output Format (Single Listing)
```
## TM-151 — The Bridge Between Worlds

**Price:** 80 MATIC (Key Scene Tier)

**Description:**
Two universes collide on a shimmering bridge of light. Cosmo stands between worlds, seeing patterns that connect all things. But wait—is Nova already here? A turning point unfolds. In this moment, the Odyssey bends. Part of The 888 Scenes. Create. Connect. Trade Fair.

**Traits:**
- Theme: Alchemical Convergence
- Universe: U1 & U2 (Crossover)
- Act: Act II: Discovery
- Chapter: Chapter 15: Synthesis
- Characters: Cosmo, Nova
- Art Style: Renaissance-Cyberpunk Fusion
- Scene Number: 151
- Marriage Status: Engaged (Cosmo to Journey)
- Rarity: Key Scene

**Category:** Art
**Blockchain:** Polygon
```

---

### SKILL 8: turbomindz-qa-verifier
**Trigger words:** "verify", "check", "QA", "audit", "PD check", "brand check"
**Description:** Quality assurance skill that verifies content against all Turbomindz rules before publishing.

#### Verification Checklist

**1. PD Status (Public Domain Verification)**
- Is the quote from an author who died before 1956? ✓/✗
- Verification: Birth year — Death year = Before 1956?
- Action if uncertain: Flag as "⚠️ PD STATUS UNCERTAIN — Verify before publishing"

**2. Character Thresholds**
- Cosmo appears in scene? (Should be all scenes) ✓/✗
- Nova appears? (Must be TM-006 or later) ✓/✗
- Stella appears? (Must be TM-016 or later) ✓/✗
- Luna appears? (Must be TM-050 or later) ✓/✗
- Any characters appearing before their intro scene? ✗ = FAIL

**3. Easter Eggs (Exactly 5 per scene)**
- Story Callback present? ✓/✗
- Future Plant present? ✓/✗
- Universe-Specific detail present? ✓/✗
- Thematic Symbol present? ✓/✗
- Logo Placement present? ✓/✗
- Total count = 5? ✓/✗ (Flag if more or fewer)

**4. Brand Voice Mix**
- Witty elements (35%)? Sample: [quote] ✓/✗
- Warm elements (30%)? Sample: [quote] ✓/✗
- Curious elements (20%)? Sample: [quote] ✓/✗
- Artfully Simple elements (15%)? Sample: [quote] ✓/✗
- Corporate/preachy tone detected? ✗ = FAIL
- Character voice consistency? ✓/✗

**5. Pricing Accuracy**
- NFT scene number: TM-[NUMBER]
- Identified tier: [TIER NAME]
- Correct price? [EXPECTED PRICE] ✓/✗
- Pricing tier rationale correct? ✓/✗

**6. Motto Verification**
- "Create. Connect. Trade Fair." quoted exactly when used? ✓/✗

**7. Tagline Consistency**
- Brand tagline correct: "Create. Connect. Trade Fair." ✓/✗

**8. Color Compliance**
- Brand colors used correctly (if applicable)? ✓/✗
- Colors match brand guide? ✓/✗

**9. Tone & Messaging**
- No corporate/corporate speak? ✓
- No founder persona/human faces (except where approved)? ✓
- Authentic Turbomindz voice? ✓/✗

**10. Technical Compliance**
- Links working? ✓/✗
- Images/embeds rendering? ✓/✗
- Metadata complete? ✓/✗
- Formatting clean? ✓/✗

#### Output Format
```
QA VERIFICATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Item: [Content name/NFT title]
Date: [Verification date]

RESULTS:
[✓ PASS / ✗ FAIL]

DETAILED FINDINGS:
[Specific checks with results]

FLAGGED ITEMS:
1. [Item]: [Issue] → [Suggestion]
2. [Item]: [Issue] → [Suggestion]

RECOMMENDATION:
[Ready to publish / Requires fixes / Hold for review]

CORRECTIONS NEEDED:
1. [Specific fix required]
2. [Specific fix required]
```

---

## PART 2: AUTOMATED WORKFLOWS (5 Scheduled Tasks)

### WORKFLOW 1: daily-content-pipeline
**Schedule:** Every day at 8:00 AM (user's local timezone)
**Duration:** ~5 minutes automated generation
**Description:** Generates the day's social media content package.

#### Process (Parallel Sub-agents)
1. **Sub-agent A**: Generate Instagram caption for today's NFT scene
2. **Sub-agent B**: Generate Twitter post/thread for today's scene
3. **Sub-agent C**: Generate Discord announcement
4. **Sub-agent D**: Generate Pinterest pin description
5. **Sub-agent E**: Generate newsletter snippet (preview for Sunday dispatch)

All 5 run simultaneously. Upon completion, results are compiled into a single daily content package.

#### Output
File saved to: `/TMDZ/daily-content/[DATE]-content-package.md`

Structure:
```
# Daily Content Package — [DATE]

## Scene: TM-XXX — [Scene Title]

### Instagram Caption
[Caption text]

### Twitter Thread
[Tweet 1]
[Tweet 2]
...

### Discord Announcement
[Announcement]

### Pinterest Description
[Description]

### Newsletter Snippet
[Snippet for Sunday dispatch]

---
Generated: [Timestamp]
Status: Ready to post
```

---

### WORKFLOW 2: weekly-newsletter-draft
**Schedule:** Every Sunday at 10:00 AM (user's local timezone)
**Process:**

1. **Sub-agent A**: Review week's scenes and compile highlights
   - Which scenes were published
   - Engagement metrics
   - Key moments

2. **Sub-agent B**: Write Cosmo's personal opening
   - Warm reflection on the week
   - 100 words

3. **Sub-agent C**: Write Nova's Pattern section
   - Philosophical connection
   - 100 words

4. **Sub-agent D**: Compile community highlights + product feature
   - Recent community interactions
   - Product spotlight
   - 75 + 75 words

5. **Orchestrator**: Assemble all sections into complete newsletter draft
   - Insert sections in correct order
   - Add formatting
   - Quality check

#### Output
File saved to: `/TMDZ/newsletters/week-[WEEK_NUMBER]-draft.md`

Status: Ready for user review and minor edits before sending

---

### WORKFLOW 3: monthly-revenue-report
**Schedule:** 1st of every month at 9:00 AM (user's local timezone)
**Process:**

1. **Sub-agent A**: Compile NFT sales data
   - Count sold this month
   - Revenue by tier
   - Royalties collected

2. **Sub-agent B**: Compile digital product sales
   - Gumroad sales
   - Etsy sales
   - KDP royalties
   - Other platforms

3. **Sub-agent C**: Compile subscription revenue
   - Patreon new members + revenue
   - YouTube members
   - Newsletter subscribers
   - Substack subscriptions

4. **Sub-agent D**: Compile social media metrics
   - Follower growth across platforms
   - Engagement metrics
   - Ad revenue (if applicable)

5. **Orchestrator**: Generate full transparency report
   - Assemble all data
   - Create summary tables
   - Add month-over-month comparison
   - Add YTD figures
   - Add strategic observations

#### Output
File saved to: `/TMDZ/reports/[MONTH]-[YEAR]-transparency-report.md`

Status: Ready to share with community or archive

---

### WORKFLOW 4: nft-batch-processor
**Schedule:** On demand (triggered manually when you say "process batch TM-XXX to TM-YYY")
**Process:**

Given a range of scene numbers (e.g., TM-051 to TM-060):

1. Divide range into batches of 5-10 scenes
2. Launch parallel sub-agents (one per batch)
3. Each sub-agent generates complete NFT packages:
   - Scene title and naming
   - Pricing tier classification
   - Full metadata JSON
   - OpenSea listing copy
   - Midjourney prompt
   - Traits array
   - Easter eggs (5 total)
   - PD quote verification

4. Sub-agents work in parallel; orchestrator waits for all to complete
5. Results compiled into structured batch output

#### Output
Directory created: `/TMDZ/nft-batches/batch-[START]-[END]/`

Files per scene:
```
batch-051-060/
├── TM-051-scene.json       # Complete metadata + listing data
├── TM-052-scene.json
├── ...
├── TM-060-scene.json
├── batch-051-060-summary.md # Index of all scenes in batch
└── batch-051-060-opensea.csv # Copy-paste ready for bulk upload
```

---

### WORKFLOW 5: product-launch-sequence
**Schedule:** On demand (triggered when launching a new product)
**Process:**

When you say "Launch product: [Product Name]":

1. **Sub-agent A**: Generate product description + listing copy
   - Full Gumroad/Etsy description
   - Content outline
   - Sample content

2. **Sub-agent B**: Generate social media launch posts (all platforms)
   - Instagram post
   - Twitter thread
   - Discord announcement
   - Pinterest description
   - LinkedIn post
   - TikTok caption

3. **Sub-agent C**: Generate newsletter announcement
   - Newsletter section featuring product
   - CTA copy

4. **Sub-agent D**: Generate Discord community announcement
   - Formatted announcement
   - CTA to purchase/learn more

5. **Sub-agent E**: Generate cover art Midjourney prompt
   - Full MJ prompt for product cover
   - Alternative variations if needed

All 5 run in parallel. Orchestrator compiles into launch kit.

#### Output
Directory created: `/TMDZ/product-launches/[PRODUCT-NAME]/`

Files:
```
product-launches/[PRODUCT-NAME]/
├── product-description.md      # Full listing copy
├── content-outline.md          # Chapter breakdown
├── sample-content.md           # First section preview
├── social-posts/
│   ├── instagram.md
│   ├── twitter-thread.md
│   ├── discord.md
│   ├── pinterest.md
│   ├── linkedin.md
│   └── tiktok.md
├── newsletter-section.md       # For weekly dispatch
├── community-announcement.md   # Discord formatted
├── mj-prompt.md               # Cover art prompt
└── launch-kit-summary.md      # Checklist + links
```

Status: Ready to execute across all channels

---

## PART 3: AGENT ORCHESTRATION ARCHITECTURE

### Master Orchestrator: COSMO
**Role:** Central coordination hub

**Responsibilities:**
- Routes user requests to appropriate skills and workflows
- Coordinates parallel sub-agent execution
- Maintains project state and continuity
- Tracks progress against 90-day roadmap
- Manages resource constraints (rate limits, parallel agent limits)
- Escalates blockers and requests user decisions

**Decision-Making Logic:**
- Request type → Route to skill or workflow
- Complexity level → Determine if parallel sub-agents needed
- Resource constraints → Manage concurrent agent count
- Continuity → Maintain scene numbering, character tracking, revenue data

### Parallel Processing Rules

1. **Multi-Platform Content**
   - When: Generating content for 3+ platforms
   - Method: Launch 1 sub-agent per platform simultaneously
   - Max concurrent: 5 agents
   - Example: Instagram + Twitter + Discord + Pinterest + Newsletter = 5 agents parallel

2. **NFT Batch Processing**
   - When: Processing ranges of 10+ scenes
   - Method: Group into batches of 5-10, launch 1 sub-agent per batch
   - Max concurrent: 5 batches (50 scenes at once)
   - Wait: All complete before compiling results

3. **Product Creation**
   - When: Creating a new product or product bundle
   - Method: Launch 1 sub-agent per product simultaneously
   - Max concurrent: 5 products
   - Bundle example: 3 products = 3 parallel agents

4. **QA Verification**
   - When: Checking multiple content pieces
   - Method: Launch verification checks in parallel (PD check + brand check + technical)
   - Max concurrent: 3 check types per item
   - Multiple items: Sequential (one QA report at a time)

5. **Workflow Execution**
   - When: Running scheduled workflows (daily-content, weekly-newsletter, etc.)
   - Method: Sub-agents run in parallel; orchestrator waits for all
   - Max concurrent within workflow: 5 sub-agents

**Global Constraint:** Never exceed 5 concurrent sub-agents across all active processes.

### Daily Orchestration Sequence

**Morning (8:00 AM)**
1. daily-content-pipeline workflow triggers automatically
2. 5 sub-agents generate day's social content in parallel
3. Orchestrator compiles into daily package
4. Status update: "Today's content ready ✓"

**Daytime (During Work Hours)**
1. User interacts with Turbomindz Cowork
2. Requests routed to appropriate skills:
   - "Generate NFT for TM-###" → turbomindz-nft-producer
   - "Write caption" → turbomindz-content-writer
   - "Post to social" → turbomindz-social-poster
   - "Verify this" → turbomindz-qa-verifier
   - etc.
3. Skills execute with parallel processing where applicable

**Evening (Before Midnight)**
1. Orchestrator saves state
2. Updates progress tracker
3. Notes completed items for the day

**Sunday (10:00 AM)**
1. weekly-newsletter-draft workflow triggers
2. 5 sub-agents gather data and write sections in parallel
3. Draft compiled and ready for user review

**1st of Month (9:00 AM)**
1. monthly-revenue-report workflow triggers
2. 4 sub-agents compile revenue data from 20 streams in parallel
3. Orchestrator generates full transparency report
4. Report ready to publish or archive

### State Management

**Progress Tracker:** `/TMDZ/state/progress.json`

```json
{
  "current_day": 1,
  "ninety_day_plan": {
    "week_1": { "status": "in_progress", "tasks_completed": 3, "tasks_total": 5 },
    "week_2": { "status": "pending", "tasks_completed": 0, "tasks_total": 4 },
    ...
  },
  "nfts": {
    "total_scenes": 888,
    "scenes_created": 0,
    "scenes_listed": 0,
    "total_revenue": 0
  },
  "content": {
    "posts_published": 0,
    "newsletters_sent": 0,
    "articles_written": 0
  },
  "products": {
    "digital_created": 0,
    "digital_sold": 0,
    "physical_created": 0,
    "physical_sold": 0
  },
  "community": {
    "newsletter_subscribers": 0,
    "discord_members": 0,
    "twitter_followers": 0,
    "instagram_followers": 0,
    ...
  },
  "next_actions": [
    "Create TM-001 NFT package",
    "Launch product: Phygital Art 101",
    "Post daily content"
  ],
  "last_updated": "2026-03-17T08:00:00Z"
}
```

**Update Frequency:**
- Daily: next_actions, content posted count, social followers
- Weekly: newsletter count, community metrics
- Monthly: all revenue metrics, product counts
- Ongoing: nfts listing count

---

## PART 2.5: THE /week COMMAND — WEEKLY PRODUCTION PIPELINE

### Overview
The `/week [N]` command is the cornerstone of Turbomindz content operations. It generates 79 content pieces for an entire week, enabling a "produce on Sunday, post all week" workflow.

### Weekly Output:
| Content Type | Daily | Weekly Total |
|-------------|-------|-------------|
| NFT Packages (MJ prompt + metadata + listing) | 3 | 21 |
| Instagram Posts (reveal + educational) | 2 | 14 |
| Twitter Posts (reveal + thread/engagement) | 2 | 14 |
| Discord Announcements | 1 | 7 |
| Pinterest Pins | 3 | 21 |
| Medium Article | — | 1 |
| YouTube Script | — | 1 |
| Newsletter Draft | — | 1 |
| **TOTAL** | **11** | **79** |

### Parallel Sub-Agent Architecture:
**Batch 1 (simultaneous):**
- Sub-agent A: Generate 21 NFT packages (internally parallelized by day)
- Sub-agent B: Generate 14 Instagram posts + MJ prompts
- Sub-agent C: Generate 14 Twitter posts

**Batch 2 (simultaneous, after Batch 1):**
- Sub-agent D: Generate 7 Discord announcements
- Sub-agent E: Generate 21 Pinterest pins + MJ prompts
- Sub-agent F: Generate Medium article

**Batch 3 (final compilation):**
- Sub-agent G: Generate YouTube script
- Sub-agent H: Compile newsletter draft
- Orchestrator: Create WEEK_OVERVIEW.md

### Command Variants:
- `/week [N]` — Full production (79 pieces)
- `/week [N] nft-only` — Just 21 NFT packages
- `/week [N] instagram-only` — Just 14 Instagram posts
- `/week [N] day-[D]` — Just one day's content across all platforms

See WEEKLY_PRODUCTION_COMMAND.md for complete specifications.

---

## PART 4: INSTALLATION INSTRUCTIONS

### How to Create Each Skill in Claude Cowork

**Step-by-step for each skill:**

1. Open Claude Cowork
2. Say: "Create a new skill called [skill-name]"
   - Example: "Create a new skill called turbomindz-nft-producer"
3. Cowork opens the skill creator
4. Paste the SKILL.md contents from the section above
5. Test with a sample command (examples provided in each skill section)
6. Iterate and refine based on test results
7. Finalize and save the skill

**Testing checklist for each skill:**
- Sample trigger word works
- Output format matches specification
- Brand voice is present (verify for content skills)
- Parallel processing executes (if applicable)
- Results are accurate and complete

### How to Set Up Scheduled Tasks (Workflows)

Using Claude Cowork's schedule skill:

1. Say: "Schedule the daily-content-pipeline"
2. Provide details:
   - Name: daily-content-pipeline
   - Trigger: Every day at 8:00 AM
   - Prompt: [Use the WORKFLOW description from Part 2]
3. Cowork creates the scheduled task
4. Test manually once before enabling automation

**For each of the 5 workflows:**
1. daily-content-pipeline (daily at 8:00 AM)
2. weekly-newsletter-draft (Sundays at 10:00 AM)
3. monthly-revenue-report (1st of month at 9:00 AM)
4. nft-batch-processor (on demand, manual trigger)
5. product-launch-sequence (on demand, manual trigger)

### Recommended Installation Order (8 Skills + 5 Workflows)

**Priority 1 (Day 1):**
1. ✓ turbomindz-opensea-lister — Needed immediately for Day 1 NFT listing
2. ✓ turbomindz-qa-verifier — Critical for all content QA

**Priority 2 (Day 2):**
3. ✓ turbomindz-content-writer — Needed for all written content
4. ✓ turbomindz-nft-producer — Needed for ongoing NFT creation

**Priority 3 (Day 6):**
5. ✓ turbomindz-social-poster — Needed for social media operations
6. ✓ turbomindz-newsletter — Needed for Sunday dispatch

**Priority 4 (Day 2+):**
7. ✓ turbomindz-product-creator — Needed for product launches
8. ✓ turbomindz-revenue-tracker — Needed by Day 14+ for monthly report

**Workflows Installation (After Skills):**

After all 8 skills are installed:
1. Set up: daily-content-pipeline (Day 1 evening, test once before automation)
2. Set up: weekly-newsletter-draft (Day 1 evening, test before automation)
3. Set up: monthly-revenue-report (Day 1 evening, test before first report)
4. Set up: nft-batch-processor (on demand, no schedule)
5. Set up: product-launch-sequence (on demand, no schedule)

**Total Installation Time:**
- Skills: 30-45 minutes (5-10 minutes per skill × 8)
- Workflows: 15-20 minutes
- Testing: 20-30 minutes
- **Total: ~75-95 minutes to full setup**

### Pre-Installation Checklist
- [ ] Claude Cowork is open and ready
- [ ] You have access to all 8 skill descriptions above
- [ ] You have created the `/TMDZ/` directory structure
- [ ] You have sample scene data (TM-001, TM-002, etc.) ready
- [ ] You understand the Turbomindz brand voice rules
- [ ] You have verified the Turbomindz pricing tiers
- [ ] You have access to your 20 revenue stream data sources

### Post-Installation Verification Checklist

After all skills and workflows are installed:

**Skills Verification:**
- [ ] turbomindz-nft-producer: Generate test NFT (TM-001)
- [ ] turbomindz-content-writer: Write sample Instagram caption
- [ ] turbomindz-social-poster: Generate daily social package
- [ ] turbomindz-product-creator: Create lead magnet product
- [ ] turbomindz-newsletter: Draft sample newsletter
- [ ] turbomindz-revenue-tracker: Generate sample report
- [ ] turbomindz-opensea-lister: Generate sample listing
- [ ] turbomindz-qa-verifier: Verify sample content

**Workflows Verification:**
- [ ] daily-content-pipeline: Run manually, verify output
- [ ] weekly-newsletter-draft: Run manually, verify assembly
- [ ] monthly-revenue-report: Run manually with test data
- [ ] nft-batch-processor: Test with TM-001 to TM-010 range
- [ ] product-launch-sequence: Test with free lead magnet

**State Setup:**
- [ ] Create `/TMDZ/state/progress.json` with initial values
- [ ] Create `/TMDZ/daily-content/` directory
- [ ] Create `/TMDZ/newsletters/` directory
- [ ] Create `/TMDZ/reports/` directory
- [ ] Create `/TMDZ/nft-batches/` directory
- [ ] Create `/TMDZ/product-launches/` directory

---

## PART 5: USAGE GUIDE & EXAMPLES

### Triggering Skills (Interactive Use)

**Example 1: Create an NFT Package**
```
User: "Generate NFT package for TM-151"

Cowork routes to: turbomindz-nft-producer
Output includes:
- NFT title: "TM-151 — The Bridge Between Worlds"
- Pricing: 80 MATIC (Key Scene tier)
- Metadata JSON (OpenSea compatible)
- MJ prompt for art generation
- 5 easter eggs documented
- Traits array
- PD quote with verification
```

**Example 2: Batch NFT Creation**
```
User: "Batch NFT packages TM-051 to TM-060"

Cowork routes to: turbomindz-nft-producer (batch mode)
5 parallel sub-agents launched (batches of 10)
Output:
- `/TMDZ/nft-batches/batch-051-060/` directory
- 10 individual scene files
- Summary index
- OpenSea bulk upload CSV
```

**Example 3: Write Content**
```
User: "Write a Medium article about TM-175"

Cowork routes to: turbomindz-content-writer
Output:
- 2,000-word article
- SEO-optimized title
- Featured image description
- Turbomindz voice throughout
- Newsletter signup CTA
- Ready to paste into Medium
```

**Example 4: Social Media**
```
User: "Generate today's social posts"

Cowork routes to: turbomindz-social-poster
5 parallel sub-agents for: Instagram, Twitter, Discord, Pinterest, TikTok
Output:
- Ready-to-post caption for each platform
- Hashtags included
- Timing recommendations
- Compiled into daily package
```

**Example 5: Verify Content**
```
User: "QA check the newsletter draft"

Cowork routes to: turbomindz-qa-verifier
Checks:
- PD status on all quotes ✓
- Brand voice consistency ✓
- Motto correctly quoted ✓
- No corporate tone ✓
Output: "✓ PASS — Ready to send"
```

### Triggering Workflows (Scheduled or Manual)

**Daily Workflow (Auto at 8:00 AM)**
```
Automatic trigger: 8:00 AM daily
Process:
- 5 sub-agents generate daily content in parallel
- Compiled into `/TMDZ/daily-content/[DATE]-content-package.md`
- Status: "Today's content ready ✓"
- User reviews and posts manually (or integrate with auto-posting)
```

**Weekly Workflow (Auto on Sundays at 10:00 AM)**
```
Automatic trigger: Every Sunday 10:00 AM
Process:
- Sub-agents compile highlights, write sections
- Draft saved to `/TMDZ/newsletters/week-[NUMBER]-draft.md`
- Status: "Newsletter draft ready for review"
- User reviews, edits, and sends via Buttondown
```

**Monthly Workflow (Auto on 1st at 9:00 AM)**
```
Automatic trigger: 1st of month at 9:00 AM
Process:
- 4 sub-agents compile revenue from 20 streams
- Full report saved to `/TMDZ/reports/[MONTH]-[YEAR]-transparency-report.md`
- Status: "Transparency report ready"
- User shares with community or archives
```

**Batch Processing (Manual, On Demand)**
```
User: "Process batch TM-301 to TM-350"

Process:
- Range divided into 5 batches of 10
- Sub-agents work in parallel
- Each generates complete NFT package
- Results in `/TMDZ/nft-batches/batch-301-350/`
- Duration: ~5 minutes for 50 scenes
```

**Product Launch (Manual, On Demand)**
```
User: "Launch product: Philosophy Through Art Course"

Process:
- 5 sub-agents in parallel:
  1. Product description + outline
  2. Social posts (5 platforms)
  3. Newsletter announcement
  4. Discord announcement
  5. Cover art MJ prompt
- All files in `/TMDZ/product-launches/Philosophy-Through-Art-Course/`
- Duration: ~3 minutes
- User reviews and executes across channels
```

---

## PART 6: BRAND RULES & CORE GUIDELINES

### Every Skill Must Include These Rules

**The Turbomindz Voice (35/30/20/15 Mix):**
- 35% Witty: Clever observations, unexpected connections, playful
- 30% Warm: Genuine care, human connection, approachable
- 20% Curious: Questions, wonder, "But wait—", discovery mindset
- 15% Artfully Simple: Clear, no jargon, elegant simplicity

**The Motto (Use Exactly):**
"Create. Connect. Trade Fair."

**The Tagline (Use Exactly):**
"Create. Connect. Trade Fair."

**Public Domain Rule (Non-Negotiable):**
- ALL quotes from authors who died before 1956
- NEVER invent or paraphrase
- Flag uncertain quotes: "⚠️ PD STATUS UNCERTAIN"
- Verify birth/death dates before publication

**Character Thresholds:**
- Cosmo: All scenes (TM-001+)
- Nova: TM-006 onward (Meet the Analyst)
- Stella: TM-016 onward (The Practical Path)
- Luna: TM-050 onward (Whispers in the Dark)

**Easter Egg Rule:**
- Exactly 5 per scene, no more, no less
- Types: 1 callback, 1 future plant, 1 universe-specific, 1 thematic symbol, 1 logo placement

**No Forbidden Content:**
- No corporate/preachy tone
- No human faces (except approved founder imagery)
- No made-up quotes
- No brand violations
- No off-voice messaging

**Parallel Processing Mandate:**
- Use parallel sub-agents whenever creating content for 3+ platforms
- Batch NFT creation in groups of 5-10
- Product bundles use 1 agent per product in parallel
- Maximum 5 concurrent agents at any time

---

**Document Version:** 1.0
**Created:** March 17, 2026
**Last Updated:** March 17, 2026
**Status:** Ready for Installation
**Estimated Setup Time:** 75-95 minutes

For updates or questions about these skills, workflows, and agents, refer to the Turbomindz project documentation or contact the project orchestrator (Cosmo).

---
