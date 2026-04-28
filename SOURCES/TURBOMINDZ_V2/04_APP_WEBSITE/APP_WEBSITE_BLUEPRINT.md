# TURBOMINDZ APP/WEBSITE BLUEPRINT
## Unified Progressive Web App (PWA)

**One codebase. Website + installable app. Deploy once.**

---

## 1. TECHNICAL ARCHITECTURE

### Stack
- **Framework:** Next.js 14 (App Router) + TypeScript (strict mode)
- **Styling:** Tailwind CSS + Framer Motion (animations)
- **Components:** Radix UI (accessible primitives) + Lucide React (icons)
- **State:** Zustand (global state) + TanStack Query (server state)
- **PWA:** Serwist (service worker, offline support, installability)
- **Web3:** thirdweb Connect v5 (wallets) + opensea-js (Seaport purchases)
- **Database:** Supabase (PostgreSQL + Realtime + Storage + Auth)
- **IPFS:** Pinata (NFT metadata + marriage records)
- **Hosting:** Vercel (free tier)
- **Domain:** turbomindz.com (Namecheap)

### PWA Benefits
- Installs on iOS, Android, Windows, Mac from the browser
- Works offline (cached gallery, saved scenes)
- Push notifications (new episodes, NFT drops)
- No app store fees (no 30% Apple/Google cut)
- One deployment serves all platforms

### Install: `npx create-next-app@14 turbomindz --typescript --tailwind --app --src-dir`

Additional packages:
```
npm install @serwist/next serwist framer-motion zustand @radix-ui/react-* lucide-react
npm install @thirdweb-dev/react @thirdweb-dev/sdk opensea-js
npm install @supabase/supabase-js @tanstack/react-query
npm install -D @types/node @types/react
```

---

## 2. INFORMATION ARCHITECTURE

### Priority 1 Pages (Launch With These)

| Page | Route | Purpose | Key CTA |
|------|-------|---------|---------|
| Homepage | / | Story + Value Proposition + Gallery Preview | "Browse the Collection" |
| Gallery | /gallery | All 1,111 NFTs, searchable/filterable | "Collect This Scene" / "View on OpenSea" |
| Scene Detail | /scene/[id] | Individual NFT with full metadata | Dual purchase CTAs |
| Episodes | /episodes | Animated series episode hub | "Watch the Odyssey" |
| About | /about | Mission, characters, philosophy | "Join the Discord" |
| Marriage | /marriage | Phygital marriage concept | "Request a Marriage" |

### Priority 2 Pages (Add Within First Month)

| Page | Route | Purpose |
|------|-------|---------|
| Story | /story | 3-act narrative + universe explorer |
| Marketplace | /marketplace | Married NFT trading (members only) |
| Community | /community | Forum preview + Discord link |
| FAQ | /faq | Common questions + how-to guides |

### Priority 3 Pages (Add As Content Grows)

- /blog — Medium articles mirrored for SEO
- /artists — Artist Bridge program for physical artists
- /governance — Snapshot voting integration
- /newsletter — Archive of The Odyssey Dispatch

---

## 3. USER FLOW

### Step 1: PUBLIC ACCESS (No Account)
- Browse full gallery of 1,111 NFT scenes
- Filter by universe, theme, character, act, price
- View NFT detail pages (metadata, quotes, easter eggs)
- Watch episode trailers
- See community stats (members, marriages, trades)
- CANNOT access: forum, marketplace, member profiles

### Step 2: PURCHASE GATE
Two paths presented simultaneously:
- **Path A — In-App:** Connect wallet (thirdweb) → Purchase via Seaport Protocol → Never leaves the app
- **Path B — OpenSea:** Click "View on OpenSea" → Deep-link to opensea.io listing → Complete purchase there

### Step 3: VERIFICATION + ACCOUNT
- App detects NFT in connected wallet (blockchain event listener)
- Prompt: "Welcome, Traveler. Create your account to enter the village."
- Account = wallet address + optional email + display name + optional Discord ID
- Account created in Supabase

### Step 4: MEMBER ACCESS
- Forum (bidirectionally synced with Discord)
- Marketplace (married NFTs only)
- Marriage request system
- Member profile
- Governance/voting

---

## 4. PAGE-BY-PAGE COPY

### HOMEPAGE

**HERO SECTION**

Headline (max 12 words):
> What happens to a question nobody asks anymore?

Subline (max 25 words):
> 1,111 scenes. 4 characters. 39 universes. An odyssey through the questions that changed everything — and a short film you can own.

CTA Primary: **Browse the Collection**
CTA Secondary: **Watch the Story**

---

**MEMBERSHIP EXPLAINER: "How to Join the Village"**

Step 1 — BROWSE
> *Explore.* Wander through 1,111 philosophical art scenes across 39 universes. No account needed. No wallet required. Just wonder.

Step 2 — COLLECT
> *Witness.* Found a scene that speaks to you? Collect it via MetaMask, Coinbase Wallet, or any Web3 wallet. Your collection is your ticket to the village.

Step 3 — ENTER
> *Belong.* Create your account and unlock the forum, marketplace, governance, and community. Own a scene. Enter the village. The odyssey is yours.

---

**FEATURED NFTs SECTION**

Intro text:
> Six scenes from six universes. Each one a question. Each one waiting for a witness. Hover to explore — and if something resonates, you'll know.

---

**THE NINE QUESTIONS**

Section title: *"Nine Questions That Changed Everything"*

Intro:
> Every universe in Turbomindz was born from a question. Not the kind you answer on a test — the kind that keeps you awake. Here are the nine threads that weave through all 39 universes.

1. **Classical Foundations** — *What is virtue?* The oldest questions. The ones that started everything.
2. **Enlightenment & Reason** — *What can we know?* The questions that lit candles in dark centuries.
3. **Existentialism & Modern** — *What is freedom?* The questions that come after midnight.
4. **Mysticism & Esoterica** — *What is hidden?* The questions that glow in the dark.
5. **Eastern Wisdom** — *What is balance?* The questions that breathe.
6. **Science & Modernity** — *What is progress?* The questions with equations.
7. **Poetry & Aesthetics** — *What is beauty?* The questions that make you cry.
8. **Civic & Social** — *What is justice?* The questions that build villages.
9. **Psychology & Mind** — *What is the self?* The questions you ask the mirror.

---

**THE MARRIAGE CONCEPT**

Title: *"The NFT is the Soul"*
Subtitle: *When digital art marries physical art, both become more real.*

Process steps:
1. **Create** — Make a physical artwork or find one that speaks to your scene
2. **Mint** — Own a Turbomindz NFT on Polygon
3. **Marry** — Photograph the physical art and submit a marriage request
4. **Trade as One** — Your married NFT trades as phygital art — digital and physical, together forever

---

**CHARACTER SHOWCASE**

Intro:
> Four travelers. One odyssey. Each carrying a different question.

**Cosmo** — *The Curious Astronaut*
*"But wait—"*
He opened a door he wasn't supposed to find. Now he can't stop opening doors.

**Nova** — *The Pattern-Seeing Guide*
*"Same truth, different clothes."*
She's been here before. She lost three universes. She won't lose another.

**Stella** — *The Community Weaver*
*"How do PEOPLE use this?"*
The universes don't need more art. They need more bridges.

**Luna** — *The Quiet Observer*
*[shows her notebook, walks away]*
She draws the future. Or maybe she just pays very close attention to the present.

---

**NEWSLETTER SIGNUP**

Heading: *The Odyssey Dispatch*
Subheading: *A weekly letter from the universes. Written by Cosmo. Illustrated by Luna.*
Microcopy: *Join 0 travelers. Free. Unsubscribe anytime. No spam — just wonder.*
CTA: **Subscribe**

---

### GALLERY PAGE

**Header:**
> *The Collection*
> 1,111 philosophical art scenes across 39 universes. Each one a question. Each one waiting for a witness.

**Filter Labels:**
- Universe (39 options)
- Theme (9 options)
- Character (Cosmo, Nova, Stella, Luna, All)
- Season (1: Departure, 2: The Ordeal, 3: The Return)
- Episode (1-39)
- Price Range
- Marriage Status (Married / Unmarried / All)
- Availability (For Sale / Collected / All)

**Empty State (Luna's voice):**
> *"Sometimes the most interesting search is the one that finds nothing. Try another question."*

**NFT Card Hover Text:**
> *Enter this scene →*

**Purchase Modal:**

Heading: *"Collect This Scene"*

Path A text:
> **Purchase in App** — Connect your wallet and collect this scene directly. Your wallet signs the transaction. The scene is yours in seconds. (Polygon — gas fees under $0.01)

Path B text:
> **View on OpenSea** — Prefer to browse on OpenSea? This link takes you directly to this scene's listing. Complete your purchase there and return to claim your village membership.

No-wallet text:
> *New to Web3? No worries.* Connect with your email using thirdweb's embedded wallet — no MetaMask or crypto experience needed. We've got you covered.

---

### ABOUT PAGE

**MISSION**

Title: *"Why We Built Turbomindz"*

Paragraph 1:
> Every civilization begins with a question. "What is virtue?" asked the Greeks. "What is balance?" asked the sages of the East. "What is beauty?" asked the poets. For millennia, these questions created worlds — not metaphorical ones, but real universes of art, thought, and connection.

Paragraph 2:
> Turbomindz is an odyssey through those worlds. Four claymation characters — Cosmo, Nova, Stella, and Luna — travel through 39 universes, each born from a question that changed human history. Their journey unfolds as 1,111 collectible art scenes AND a 39-episode animated series. Every scene is a frame from the film. Every collector is a witness.

Paragraph 3:
> But Turbomindz is also an experiment. What happens when you marry a digital artwork to a physical one — permanently, on the blockchain? What happens when every trade is public and every price is fair? What happens when a community is built on philosophy first, commerce second, and hype never? We're finding out.

---

**THE THREE PILLARS**

1. **Philosophy First** (icon: book)
> We lead with questions, not products. Every scene contains wisdom from history's greatest thinkers. Every universe explores a theme that has occupied humanity for centuries. The art is the hook. The philosophy is the point.

2. **Community Second** (icon: people)
> We don't have users. We have travelers, witnesses, and villagers. The Discord isn't a chat server — it's the village square. The marketplace isn't a store — it's a bazaar where stories are exchanged. You don't join Turbomindz. You enter the village.

3. **Marketplace Third** (icon: scale)
> Every trade is public. Every price is visible. The Witnessed Economy means no backroom deals, no manipulation, no secrets. Fair trade isn't a label here. It's the architecture.

---

**FAQ SECTION (10 questions)**

1. **What is Turbomindz?**
> An NFT art collection AND animated series about four characters traveling through 39 philosophical universes. Each of the 1,111 NFT scenes is also a frame from the series. Own the art. Watch the story. Enter the village.

2. **How do I collect an NFT?**
> Browse the gallery, find a scene you love, and click "Collect This Scene." You'll need a crypto wallet (MetaMask, Coinbase Wallet, or use our email-based wallet). Scenes are on Polygon — gas fees are under $0.01.

3. **What wallet do I need?**
> Any wallet that supports Polygon works. MetaMask is the most popular. If you're new to crypto, our embedded wallet lets you collect using just your email — no MetaMask required.

4. **What is Polygon?**
> Polygon is an Ethereum-compatible blockchain with near-zero transaction fees. Your NFTs have all the security of Ethereum without the high gas costs. It's where Turbomindz lives.

5. **How does marriage work?**
> "Marriage" permanently links your NFT to a physical artwork. You photograph the art from 6+ angles, submit a marriage request, and once verified, the bond is recorded on-chain forever. The NFT is the soul. The art is the body.

6. **Can I sell my NFT?**
> Yes — on OpenSea anytime. If your NFT is married to physical art, you can also list it on the Turbomindz marketplace, where both the digital and physical transfer together. 5% creator royalty applies to all secondary sales.

7. **What is the marketplace?**
> The Turbomindz marketplace is exclusively for married NFTs — phygital art that includes both the digital scene and a physical artwork. All trades are public (Witnessed Economy). 2.5% marketplace commission applies.

8. **How do I join Discord?**
> Collect any Turbomindz NFT. Guild.xyz automatically detects your purchase and grants you the "Collector" role, unlocking all gated channels. No manual verification needed.

9. **What are easter eggs?**
> Every scene contains exactly 5 hidden details — references, foreshadowing, jokes, and secrets. Finding them is half the fun. Use #FindTheEasterEggs in Discord to hunt with the community.

10. **Is this a good investment?**
> Turbomindz is art and philosophy, not financial advice. We build for collectors who value the story, the community, and the craft. If the art moves you, collect it. If you're looking for guaranteed returns, this isn't the right project — and we respect you enough to say so.

---

### EPISODES PAGE

**Header:**
> *The Odyssey*
> 39 episodes. 39 universes. One question per world. Watch four travelers try to save the questions humanity forgot to ask.

**Season Cards:**

Season 1: DEPARTURE (Episodes 1-13)
> *The discovery begins.* Cosmo opens a door. The universes are dying. Can four travelers create enough to save them?

Season 2: THE ORDEAL (Episodes 14-26)
> *The crisis deepens.* The Fade accelerates. The enemy has a name. And everything they believed was wrong.

Season 3: THE RETURN (Episodes 27-39)
> *The transformation.* Not every ending is a loss. Not every fade is a death. Sometimes the bravest act is to let go.

---

### MARRIAGE PAGE

**Hero:**
Title: *"Unite Soul and Body"*
Subtitle: *When a Turbomindz NFT marries a physical artwork, both become something neither could be alone.*

**How It Works (4 steps — self-service, no approval needed):**

1. **Own** — Collect a Turbomindz NFT on Polygon
2. **Create** — Make or acquire a physical artwork that resonates with your scene
3. **Photograph** — Capture the artwork from 6 required angles (Front, Back, Top, Bottom, Left, Right) + 2 optional detail shots
4. **Marry** — Upload your photos, confirm the details, and the marriage is recorded on-chain instantly. No waiting. No approval. It's your art and your NFT — the bond is yours to make.

*Want to change the physical artwork linked to your NFT? Re-marriages require a community vote (3 of 5 Elders/Scribes) + $20 MATIC fee to prevent fraud. The community governs itself.*

**Why Marry?**

1. *Unique in the world* — No other NFT project permanently binds digital to physical art
2. *Marketplace access* — Only married NFTs can be listed on the Turbomindz marketplace
3. *Permanent provenance* — On-chain record of the marriage lives forever on the Provenance Museum
4. *Self-governing* — No gatekeepers. The community watches over itself.

**Photo Requirements:**
Front view (full face of artwork), Back view (frame/canvas), Top edge, Bottom edge, Left side, Right side — all REQUIRED. Detail shot 1 (signature/mark), Detail shot 2 (texture close-up) — OPTIONAL.

**Marriage Fee:**
> First marriage is instant and free. Re-marriages (changing the linked artwork): $20 MATIC + community vote. The community protects the integrity of every bond.

---

## 5. IMAGE GENERATION PROMPTS (Nano Banana 2)

All prompts use Nano Banana 2's descriptive prose format. No Midjourney flags. Set aspect ratio and resolution in the platform UI.

### Homepage Hero Image
**Aspect Ratio:** 16:9 | **Resolution:** 4K

> A vast cinematic scene of a small claymation astronaut with orange boots and a fishbowl helmet standing at the edge of a golden bridge that connects 39 floating islands in a deep teal cosmos. Each island is a distinct miniature universe with its own unique art tradition — one Renaissance, one cybernetic, one made of ink wash, one of stained glass. Gold nebula swirls fill the background. Warm candlelit glow emanates from each island. The inscription "Know Thyself" floats in golden light above the bridge entrance. The entire scene is rendered in plasticine stop-motion animation style, like Pixar meets Aardman studios, with warm rich textures, volumetric golden light rays, and museum-quality detail. Low angle dramatic composition looking up at the astronaut. Deep teal and gold color palette throughout.

### Membership Explainer — Step 1 (Browse)
**Aspect Ratio:** 4:3 | **Resolution:** 2K

> A claymation astronaut character with orange boots and a fishbowl helmet peering curiously through a museum gallery window at rows of glowing philosophical art scenes displayed on warm teal walls. The gallery is warm and inviting with golden lighting, reflections visible in the glass, and the astronaut's expression filled with contemplative wonder. Plasticine stop-motion style with soft, warm golden hour lighting.

### Membership Explainer — Step 2 (Collect)
**Aspect Ratio:** 4:3 | **Resolution:** 2K

> A claymation astronaut character with orange boots reaching out to touch a glowing golden NFT scene that hovers in the air, with a small MetaMask fox icon visible on a floating screen nearby. Purple Polygon network accent. Warm golden spark effects radiate from the point of contact between the astronaut's hand and the NFT. Plasticine stop-motion animation style with warm teal and gold color palette.

### Membership Explainer — Step 3 (Enter)
**Aspect Ratio:** 4:3 | **Resolution:** 2K

> A claymation astronaut character walking through massive golden doors into a warm, bustling village of diverse clay characters. String lights overhead, community gathering visible inside, warm and welcoming atmosphere. The village has deep teal buildings with gold accents. Diverse clay figures wave in greeting. Plasticine stop-motion style, warm golden hour lighting throughout.

### Marriage Concept Image
**Aspect Ratio:** 16:9 | **Resolution:** 4K

> A ceremonial claymation scene split in two halves connected by golden threads. The left half shows a glowing digital NFT artwork displayed on a floating screen. The right half shows a physical oil painting resting on a wooden easel. Golden ribbons weave between both halves forming a heart shape. Four small claymation characters stand around in formal poses as witnesses — one astronaut, one with floating orbs, one with gradient hair, one with a notebook. Deep teal background with gold accents, warm candlelight, ornate golden frame surrounding both pieces. Plasticine stop-motion Pixar meets Aardman style, museum-quality detail.

### Card Flip Concept
**Aspect Ratio:** 16:9 | **Resolution:** 2K

> A 3D illustration showing two states of a collectible card. The left card shows a colorful claymation NFT artwork of an alchemical cathedral as the front face. The right card shows the same card flipped, revealing photographs of a physical painting from multiple angles arranged in a grid. A curved golden arrow between the two cards indicates the flip motion. Deep teal background, gold borders on both cards. Clean infographic style with museum presentation quality.

### Community/Discord Preview
**Aspect Ratio:** 16:9 | **Resolution:** 2K

> A claymation scene of a vibrant digital village square with diverse clay characters chatting in small groups. Speech bubbles containing philosophical symbols float above them. A large bulletin board displays pinned discussion threads. Some characters at market stalls display flippable cards showing married art pieces. A Discord logo is subtly integrated into a building sign. Deep teal and gold palette, warm golden hour lighting, bustling but organized atmosphere. Plasticine stop-motion Pixar meets Aardman style.

### Three Pillars

**Philosophy (1:1, 2K):**
> A claymation owl wearing small gold spectacles perched on a stack of ancient philosophical texts. A thought bubble above the owl contains a glowing golden question mark. Deep blue and gold color palette, warm library setting with candlelight. Contemplative atmosphere. Plasticine stop-motion style.

**Community (1:1, 2K):**
> A circle of diverse claymation characters sitting together on cushions in a warm room, sharing art and having animated conversations. Gold string lights above, warm teal walls, a "Welcome" sign in gold script. Inclusive and cozy atmosphere. Plasticine stop-motion style.

**Marketplace (1:1, 2K):**
> A claymation market stall with a friendly clay vendor displaying flippable cards — NFT on one side, physical art on the other. A balanced golden scale nearby symbolizes fair trade. Warm golden lighting, deep teal and gold palette. Plasticine stop-motion style.

### Newsletter Background
**Aspect Ratio:** 16:9 | **Resolution:** 2K

> A cozy claymation scene of a small astronaut sitting at a wooden desk writing by candlelight, surrounded by scattered pages of a newsletter. A small purple-haired character with a notebook sketches illustrations in the corner. Through a window, 39 glowing islands are visible in a deep teal night sky. Warm, intimate, golden lighting. Plasticine stop-motion style.

---

## 6. SEO & CONVERSION STRATEGY

### SEO Keywords (Target)
- "philosophical art NFT"
- "claymation NFT collection"
- "phygital art marketplace"
- "NFT married to physical art"
- "animated NFT series"
- "philosophy NFT Polygon"
- "art community Web3"

### Meta Tags (Homepage)
```html
<title>Turbomindz — 1,111 Philosophical Art NFTs + Animated Series</title>
<meta name="description" content="Four claymation characters. 39 universes. 1,111 collectible scenes. An odyssey through the questions that changed everything. Collect art. Watch the story. Enter the village.">
```

### Conversion Architecture
1. **Homepage → Gallery** (primary): Browse the collection
2. **Gallery → Scene Detail** (engagement): Explore individual scenes
3. **Scene Detail → Purchase** (conversion): Collect via wallet or OpenSea
4. **Purchase → Account** (onboarding): Welcome, Traveler
5. **Account → Discord** (retention): Enter the village
6. **Discord → Patreon** (monetization): Support the odyssey

### Email Capture Points
- Newsletter signup (homepage footer + dedicated section)
- "Get notified when new episodes drop" (episodes page)
- Free lead magnet download (Gumroad: "Phygital Art 101" PDF)

---

## 7. COMPONENT LIBRARY

### Core Components to Build

| Component | Purpose | Priority |
|-----------|---------|----------|
| NFTCard | Gallery grid item, hover effects, theme badge | P0 |
| NFTDetailPage | Full scene view with metadata, quote, easter eggs | P0 |
| PurchaseModal | Dual-path purchase (in-app + OpenSea) | P0 |
| WalletConnectButton | thirdweb Connect integration | P0 |
| FilterBar | Universe/Theme/Character/Season filters | P0 |
| EpisodeCard | Episode thumbnail + title + watch CTA | P1 |
| VideoPlayer | Embedded episode player | P1 |
| CardFlip | 3D flip animation for married NFTs | P1 |
| MarriageRequestForm | Multi-step form with photo upload | P1 |
| MembershipGate | Route protection for members-only pages | P1 |
| ForumPost | Discord-synced forum thread display | P2 |
| BidPanel | Marketplace bid/ask interface | P2 |
| GovernanceVote | Snapshot integration | P2 |
| TrustScoreboard | Public trading metrics | P2 |

---

*"The app isn't a product. It's a doorway. Just like the one Cosmo found."*
