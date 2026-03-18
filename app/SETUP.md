# Turbomindz App — Setup Instructions

## Step 1: Open Terminal (Command Prompt or PowerShell on Windows)

Navigate to this folder:
```
cd C:\Users\Hugo\Documents\Turbomindz\app
```

## Step 2: Install Node.js (if not already installed)
Download from https://nodejs.org — get the LTS version (v20+).

## Step 3: Install Dependencies
```
npm install
```
This reads package.json and installs Next.js, React, Tailwind, Framer Motion, and everything else.

## Step 4: Run the Development Server
```
npm run dev
```
Open your browser to http://localhost:3000 — you should see the Turbomindz homepage!

## Step 5: Verify Build
```
npm run build
```
This must complete with ZERO errors before deploying.

## What You'll See
- **Homepage**: Hero section, featured NFTs (mock data), story preview, character showcase, 9 themes grid, newsletter signup
- **Gallery** (/gallery): Placeholder grid — will connect to Supabase in Week 7-8
- **Story** (/story): Full narrative with character profiles
- **Marketplace** (/marketplace): Coming soon page with marriage/trade/provenance previews
- **About** (/about): Project philosophy, tech stack, 9 questions, motto

## Project Structure
```
app/
├── src/
│   ├── app/                  ← Pages (Next.js App Router)
│   │   ├── layout.tsx        ← Root layout with Navbar + Footer
│   │   ├── page.tsx          ← Homepage
│   │   ├── globals.css       ← Tailwind + brand styles
│   │   ├── gallery/page.tsx
│   │   ├── story/page.tsx
│   │   ├── marketplace/page.tsx
│   │   └── about/page.tsx
│   ├── components/
│   │   ├── layout/           ← Navbar, Footer
│   │   ├── sections/         ← Homepage sections (Hero, FeaturedNFTs, etc.)
│   │   └── ui/               ← Reusable UI components (coming)
│   ├── lib/
│   │   ├── data.ts           ← Mock data (themes, characters, featured NFTs)
│   │   └── cn.ts             ← Class name utility
│   ├── types/
│   │   └── index.ts          ← TypeScript type definitions
│   └── hooks/                ← Custom React hooks (coming)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── postcss.config.mjs
```

## Troubleshooting

**"npm not found"**: Install Node.js from nodejs.org
**Build errors about types**: Run `npx tsc --noEmit` to see specific type errors
**Fonts not loading**: The Google Fonts import is in globals.css — requires internet
**Port 3000 in use**: Run `npm run dev -- -p 3001` to use a different port
