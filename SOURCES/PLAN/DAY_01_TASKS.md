# DAY 1 — FOUNDATION INFRASTRUCTURE
## April 19, 2026 (Sunday)

**Goal:** Set up every account, tool, and environment needed so that Days 2-30 are pure building.

**Estimated time:** 4-5 hours
**Streams active:** A (App), B (Content), C (Platforms), D (Marketing)

---

## STREAM A: APP DEVELOPMENT ENVIRONMENT

### Task A1: Install Development Tools
**Time:** 20 min
**Do this if not already installed.**

1. Install **Node.js 22 LTS** from https://nodejs.org — verify with `node -v`
2. Install **Git** from https://git-scm.com — verify with `git -v`
3. Install **VS Code** from https://code.visualstudio.com
4. Install these VS Code extensions:
   - ESLint
   - Prettier - Code Formatter
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - GitLens

**Done when:** `node -v` returns v22+, `git -v` returns a version, VS Code opens with extensions installed.

---

### Task A2: Create GitHub Repository
**Time:** 10 min

1. Go to https://github.com — sign in or create account
2. Click "New Repository"
   - Name: `turbomindz`
   - Visibility: **Private**
   - Initialize with README: Yes
   - .gitignore template: **Node**
   - License: None (for now)
3. Clone locally:
   ```bash
   cd ~/Projects  # or wherever you keep code
   git clone https://github.com/YOUR_USERNAME/turbomindz.git
   cd turbomindz
   ```

**Done when:** `turbomindz` folder exists locally with `.git` directory.

---

### Task A3: Create Vercel Account + Link Repo
**Time:** 10 min

1. Go to https://vercel.com — sign up with GitHub
2. Click "Add New Project"
3. Import `turbomindz` from GitHub
4. **Don't deploy yet** — cancel the initial deploy (we have no code)
5. Note: Vercel will auto-deploy every push to `main` once we have code

**Done when:** Vercel dashboard shows the turbomindz project linked to GitHub.

---

### Task A4: Create Supabase Project
**Time:** 15 min

1. Go to https://supabase.com — sign up (free tier)
2. Click "New Project"
   - Organization: Create one (e.g., "Turbomindz")
   - Project name: `turbomindz`
   - Database password: Generate a strong one. **Save it securely.**
   - Region: Choose closest to your location
   - Plan: Free
3. Wait for project to provision (~2 minutes)
4. Go to Settings → API — copy these values and save them in a secure note:
   - `Project URL` → This is your NEXT_PUBLIC_SUPABASE_URL
   - `anon public` key → This is your NEXT_PUBLIC_SUPABASE_ANON_KEY
   - `service_role` key → This is your SUPABASE_SERVICE_ROLE_KEY (NEVER expose this in frontend code)

**Done when:** Supabase project is live, all 3 credentials saved securely.

---

### Task A5: Create thirdweb Account
**Time:** 10 min

1. Go to https://thirdweb.com — sign up
2. Go to Settings → API Keys → Create API Key
   - Name: `turbomindz-prod`
   - Allowed domains: `turbomindz.com`, `localhost:3000`
3. Copy the **Client ID** → This is your NEXT_PUBLIC_THIRDWEB_CLIENT_ID
4. Save securely with your other credentials

**Done when:** thirdweb Client ID saved.

---

### Task A6: Create Credentials File (Local Only)
**Time:** 5 min

Create a file called `credentials.md` somewhere **outside** the turbomindz repo (e.g., in a password manager or encrypted notes app). Never commit this file.

```
# TURBOMINDZ CREDENTIALS — DO NOT SHARE

## Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

## thirdweb
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=xxxxx

## OpenSea (get in Task C1)
OPENSEA_API_KEY=xxxxx

## Pinata (get in Task C2)
PINATA_API_KEY=xxxxx
PINATA_SECRET_KEY=xxxxx
```

**Done when:** Credentials file created in a secure location, NOT in the repo.

---

## STREAM B: CONTENT PRODUCTION

### Task B1: Generate First 4 NFT Images
**Time:** 45 min

Open **Nano Banana 2** (or your image generation tool of choice).

Generate 4 images for Episode 1, Universe 1 (Alchemical Renaissance):
- Aspect ratio: **4:5** (NFT standard)
- Resolution: **4K**
- Style anchor for all: "plasticine stop-motion claymation, Pixar meets Aardman Studios"

**TM-001 — "The Door That Wasn't There"** (Episode Opener, Genesis tier)
> A claymation astronaut with orange boots and a fishbowl helmet stands in a vast dark void, facing a massive ornate Renaissance door that hangs suspended in nothingness. The door is carved from aged wood with gold leaf filigree, hinges of hammered bronze, and a keyhole that glows with warm amber light. The astronaut is small against the door — perhaps 1/5 its height — reaching one hand toward the handle. Behind the astronaut, nothing. Through the crack under the door, warm golden light spills out across a clay floor. The astronaut's helmet reflects the door's glow. Deep teal void (#004D5C) surrounding everything, with the door and astronaut as the only subjects. Volumetric light from the keyhole. Plasticine sculpted textures, visible fingerprints on the clay, stop-motion animation aesthetic with Laika-quality production detail.

**TM-002 — "First Light in the Cathedral"**
> A claymation astronaut stepping through a Renaissance archway into a vast alchemical cathedral. The interior is breathtaking — towering columns of sculpted clay carved with philosophical symbols, a vaulted ceiling painted with a clay-relief cosmos of planets and stars, and rows of wooden pews filled with dust and scattered scrolls. Shafts of golden light pour through tall stained-glass windows depicting philosophical scenes — Socrates drinking hemlock, Plato's cave shadows, an ouroboros. The astronaut stands just inside the threshold, helmet reflecting the cathedral's glow, one foot still in darkness. The floor is checkered black and white marble (sculpted clay). Dust motes drift through the light beams. Renaissance color palette: deep burgundy, gold, aged parchment, deep teal shadows. Every surface has handcrafted clay texture with visible tool marks.

**TM-003 — "The Alchemist's Workshop"**
> Interior of a cluttered Renaissance alchemist's workshop made entirely of sculpted clay. A large wooden workbench dominates the center, covered with bubbling clay flasks, a mortar and pestle, scattered herbs, open leather-bound journals with handwritten diagrams, brass instruments (astrolabe, compass, magnifying glass), and melted candle wax. Shelves climb the walls packed with glass jars containing luminous colored liquids (emerald, ruby, amber). A clay skeleton model stands in the corner. Through an arched window, a deep teal night sky with clay stars. The claymation astronaut sits on a wooden stool examining a tiny glowing orb held between thumb and forefinger — the orb contains a miniature spinning galaxy. Warm candlelight from multiple sources. Dense detail in every corner. Renaissance meets stop-motion animation, museum-quality miniature set design.

**TM-004 — "Know Thyself"**
> A claymation astronaut standing before a massive clay-sculpted mirror in a Renaissance hall. The mirror frame is ornate gold with carved philosopher busts at each corner (Socrates, Plato, Aristotle, Seneca — all in clay). But the reflection in the mirror doesn't show the astronaut — instead it shows the same figure without the helmet, revealing a featureless smooth clay face with two glowing amber eyes. The astronaut reaches toward the glass. The hall behind is lined with columns and philosophical inscriptions carved into the walls (illegible but atmospheric). The floor reflects both figures faintly. Color palette: gold mirror frame, deep teal walls, warm amber reflection glow, cool blue-white hall lighting. The mood is confrontation with self. Plasticine stop-motion aesthetic, dramatic lighting, cinematic composition.

**Save all 4 images to:** `TMDZ/TURBOMINDZ_V2/08_ASSETS/NFT_IMAGES/EP01/`
**Filename format:** `TM-001_the-door-that-wasnt-there.png`

**Done when:** 4 high-quality images saved, each matching the Turbomindz aesthetic (warm clay, golden light, philosophical depth).

---

### Task B2: Write NFT Metadata for TM-001
**Time:** 15 min

Create the metadata entry for TM-001 as a reference template for all future NFTs:

```json
{
  "name": "TM-001: The Door That Wasn't There",
  "description": "A small astronaut faces a massive Renaissance door suspended in the void. Behind him, nothing. Through the keyhole, golden light. The first question was always the hardest: do you open it?\n\n\"The unexamined life is not worth living.\" — Socrates\n\nEpisode 1 of 39. Universe: Alchemical Renaissance. Theme: Classical Foundations.",
  "image": "ipfs://[CID]",
  "external_url": "https://turbomindz.com/scene/TM-001",
  "attributes": [
    { "trait_type": "Episode", "value": "1 — Alchemical Renaissance" },
    { "trait_type": "Universe", "value": "U1 — Alchemical Renaissance" },
    { "trait_type": "Theme", "value": "Classical Foundations" },
    { "trait_type": "Season", "value": "1 — Departure" },
    { "trait_type": "Character", "value": "Cosmo" },
    { "trait_type": "Scene Type", "value": "Episode Opener" },
    { "trait_type": "Art Tradition", "value": "Renaissance Art" },
    { "trait_type": "Philosopher", "value": "Socrates" },
    { "trait_type": "Core Question", "value": "What is virtue?" },
    { "trait_type": "Pricing Tier", "value": "Genesis" },
    { "trait_type": "Marriage Status", "value": "Unmarried" },
    { "trait_type": "Easter Eggs", "value": "5" }
  ],
  "easter_eggs": [
    "The keyhole shape mirrors the Oracle at Delphi's entrance",
    "The door's wood grain contains a hidden face (foreshadows The Architect)",
    "Three tiny symbols on the door frame reference Episodes 13, 26, and 39",
    "The astronaut's helmet reflection shows a universe that appears in Episode 7",
    "A single golden thread runs along the bottom of the frame — the Thread of Ariadne"
  ],
  "price_matic": 26,
  "price_tier": "Genesis"
}
```

**Save to:** `TMDZ/TURBOMINDZ_V2/08_ASSETS/NFT_METADATA/TM-001.json`

**Done when:** TM-001 metadata written with all required fields: name, description with PD quote, 5 easter eggs, full trait table, pricing.

---

## STREAM C: PLATFORM SETUP

### Task C1: OpenSea Account + API Key
**Time:** 15 min

1. Go to https://opensea.io — connect with MetaMask (Polygon network)
2. If you don't have MetaMask:
   - Install MetaMask browser extension from https://metamask.io
   - Create wallet, save seed phrase securely
   - Add Polygon network: Settings → Networks → Add → Polygon Mainnet
     - RPC URL: https://polygon-rpc.com
     - Chain ID: 137
     - Currency: MATIC
     - Block Explorer: https://polygonscan.com
3. On OpenSea: Edit Profile → add "Turbomindz" as display name, upload collection logo
4. Go to https://docs.opensea.io/reference/api-overview → Request API key
   - App name: Turbomindz
   - Email: hugogaona@gmail.com
   - Description: "Philosophical art NFT collection on Polygon — 1,111 scenes"
5. Save API key to credentials file

**Done when:** OpenSea profile exists, API key requested (may take 24-48 hours to receive).

---

### Task C2: Pinata Account (IPFS)
**Time:** 10 min

1. Go to https://pinata.cloud — sign up (free tier: 500 files, 1GB storage)
2. Go to API Keys → New Key
   - Name: `turbomindz`
   - Permissions: All (pinning, unpinning)
3. Copy API Key + API Secret → save to credentials file

**Done when:** Pinata account live, API credentials saved.

---

### Task C3: Gumroad Shop
**Time:** 20 min

1. Go to https://gumroad.com — sign up
2. Profile setup:
   - Name: Turbomindz
   - Bio: "Philosophical art exploring 39 universes. Digital products, art guides, and creative tools for thinkers and makers."
   - Profile image: Collection logo
   - Cover image: Hero scene
3. Connect payment (Stripe integration through Gumroad)
4. Create first product as a test:
   - "Phygital Art 101" (free lead magnet, email-gated)
   - Upload a placeholder PDF (you'll replace this with real content on Day 3-4)
   - Price: $0+ (pay what you want, minimum $0)
   - Custom field: Email (required)

**Done when:** Gumroad shop live with profile completed and 1 test product.

---

### Task C4: Ko-fi Account
**Time:** 10 min

1. Go to https://ko-fi.com — sign up
2. Customize page:
   - Display name: Turbomindz
   - Bio: Same as Gumroad
   - Profile image: Collection logo
   - Tip amounts: $3, $5, $10, $20
3. Enable Shop (Settings → Shop → Enable)
4. Connect payment (PayPal or Stripe)

**Done when:** Ko-fi page live with tip jar and shop enabled.

---

### Task C5: Patreon Page
**Time:** 30 min

1. Go to https://patreon.com — sign up as creator
2. Page setup:
   - Creator name: Turbomindz
   - Category: Art & Illustration
   - About: "Four claymation characters race through 39 dying universes — each born from a question humanity once asked — creating art to keep them alive. Every NFT is a frame from the film. Every collector is a witness. Support the odyssey."
   - Profile image: Collection logo
   - Cover image: Hero scene
3. Create 5 tiers (names, prices, descriptions, benefits — DO NOT PUBLISH YET):

   **Tier 1: Curious Traveler — $3/month**
   Benefits: Weekly dispatch email, Discord access, early NFT drop notifications, monthly raffle entry

   **Tier 2: Pattern Seeker — $7/month**
   Benefits: Everything in Tier 1 + early scene previews (3 weeks early), monthly 16-page art book PDF, monthly Discord Q&A, 15% digital product discount

   **Tier 3: Community Weaver — $15/month**
   Benefits: Everything in Tier 2 + monthly 4K wallpaper, monthly 1:1 message with Hugo, private Discord channel, 20% product discount + 10% merch discount

   **Tier 4: Silent Observer — $30/month**
   Benefits: Everything in Tier 3 + easter egg naming rights, bi-monthly audio meditation, quarterly custom artwork, private Discord channel with Hugo, monthly Philosophy Salon (video call)

   **Tier 5: Elder Council — $50/month**
   Benefits: Everything in Tier 4 + quarterly custom commission, governance voting, Elder Council Discord, monthly priority call, founding elder credit, lifetime 30% discount, free marriage verification

4. Save as draft. Publish after you have content to deliver (Day 9).

**Done when:** Patreon page drafted with all 5 tiers configured. NOT published yet.

---

## STREAM D: MARKETING & COMMUNITY

### Task D1: Instagram Account Setup
**Time:** 15 min

1. Create Instagram account: @turbomindz
2. Convert to Professional/Creator account
3. Set up profile:
   - Name: Turbomindz | Philosophical Art
   - Bio (150 chars): "Four characters. 39 universes. 1,111 collectible scenes. An odyssey through the questions humanity forgot to ask. ↓ Explore the collection"
   - Link: linktr.ee/turbomindz (create this in Task D4)
   - Profile photo: Collection logo
   - Category: Artist

**Done when:** @turbomindz Instagram live with professional account, bio, and profile photo.

---

### Task D2: Twitter/X Account Setup
**Time:** 10 min

1. Create Twitter/X account: @turbomindz
2. Set up profile:
   - Name: Turbomindz
   - Bio (160 chars): "Four claymation characters. 39 dying universes. 1,111 collectible scenes. An odyssey through philosophy's biggest questions. Building in public."
   - Header image: Hero scene or collection banner
   - Profile photo: Collection logo
   - Link: linktr.ee/turbomindz

**Done when:** @turbomindz Twitter live with bio and images.

---

### Task D3: Pinterest Business Account Setup
**Time:** 15 min

1. Go to https://pinterest.com/business/create — create business account
2. Username: turbomindz
3. Display Name: Turbomindz | Philosophical Claymation Art
4. About (160 chars): "Philosophical claymation art exploring 39 universes. 1,111 collectible scenes. Four characters. One question at a time."
5. Website: linktr.ee/turbomindz
6. Account type: Business → Artist
7. Claim website: Add HTML tag to turbomindz.com when deployed:
   ```html
   <meta name="p:domain_verify" content="71cc5b5895524aa4e57ed58c420e48a2"/>
   ```
   (Save this for later — add when the site goes live on Day 27)
8. **Create 10 boards** (names only today, descriptions added Day 2):
   1. Claymation Art & Stop Motion Inspiration
   2. Philosophy Quotes & Deep Thinking
   3. Digital Art & NFT Collectibles
   4. Miniature Worlds & Tiny Scenes
   5. Space Art & Cosmic Exploration
   6. Art History Reimagined
   7. Character Design & Animation Art
   8. Cozy Aesthetic & Warm Color Palettes
   9. Hidden Details & Easter Egg Art
   10. Behind the Scenes: Building an Art Project

**Done when:** Pinterest business account live with 10 empty boards created.

---

### Task D4: Linktree Setup
**Time:** 10 min

1. Go to https://linktr.ee — sign up
2. Username: turbomindz
3. Add links (in this order):
   - "Browse the Collection" → turbomindz.com (placeholder until site is live)
   - "Watch the Odyssey" → YouTube channel URL
   - "Join the Village (Discord)" → Discord invite link (placeholder)
   - "Support on Patreon" → patreon.com/turbomindz (placeholder)
   - "Shop Digital Products" → gumroad.com/turbomindz
   - "Leave a Tip" → ko-fi.com/turbomindz
   - "Instagram" → instagram.com/turbomindz
   - "Twitter/X" → twitter.com/turbomindz
   - "Pinterest" → pinterest.com/turbomindz
4. Style: Dark theme, gold accent color (#C9A227)

**Done when:** linktr.ee/turbomindz live with all links configured.

---

## DAY 1 COMPLETION CHECKLIST

Check every box before marking Day 1 complete:

**Stream A — App:**
- [ ] Node.js, Git, VS Code installed with extensions
- [ ] GitHub repo created and cloned locally
- [ ] Vercel account linked to GitHub repo
- [ ] Supabase project created, 3 credentials saved
- [ ] thirdweb account created, Client ID saved
- [ ] All credentials stored securely outside repo

**Stream B — Content:**
- [ ] 4 NFT images generated for Episode 1 (TM-001 to TM-004)
- [ ] TM-001 metadata JSON written as template

**Stream C — Platforms:**
- [ ] MetaMask installed with Polygon network
- [ ] OpenSea account created, API key requested
- [ ] Pinata account created, API credentials saved
- [ ] Gumroad shop live with 1 test product
- [ ] Ko-fi page live with tip jar and shop
- [ ] Patreon page drafted with 5 tiers (unpublished)

**Stream D — Marketing:**
- [ ] Instagram @turbomindz live (professional account)
- [ ] Twitter/X @turbomindz live
- [ ] Pinterest business account live with 10 boards
- [ ] Linktree configured with all links

**Total accounts created today: 12**
**Total credentials to track: 6 sets**
**Total content produced: 4 NFT images + 1 metadata template**

---

## TOMORROW PREVIEW (Day 2)

- **Stream A:** Set up Turbomindz design system in Claude Design (colors, fonts, components)
- **Stream B:** Generate TM-005 to TM-008, write metadata for TM-001–004
- **Stream C:** Configure OpenSea collection page (banner, description, category)
- **Stream D:** Write all 10 Pinterest board descriptions (500 chars each), pin first 2 brand images

---

*Report back when Day 1 is complete. I'll mark progress and deliver Day 2.*
