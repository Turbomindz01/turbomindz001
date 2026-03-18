# TURBOMINDZ — App Development Setup & Deployment Timeline
## From Zero to Live Website
### Version 1.0 | March 17, 2026

---

## PART 1: DEVELOPMENT ENVIRONMENT SETUP

### Prerequisites — What You Need Installed

#### Step 1: Install Node.js (Required for Next.js)
**Windows:**
1. Go to https://nodejs.org/
2. Download the LTS version (the green button)
3. Run the installer — click Next on everything (use defaults)
4. After install, open Command Prompt (search "cmd" in Windows)
5. Type: `node --version` → should show v20.x.x or v22.x.x
6. Type: `npm --version` → should show 10.x.x

**Mac:**
1. Go to https://nodejs.org/
2. Download the LTS version
3. Run the .pkg installer
4. After install, open Terminal (search "Terminal" in Spotlight)
5. Type: `node --version` → should show v20.x.x or v22.x.x
6. Type: `npm --version` → should show 10.x.x

#### Step 2: Install VS Code (Code Editor)
1. Go to https://code.visualstudio.com/
2. Download for your OS
3. Install with defaults
4. Open VS Code
5. Install these extensions (click the Extensions icon on the left sidebar, search for each):
   - **ESLint** — catches code errors
   - **Prettier** — auto-formats code
   - **Tailwind CSS IntelliSense** — autocomplete for styling
   - **TypeScript Importer** — auto-imports
   - **Error Lens** — shows errors inline

#### Step 3: Install Git (Version Control)
**Windows:**
1. Go to https://git-scm.com/download/win
2. Download and run the installer
3. Use all default settings
4. After install, open Command Prompt:
5. Type: `git --version` → should show git version 2.x.x
6. Configure your identity:
```bash
git config --global user.name "Hugo"
git config --global user.email "hugogaona@gmail.com"
```

**Mac:**
1. Open Terminal
2. Type: `git --version` — if not installed, macOS will prompt you to install it
3. Configure identity (same commands as above)

#### Step 4: Install MetaMask Browser Extension
1. Go to https://metamask.io/download/
2. Click "Install MetaMask for Chrome" (or your browser)
3. Create a new wallet OR import your existing one
4. **Add Polygon Network:**
   - Click the network dropdown at the top of MetaMask
   - Click "Add Network" → "Add a network manually"
   - Network Name: `Polygon Mainnet`
   - RPC URL: `https://polygon-rpc.com`
   - Chain ID: `137`
   - Currency Symbol: `MATIC`
   - Block Explorer: `https://polygonscan.com`
   - Click Save

#### Step 5: Create Accounts for Services
You'll create these accounts as needed during the 90-day plan, but here's the full list:

| Service | URL | Cost | When Needed |
|---------|-----|------|-------------|
| Vercel | vercel.com | Free | Week 7 (deployment) |
| Supabase | supabase.com | Free tier | Week 9 (database) |
| thirdweb | thirdweb.com | Free tier | Week 9 (wallet) |
| Pinata | pinata.cloud | Free tier | Week 10 (IPFS) |
| OpenSea | opensea.io | Free | Day 1 |
| Discord Developer | discord.com/developers | Free | Week 4 |
| Buttondown | buttondown.email | Free tier | Day 7 |
| GitHub | github.com | Free | Week 7 |

---

## PART 2: PROJECT INITIALIZATION — WHAT CLAUDE WILL DO

When you're ready to start building (around Day 46 of the 90-day plan, or earlier if you choose "Both in parallel"), here's exactly what happens:

### The 5 Mega-Prompts Build Process

Claude will write ALL the code. You just need to:
1. Have your development environment set up (Steps 1-5 above)
2. Open Claude Cowork with the TURBOMINDZ project selected
3. Tell Claude: "FORGE: Let's start building the app. Run Mega-Prompt 1."
4. Claude will create files, run commands, and build the app step by step
5. You copy-paste commands into your terminal when Claude tells you to (or Claude can run them directly in Cowork)

### How Claude Writes Code on Your Machine:

**Option A: Through Claude Cowork (Recommended)**
1. Open Claude Desktop → Cowork mode
2. Select your TURBOMINDZ workspace folder
3. Claude can directly create and edit files in your workspace
4. Claude can run terminal commands (npm install, npm run build, etc.)
5. You approve each action when Claude asks

**Option B: Through Claude Code (CLI)**
1. Install Claude Code: `npm install -g @anthropic-ai/claude-code`
2. Open terminal, navigate to your project folder
3. Run: `claude` to start Claude Code
4. Give it the same Mega-Prompt instructions
5. Claude Code writes files and runs commands directly

**Option C: Copy-Paste from Claude Chat**
1. Open Claude.ai or Claude Desktop (regular chat, not Cowork)
2. Paste the Mega-Prompt
3. Claude outputs code blocks
4. You copy each code block and create the files manually in VS Code
5. You run the terminal commands yourself
(This is the slowest method but works if Cowork isn't available)

---

## PART 3: THE BUILD — MEGA-PROMPTS BREAKDOWN

### MEGA-PROMPT 1: Foundation (Days 46-52, ~1 week)
**What it builds:**
- Next.js 14 project initialization with App Router
- TypeScript strict mode configuration
- Tailwind CSS with Turbomindz brand theme (colors, fonts)
- Project folder structure
- Layout component (header, footer, navigation)
- Landing page with hero section
- About page
- Collection gallery page (mock data)
- Dark mode as default
- Responsive mobile-first design
- SEO metadata on all pages

**Terminal commands Claude will run:**
```bash
# Initialize the project
npx create-next-app@14 turbomindz --typescript --tailwind --app --src-dir --import-alias "@/*"
cd turbomindz

# Install core dependencies
npm install framer-motion lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu zustand

# Install dev dependencies
npm install -D @types/node

# Verify build
npm run build
```

**Files created (~20 files):**
```
turbomindz/
├── src/
│   ├── app/
│   │   ├── layout.tsx          (root layout with brand fonts & dark mode)
│   │   ├── page.tsx            (landing page)
│   │   ├── about/page.tsx
│   │   ├── collection/page.tsx (gallery with mock data)
│   │   └── globals.css         (Turbomindz theme)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── NFTCard.tsx
│   │   ├── HeroSection.tsx
│   │   └── ThemeProvider.tsx
│   ├── lib/
│   │   ├── constants.ts        (brand colors, theme data)
│   │   └── mock-data.ts        (placeholder NFT data)
│   └── types/
│       └── index.ts            (TypeScript types)
├── tailwind.config.ts          (brand theme)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

**Success criteria:** `npm run build` passes with zero errors. Site runs locally at localhost:3000.

---

### MEGA-PROMPT 2: NFT Gallery & OpenSea Integration (Days 53-59)
**What it builds:**
- NFT detail page with full metadata display
- OpenSea SDK integration for live data
- Collection filtering by theme, universe, act, character
- Search functionality
- NFT trait display
- Price display in MATIC
- "Buy on OpenSea" direct links
- Animation/transitions with Framer Motion
- Image optimization with next/image

**Key integration: OpenSea API**
- Uses OpenSea's Polygon endpoint
- Fetches collection data, individual NFT data
- Displays real-time pricing and ownership
- Links to OpenSea for purchase

---

### MEGA-PROMPT 3: Authentication & Wallet (Days 60-66)
**What it builds:**
- thirdweb Connect v5 integration
- Wallet connection (MetaMask, Coinbase, 170+ wallets)
- Email wallet for non-crypto users
- User profiles (Supabase)
- NFT ownership verification
- Token-gated content areas
- Dashboard for connected users

**Key integrations:**
- thirdweb: wallet connection + embedded wallets
- Supabase: user profiles, auth state
- Guild.xyz: NFT verification for role assignment

---

### MEGA-PROMPT 4: Marriage System & Marketplace (Days 67-73)
**What it builds:**
- Marriage request submission form
- Photo/video upload for physical art documentation
- Admin dashboard for marriage verification
- Marriage certificate generation
- Verified marriages gallery ("Provenance Museum")
- Trade thread system (public witnessed trading)
- Dispute resolution workflow
- Marriage fees payment ($20 in MATIC)

**Supabase tables:**
- marriage_requests
- verified_marriages
- trade_threads
- dispute_records

---

### MEGA-PROMPT 5: Community, Governance & PWA (Days 74-80)
**What it builds:**
- Philosophy discussion forums (9 theme rooms)
- Governance/voting system (Snapshot integration)
- Community profiles with trust scores
- Challenges system
- Education section
- PWA configuration (Serwist service worker)
- Push notifications
- Offline support
- App manifest for mobile install

---

## PART 4: DEPLOYMENT TIMELINE

### Pre-Deployment Checklist (Day 80-82):
- [ ] All 5 mega-prompts completed
- [ ] `npm run build` passes with zero errors
- [ ] All pages responsive on mobile
- [ ] All mock data replaced with live data
- [ ] Environment variables configured (.env.local)
- [ ] OpenSea integration tested
- [ ] thirdweb wallet connection tested
- [ ] Supabase database populated
- [ ] PWA manifest configured
- [ ] SEO metadata on all pages

### Deployment Steps (Day 83-85):

#### Step 1: Push Code to GitHub
```bash
# In your project folder
git init
git add .
git commit -m "Initial commit: Turbomindz v1.0"
git remote add origin https://github.com/[your-username]/turbomindz.git
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up with your GitHub account
3. Click "Import Project"
4. Select the turbomindz repository
5. Vercel auto-detects Next.js
6. Add environment variables:
   - `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` = [your thirdweb client ID]
   - `NEXT_PUBLIC_SUPABASE_URL` = [your Supabase project URL]
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = [your Supabase anon key]
   - `SUPABASE_SERVICE_ROLE_KEY` = [your Supabase service role key]
   - `OPENSEA_API_KEY` = [your OpenSea API key]
7. Click "Deploy"
8. Wait 2-3 minutes
9. Your site is live at: `turbomindz.vercel.app`

#### Step 3: Connect Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add: `turbomindz.com`
3. Vercel will show you DNS records to add
4. Log into Namecheap (where your domain is)
5. Go to Domain List → Manage → Advanced DNS
6. Add the records Vercel shows you:
   - Type: A Record, Host: @, Value: 76.76.21.21
   - Type: CNAME Record, Host: www, Value: cname.vercel-dns.com
7. Wait 15-60 minutes for DNS propagation
8. Visit https://turbomindz.com — your site is live!

#### Step 4: Configure Vercel for PWA
- The Serwist service worker auto-deploys with the build
- Users can "Add to Home Screen" on mobile
- PWA works offline for cached pages

### Post-Deployment (Days 85-90):

#### Step 5: App Store Submission (Optional, Week 12+)
**Android (Google Play):**
1. Use PWABuilder (https://pwabuilder.com)
2. Enter your URL: turbomindz.com
3. PWABuilder generates an Android APK
4. Create a Google Play Developer account ($25 one-time fee)
5. Upload the APK and fill out the listing
6. Submit for review (1-3 days)

**iOS (Apple App Store):**
1. Use Capacitor to wrap the PWA:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init turbomindz com.turbomindz.app
npx cap add ios
npx cap sync
```
2. Open in Xcode: `npx cap open ios`
3. Requires Apple Developer account ($99/year)
4. Submit through Xcode for review (3-7 days)

**Note:** App store submission is a Phase 3 goal. The PWA works perfectly as a mobile app without it.

---

## PART 5: COMPLETE DEVELOPMENT TIMELINE

### Phase 1: Revenue First (Days 1-45) — NO CODE
Focus: Getting money flowing via manual operations + content
- Day 1-14: OpenSea listings, Ko-fi, Gumroad, Patreon, Social Media
- Day 15-45: Product catalog, content engine, community growth
- Code: NONE during this phase (all manual revenue operations)

### Phase 2: App Development (Days 46-85) — BUILD + CONTINUE REVENUE
Build the app while maintaining daily operations:

| Day | Mega-Prompt | What Gets Built | Hours |
|-----|-------------|-----------------|-------|
| 46-47 | MP1 Setup | Project init, dependencies, config | 2-3 |
| 48-49 | MP1 Layout | Header, footer, navigation | 2-3 |
| 50-52 | MP1 Pages | Landing, About, Collection (mock) | 3-4 |
| 53-55 | MP2 Gallery | NFT gallery, filtering, search | 3-4 |
| 56-59 | MP2 OpenSea | OpenSea integration, live data | 4-6 |
| 60-62 | MP3 Auth | thirdweb wallet, email wallet | 3-4 |
| 63-66 | MP3 Profiles | Supabase, user dashboard | 4-5 |
| 67-70 | MP4 Marriage | Marriage system, admin panel | 4-5 |
| 71-73 | MP4 Market | Trade threads, provenance | 3-4 |
| 74-76 | MP5 Community | Forums, voting, challenges | 3-4 |
| 77-79 | MP5 PWA | Service worker, offline, manifest | 3-4 |
| 80-82 | Testing | QA, bug fixes, polish | 3-4 |
| 83-85 | Deploy | GitHub → Vercel → Domain | 2-3 |

**During this phase, daily operations continue:**
- Morning: Social media posts + community engagement (15-30 min)
- Building sessions: 30-60 min/day with Claude writing the code
- Sunday: Weekly content production (/week command)

### Phase 3: Scale & Optimize (Days 86-90+) — LIVE + GROW
- Website live at turbomindz.com
- Continue daily content + NFT production
- n8n automations go live (after 4 weeks manual testing)
- PWA available for mobile install
- App store submission preparation

---

## PART 6: DEVELOPMENT SESSION WORKFLOW

When you sit down to build (30-60 min session):

1. Open VS Code with the turbomindz project folder
2. Open Claude Desktop → Cowork mode (select TURBOMINDZ folder)
3. Tell Claude:
```
FORGE: We're building the Turbomindz app.
Currently on Mega-Prompt [X], working on [component/feature].
Last session we completed: [description].
npm run build status: [passing/failing with error X].
Continue from where we left off.
```
4. Claude writes the code, creates files, runs build
5. You approve each file creation/edit
6. At the end: `npm run build` must pass with zero errors
7. Git commit to save progress:
```bash
git add .
git commit -m "MP[X]: [description of what was built]"
```

### If Build Fails:
1. Don't panic
2. Copy the error message
3. Tell Claude: "FORGE: /fix — Build failed with this error: [paste error]"
4. Claude will diagnose and fix the issue
5. Run `npm run build` again
6. Repeat until zero errors

---

## QUICK REFERENCE CHEAT SHEET

### Essential Terminal Commands

**Before you start (one-time setup):**
```bash
node --version          # Verify Node.js installed
npm --version           # Verify npm installed
git --version           # Verify Git installed
```

**During development (every session):**
```bash
cd turbomindz           # Enter project folder
npm run dev             # Start local development (localhost:3000)
npm run build           # Verify build works (must pass)
git status              # Check what's changed
git add .               # Stage all changes
git commit -m "message" # Save progress
```

**If something breaks:**
```bash
npm install             # Reinstall all dependencies
rm -rf .next            # Clear Next.js cache
npm run build           # Try building again
```

### Mega-Prompt 1 Setup Command (Copy & Paste Ready)
```bash
npx create-next-app@14 turbomindz --typescript --tailwind --app --src-dir --import-alias "@/*" && cd turbomindz && npm install framer-motion lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu zustand && npm install -D @types/node && npm run build
```

### Environment Variables Template (.env.local)
Create this file at the root of your turbomindz project:
```
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_value_here
NEXT_PUBLIC_SUPABASE_URL=your_value_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_value_here
SUPABASE_SERVICE_ROLE_KEY=your_value_here
OPENSEA_API_KEY=your_value_here
```

---

## TROUBLESHOOTING QUICK START

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Node.js not installed. Go back to Step 1. |
| `git: command not found` | Git not installed. Go back to Step 3. |
| `Port 3000 already in use` | Another app is using it. Kill it with: `lsof -ti:3000 \| xargs kill -9` |
| `Module not found errors` | Run: `npm install` in the project folder |
| `Build fails with TypeScript errors` | Copy error message, paste to Claude with FORGE: /fix |
| `Strange behavior on localhost:3000` | Clear cache: `rm -rf .next && npm run dev` |
| `Git branch issues` | Run: `git status` to see what's wrong, ask Claude for help |

---

## Success Milestones

- **After Step 1-5:** Your machine is ready to build
- **After Mega-Prompt 1:** turbomindz.com skeleton is working locally
- **After Mega-Prompt 2:** Real NFTs display from OpenSea
- **After Mega-Prompt 3:** Users can connect wallets
- **After Mega-Prompt 4:** Marriage system is fully functional
- **After Mega-Prompt 5:** PWA works offline on mobile
- **After Deployment:** Your site is live at turbomindz.com
- **After Phase 3:** App is in Google Play and Apple App Store (optional)

---

## Need Help?

1. **Command failed?** Copy the error message and tell Claude: `FORGE: /fix — [paste error]`
2. **Not sure what to do?** Tell Claude: `FORGE: What's next? Where are we in the build?`
3. **Build is broken?** Tell Claude: `FORGE: /fix`
4. **Ready to commit progress?** Tell Claude: `FORGE: /commit`
5. **Stuck on a Mega-Prompt?** Tell Claude: `FORGE: Let's continue Mega-Prompt X from where we left off`

---

**Document Version:** 1.0 | **Created:** March 17, 2026 | **Status:** Ready to Use
