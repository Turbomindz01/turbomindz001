# TURBOMINDZ — CLAUDE DESIGN WORKFLOW
## Step-by-Step Instructions for Designing the App Interface

**Date:** April 18, 2026
**Tool:** Claude Design (Pencil)
**Reference Docs:** APP_CRITICAL_ANALYSIS_AND_REVISED_UX.md + APP_WEBSITE_BLUEPRINT.md + MASTER_BIBLE_V2.md

---

## PREREQUISITES

1. Open the Claude Design desktop app (Pencil)
2. Ensure the Pencil MCP server is connected (check that Claude can call `get_editor_state`)
3. Have the Turbomindz brand assets accessible (logos, sample NFT images, color codes)

---

## DESIGN SYSTEM SETUP

Before designing any screens, establish the Turbomindz design system in Claude Design.

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| tm-bg-primary | #004D5C | Primary background (deep teal) |
| tm-bg-secondary | #003844 | Secondary/card background (darker teal) |
| tm-bg-surface | #00566A | Surface/elevated elements |
| tm-accent-gold | #C9A227 | Primary accent, CTAs, active states |
| tm-accent-gold-hover | #D4AF37 | Gold hover state |
| tm-text-primary | #FFF8F0 | Primary text (warm white) |
| tm-text-secondary | #B8C4C8 | Secondary/muted text |
| tm-text-tertiary | #7A8E95 | Tertiary/disabled text |
| tm-border | #1A6B7D | Borders, dividers |
| tm-error | #E53935 | Error states |
| tm-success | #43A047 | Success states |
| tm-classical | #1A237E | Theme: Classical Foundations |
| tm-enlightenment | #C9A227 | Theme: Enlightenment & Reason |
| tm-existentialism | #4A148C | Theme: Existentialism & Modern |
| tm-mysticism | #00695C | Theme: Mysticism & Esoterica |
| tm-eastern | #E65100 | Theme: Eastern Wisdom |
| tm-science | #607D8B | Theme: Science & Modernity |
| tm-poetry | #AD1457 | Theme: Poetry & Aesthetics |
| tm-civic | #B71C1C | Theme: Civic & Social |
| tm-psychology | #00838F | Theme: Psychology & Mind |

### Typography
| Style | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display | Playfair Display | 32px | 700 | Hero headlines |
| H1 | Playfair Display | 28px | 700 | Page titles |
| H2 | Playfair Display | 22px | 600 | Section headers |
| H3 | Inter | 18px | 600 | Card titles, subsection headers |
| Body | Inter | 16px | 400 | Body text |
| Body Small | Inter | 14px | 400 | Secondary text, descriptions |
| Caption | Inter | 12px | 500 | Labels, badges, metadata |
| Mono | JetBrains Mono | 14px | 400 | NFT IDs, prices, data |
| CTA | Inter | 16px | 600 | Button text |

### Spacing Scale
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

### Corner Radius
- Cards: 12px
- Buttons: 8px
- Badges/pills: 20px (full round)
- Modals: 16px
- Images: 8px
- Bottom nav pill: 36px

### Elevation (Dark Mode)
- Level 0: Background (#004D5C)
- Level 1: Cards (#00566A) + subtle 1px border (#1A6B7D)
- Level 2: Modals (#006B82) + shadow rgba(0,0,0,0.3)
- Level 3: Floating elements (#007A94) + stronger shadow

---

## SCREEN DESIGN ORDER

Design screens in this order. Each screen builds on components established in previous screens.

### Phase 1: Core Screens (Mobile First)
1. Homepage (mobile 390px width)
2. Gallery — Explore Mode (mobile)
3. Scene Detail (mobile)
4. Bottom Navigation Bar
5. Episodes Hub (mobile)
6. Shop Page (mobile)

### Phase 2: Key Flows
7. Purchase Modal (overlay)
8. Web3 Onboarding Tooltip Flow
9. Account Creation (email-first + wallet optional)
10. Marriage Submission Flow (multi-step)

### Phase 3: Member Screens
11. Profile Page (3 states: free, collector, Patreon)
12. Marketplace (mobile)
13. Universe Explorer (mobile)
14. Provenance Museum (mobile)

### Phase 4: Desktop Adaptations
15. Homepage (desktop 1440px)
16. Gallery (desktop — 4-column grid)
17. Scene Detail (desktop — side-by-side layout)
18. Episodes (desktop)

---

## STEP-BY-STEP: DESIGNING EACH SCREEN

---

### SCREEN 1: HOMEPAGE (MOBILE — 390×844px)

**File:** `turbomindz-homepage-mobile.pen`

**Purpose:** First impression. 6 conversion paths. Story hook.

**Blueprint:**
- Status Bar: Standard, 62px, tm-bg-primary background
- App Content: Single vertical scroll
  - Header: Logo "TURBOMINDZ" (Playfair Display, gold) + hamburger menu icon (warm white)
  - Section 1 — Hero: Background image (blurred NFT scene), question headline overlay, 2 CTA buttons
  - Section 2 — Universe Preview: Horizontal scroll row of 9 circular universe cards
  - Section 3 — How It Works: 2-column layout showing crypto path + free path
  - Section 4 — Featured Scenes: Horizontal scroll carousel, 6 NFT cards
  - Section 5 — The Odyssey: Episode teaser card
  - Section 6 — The Marriage: Split visual concept
  - Section 7 — Shop Preview: 3 product cards
  - Section 8 — Newsletter: Email input + lead magnet offer
  - Footer: Social links + legal
- Bottom Bar: Pill Tab Bar (Home, Explore, Episodes, Shop, Profile)

**Claude Design Steps:**

**Step 1 — Open new document**
```
Call: open_document("new")
```

**Step 2 — Get style guide**
```
Call: get_style_guide_tags()
Pick tags closest to: dark, premium, art, collectible, gallery, mobile, webapp
Call: get_style_guide(tags: [selected tags])
```

**Step 3 — Set up the mobile frame**
```
Call: batch_design — Create phone frame (390×844)
- Root frame: 390×844, fill #004D5C, vertical layout, gap 0
- Status bar: 390×62, fill #004D5C
- Content scroll area: 390×720 (fills remaining), vertical layout, gap 32, padding 20px horizontal, overflow scroll
- Bottom nav container: 390×62
```

**Step 4 — Build the Hero section**
```
Call: batch_design — Hero section
- Hero container: fill width, 360px height, relative positioning
- Background: placeholder image rectangle with 50% opacity overlay
- Headline text: "What happens to a question nobody asks anymore?" — Playfair Display 28px, bold, #FFF8F0, centered
- Subline: "1,111 scenes. 4 characters. 39 universes." — Inter 14px, #B8C4C8, centered
- CTA Primary button: "Explore the Universes" — fill #C9A227, text #004D5C, 16px Inter 600, radius 8px, padding 14×24
- CTA Secondary button: "Watch the Story" — border 1px #C9A227, text #C9A227, 16px Inter 600, radius 8px, padding 14×24
```

**Step 5 — Universe Preview row**
```
Call: batch_design — Universe cards
- Section title: "Nine Questions" — Playfair Display 22px, #C9A227
- Horizontal scroll container: fill width, 140px height, horizontal layout, gap 12, overflow scroll
- 9 universe circles: 100×100 each, rounded full, border 2px theme color, placeholder image fill
- Label below each: theme name — Inter 10px, #B8C4C8, centered
```

**Step 6 — How It Works**
```
Call: batch_design
- Section title: "Two Ways In" — Playfair Display 22px, #FFF8F0
- Two cards side by side (each 165×200):
  - Card 1: "Collect" — icon, 3 steps (Browse → Connect Wallet → Own), gold accent
  - Card 2: "Join Free" — icon, 3 steps (Sign Up → Explore → Subscribe), teal accent
- Both cards: fill #00566A, radius 12px, border 1px #1A6B7D
```

**Step 7 — Featured Scenes carousel**
```
Call: batch_design
- Section title: "Featured Scenes" — Playfair Display 22px
- Horizontal scroll: 6 NFT cards (160×240 each), gap 12
- Each card: image placeholder (160×160, radius 8px top), title (Inter 14px 600), universe badge (pill, theme color), price (JetBrains Mono 14px, #C9A227)
```

**Step 8 — Episode teaser, Marriage, Shop preview, Newsletter**
```
Call: batch_design — remaining sections
- Episode teaser: full width card, thumbnail left + text right, "Watch the Odyssey" CTA
- Marriage: split visual, gold connecting lines illustration
- Shop: 3 product cards in horizontal scroll
- Newsletter: heading + email input field + subscribe button + "Get '9 Questions' free" subtext
```

**Step 9 — Bottom Navigation Bar**
```
Call: batch_design — Tab bar
- Container: full width, 62px height, padding 12px top / 21px sides+bottom
- Pill: fill #003844, height 62px, radius 36px, border 1px #1A6B7D, horizontal layout, gap 0
- 5 tabs: Home (active), Explore, Episodes, Shop, Profile
- Active tab: fill #C9A227, icon+label #004D5C, radius 26px
- Inactive tabs: transparent, icon+label #7A8E95
- Icons: 18px, Labels: 10px Inter 600, uppercase
```

**Step 10 — Save**
```
Save file to: /sessions/happy-quirky-euler/mnt/TMDZ/TURBOMINDZ_V2/04_APP_WEBSITE/designs/turbomindz-homepage-mobile.pen
```

---

### SCREEN 2: GALLERY — EXPLORE MODE (MOBILE)

**File:** `turbomindz-gallery-mobile.pen`

**Purpose:** Narrative discovery of 1,111 NFTs organized by universe.

**Blueprint:**
- Status Bar: Standard
- App Content:
  - Header: "The Collection" title + search icon + grid/explore toggle
  - Mode toggle: "Explore" (active) | "Grid" pills
  - Universe sections: Each universe is a collapsible row
    - Universe header: Name + art tradition + theme color dot + expand/collapse chevron
    - Horizontal scroll of NFT cards within each universe
  - Scroll: Vertical (universe rows) + horizontal (cards within rows)
- Bottom Bar: Pill Tab Bar (Explore active)

**Key Components to Design:**
- NFT Card (compact): 140×200, image + title + price + marriage icon
- Universe row header: Full width, theme color left border
- Search overlay: Full-screen search with recent + suggested
- Grid mode: 2-column vertical grid with same NFT cards

---

### SCREEN 3: SCENE DETAIL (MOBILE)

**File:** `turbomindz-scene-detail-mobile.pen`

**Purpose:** Full NFT experience — image, metadata, purchase.

**Blueprint:**
- Status Bar: Edge-to-edge (image behind status bar with safe padding)
- App Content:
  - Hero image: Full width, 4:5 aspect ratio, zoomable, swipe for related scenes
  - Floating back arrow (top left) + share icon (top right) over image
  - Content below image (scrollable):
    - Title + NFT ID (JetBrains Mono)
    - Universe badge (pill, theme color) + Episode link
    - Price: MATIC amount (large, gold) + USD estimate (small, secondary)
    - 2 CTA buttons stacked: "Collect This Scene" (gold, primary) + "View on OpenSea" (outlined)
    - Divider
    - Philosopher's Quote section: blockquote styling, attribution
    - Easter Eggs: 5 items with eye icon + "Found it?" toggle
    - Metadata table: Universe, Theme, Character, Season, Episode, Traits
    - "From This Episode" section: Episode card with "Watch" CTA
    - "Related Scenes" horizontal scroll: 4 NFT cards
- Bottom Bar: Hidden on this screen (CTAs replace it)

---

### SCREEN 4: PURCHASE MODAL (OVERLAY)

**File:** `turbomindz-purchase-modal-mobile.pen`

**Purpose:** Dual-path purchase with Web3 onboarding.

**Blueprint:**
- Modal overlay: 90% screen height, slides up from bottom, radius 16px top
- Sections:
  - Handle bar (drag indicator)
  - NFT thumbnail (small) + title + price
  - Tab toggle: "Pay with Wallet" | "View on OpenSea"
  - Wallet tab:
    - "Connect Wallet" button (if not connected)
    - Wallet options: MetaMask, Coinbase, WalletConnect, Email Wallet
    - "New to crypto?" expandable section with 3-step visual guide
    - Connected state: wallet address + balance + "Confirm Purchase" CTA
    - Gas estimate: "< $0.01 on Polygon"
  - OpenSea tab:
    - OpenSea listing preview
    - "Open in OpenSea" button
    - "Come back after purchase to claim your village membership"
  - Footer: "Powered by Polygon" badge

---

### SCREEN 5: ACCOUNT CREATION (EMAIL-FIRST)

**File:** `turbomindz-account-creation-mobile.pen`

**Purpose:** Two-door entry. Email for everyone, wallet optional.

**Blueprint:**
- Full screen flow (3 steps):
  - Step 1 — "Join the Village": Email input + "Continue" button. Below: "Or connect wallet" link. Social proof: "Join X travelers"
  - Step 2 — "Almost there": Display name input + optional avatar upload + "What interests you?" multi-select (Philosophy, Art, NFTs, Animation, Community)
  - Step 3 — "Welcome, Traveler": Confirmation with character illustration (Cosmo waving). "Your free gifts:" list (newsletter, lead magnets). CTAs: "Explore the Collection" + "Watch Episode 1"

---

### SCREEN 6: EPISODES HUB (MOBILE)

**File:** `turbomindz-episodes-mobile.pen`

**Purpose:** The animated series as a first-class destination.

**Blueprint:**
- Header: "The Odyssey" + season tabs (3 tabs)
- Featured episode: Large card at top (latest/current episode)
- Episode list: Vertical cards
  - Each card: Thumbnail (16:9) + Episode number + Title + Universe name + Duration + "Watch" CTA
  - Watched indicator (checkmark) for logged-in users
  - Patreon-locked indicator for early access episodes
- Bottom of list: "More episodes coming soon" + Patreon CTA

---

### SCREEN 7: SHOP PAGE (MOBILE)

**File:** `turbomindz-shop-mobile.pen`

**Purpose:** Digital products, merch, and Patreon conversion.

**Blueprint:**
- Header: "The Shop" + category filter pills (horizontal scroll)
- Categories: Free, Quotes, Guides, Art, Courses, Bundles, Merch
- Featured bundle: Large card at top with discount badge
- Product grid: 2-column
  - Each card: Image + title + price + "Get It" CTA
  - Free items: "Free — Enter Email" CTA (email gated)
- Patreon banner: Between product rows — "Want everything? $3/month" CTA
- Merch section: Links to Etsy/Printful with product previews

---

### SCREEN 8: PROFILE PAGE (MOBILE)

**File:** `turbomindz-profile-mobile.pen`

**Purpose:** Personalized dashboard showing account state.

**Design 3 states:**

**State A — Free Account:**
- Avatar + display name + "Free Member" badge
- Saved favorites (NFTs bookmarked)
- Episodes watched / progress bar
- Downloaded lead magnets
- "Upgrade" CTAs: "Collect an NFT" + "Join Patreon"

**State B — Collector:**
- Avatar + display name + "Collector" badge (gold)
- "My NFTs" grid (with CardFlip for married ones)
- Easter egg hunt progress (X/5,555 found)
- Marriage status + "Marry Your NFT" CTA
- Trading history
- Discord link

**State C — Patreon Supporter:**
- Everything from Collector +
- Patreon tier badge
- "Exclusive Content" section
- Early episode access queue

---

### SCREEN 9: UNIVERSE EXPLORER (MOBILE)

**File:** `turbomindz-universe-explorer-mobile.pen`

**Purpose:** Interactive discovery of 39 universes.

**Blueprint:**
- Full screen visual: Constellation/map of 39 universe nodes
- Each node: Circle with universe art preview + theme color glow
- Tap a node: Expands into card overlay with universe name, art tradition, core question, 3 sample scenes, "Explore Universe" CTA
- Nodes connected by subtle lines (narrative connections between universes)
- Color legend: 9 theme colors mapped to philosophical categories
- Search bar at top: "Search universes or questions"

---

### SCREEN 10: PROVENANCE MUSEUM (MOBILE)

**File:** `turbomindz-provenance-museum-mobile.pen`

**Purpose:** Showcase all marriages as a public gallery of phygital art.

**Blueprint:**
- Header: "The Provenance Museum" + total marriages count
- Featured: "Marriage of the Month" large card with CardFlip
- Gallery: Vertical list of marriage entries
  - Each entry: NFT image (small) + physical art image (small) + marriage date + collector name + universe badge
  - Tap to expand: Full CardFlip + all 6-8 photos + artwork details
- Filters: Universe, date, art medium
- Footer: "Submit Your Marriage" CTA

---

## DESKTOP ADAPTATION NOTES

When adapting mobile screens to desktop (1440px width):

### Navigation
- Replace bottom tab bar with top horizontal nav bar
- Logo left, nav items center, "Connect Wallet" + profile right
- Add mega-menu dropdown for "Explore" (universe grid on hover)

### Gallery (Desktop)
- 4-column grid (default) or 3-column for larger cards
- Left sidebar for filters (sticky)
- Universe explore mode: Full-width universe rows

### Scene Detail (Desktop)
- Side-by-side: Image left (50%), content right (50%)
- Related scenes in 4-column row below
- Purchase CTAs always visible in right column (sticky)

### Homepage (Desktop)
- Hero: Full-width with centered content, max-width 1200px
- Universe preview: All 9 visible without scroll
- Featured scenes: 3 visible, arrows to scroll
- 2-column layout for Marriage + Shop preview sections

---

## DESIGN REVIEW CHECKLIST

After designing each screen, verify:

- [ ] Dark mode only (no light mode toggle needed)
- [ ] All text meets 4.5:1 contrast ratio against tm-bg-primary
- [ ] Gold (#C9A227) on teal (#004D5C) passes 3:1 for large text
- [ ] Touch targets are 44×44px minimum
- [ ] Primary CTA is visible without scrolling on mobile
- [ ] Playfair Display used only for headings, never body text
- [ ] Inter used for all body text and UI labels
- [ ] JetBrains Mono used for prices, NFT IDs, and data
- [ ] No page has more than 1 primary CTA above the fold
- [ ] Empty states designed for all data-dependent sections
- [ ] Loading skeleton designed for image-heavy areas
- [ ] Brand voice: "Collect" not "Buy", "Village" not "Community", "Traveler" not "User"
- [ ] Each page has at least 1 revenue-relevant CTA
- [ ] Email capture present on every major page
- [ ] Pinterest domain verification meta tag referenced in layout spec

---

## HOW TO USE THIS WITH CLAUDE

When you open Claude Design and are ready to start, tell Claude:

> "I'm designing the Turbomindz app. Read the file at /sessions/happy-quirky-euler/mnt/TMDZ/TURBOMINDZ_V2/04_APP_WEBSITE/CLAUDE_DESIGN_WORKFLOW.md for the complete design system, screen specs, and step-by-step instructions. Start with Screen 1: Homepage Mobile."

Claude will then:
1. Call `get_style_guide_tags()` to find matching style inspiration
2. Call `get_style_guide()` with relevant tags
3. Call `get_guidelines("mobile-app")` for structural rules
4. Call `open_document("new")` to create a new canvas
5. Call `batch_design()` with operations to build each section
6. Call `snapshot_layout()` to verify the design
7. Call `get_screenshot()` to show you the result

Iterate on each screen before moving to the next.

---

*"The interface is the bridge between the traveler and the odyssey. Make it invisible. Make it inevitable."*
