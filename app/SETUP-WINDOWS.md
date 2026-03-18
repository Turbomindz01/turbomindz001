# TURBOMINDZ APP — Windows Setup Guide (VS Code)
## Exact Step-by-Step Instructions for Beginners

---

## PART 1: Install Required Software (One-Time Setup)

### Step 1: Install Node.js
1. Open your browser and go to: https://nodejs.org
2. Click the big green button that says **"LTS"** (Long Term Support) — currently v20 or v22
3. Run the downloaded installer (.msi file)
4. Click "Next" through all screens. Leave all default options checked.
5. When it asks about "Chocolatey" or "Tools for Native Modules" — check YES
6. Click "Install" and wait for it to finish
7. Click "Finish"

**Verify it worked:**
- Press `Windows Key + R`, type `cmd`, press Enter
- In the black command window, type: `node --version` and press Enter
- You should see something like `v22.12.0` (the exact number doesn't matter)
- Type: `npm --version` and press Enter
- You should see something like `10.9.0`
- If you see errors, restart your computer and try again

### Step 2: Install Git
1. Go to: https://git-scm.com/download/win
2. Download and run the installer
3. Click "Next" through all screens — leave all defaults
4. Click "Install" and wait, then "Finish"

### Step 3: Install VS Code (If Not Already Installed)
1. Go to: https://code.visualstudio.com
2. Click the big blue "Download for Windows" button
3. Run the installer, click "Next" through everything
4. Check "Add to PATH" if asked

---

## PART 2: Open the Project in VS Code

### Step 4: Open the app folder
1. Open VS Code
2. Click **File → Open Folder**
3. Navigate to your Turbomindz folder and select the **app** subfolder
   - If your files are at: `C:\Users\Hugo\Documents\Turbomindz\app` — select that
   - If you're using the Cowork folder, copy the `app` folder to your Documents first
4. Click "Select Folder"

You should see the file tree on the left with: `src/`, `package.json`, `tailwind.config.ts`, etc.

### Step 5: Open the Terminal inside VS Code
1. Press **Ctrl + `** (backtick — the key above Tab, left of 1)
2. A terminal panel opens at the bottom of VS Code
3. Make sure it says something like `PS C:\Users\Hugo\...\app>` — that means you're in the right folder

---

## PART 3: Install Dependencies and Run

### Step 6: Install all packages
In the VS Code terminal, type this EXACT command and press Enter:

```
npm install
```

**What happens:** npm reads `package.json` and downloads Next.js, React, Tailwind CSS, Framer Motion, and all other libraries. This takes 1-3 minutes. You'll see a progress bar and lots of text scrolling.

**When it's done**, you should see something like:
```
added 350 packages in 45s
```

If you see **errors**, try:
```
npm install --force
```

### Step 7: Run the development server
In the same terminal, type:

```
npm run dev
```

**What happens:** Next.js starts a local development server. You'll see:
```
▲ Next.js 14.2.21
- Local:   http://localhost:3000
```

### Step 8: View your website!
1. Open your web browser (Chrome, Edge, Firefox — any works)
2. Go to: **http://localhost:3000**
3. You should see the Turbomindz homepage with:
   - Dark teal background
   - "TURBOMINDZ" logo in gold
   - "Where Philosophy Meets Art" hero section
   - Featured NFT cards
   - Story preview
   - Character showcase (Cosmo, Nova, Stella, Luna)
   - 9 Themes grid
   - Newsletter signup

### Step 9: Explore the other pages
- http://localhost:3000/gallery — NFT Gallery (placeholder grid)
- http://localhost:3000/story — The Story page with full narrative
- http://localhost:3000/marketplace — Marketplace (coming soon)
- http://localhost:3000/about — About page with philosophy and tech stack

---

## PART 4: Testing the Build

### Step 10: Stop the dev server
In the terminal, press **Ctrl + C** to stop the running server.

### Step 11: Run the production build test
Type:
```
npm run build
```

**What happens:** Next.js compiles every page and checks for errors. This is the most important test. It must complete with ZERO errors.

**Success looks like:**
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization

Route (app)                    Size     First Load JS
┌ ○ /                          5.2 kB       92 kB
├ ○ /about                     1.8 kB       88 kB
├ ○ /gallery                   1.5 kB       88 kB
├ ○ /marketplace               1.3 kB       88 kB
└ ○ /story                     2.1 kB       89 kB
```

**If you see errors:** Copy the ENTIRE error message and paste it into this Cowork chat. Say "FORGE: fix this build error" and I'll tell you exactly what to change.

---

## PART 5: Daily Development Workflow

### Every time you want to work on the app:
1. Open VS Code
2. Open the `app` folder (File → Open Recent if you've opened it before)
3. Open terminal: **Ctrl + `**
4. Start the dev server: `npm run dev`
5. Open browser to http://localhost:3000
6. Edit code files — the browser auto-refreshes when you save!
7. When done, stop with **Ctrl + C**
8. Test build: `npm run build`
9. If build passes with zero errors, you're good!

### How to save your progress with Git:
```
git init
git add .
git commit -m "Week 1: Foundation and layout complete"
```

### How to make changes:
- Edit files in `src/` — changes appear instantly in your browser
- The homepage is: `src/app/page.tsx`
- To change the navbar: `src/components/layout/Navbar.tsx`
- To change mock data: `src/lib/data.ts`
- To change colors/fonts: `tailwind.config.ts`

---

## TROUBLESHOOTING

### "npm: command not found"
→ Node.js didn't install correctly. Restart your computer. If still broken, reinstall Node.js from nodejs.org

### "'next' is not recognized as an internal or external command"
→ Dependencies didn't install. Run `npm install` again.

### "Port 3000 is already in use"
→ Another app is using port 3000. Use a different port:
```
npm run dev -- -p 3001
```
Then go to http://localhost:3001

### Build errors about TypeScript types
→ Copy the full error and bring it to Cowork. Say "FORGE: fix this" and paste the error.

### The page loads but looks wrong (no colors, no styling)
→ Tailwind might not be processing. Make sure `postcss.config.mjs` and `tailwind.config.ts` exist in the `app/` folder.

### "Module not found: Can't resolve '@/components/...'"
→ Make sure all files are in the `src/` folder and the `tsconfig.json` has the `@/*` path alias pointing to `./src/*`

---

## WHAT COMES NEXT (Week 2+)

| Week | What You'll Build |
|------|------------------|
| 2 | Add Framer Motion animations, mobile polish, loading states |
| 3-4 | Gallery page with filters, NFT detail page, Story universe explorer |
| 5-6 | thirdweb wallet connect, user profiles, Zustand state |
| 7-8 | Supabase integration — replace all mock data with real database |
| 9-10 | Marketplace, trade threads, PWA configuration |
| 11-12 | Deploy to Vercel, connect turbomindz.com domain, app stores |

Each week, come back to Cowork and say: **"FORGE: Let's continue building. What's next?"**
