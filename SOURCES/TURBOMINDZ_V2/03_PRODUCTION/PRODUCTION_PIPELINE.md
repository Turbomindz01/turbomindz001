# TURBOMINDZ Production Pipeline
## Daily Workflow for NFT + Episodic Series Production

**Project Overview**
- 1,111 total NFTs across 39 episodes
- 28 NFTs per episode + 19 milestones across series
- 4 NFTs produced per day
- ~278 production days total
- 7 production days per episode
- Final episodes: 2-5 minutes each
- Budget: under $50/month
- Platform: OpenSea on Polygon

---

## TABLE OF CONTENTS
1. Daily Production Workflow
2. Tool Specifications & Setup
3. Content Templates & Prompts
4. Quality Control
5. Weekly Assembly & Publishing
6. Batch Production Optimization
7. Troubleshooting & Contingencies

---

# SECTION 1: DAILY PRODUCTION WORKFLOW

## Daily Schedule Overview
- **Morning Block (7am-9am):** Image generation, descriptions, video setup
- **Afternoon Block (2pm-3:30pm):** Video review, OpenSea listing, social content
- **Evening Block (8pm-8:30pm):** Social posting, community engagement, tracking

---

## MORNING BLOCK: IMAGE GENERATION & VIDEO SETUP (2 hours)

### Task 1: Generate 4 NFT Images in Nano Banana 2 (45 minutes total)
**Time per image: ~10-12 minutes (including prompt writing, generation, download)**

**Steps:**
1. Open Google AI Studio (https://aistudio.google.com) or fal.ai Nano Banana 2 interface
2. For each of 4 images:
   - Copy the appropriate daily prompt from your shot list (pre-written in episode planning)
   - Paste into Nano Banana 2 text field
   - Set parameters in UI:
     - **Aspect Ratio:** 16:9 (default for video compatibility)
     - **Resolution:** 1024x576 (fast generation, upscale later if approved)
     - **Steps:** Default (typically 30-50)
   - Click "Generate"
   - Monitor generation (typically 1-5 seconds)
   - Right-click → Download PNG with transparent background
   - Save to: `/03_PRODUCTION/DAILY_OUTPUTS/[DATE]/NFT_[01-04].png`
3. Do NOT edit or post-process yet — keep raw outputs clean

**Nano Banana 2 Differences from Midjourney:**
- NO flag syntax (--ar, --v, --niji, etc.)
- Parameters set in the UI, not in the prompt
- Prompt style: descriptive prose sentences, not tag lists
- Supports aspect ratios directly: 1:1, 4:5, 16:9, 21:9, 9:16, 3:2
- Much faster (1-5 seconds vs Midjourney's 30-60 seconds)

---

### Task 2: Write 4 NFT Descriptions with Quotes & Easter Eggs (30 minutes)

**Description Structure (use template below):**
```
[Scene Title]

[2-3 sentence visual description of what's happening in the image]

"[Public Domain Quote]" — [Author]
[1-2 sentence interpretation of how quote relates to the scene]

Hidden Details:
- [Easter Egg #1]
- [Easter Egg #2]
- [Easter Egg #3]
- [Easter Egg #4]
- [Easter Egg #5]

Episode: [#] | Scene: [#] | Day: [#]
NFT Series: TURBOMINDZ | Part of 1,111-piece animated collection
```

**Public Domain Quote Requirements:**
- Author must have died before January 1, 1956
- Verify on: https://librivox.org (check copyright status)
- Safe authors: Shakespeare (1616), Austen (1817), Dickens (1870), Twain (1910), Dostoyevsky (1881), Woolf (1941), etc.
- Do NOT use quotes from authors who died after 1955

**Easter Egg Rules:**
- 5 hidden details per scene (NFT)
- Easter eggs are visual details visible in the image that reference:
  - Aardman/Claymation culture
  - NFT/Web3 community inside jokes
  - Hidden character cameos
  - Blockchain/tech references
  - Series mythology
- Document each egg in description so collectors can find them
- Each egg should be something a close viewer can spot

**Time allocation:** ~7-8 minutes per description
- Save to: `/03_PRODUCTION/DAILY_OUTPUTS/[DATE]/NFT_[01-04]_DESCRIPTION.txt`

---

### Task 3: Set Up 4 Video Clips in Higgsfield.ai (45 minutes)

**Steps:**

1. **Log into Higgsfield.ai** (free tier account)
   - Note: Verify you have remaining daily generations (free tier allows multiple per day)

2. **For each of 4 NFT images:**

   **Part A: Upload Reference Image & Set Parameters (5 min)**
   - Click "New Generation"
   - Upload the PNG from Task 1 (NFT_01.png, etc.)
   - Select model (see guidance below)
   - Set duration: 10-15 seconds (optimal for stitching)
   - Set resolution: 480p (render low first, upscale when approved)
   - Set aspect ratio: 16:9
   
   **Part B: Model Selection Logic:**
   - **WAN 2.5:** Use for continuity, character consistency across cuts
   - **Kling 3.0:** Use for physics realism, outdoor scenes with motion
   - **Veo 3.1:** Use for highest quality, complex scenes (slowest)
   - **Default:** WAN 2.5 (best balance for claymation style)

   **Part C: Advanced Options (only if applicable):**
   - **Motion Strength:** 50-70% (keep movement subtle for claymation feel)
   - **Zoom:** 0% (no artificial zoom unless shot list specifies)
   - **Camera Movement:** Select if shot list specifies (pan left/right, zoom, dolly)
   
   **Part D: Reference Anchors (if available):**
   - If this scene uses a hero frame or key location, lock it with Reference Anchor
   - Example: If Scene 1 establishes the main characters, set as anchor for consistency across Scene 1-7 video outputs
   
   **Part E: Soul ID Setup (one-time per character):**
   - If this is the first appearance of a character in the episode:
     - Train Soul ID from 3-5 reference images (can be screenshots from previous episodes or sketches)
     - Upload reference images to Soul ID database
     - Link Soul ID to this generation
     - Future videos with same character will use Soul ID for consistency
   
   **Part F: Submit & Monitor**
   - Click "Generate" / "Submit"
   - Do NOT close tab or interrupt
   - Free tier: Usually 10-30 minute wait times
   - Note the submission time and expected completion
   
3. **Repeat for 4 images** (stagger submissions so not all running simultaneously)

**Higgsfield Output Management:**
- Do NOT download until afternoon review block
- Once generated, clips auto-save in your Higgsfield dashboard
- Mark each clip with NFT number and generation time
- Note any failures for re-run in afternoon block

**Critical:** Batch these submissions so they complete during your transition to Afternoon Block.

---

## AFTERNOON BLOCK: VIDEO REVIEW & OPENSEA LISTING (1.5 hours)

### Task 4: Review & Approve Video Clips (30 minutes)

**Steps:**

1. **Log into Higgsfield.ai** (check generation status)

2. **For each of 4 clips:**
   - **Preview in dashboard** — play full 10-15 second clip
   - **Check these criteria:**
     - ✓ Smooth motion (no stuttering or artifacts)
     - ✓ Character/object consistency (no morphing/melting)
     - ✓ Lighting consistent with image
     - ✓ No green screen artifacts or color bleeding
     - ✓ Audio not required (you'll add in post-production)
     - ✓ Duration: 10-20 seconds (acceptable range)
   
   **If APPROVED:**
   - Download as MP4 (1080p if available, otherwise 480p)
   - Save to: `/03_PRODUCTION/DAILY_OUTPUTS/[DATE]/NFT_[01-04]_VIDEO.mp4`
   - Note resolution and duration
   
   **If REJECTED (artifacts, inconsistency, or motion too fast/slow):**
   - Click "Re-generate" in Higgsfield dashboard
   - Try different model (if WAN 2.5 failed, try Kling 3.0)
   - Adjust motion strength (up or down by 10%)
   - Re-submit and check back in 15 minutes
   - Maximum 2 re-runs per clip (time constraint)
   - If 2 failures: Use still frame export (Plan B backup)

3. **Document results in tracking sheet:**
   - Date, NFT #, Generation time, Model used, Resolution, Approved/Rejected

**Contingency: If video generation fails both times**
- Export still frame from Nano Banana 2 image
- Use in final episode as static/poster frame
- Note this in metadata: "Static frame from [NFT Name]"
- Do NOT delay daily NFT listing

---

### Task 5: List 4 NFTs on OpenSea (40 minutes)

**Pre-requisites (setup once):**
- MetaMask wallet configured on Polygon network
- OpenSea account linked
- 0.5 POL in wallet for gas fees (can be reused across multiple listings)

**For each of 4 NFTs (10 minutes per NFT):**

1. **OpenSea Dashboard → Create**

2. **Fill NFT Details:**
   - **Name:** `TURBOMINDZ #[###]` (e.g., `TURBOMINDZ #0001`)
   - **Description:** Paste from Task 2 (NFT_[01-04]_DESCRIPTION.txt)
   - **Image:** Upload PNG from Task 1
   - **Animation URL (optional):** Leave blank for now (batch upload video links after review)
   - **Collection:** Select "TURBOMINDZ" (should already exist, or create once)
   - **Blockchain:** Polygon (lower fees)
   - **Royalties:** 10% (your revenue stream per future sale)
   - **Properties (Traits):**
     - Episode: [#]
     - Scene: [#]
     - Production Day: [#]
     - Content Type: "Video + NFT"

3. **Set Availability:**
   - **Status:** List for sale (or Set price now)
   - **Price:** 0.5 POL (equivalent ~$0.50 USD, adjust per strategy)
   - **Duration:** 6 months
   - **Quantity:** 1 (each NFT is unique, 1/1)

4. **Add Properties/Metadata:**
   ```
   - Episode Number: [#]
   - Scene Number: [#]
   - Day Produced: [DATE]
   - Quote Author: [Author Name]
   - Character(s): [if applicable]
   - Location: [if applicable]
   - Easter Eggs: 5
   ```

5. **Review & List:**
   - Double-check name, description, image
   - Confirm price and royalty
   - Click "Create & List"
   - Sign transaction in MetaMask
   - Wait for confirmation (~1-2 minutes on Polygon)
   - Copy OpenSea URL to tracking sheet

**Batch Template for Description Metadata:**
```
TURBOMINDZ #0001
Episode 1 | Scene 1 | Day 1

A vibrant plasticine figure emerges from golden morning light in a surreal landscape where impossible geometry bends playfully around soft, tactile forms. Every surface gleams with warmth, catching light like museum-quality textured clay.

"The only way to do great work is to love what you do." — Steve Jobs
This scene captures the beginning of our protagonist's awakening—love of craft channeled into pure creation.

Hidden Details:
- Bitcoin logo subtly embedded in the rock formation
- Aardman sheep silhouette in the cloud pattern
- Wallace & Gromit screwdriver hidden in tree bark
- Tiny OpenSea logo on NFT character's vest
- Goku's Nimbus cloud reference in sky

Episode: 1 | Scene: 1 | Day: 1
NFT Series: TURBOMINDZ | 1/1 | Part of 1,111-piece animated collection
```

---

### Task 6: Create Social Media Content (25 minutes)

**Instagram Caption (300-350 words):**

```
🎬✨ TURBOMINDZ Day [#]: [Scene Title]

Meet [Character Name]—a plasticine dreamer navigating a world of impossible geometry and golden light. In today's scene from Episode [#], we see [brief scene description].

"[Quote]" — [Author]

This moment captures the essence of [thematic interpretation]. Each TURBOMINDZ NFT is a frozen frame in our animated series—a collectible scene that's also a work of art. 28 scenes per episode, 39 episodes, 1,111 unique pieces. Every day we're building something never seen before in NFT art.

Hidden in this frame are 5 easter eggs—can you spot them all? 👀
🔍 [List 2-3 of the easter eggs to tease discovery]

This NFT is live on @opensea (Polygon network) — link in bio. As holders of TURBOMINDZ, you're not just collecting art; you're collecting scenes from an animated world that exists because of this community.

Who's your favorite character so far? Drop a comment below!

#TURBOMINDZ #NFT #Polygon #AnimatedSeries #ClayAnimation #OpenSea #Web3Art #PixarMeetsAardman
```

**Twitter/X Post (280 characters, 2-3 tweets):**

```
Tweet 1:
🎬 NEW: TURBOMINDZ #[###] is live on @opensea! 
Scene from Episode [#]: [Title]
"[Quote]" — [Author]
Every NFT = a scene in our 39-episode animated series. 1/1 on Polygon.
🔗 [OpenSea link]
#NFT #Web3

Tweet 2:
Can you find all 5 easter eggs hidden in today's scene? 👀 
🧩 Bitcoin in the rocks
🧩 Aardman reference in clouds
🧩 [egg 3]
🧩 [egg 4]
🧩 [egg 5]
Collect TURBOMINDZ #[###] now!

Tweet 3:
278 days of production. 1,111 NFTs. 39 episodes. 
Every day we're shipping this dream.
Come collect a scene. Own a moment. Become a TURBOMINDZ member.
```

**Discord Announcement (short + engaging):**

```
🎬 NEW SCENE ALERT!
━━━━━━━━━━━━━━━━━━
Episode [#] | Scene [#] | Day [#]

🖼️ [Scene Title]
"[Quote]" — [Author]

[2 sentence scene description]

Find 5 easter eggs hidden in this frame—first person to name them all gets a 🎁

🔗 Collect on OpenSea: [link]
```

**Save to:** `/03_PRODUCTION/DAILY_OUTPUTS/[DATE]/SOCIAL_CONTENT_[DATE].txt`

---

## EVENING BLOCK: POSTING & COMMUNITY (30 minutes)

### Task 7: Post to Social Channels (15 minutes)

1. **Instagram:**
   - Copy caption from Task 6
   - Upload NFT image (PNG)
   - Add 5-7 relevant hashtags
   - Schedule or post immediately (aim for 8pm UTC or adjust per audience timezone)

2. **Twitter/X:**
   - Post 3-tweet thread from Task 6
   - Link to OpenSea in first tweet
   - Reply to own thread with: "What's your favorite easter egg?"

3. **Discord:**
   - Post announcement in #new-releases channel
   - Pin the message for 24 hours

4. **Pinterest (Daily Pin — 3 minutes):**
   - Select the best scene of the day
   - Upload 2:3 vertical image (generate a vertical crop from Nano Banana 2 or crop the 4:5 image)
   - **Title:** Keyword-rich, descriptive (100 chars max) — e.g., "Claymation Astronaut in Alchemical Cathedral | Stop Motion Art"
   - **Description:** 300-500 chars, keyword-rich paragraph mentioning art style, mood, Turbomindz, easter eggs
   - **Board:** Rotate primary board daily across all 10 boards, save to 1-2 secondary boards
   - **Link:** Linktree or direct OpenSea URL
   - **Curated repins:** Save 2-3 pins from other creators to your boards (claymation, philosophy, space art, miniatures)

5. **Optional: TikTok/YouTube Shorts**
   - Create 15-30 second clip: NFT image → short video snippet → OpenSea link
   - Post with caption: "Collecting TURBOMINDZ? Today's scene: [Title]"

### Task 8: Community Engagement (10 minutes)

- Reply to comments on Instagram (if any)
- Like/retweet community posts that mention TURBOMINDZ
- Respond to Discord questions about today's NFT
- Check MetaMask for wallet notifications (anyone bought today's NFT?)
- Check Pinterest notifications (saves, comments, followers)

### Task 9: Update Tracking Spreadsheet (5 minutes)

**Columns to track:**
| Date | NFT # | Episode | Scene | Image (✓) | Description (✓) | Video (✓) | Listed (✓) | Social Posted (✓) | Price Sold | Notes |
|------|-------|---------|-------|-----------|------------------|-----------|------------|-------------------|-----------|-------|

Example:
| 2026-04-10 | #0001 | 1 | 1 | ✓ | ✓ | ✓ | ✓ | ✓ | 0.5 POL | WAN 2.5, no issues |

---

# SECTION 2: TOOL SPECIFICATIONS & SETUP

## Nano Banana 2 Setup & Best Practices

### Access Options:
1. **Google AI Studio** (free, easiest)
   - https://aistudio.google.com
   - Sign in with Google account
   - Navigate to Image Generation
   - Select Nano Banana 2
   
2. **fal.ai** (free tier, 500+ monthly credits)
   - https://www.fal.ai
   - Create account
   - Search "Nano Banana 2"
   - Free credits reset monthly

3. **RunwayML** (paid, but integrated editing)
   - Optional if you want post-generation editing in same platform

### Nano Banana 2 Prompt Template

**Structure:** [Scene Setup] + [Visual Style] + [Emotional Tone] + [Technical Details]

**Template:**
```
In a [location/setting], a [subject/character] [action/pose]. 
The atmosphere is [mood], rendered in [art style]. 
Lighting: [light source and quality]. 
Colors: [dominant color palette]. 
Details: [specific textures/materials to emphasize].
```

**TURBOMINDZ Signature Style (use in every prompt):**
"Plasticine stop-motion animation aesthetic. Pixar meets Aardman Animations. Warm teal and gold color palette. Museum-quality sculptural detail. Volumetric golden-hour lighting. Rich tactile textures. Impossible geometry with playful, whimsical proportions. Each surface catches light like hand-sculpted clay."

### 5 Example Prompts (Ready to Use)

**Example 1: Hero Character Introduction**
```
In a surreal landscape where impossible architecture bends and curves, a curious plasticine figure with expressive features stands at the edge of a golden cliff, gazing out at a realm of floating geometric shapes. The atmosphere is wonder-filled and hopeful. Rendered in plasticine stop-motion animation aesthetic, Pixar meets Aardman Animations. Lighting is warm, volumetric golden-hour light catching every sculptural detail. Colors: dominant warm teal and gold with rich cream accents. Details: Every surface gleams with tactile, museum-quality texture. Impossible geometry warps playfully around the figure. Stop-motion quality clay-like skin with visible sculpting marks.
```

**Example 2: Intimate Character Moment**
```
Close-up of a character's clay-sculpted face, eyes wide with realization, framed by soft fabrics and subtle environmental storytelling elements. The character is surrounded by objects that hint at their journey—forgotten tokens, fragments of memories rendered as tactile shapes. Mood: contemplative, bittersweet. Plasticine stop-motion aesthetic, museum-quality Aardman-style character design. Volumetric golden lighting creates soft shadows across the clay surface. Warm teal and cream colors dominate. Details: Visible hand-sculpting marks on skin. Fine textile details. Micro-expressions captured with precision.
```

**Example 3: Dynamic Action Scene**
```
Mid-leap, a plasticine figure launches through a landscape of shifting, impossible geometry—towers stretch and bend, platforms float mid-air, crystalline structures refract golden light. The action is swift but sculptural, capturing the moment of peak motion. Atmosphere: exhilarating, kinetic energy tempered by whimsy. Stop-motion animation style, Pixar dynamism meets Aardman charm. Volumetric lighting bathes the scene in warm gold and teal. Colors: rich, saturated palette with cream highlights. Details: Cloth and fabric flutter in implied wind. Geometric forms cast long, dramatic shadows.
```

**Example 4: Environmental Storytelling**
```
A sprawling landscape of interconnected small worlds—miniature towns made of clay, gardens of sculptural flora, impossible architecture stacked like a dream. In the foreground, details: a tiny character discovers something precious. The scale is vast but intimate. Mood: awe, discovery. Plasticine, museum-quality detail throughout. Pixar production design meets Aardman's humor and heart. Warm teal and gold lighting bathes every surface. Details: Hand-painted clay textures, visible brush strokes, rich surface detail that rewards close viewing.
```

**Example 5: Emotional Climax**
```
Silhouetted against a massive golden sky, a character stands at a threshold—behind them, a world they've known; ahead, the unknown. The composition is monumentally quiet, vulnerable. Every texture—clay skin, worn fabrics, weathered surfaces—tells a story of growth. Mood: bittersweet, determined, transformative. Plasticine stop-motion, Aardman's emotional depth, Pixar's visual polish. Volumetric lighting creates an almost religious quality to the golden hour. Colors: warm teal shadows against gold light, cream and earth tones. Details: Every imperfection in the sculpting becomes beautiful. Textures invite touch.
```

### Nano Banana 2 Parameter Cheat Sheet

| Parameter | Setting | Rationale |
|-----------|---------|-----------|
| Aspect Ratio | 16:9 | Optimized for video, 1080p final format |
| Resolution | 1024x576 or 1280x720 | Fast generation, good enough to assess quality |
| Steps | Default (30-50) | Nano Banana is fast; more steps = minimal gain |
| Quality | High | Use every time |
| Negative Prompt | (leave blank usually) | Not needed for descriptive prompts |
| Seed | Random (unless consistency needed) | Set same seed only if re-running exact same prompt |

---

## Higgsfield.ai Setup & Workflow

### Account Setup
1. Go to **https://www.higgsfield.ai**
2. Sign up with email or Google
3. Free tier: Multiple daily video generations, 1080p output, 20 second max (ideal for this project)
4. Join their Discord for community tips

### Model Selection Guide

**WAN 2.5** (Recommended for this project)
- **Best for:** Consistency, character animations, smooth transitions
- **Speed:** Fast (5-15 min)
- **Quality:** 8/10
- **Use case:** Daily claymation character clips, most TURBOMINDZ scenes
- **Motion strength:** 60% (subtle, stop-motion appropriate)

**Kling 3.0**
- **Best for:** Physical realism, outdoor scenes, natural motion
- **Speed:** Fast (5-15 min)
- **Quality:** 8.5/10
- **Use case:** Action sequences, landscape transitions, dynamic movement
- **Motion strength:** 70% (more aggressive, naturalistic)

**Veo 3.1**
- **Best for:** Highest quality, complex compositions, detailed backgrounds
- **Speed:** Slow (30-60 min)
- **Quality:** 9.5/10
- **Use case:** Hero shots, episode climaxes, final scenes
- **Motion strength:** 50% (controlled, cinematic)

### Daily Workflow in Higgsfield

**Step-by-Step Process:**

1. **Log in** at https://higgsfield.ai/dashboard
2. **Click "Create New"** → Select "Image to Video"
3. **Upload Your Image:**
   - Select PNG from Task 1 (NFT_01.png)
   - Ensure image is 1024x576 or larger (portrait scales fine)
   - Click "Next"

4. **Basic Settings:**
   - **Model:** Select WAN 2.5 (default)
   - **Duration:** 10 seconds (default, good starting point)
   - **Output Resolution:** 480p (render fast, upscale later if needed)
   - **Aspect Ratio:** Auto-detected from upload (should be 16:9)
   - **Frame Rate:** 24fps (cinematic, standard)

5. **Advanced Options (expand if needed):**

   **A. Motion Settings:**
   - **Motion Strength:** 60% (default WAN 2.5)
   - What this does: Controls how much the image "moves" in the video
   - Too high (80-100%): Unrealistic, jarring for claymation
   - Too low (20-30%): Static, boring
   - Sweet spot for TURBOMINDZ: 55-70%

   **B. Camera Movement (if shot list specifies):**
   - **Pan Left/Right:** Slight movement adds production value
   - **Zoom In:** 5-10% (subtle, not aggressive)
   - **Dolly:** Subtle depth movement
   - **Rotation:** Usually leave at 0

   **C. Reference Anchors (for hero frames):**
   - If this is the first appearance of key character/location, enable Reference Anchor
   - Function: "Lock" this image as the visual standard for this element
   - Future clips with the same character will reference this anchor
   - Use 2-3 reference anchors per episode maximum

   **D. Soul ID (Character Consistency):**
   - **When to use:** First appearance of a named character
   - **How to set up:**
     1. Click "Configure Soul ID"
     2. Upload 3-5 reference images (character from different angles/expressions)
     3. Name the character (e.g., "Astra_Main_Character")
     4. Click "Train Soul ID"
     5. Wait 5-10 minutes
     6. Future videos with this character: enable Soul ID toggle and select trained character
   - **Benefit:** Character looks consistent across all 28 clips in the episode

6. **Generate:**
   - Click "Generate" or "Create Video"
   - You'll see a queue status
   - Estimated time: 10-20 minutes (WAN 2.5)
   - DO NOT close the tab during generation
   - Free tier usually completes within 30 minutes

7. **Monitor & Download:**
   - Refresh dashboard every 10 minutes to check status
   - Once complete, video appears in your Dashboard
   - Click the clip → Click "Download" → Select "MP4 1080p" (or 480p if first draft)
   - Save to: `/03_PRODUCTION/DAILY_OUTPUTS/[DATE]/NFT_01_VIDEO.mp4`

### Soul ID Training (One-time per character)

**When to do this:** Episode planning phase, before production starts

**Process:**

1. Gather 3-5 reference images:
   - Best quality image of the character (from previous episode or concept art)
   - 2-3 other angles or expressions
   - Can be hand-drawn sketches, 3D renders, or screenshots

2. In Higgsfield dashboard:
   - Click "Soul ID" tab
   - Click "Create New Soul ID"
   - Upload images
   - Name: `Character_Name_ID` (e.g., `Astra_Main`)
   - Click "Train"
   - Wait 5-10 minutes

3. Save the Soul ID name to your episode planning document:
   - Episode 1, Character 1: Astra_Main
   - Episode 1, Character 2: Orion_Sidekick
   - Etc.

4. In daily video generation:
   - Enable "Use Soul ID"
   - Select the appropriate Soul ID from dropdown
   - Generate as normal
   - Character will be consistent across all 28 videos

### Multi-Shot Generation (if available)

**Note:** This feature may vary by account tier. Check your Higgsfield settings.

**If enabled:**
- Upload ONE reference image
- Higgsfield generates 3-4 camera angle variations
- Saves time: 1 image → 4 video variations
- Perfect for: action sequences, scene transitions
- Downside: Less creative control per angle

**How to use:**
- In Advanced Options, look for "Multi-Shot" toggle
- Enable it
- It will generate and offer you 4 variations
- Select the 3 best angles
- Download all 3
- Use these for montage/cuts in post-production

---

## OpenSea Listing Technical Details

### Wallet Setup (One-time)
1. Download MetaMask browser extension
2. Create wallet or import existing
3. Switch network to **Polygon Mumbai Testnet** (or Polygon Mainnet for real listings)
4. Add 0.5 POL to wallet (~$0.50 USD)
   - Buy on Kraken/Crypto.com and transfer, OR
   - Use faucet if on testnet: https://faucet.polygon.technology/

### Collection Setup (One-time)

**In OpenSea:**

1. Go to your Profile → Collections
2. Click "Create a Collection"
3. **Collection Name:** TURBOMINDZ
4. **URL:** turbomindz-series (or your choice)
5. **Description:** 
   ```
   TURBOMINDZ: A 1,111-piece NFT collection + 39-episode animated series.
   Each NFT is a scene from our episodic animated story. Own the art. Become part of the universe.
   
   - 1,111 unique scenes across 39 episodes
   - 28 scenes per episode
   - 4 new scenes released daily
   - Animated video clip included with each NFT
   - Polygon blockchain (low gas fees)
   - 10% creator royalty on all future sales
   
   Join us: [discord.gg/yourserver] | [twitter.com/yourhandle]
   ```
6. **Logo:** Upload a TURBOMINDZ logo (or title card from Episode 1)
7. **Featured Image:** Upload a hero composition from a key scene
8. **Category:** Art
9. **Payment Tokens:** Select WMATIC (Polygon native token)
10. **Creator Fee:** 10%
11. **Create Collection**

### NFT Listing Metadata Template

**Field:** → **Content to Enter**

**Name:** → `TURBOMINDZ #0001` (always use this format for consistency)

**Description:** → [Paste from Task 2, includes quote + easter eggs]

**Image:** → PNG file from Nano Banana 2 (NFT_01.png)

**Animation URL:** → (Leave blank for now; add after video approval)
- To add later: Edit NFT → Scroll to "Animation URL" → Paste Higgsfield video URL

**Properties (Traits):**
```
Episode_Number: "1"
Scene_Number: "1"
Production_Day: "1"
Animated: "Yes"
Quote_Author: "Steve Jobs"
Character_Primary: "Astra"
Location_Primary: "Golden Cliff"
Easter_Eggs_Count: "5"
Content_Type: "Video + NFT"
Chain: "Polygon"
```

**Price:** → 0.5 POL (or adjust based on your strategy)

**Duration:** → 6 months (standard listing duration)

**Royalties:** → 10% (this ensures you earn on secondary sales)

**Collection:** → TURBOMINDZ

---

# SECTION 3: WEEKLY PRODUCTION WORKFLOWS

## Weekly Schedule (Every 7 Days, Day 8 of each episode)

### Day 8: Video Stitching & Episode Assembly (3-4 hours)

**Context:** You've generated 28 video clips (1 per day for 7 days). Now stitch them into a coherent 2-5 minute episode.

**Tools Needed:**
- DaVinci Resolve (free version sufficient)
- All 28 MP4 files from the week
- Audio track (royalty-free instrumental from YouTube Audio Library)

**Workflow:**

1. **Organize Files:**
   - Create folder: `/03_PRODUCTION/EPISODES/EPISODE_01/`
   - Copy all 28 video clips into this folder
   - Name them sequentially: `EP01_SCENE_01.mp4`, `EP01_SCENE_02.mp4`, etc.
   - Verify all videos are 1080p and 24fps (check properties)

2. **Open DaVinci Resolve:**
   - Create new project: "TURBOMINDZ_EP01"
   - Set timeline resolution: 1920x1080 (1080p)
   - Set timeline frame rate: 24fps

3. **Import Clips:**
   - File → Import Media → Select all 28 MP4s
   - Drag each clip to the timeline in sequence (Scene 01 first, Scene 28 last)

4. **Timeline Assembly:**
   - Each clip should be 10-20 seconds
   - Total runtime for 28 clips: ~280-560 seconds (4.7-9.3 minutes)
   - **Target episode length:** 3-5 minutes, so trim or speed up as needed
   - **Pacing:** No scene should be shorter than 8 seconds or longer than 25 seconds

5. **Add Transitions:**
   - Between each scene clip, add a transition:
     - Dissolve (0.5 second): between most clips
     - Fade to Black (1 second): between major scene changes
   - Right-click between clips → Add Transition → Select type
   - Keep transitions subtle; this isn't a music video

6. **Color Grading (Optional but recommended):**
   - Select all clips (Ctrl+A on timeline)
   - Right-click → Add to Color Correction Group
   - Slightly warm the entire episode:
     - Increase saturation: +5%
     - Increase shadows: +2%
     - Keep overall look cohesive

7. **Audio Track:**
   - Download royalty-free instrumental from YouTube Audio Library (search "atmospheric", "ambient", "adventure")
   - Ensure 2-3 minutes duration
   - Drag to audio track in timeline
   - Level: -6dB (background, not overpowering)
   - Add fade-in (0.5 sec) at start, fade-out (1 sec) at end

8. **Titles & Credits:**
   - Add opening title: "TURBOMINDZ: Episode 1"
   - Duration: 3 seconds on black background
   - Font: Bold, clean (Arial or similar)
   - Size: 72pt
   - Color: White
   
   - Add closing credits: 2 seconds on black
   - Text: "Created by [Your Name] | Collected on OpenSea | Subscribe for Episode 2"
   - Font: 36pt

9. **Export:**
   - File → Export → Video Export
   - Codec: H.264 (MP4)
   - Resolution: 1920x1080
   - Frame rate: 24fps
   - Bitrate: 15-25 Mbps (high quality, <500MB file)
   - Output: `/03_PRODUCTION/EPISODES/EPISODE_01_FINAL.mp4`
   - Let it encode (5-15 minutes depending on system)

10. **QC Review:**
    - Play full episode
    - Check:
      - ✓ No visible glitches or black frames
      - ✓ Audio synced and audible
      - ✓ Transitions smooth
      - ✓ Pacing feels natural
      - ✓ Color consistent throughout
      - ✓ Opening/closing titles readable
    - If issues found: Fix in DaVinci and re-export

**Time Estimate:** 2-3 hours total (depending on PC speed)

---

### Day 8: YouTube Upload & Publishing

**Setup (one-time):**
1. Create YouTube channel: "TURBOMINDZ" or similar
2. Upload channel art (1500x500px)
3. Write channel description with links to OpenSea, Discord, Twitter

**For each episode:**

1. **Prepare Metadata:**
   - **Title:** `TURBOMINDZ: Episode 1 [Official]`
   - **Description:**
     ```
     TURBOMINDZ: A 1,111-piece NFT collection + animated series.
     
     Episode 1 Summary:
     [2-3 sentence episode synopsis]
     
     This episode contains 28 unique scenes, each available as an NFT on OpenSea (Polygon):
     🔗 Collect on OpenSea: [link to collection]
     
     Cast your vote for Episode 2's direction:
     🗳️ [Discord poll link]
     
     📱 Follow us:
     🐦 Twitter: @TURBOMINDZ
     💬 Discord: discord.gg/[yourserver]
     🌐 Web: [website if available]
     
     #TURBOMINDZ #NFT #AnimatedSeries #Web3 #Polygon
     ```
   
   - **Thumbnail:** Create a 1280x720 image (use any of the 28 scenes, add "EPISODE 1" text in corner)
   - **Tags:** turbomindz, nft, animated series, web3, polygon, episodic
   - **Category:** Entertainment
   - **Age restriction:** None
   - **License:** Standard YouTube License

2. **Upload Video:**
   - Go to YouTube Studio
   - Click "Upload" (or drag/drop video)
   - Select EPISODE_01_FINAL.mp4
   - While uploading, fill in metadata (title, description, thumbnail)
   - Set to "Unlisted" (only shareable by link) until you're ready to go public
   - Let YouTube process (5-10 minutes)

3. **Playlist Setup:**
   - Create playlist: "TURBOMINDZ: Full Series"
   - Add Episode 1 to playlist
   - Future episodes: Add as they're released

4. **Schedule Upload or Publish:**
   - Option A: Publish immediately
   - Option B: Schedule for later (recommend Thursday evening, 8pm UTC, to build weekend viewership)

5. **Promote:**
   - Share YouTube link in Discord, Twitter, Instagram
   - Pin in Discord #announcements
   - Reply to community with link

**Expected video spec:**
- Duration: 3-5 minutes
- File size: 200-500 MB
- Quality: 1080p 24fps

---

### Day 8: Newsletter & Community Update

**Timing:** Send same day as YouTube upload (to maximize engagement)

**Platform options:**
- Substack (free)
- Buttondown (free)
- LinkedIn newsletter (if you have audience there)

**Newsletter Structure:**

```
Subject: TURBOMINDZ: Episode 1 Is Live 🎬✨

---

Hi collectors,

We just published TURBOMINDZ Episode 1, and it's live on YouTube and OpenSea.

📺 WATCH: [YouTube link]
🖼️ COLLECT: [OpenSea link]

EPISODE 1 RECAP:
What happened: [2-3 sentence summary of episode plot]

The Scenes:
- 28 unique NFTs released over 7 days
- 4 scenes per day
- Each scene includes a public domain quote
- 5 hidden easter eggs per scene
- All clips combined into a 4-minute episode

The Numbers:
- 1,111 total NFTs across all 39 episodes
- 278 production days ahead
- Polygon blockchain (low fees)
- 10% creator royalty per sale

What's Next?
Episode 2 production starts next week. Help us decide the direction:
[Discord poll: Where should Astra go next? Option A / Option B / Option C]

Thank you for collecting, sharing, and believing in this project.

- [Your name]
TURBOMINDZ Creator
```

**Distribution:**
- Send to email list
- Post link in Discord #announcements
- Retweet/share own newsletter link on Twitter

---

### Day 8: Plan Next Episode

**Time required:** 30-45 minutes

**Actions (see "PRE-PRODUCTION" section below for full details):**

1. **Create Shot List for Episode 2:**
   - 28 scenes, each with:
     - Scene number & title
     - Visual description
     - Character(s)
     - Location(s)
     - Action/plot point
     - Proposed public domain quote
     - 5 easter eggs to include

2. **Write 28 Nano Banana 2 Prompts:**
   - One per scene
   - Use the template from Section 2
   - Save to: `/03_PRODUCTION/EPISODE_02/EP02_PROMPTS.txt`

3. **Character References:**
   - Gather any reference images needed
   - If new characters, prepare 3-5 ref images per character for Soul ID training

4. **Visual Direction:**
   - Color palette for Episode 2 (maybe shift toward cooler tones, different lighting)
   - Environmental/location concepts
   - Any special visual effects or props

---

# SECTION 4: PRE-PRODUCTION WORKFLOW (Once per Episode)

**Timing:** Day 8 of previous episode
**Duration:** 2-3 hours
**Frequency:** Once per 7 days (before next episode production starts)

---

## Step 1: Story & Episode Planning

**Input needed:**
- Story Bible (master narrative document for all 39 episodes)
- Visual style guide
- Character bios

**Output:**
- Episode outline (4-7 major plot points)
- 28-scene shot list with descriptions

**Process:**

1. **Review Story Bible for Episode [N]:**
   - Read the episode summary
   - Identify 4-7 major story beats
   - Note character appearances
   - Plan settings/locations

2. **Create 28-Scene Breakdown:**
   ```
   Scene 1: [Character Name] discovers [something]. Location: []. Mood: [].
   Scene 2: [Action/reaction]. Location: []. Visual: [].
   Scene 3: [Conversation/conflict]. Location: []. Mood: [].
   ...
   Scene 28: [Climax/resolution]. Location: []. Visual: [emotional resolution].
   ```

3. **Save to:** `/03_PRODUCTION/EPISODE_[N]/EPISODE_[N]_SHOT_LIST.txt`

---

## Step 2: Nano Banana 2 Prompt Writing

**For each of 28 scenes:**

1. Using the shot list from Step 1, expand each scene into a detailed Nano Banana 2 prompt
2. Use the template from Section 2
3. Include the TURBOMINDZ signature style in each prompt
4. Make each prompt 150-250 words (descriptive prose, not tag lists)

**Save to:** `/03_PRODUCTION/EPISODE_[N]/EP[N]_PROMPTS.txt`

**Example (fully written):**
```
Scene 1: Astra's Awakening
In a realm where soft, plasticine hills roll gently under a golden-hour sky, a curious figure emerges from sleep—eyes fluttering open, clay-sculpted face registering surprise at the impossibly beautiful world around them. Crystalline structures scatter light like prisms. The character (Astra) is small, vulnerable, surrounded by scale that should intimidate but instead invites exploration. Rendered in plasticine stop-motion aesthetic, Pixar production design meets Aardman's warmth. Lighting: volumetric golden light pierces the scene, creating soft, warm shadows. Colors: dominant warm teal and gold with cream accents. Details: Every texture is hand-sculpted clay. Fabric folds. Grass blades. The character's skin shows sculpting marks, making them feel touchable and real.
```

---

## Step 3: Public Domain Quote Selection

**For each of 28 scenes:**

1. Identify a thematic PD quote (author died before 1/1/1956)
2. Match quote to scene's emotional/thematic content
3. Verify copyright status on LibriVox or Stanford Copyright Renewal Database

**Safe authors (all works are PD):**
- Shakespeare (1616)
- Jane Austen (1817)
- Charles Dickens (1870)
- Mark Twain (1910)
- Oscar Wilde (1900)
- Fyodor Dostoyevsky (1881)
- Virginia Woolf (1941)
- Jack London (1916)
- Rudyard Kipling (1936)
- H.P. Lovecraft (1937)
- (and many others)

**Dangerous authors (mixed PD/copyright):**
- Ernest Hemingway (died 1961) ❌
- J.R.R. Tolkien (died 1973) ❌
- Ray Bradbury (died 2012) ❌

**Database to verify:** https://copyright.stanford.edu/databases/renewal/

**Save selections to:** `/03_PRODUCTION/EPISODE_[N]/EP[N]_QUOTES.txt`

---

## Step 4: Character Reference & Soul ID Setup

**If new characters introduced in this episode:**

1. **For each character:**
   - Create or gather 3-5 reference images
     - Full body shot
     - Close-up face
     - Detail shot (hands, clothing, etc.)
     - Alternative pose or expression
   - Save to: `/03_PRODUCTION/EPISODE_[N]/CHARACTERS/[CHARACTER_NAME]/`

2. **Easter Egg Planning:**
   - For each scene, brainstorm 5 hidden visual details
   - Document in shot list for animators to include
   - Examples:
     - Bitcoin logo hidden in background
     - Aardman sheep silhouette in clouds
     - Wallace & Gromit screwdriver reference
     - OpenSea logo on clothing
     - Previous character cameo

3. **Soul ID Training (if time):**
   - Upload 3-5 character reference images to Higgsfield.ai
   - Train Soul ID for this character
   - Save Soul ID name to tracking document

---

## Step 5: Location & Environment Setup

**For each unique location in the episode:**

1. **Create location reference sheet:**
   - 2-3 images or concept sketches of the location
   - Color palette for this location
   - Visual mood/atmosphere
   - Architectural or natural elements unique to it

2. **Save to:** `/03_PRODUCTION/EPISODE_[N]/LOCATIONS/`

**Example structure:**
```
/LOCATIONS/
  /GOLDEN_CLIFF/
    - visual_ref_01.jpg
    - visual_ref_02.jpg
    - color_palette.txt (Warm teal, gold, cream)
    - mood.txt (Awe, scale, wonder)
  /CRYSTAL_CAVE/
    - visual_ref_01.jpg
    - color_palette.txt (Cool blues, prism colors, silver)
    - mood.txt (Mystery, magic, danger)
```

---

# SECTION 5: QUALITY CONTROL CHECKLIST

## Daily QC (before listing on OpenSea)

**Visual Quality:**
- ✓ Image is 1024x576 minimum resolution
- ✓ No visible artifacts, pixelation, or glitches
- ✓ Color palette matches TURBOMINDZ signature (warm teal, gold)
- ✓ Lighting is consistent and professional
- ✓ Subject is in focus; background is intentional
- ✓ Composition is balanced (not all subject on one side)
- ✓ No watermarks or text (unless intentional artistic choice)

**Video Quality:**
- ✓ No stuttering or frame drops
- ✓ Motion is smooth and believable
- ✓ Duration is 10-20 seconds
- ✓ Character/object consistency (no morphing, melting)
- ✓ Lighting consistent with source image
- ✓ No color flicker or artifacts
- ✓ File format is MP4, codec H.264
- ✓ Resolution is 1080p (or 480p if upscaling later)

**Metadata Quality:**
- ✓ NFT name follows format: TURBOMINDZ #[000]
- ✓ Description is 200-400 words
- ✓ Quote is authentic and verifiable PD
- ✓ Quote author is correct and died before 1956
- ✓ 5 easter eggs are listed and visible in image
- ✓ Episode number, scene number, day correct
- ✓ All properties/traits filled in
- ✓ No typos or grammar errors

**OpenSea Listing:**
- ✓ Correct collection (TURBOMINDZ)
- ✓ Price set appropriately (0.5 POL or your strategy)
- ✓ Royalty is 10%
- ✓ Thumbnail displays correctly
- ✓ Image loads without issues
- ✓ Description renders with proper formatting

---

## Weekly QC (before publishing episode)

**Episode Assembly:**
- ✓ All 28 scenes present in order
- ✓ No duplicate scenes
- ✓ Transitions are smooth (dissolve or fade)
- ✓ Total runtime 3-5 minutes
- ✓ No black frames or glitches between clips

**Audio/Music:**
- ✓ Background music is royalty-free
- ✓ Volume is -6dB (background, not overpowering)
- ✓ Fade-in and fade-out applied
- ✓ No audio dropouts or clipping
- ✓ Music complements visual mood

**Titles & Credits:**
- ✓ Opening title is readable
- ✓ Closing credits visible
- ✓ No misspellings
- ✓ Timing is correct (3 sec opening, 2 sec closing)

**YouTube/Publishing:**
- ✓ Title is accurate and compelling
- ✓ Description is filled with links, summary, CTA
- ✓ Thumbnail is custom and clickable
- ✓ Tags are relevant
- ✓ Category is "Entertainment"
- ✓ Video doesn't violate any platform policies

**Community:**
- ✓ Discord announcement posted
- ✓ Twitter thread posted
- ✓ Instagram caption posted
- ✓ Pinterest: 7 daily pins posted (one per day), 1 Idea Pin created (weekly)
- ✓ Pinterest: all 10 boards have 20+ pins (mix of original + curated)
- ✓ Newsletter sent (if applicable)
- ✓ All links are working (YouTube, OpenSea, Pinterest boards, etc.)

---

# SECTION 6: BATCH PRODUCTION TIPS & EFFICIENCY HACKS

## Time-Saving Strategies

### Prompt Batching
- **Write all 28 prompts for the episode on Day 1** (during Step 2 of pre-production)
- Copy/paste each day, rather than writing on the fly
- Saves 10-15 minutes per morning

### Parallel Video Submissions
- Submit all 4 videos to Higgsfield at roughly the same time (within 5-10 minutes)
- They'll process in parallel, ready by afternoon review
- Don't wait for one to finish before starting the next

### Template Reuse
- Save the Instagram caption template
- Save the Twitter template
- Update dates/NFT #s each day; core copy stays same
- Saves 10 minutes per day on social content

### Tracking Spreadsheet
- Use a template spreadsheet for entire episode (28 rows)
- Copy/paste same structure each week
- Fill in NFT-specific data only
- Saves re-creating the same columns

### Higgsfield Shortcuts
- Bookmark your dashboard
- Set default model to WAN 2.5 (if available in settings)
- Save common parameter presets (motion strength, resolution, etc.)

### DaVinci Resolve Templates
- After first episode, save your assembly workflow as a template
- Transitions, color grading, audio levels pre-configured
- Drag 28 new clips into template for Episode 2
- Saves 30-45 minutes per week

---

## Scaling & Contingencies

### If you miss a day (sick, emergency):
- **Option A (Recommended):** Produce double batch next day
  - Generate 8 images, 8 videos, 8 listings
  - Spreads the backlog, maintains 4/day average
  
- **Option B:** Take day off, shift entire schedule 1 day later
  - Delays publishing by 1 day
  - Less disruptive than cramming double batch
  
- **Option C (Last resort):** Reuse approved frame from previous episode
  - List as "Bonus Retrospective Scene"
  - Use new quote and easter eggs
  - Notate clearly: "Re-explored scene from Episode X"

### If Nano Banana 2 generation fails:
- **First attempt:** Simplify prompt (remove some descriptive details)
- **Second attempt:** Change aspect ratio slightly (1:1 instead of 16:9, then crop)
- **Fallback:** Use pre-generated asset from your backup folder or previous episode

### If Higgsfield video generation fails twice:
- **Fallback:** Use still frame export
- **Save the frame as a 15-second static video** (hold PNG for 15 seconds in DaVinci)
- **List NFT with note:** "Static hero frame from [Scene Title]"
- **Do NOT delay publishing**

### If OpenSea is down:
- **Prepare metadata** in a text file
- **List all 4 NFTs as soon as service returns**
- **Post apology in Discord:** "Technical issue yesterday—all 4 scenes now live"

### If you fall behind on production (e.g., 2 weeks behind):
- **Communicate transparently** in Discord
- **Option A:** Continue at 4/day, catch up gradually
- **Option B:** Increase to 6-8/day for a sprint week
- **Option C:** Extend episode release dates (push YouTube upload, newsletters)
- **Do not abandon the project**—consistency is the brand

---

# SECTION 7: FINANCIAL & DISTRIBUTION TRACKING

## Revenue Model

**NFT Pricing:**
- List price: 0.5 POL (~$0.50 USD at current rates)
- Creator royalty: 10% of all secondary sales
- Target: 1,111 sales × 0.5 POL = 555 POL gross (~$555 USD if each sells once)
- Realistic projection: 20-30% sell, ~150-200 POL revenue, plus royalties on resales

**Monthly Costs:**
- Nano Banana 2: $0 (free tier sufficient)
- Higgsfield.ai: $0 (free tier sufficient)
- DaVinci Resolve: $0 (free version)
- OpenSea: $0 (listing fees covered by Polygon's free/cheap gas)
- YouTube: $0 (free)
- Total: <$50/month (only if you upgrade any tools, which isn't necessary)

---

## Analytics & Tracking

### Weekly Spreadsheet Columns:
| Date | NFT # | Episode | Scene | Image ✓ | Desc ✓ | Video ✓ | Listed ✓ | Social ✓ | Views (YouTube) | Sales | MATIC Revenue | Notes |

### Monthly Metrics to Track:
- Total NFTs released (should be ~120/month)
- Total OpenSea sales
- Total revenue (in POL, converted to USD)
- YouTube total views
- Discord community growth
- Twitter followers gained
- Email subscriber growth
- Engagement rate on social posts
- Pinterest: monthly impressions, saves, outbound clicks, top-performing pins, follower growth
- Pinterest: board-level performance (which boards drive the most traffic to OpenSea/Linktree)

### Reporting Cadence:
- **Daily:** Update tracking spreadsheet (2 min)
- **Weekly:** Review sales, views, community growth (15 min)
- **Monthly:** Compile analytics, send community update (30 min)

---

# SECTION 8: FILE STRUCTURE & ORGANIZATION

```
/TURBOMINDZ_V2/
├── /01_PLANNING/
│   ├── STORY_BIBLE.md
│   ├── VISUAL_STYLE_GUIDE.md
│   ├── CHARACTER_BIOS.md
│   └── SERIES_OUTLINE_39_EPISODES.md
│
├── /02_PRE_PRODUCTION/
│   ├── /EPISODE_01/
│   │   ├── EP01_SHOT_LIST.txt
│   │   ├── EP01_PROMPTS.txt
│   │   ├── EP01_QUOTES.txt
│   │   ├── /CHARACTERS/
│   │   │   └── /ASTRA/
│   │   │       ├── ref_01.jpg
│   │   │       ├── ref_02.jpg
│   │   │       └── ref_03.jpg
│   │   └── /LOCATIONS/
│   │       ├── /GOLDEN_CLIFF/
│   │       │   └── ref_concept.jpg
│   │       └── /CRYSTAL_CAVE/
│   │           └── ref_concept.jpg
│   └── /EPISODE_02/ [same structure]
│
├── /03_PRODUCTION/
│   ├── PRODUCTION_PIPELINE.md (THIS FILE)
│   ├── /DAILY_OUTPUTS/
│   │   ├── /2026-04-10/
│   │   │   ├── NFT_01.png
│   │   │   ├── NFT_01_DESCRIPTION.txt
│   │   │   ├── NFT_01_VIDEO.mp4
│   │   │   ├── NFT_02.png
│   │   │   ├── NFT_02_DESCRIPTION.txt
│   │   │   ├── NFT_02_VIDEO.mp4
│   │   │   ├── NFT_03.png
│   │   │   ├── NFT_04.png
│   │   │   └── SOCIAL_CONTENT_2026-04-10.txt
│   │   └── /2026-04-11/ [same structure]
│   │
│   ├── /EPISODES/
│   │   ├── /EPISODE_01/
│   │   │   ├── EP01_SCENE_01.mp4
│   │   │   ├── EP01_SCENE_02.mp4
│   │   │   ├── ... (through SCENE_28)
│   │   │   └── EP01_SCENE_28.mp4
│   │   └── EPISODE_01_FINAL.mp4 (stitched, final export)
│   │
│   ├── TRACKING_SPREADSHEET.xlsx
│   └── OPENSEA_LISTINGS.csv
│
└── /04_PUBLISHING/
    ├── /YOUTUBE/
    │   ├── EPISODE_01_FINAL.mp4
    │   ├── EPISODE_01_THUMBNAIL.png
    │   └── EPISODE_01_NOTES.md
    ├── /SOCIAL/
    │   ├── INSTAGRAM_SCHEDULE.txt
    │   ├── TWITTER_SCHEDULE.txt
    │   ├── PINTEREST_PIN_LOG.txt [daily pin titles, descriptions, board assignments]
    │   ├── /PINTEREST_PINS/ [2:3 vertical images for Pinterest]
    │   └── /IMAGES/ [hero images for posts]
    └── /NEWSLETTERS/
        ├── NEWSLETTER_EPISODE_01.md
        └── SUBSCRIBER_LIST.csv
```

---

# SECTION 9: QUICK REFERENCE CARDS

## Daily Checklist (Print & Post)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TURBOMINDZ DAILY CHECKLIST — [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MORNING BLOCK (7am-9am)
───────────────────────
☐ Generate 4 NFT images in Nano Banana 2 (45 min)
  ☐ NFT #[001] — [Scene Title]
  ☐ NFT #[002] — [Scene Title]
  ☐ NFT #[003] — [Scene Title]
  ☐ NFT #[004] — [Scene Title]

☐ Write 4 descriptions with quotes + easter eggs (30 min)
  ☐ NFT_01_DESCRIPTION.txt
  ☐ NFT_02_DESCRIPTION.txt
  ☐ NFT_03_DESCRIPTION.txt
  ☐ NFT_04_DESCRIPTION.txt

☐ Submit 4 videos to Higgsfield.ai (45 min)
  ☐ NFT_01 uploaded, model: WAN 2.5, 10 sec, 480p
  ☐ NFT_02 uploaded, model: WAN 2.5, 10 sec, 480p
  ☐ NFT_03 uploaded, model: WAN 2.5, 10 sec, 480p
  ☐ NFT_04 uploaded, model: WAN 2.5, 10 sec, 480p

AFTERNOON BLOCK (2pm-3:30pm)
─────────────────────────────
☐ Review & approve video clips (30 min)
  ☐ NFT_01 video — approved / rejected (reason:___)
  ☐ NFT_02 video — approved / rejected (reason:___)
  ☐ NFT_03 video — approved / rejected (reason:___)
  ☐ NFT_04 video — approved / rejected (reason:___)
  ☐ Download all 4 videos to DAILY_OUTPUTS/[DATE]/

☐ List 4 NFTs on OpenSea (40 min)
  ☐ TURBOMINDZ #[###] — listed at 0.5 POL
  ☐ TURBOMINDZ #[###] — listed at 0.5 POL
  ☐ TURBOMINDZ #[###] — listed at 0.5 POL
  ☐ TURBOMINDZ #[###] — listed at 0.5 POL

☐ Create social media content (25 min)
  ☐ Instagram caption (300 words)
  ☐ Twitter thread (3 tweets)
  ☐ Discord announcement
  ☐ Save to SOCIAL_CONTENT_[DATE].txt

EVENING BLOCK (8pm-8:30pm)
──────────────────────────
☐ Post content to social (15 min)
  ☐ Instagram post (with #tags)
  ☐ Twitter thread
  ☐ Discord announcement
  ☐ Pinterest daily pin (2:3 vertical, keyword title+desc, rotate boards)
  ☐ Pinterest curated repins (2-3 from other creators)
  ☐ Verify all links working

☐ Community engagement (10 min)
  ☐ Reply to comments
  ☐ Like/retweet mentions
  ☐ Engage with Discord
  ☐ Check Pinterest notifications (saves, comments, followers)

☐ Update tracking spreadsheet (5 min)
  ☐ All 4 NFTs logged with metadata
  ☐ Video render times noted
  ☐ Social metrics logged

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL TIME: ~4.5 hours
STATUS: ☐ Complete ☐ Partial (reason:____) ☐ Failed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Emergency Contacts & Help Resources

**Tool Support:**
- Nano Banana 2 Help: https://ai.google.dev/tutorials (or Google AI Studio chat)
- Higgsfield.ai Support: https://discord.gg/higgsfield (their Discord)
- DaVinci Resolve: https://www.blackmagicdesign.com/products/davinciresolve/support
- OpenSea Support: help.opensea.io

**Fallback Platforms:**
- Image generation: Midjourney (if Nano Banana 2 unavailable)
- Video generation: Runway.ml (if Higgsfield unavailable)
- Video editing: CapCut (if DaVinci fails)
- NFT listing: Rarible (if OpenSea down)

**Community:**
- Higgsfield Discord: Ask for help on video generation
- OpenSea Discord: Help with listing issues
- r/NFTs (Reddit): Community feedback on work

---

## Template: Daily Prompt Reminder

**Today's Episode:** 1
**Today's Scenes:** 1-4
**Today's Date:** [DATE]

**Scene 1 Prompt (Copy-Paste to Nano Banana 2):**
[Full prompt from EP01_PROMPTS.txt]

**Scene 1 Quote:**
"[Quote]" — [Author]

**Scene 1 Easter Eggs to Include:**
1. [Egg]
2. [Egg]
3. [Egg]
4. [Egg]
5. [Egg]

(Repeat for Scenes 2, 3, 4)

---

# FINAL NOTES & MOTIVATION

## Why This Process Works

1. **Batching:** All 4 images generated together → all 4 videos submitted together → all 4 NFTs listed together. Efficient, not chaotic.

2. **Templates:** Using the same structure every day reduces decision fatigue. You're not reinventing the wheel; you're executing a proven system.

3. **Pre-production:** Planning the full episode before production begins means no creative blockers during daily execution. You just follow the prompts.

4. **Quality gates:** QC checkpoints catch problems early, preventing delays and embarrassing mistakes.

5. **Community-first:** NFT listings include rich metadata, social content teases discovery, and newsletters build long-term relationships. You're not just shipping; you're building a fan base.

---

## Sustainability Over 278 Days

This isn't a sprint; it's a marathon. Key to longevity:

- **Automate repeatable tasks** (use spreadsheet templates, save prompts)
- **Batch whenever possible** (don't do one NFT, then take a break)
- **Take weekly breaks** (the 7-day cycle gives you Sundays off, if planned)
- **Build community** (early fans will support you through slow patches)
- **Ship consistently** (4 per day, every day, is more valuable than 10 per day with gaps)
- **Plan ahead** (pre-production removes last-minute scrambling)

---

## Success Metrics

By Month 3 (90 days, ~360 NFTs):
- ✓ Established production rhythm
- ✓ 300+ NFTs released
- ✓ 3 episodes published on YouTube
- ✓ Discord community >500 members
- ✓ Twitter followers >1000
- ✓ Sold 30-50 NFTs (revenue: 15-25 POL)

By Month 9 (end of production, all 1,111 NFTs):
- ✓ All episodes published
- ✓ 10-20% of NFTs sold (100-200 pieces)
- ✓ Loyal collector community
- ✓ Secondary sales generating royalty revenue
- ✓ Potential for partnerships, media coverage

---

## You've Got This

278 days. 1,111 NFTs. 39 episodes. It's a lot, but broken into daily chunks of 4 NFTs and weekly episodes, it's achievable.

Follow this pipeline. Stick to the schedule. Ship every day. Build the thing.

Welcome to TURBOMINDZ production.

---

**Document Version:** 1.0  
**Last Updated:** 2026-04-09  
**Next Review:** After Episode 1 completion  
**Contact:** [Your email]

