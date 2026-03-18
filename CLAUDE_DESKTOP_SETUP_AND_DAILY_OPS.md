# CLAUDE DESKTOP — Setup Guide & Daily Operations Manual
## For Turbomindz Project Operations
### Version 1.0 | March 17, 2026

---

## PART 1: CLAUDE DESKTOP INSTALLATION & SETUP

### Step 1: Install Claude Desktop (if not already installed)

1. Open your web browser and go to: https://claude.ai/download
2. You will see two download options — choose the one for your operating system:
   - **Windows**: Click "Download for Windows"
   - **Mac**: Click "Download for Mac"
3. Wait for the download to complete (usually 200-400 MB)
4. Open your Downloads folder and find the Claude installer file
5. Double-click the installer file to run it
6. Follow the installation prompts (click "Next" or "Install" when asked)
7. Once installation completes, launch Claude Desktop from your Applications folder or Start Menu
8. You will be asked to sign in:
   - If you already have an Anthropic/Claude account: Enter your email and password
   - If you don't have an account: Click "Create an account" and follow the signup process
9. **Critical**: You need a Claude Pro subscription ($20/month USD) for Cowork mode access. This is your single most important tool investment. Without it, Claude cannot access your local files or run commands.
10. After signing in, you should see the main Claude Desktop interface with a chat window

### Step 2: Enable Cowork Mode

1. With Claude Desktop open, look at the top of the window or the left sidebar
2. You should see a tab or button labeled "Cowork" or a toggle switch
3. Click on "Cowork" to enter Cowork mode
4. You may be asked to authorize access to your computer — click "Authorize" or "Allow"
5. Cowork mode gives Claude access to your local file system, ability to run code, create files, and execute commands
6. You are now ready to select your workspace folder

### Step 3: Select and Create Your Workspace Folder

1. Claude will prompt you to select a workspace folder (or you can manually set it)
2. Navigate to one of these locations on your computer:
   - **Windows**: `C:\Users\[YourUsername]\Documents`
   - **Mac**: `/Users/[YourUsername]/Documents`
3. Create a new folder and name it: **TURBOMINDZ**
4. Select the TURBOMINDZ folder as your workspace
5. Inside the TURBOMINDZ folder, create these subfolders (you can do this by right-clicking → New Folder in your file explorer):
   ```
   TURBOMINDZ/
   ├── nft-images/          (your 150 PNG files go here)
   ├── weekly-production/   (Claude's /week command output goes here)
   ├── products/            (digital products: PDFs, journals, etc.)
   ├── social-media/        (scheduled posts and captions)
   ├── newsletter/          (weekly newsletter drafts)
   ├── reports/             (revenue reports, KPI tracking)
   ├── app-code/            (Next.js app source code — later)
   └── state/               (progress tracking files)
   ```

**How to create these folders:**
- Open your file explorer (Windows) or Finder (Mac)
- Navigate to Documents/TURBOMINDZ
- Right-click in the empty space → New Folder
- Name each folder exactly as shown above
- Repeat for all 8 folders

### Step 4: Upload the Project Knowledge and Instructions

1. In Claude Desktop, look for a "Projects" section or button (usually in the left sidebar)
2. Click on "Create New Project" or the "+" icon next to Projects
3. Name the project: **TURBOMINDZ — Philosophical Art NFT Platform & Business**
4. You will see an "Upload Files" section
5. Click "Upload Files" and select these documents from wherever you've saved them:
   - Master Bible v7.0 (all 8 DOC files — upload them all)
   - Build Document v3.0
   - Integration Guide
   - Funding & Monetization Strategy v1.0
   - Implementation Playbook v1.0
   - Agent Operations System v1.0
6. Wait for all files to finish uploading (you'll see a checkmark next to each file)
7. Below the uploaded files, you should see a "Project Instructions" text field
8. In this field, paste the complete Turbomindz project instructions. This is the full agent system prompt with all 12 agents, core rules, and reference data. Copy and paste from your project documentation.
9. Click "Save Project"
10. This project context will now be available in every Cowork session you start

**Note**: Every time you open Claude Cowork, make sure this project is selected (you'll see it highlighted in the Projects list).

### Step 5: Install Custom Skills (Over Your First Week)

Skills are automated helpers that perform specific tasks. You'll install 8 skills for Turbomindz operations.

**How to install a skill:**

1. In Claude Cowork, type a message like: "I'd like to create a new skill. Here's the skill definition for turbomindz-opensea-lister:"
2. Then paste the complete SKILL.md content from your COWORK_Skills_Workflows_Agents.md document
3. Claude will set up the skill for you
4. Once created, test it with a sample command (e.g., "OPENSEA: /list TM-001")
5. If it works, move on to the next skill
6. If it doesn't work, tell Claude "This skill didn't work because [problem]" and Claude will fix it

**Installation order (do this over your first week):**

- **Day 1 (TODAY)**: `turbomindz-opensea-lister` (needed immediately to list NFTs)
- **Day 1 (TODAY)**: `turbomindz-content-writer` (needed immediately for content creation)
- **Day 2**: `turbomindz-social-poster` (needed for social media automation)
- **Day 3**: `turbomindz-nft-producer` (needed for ongoing NFT creation)
- **Day 4**: `turbomindz-newsletter` (needed for newsletter generation)
- **Day 5**: `turbomindz-product-creator` (needed for digital products like journals, guides)
- **Week 2**: `turbomindz-revenue-tracker` (needed when revenue starts coming in)
- **Week 2**: `turbomindz-qa-verifier` (ongoing quality assurance checks)

Each skill takes 5-10 minutes to set up. Don't rush — test each one before moving to the next.

### Step 6: Set Up Scheduled Tasks (After You're Comfortable)

Once you've been running daily sessions for 3-4 days and feel comfortable with Claude's workflow, set up automated tasks.

**To create a scheduled task:**

1. In Cowork, type: "I'd like to set up a scheduled task"
2. Claude will ask you these questions:
   - What's the name of the task? (Example: "daily-content-pipeline")
   - When should it run? (Example: "Every day at 8:00 AM")
   - What should the task do? (Example: "Generate today's content checklist and social media posts")
3. Follow Claude's prompts to configure the task
4. Once created, Claude will run this task automatically at the scheduled time

**Tasks to set up:**
- Daily content pipeline (8:00 AM every morning)
- Weekly newsletter draft (Sunday 10:00 AM)
- Monthly revenue report (1st of each month at 9:00 AM)

**Important**: Don't set up scheduled tasks until you're comfortable with manual operations. You need to understand how the system works first.

---

## PART 2: DAILY OPERATIONS — HOW TO USE CLAUDE COWORK

### Your Daily Routine (1-2 hours per day)

You have two types of days:

#### TYPE A: Quick Daily Operations (30-45 minutes)
**When**: Monday through Saturday (the weekly content is already produced from your Sunday session)

**Morning Session (15 minutes):**

1. Open Claude Desktop on your computer
2. Make sure you're in Cowork mode (you should see "Cowork" at the top or in the left sidebar)
3. Make sure the "TURBOMINDZ" project is selected in the Projects list
4. Type this message to Claude:
   ```
   Good morning. We're on Day [X] of the 90-day launch plan for Turbomindz.
   I've already produced Week [N] content yesterday.
   What's today's checklist?
   ```
   (Replace [X] with the current day number and [N] with the current week number)
5. Claude will show you today's specific tasks
6. Navigate to your local folder: `TURBOMINDZ/weekly-production/week-[N]/day-[X]/`
7. You will find pre-made content files here:
   - Instagram post image and caption
   - Twitter post text
   - Discord announcement text
8. Copy the Instagram caption text
9. Go to Instagram on your phone or computer and create a new post
10. Upload the image and paste the caption
11. Post it
12. Repeat for Twitter and Discord (paste the pre-made text into each platform)

**Evening Session (15-30 minutes):**

1. Open Claude Cowork again
2. Type:
   ```
   Evening check-in.
   - Posted today's content? Yes
   - Uploaded NFTs to OpenSea? [Yes/No]
   - Responded to any community comments? [Yes/No]
   - Any issues today? [Description or None]

   What's the status update?
   ```
3. Claude will log your progress and tell you what's done for the day
4. If you haven't uploaded NFTs yet today, do that now:
   - Open your OpenSea account (you'll need MetaMask connected — more on this below)
   - Go to `TURBOMINDZ/weekly-production/week-[N]/day-[X]/`
   - Find the file: `NFT_LISTING_[item-number].txt` (this contains the metadata and description)
   - Copy the NFT image file to your desktop
   - On OpenSea, click "Create" → "Single Item"
   - Upload the image
   - Fill in the name, description (copy from the .txt file), and price (usually $5-50 for Turbomindz)
   - Click "Create"
5. Check social media for any comments or messages
   - Reply to comments on your posts
   - Answer questions from Discord members
   - This builds community engagement
6. Close Claude Cowork

**That's one complete day. Repeat this Monday-Saturday.**

---

#### TYPE B: Sunday Weekly Production Session (2-3 hours)
**When**: Every Sunday (produces all content for the next 7 days)

This is your big production day. You'll generate 79 content pieces in one session.

**Phase 1: Generate All Content (30 minutes with Claude)**

1. Open Claude Cowork
2. Make sure the TURBOMINDZ project is selected
3. Type this exact message:
   ```
   COSMO: /week [N]
   ```
   (Replace [N] with the week number. For example: `/week 1` for the first week)
4. Claude will generate a massive output with:
   - 21 NFT packages (metadata, Midjourney prompts, OpenSea descriptions)
   - 14 Instagram posts (captions + Midjourney prompts for images)
   - 14 Twitter posts (text only)
   - 7 Discord announcements
   - 21 Pinterest pin descriptions
   - 1 Medium article
   - 1 YouTube script
   - 1 Newsletter draft
5. This will take 5-15 minutes to generate
6. Once done, Claude will tell you it's created a folder like: `TURBOMINDZ/weekly-production/week-[N]/`
7. Open this folder on your computer — you'll see all the organized content files
8. Read through the `WEEK_OVERVIEW.md` file to understand this week's theme and content
9. **Do not close Claude yet** — keep it open for the next phase

**Phase 2: Generate Images in Midjourney (60-90 minutes)**

Midjourney is an AI image generator. You'll use it to create all the visual content for the week.

**If you don't have Midjourney yet:**
1. Go to: https://www.midjourney.com
2. Click "Sign up" or "Join Beta"
3. Complete the signup process with your email
4. Choose the Basic plan ($10/month)
5. You'll get an invitation to Midjourney's Discord server
6. Accept the invitation and join the Discord

**Generating your images:**

1. Open Midjourney (either in Discord or via their web interface)
2. Go back to Claude and copy the first Midjourney prompt from your weekly folder
   - Look for the file: `NFT_PROMPTS_TM-[numbers].txt`
   - Copy one prompt (it will be something like: "A surreal oil painting of consciousness... --ar 1:1 --niji 6")
3. In Midjourney, paste the prompt and press Enter (or click the send button)
4. Midjourney will generate 4 image options within 1 minute
5. Click the checkmark under the best image to upscale it
6. Download the upscaled image
7. **Repeat this 57 times** (yes, that's a lot, but you have all week if needed):
   - 21 NFT scene images (1:1 ratio, from NFT_PROMPTS files)
   - 7 Instagram reveal promo images (4:5 ratio)
   - 7 Instagram educational promo images (4:5 ratio)
   - 21 Pinterest pin images (2:3 ratio)
   - 1 YouTube thumbnail

**Pro tip to speed this up:**
- Generate multiple images at once by opening several Midjourney windows
- Save all downloaded images to a folder: `TURBOMINDZ/weekly-production/week-[N]/all-images-sunday/`
- Organize them by type once all are generated

**Phase 3: Schedule Everything (30-60 minutes)**

Now you schedule all content to post at the right time throughout the week.

**Instagram (using Buffer or Later):**
1. Go to: https://buffer.com (free tier) or https://laterforinstagram.com (free tier)
2. Sign up or log in
3. Connect your Instagram account (Buffer/Later will ask for permission)
4. For each Instagram post:
   - Click "Create Post" or "New Post"
   - Upload the image file
   - Copy the caption from your weekly folder file
   - Paste the caption
   - Choose the day and time you want it posted (e.g., Monday 10:00 AM)
   - Click "Schedule"
5. The post will automatically post at the scheduled time
6. Repeat for all 14 Instagram posts

**Twitter (using TweetDeck or Buffer):**
1. Go to: https://tweetdeck.twitter.com
2. Log in with your Twitter account
3. Click the "Compose" button
4. Copy a Twitter post text from your weekly folder
5. Paste it into the compose window
6. Click the calendar icon to schedule it
7. Choose the date and time you want it posted
8. Click "Schedule"
9. Repeat for all 14 Twitter posts

**Pinterest (using Tailwind):**
1. Go to: https://www.tailwindapp.com
2. Sign up or log in
3. Connect your Pinterest account
4. For each Pinterest pin:
   - Click "Create Pin"
   - Upload the Pinterest image
   - Copy the description from your weekly folder
   - Paste it
   - Add these hashtags: #philosophy #art #nft #consciousness
   - Schedule for a date/time during the week
   - Click "Schedule"
5. Repeat for all 21 Pinterest pins

**Discord Announcements (save for daily paste):**
1. Open your Discord server
2. Go to your announcements channel or main channel
3. Copy each day's Discord announcement from your weekly folder
4. You'll paste these manually each morning (only takes 10 seconds)
5. Don't schedule these in advance — Discord works better with manual posts

**Medium Article (publish mid-week):**
1. Go to: https://medium.com
2. Log in or create an account
3. Click "Write" to create a new article
4. Copy the complete Medium article from your weekly folder
5. Paste the content
6. Add a title and featured image (use one of your NFT scene images)
7. Don't publish yet — schedule it for Wednesday or Thursday
8. When ready, click "Publish"

**Newsletter (send Friday):**
1. Go to: https://buttondown.email (free tier)
2. Sign up or log in
3. Click "Compose Newsletter"
4. Copy the newsletter draft from your weekly folder
5. Paste it into the newsletter editor
6. Review the content and check for any errors
7. Schedule it to send Friday morning at 9:00 AM
8. Click "Schedule"

**YouTube (when time allows):**
1. The YouTube script is ready — you can record video when you have time
2. Use the thumbnail image that was generated (from the Pinterest batch)
3. This doesn't need to be weekly — do it when you can

**Phase 4: Review and Close**

1. Go back to Claude Cowork
2. Type:
   ```
   Week [N] complete. I've:
   - Generated 79 content pieces
   - Created 57 images in Midjourney
   - Scheduled all Instagram (14 posts)
   - Scheduled all Twitter (14 posts)
   - Scheduled all Pinterest (21 pins)
   - Set up Medium article for Wednesday
   - Scheduled newsletter for Friday
   - Saved Discord announcements for daily posting
   - Ready for Monday morning

   What's the full status?
   ```
3. Claude will give you a summary and you're done for the week
4. Close Claude Cowork

**You just produced a week's worth of content for 7 platforms. On Monday, all you do is post one thing per day. That's the power of Sunday production.**

---

## PART 3: KEY COMMANDS FOR CLAUDE COWORK

These are the specific commands you'll use most often. Type them exactly as shown.

### Strategic Planning Commands:

```
COSMO: /status
```
Shows your current project dashboard — NFTs listed, revenue, week number, current tasks

```
COSMO: /day [date]
```
Shows today's specific task list. Example: `COSMO: /day monday` or `COSMO: /day day-23`

```
COSMO: /week [number]
```
Shows the full weekly plan overview before running the production. Example: `COSMO: /week 1`

```
COSMO: /plan [topic]
```
Strategic planning for a specific topic. Example: `COSMO: /plan nft-pricing` or `COSMO: /plan discord-growth`

### Content Production Commands:

```
/week [N]
```
Generate full week's content (all 79 pieces). Example: `/week 1` or `/week 3`

```
/week [N] nft-only
```
Generate just the 21 NFT packages for that week. Skip all social content.

```
/week [N] instagram-only
```
Generate just the 14 Instagram posts for that week.

```
/week [N] day-[D]
```
Generate just one day's content across all platforms. Example: `/week 1 day-3` for Wednesday of week 1

```
/week [N] twitter-only
```
Generate just the 14 Twitter posts for that week.

### NFT Production Commands:

```
MINT: /scene [number]
```
Generate a single NFT production package. Example: `MINT: /scene TM-001` or `MINT: /scene 42`

```
MINT: /batch [start] [end]
```
Generate a batch of NFT packages. Example: `MINT: /batch TM-001 TM-021` generates 21 NFTs at once

```
FORGE: /build opensea-lister
```
(For later) Builds the automated listing tool once your app is ready

### Content Writing Commands:

```
NOVA: /essay [theme]
```
Write a full philosophical essay. Example: `NOVA: /essay consciousness` or `NOVA: /essay identity`

```
NOVA: /article [topic] medium
```
Write an article formatted for Medium. Example: `NOVA: /article "The Illusion of Time" medium`

```
NOVA: /caption instagram [scene-id]
```
Write an engaging Instagram caption. Example: `NOVA: /caption instagram TM-042`

```
NOVA: /caption twitter [scene-id]
```
Write a Twitter post. Example: `NOVA: /caption twitter TM-042`

```
NOVA: /chapter [book] [number]
```
Write a book chapter. Example: `NOVA: /chapter "The Philosophy Codex" 3`

### Marketing & Growth Commands:

```
STELLA: /calendar [week]
```
Get the content calendar for a week. Example: `STELLA: /calendar 2`

```
STELLA: /campaign [name]
```
Launch a complete campaign plan. Example: `STELLA: /campaign "Spring Equinox Launch"`

```
STELLA: /hashtags [theme]
```
Get the perfect hashtag set for a theme. Example: `STELLA: /hashtags consciousness`

### Quality Assurance Commands:

```
LUNA: /audit [content]
```
Full QA check of any content. Paste the content and Claude checks for brand voice, accuracy, engagement

```
LUNA: /pd-check [quote] [author]
```
Verify if a quote is public domain (safe to use). Example: `LUNA: /pd-check "To be or not to be" Shakespeare`

```
LUNA: /brand-check [text]
```
Check if text follows Turbomindz brand voice and values

### Revenue & Reporting Commands:

```
VAULT: /revenue-report [period]
```
Generate a revenue report. Example: `VAULT: /revenue-report week-1` or `VAULT: /revenue-report march`

```
WATCHTOWER: /kpi-dashboard
```
See current key metrics: NFTs listed, sold, revenue, followers, email subscribers, etc.

```
WATCHTOWER: /transparency-report [month]
```
Monthly transparency report showing all revenue streams, costs, growth

### Product Creation Commands:

```
VAULT: /product-create [name] [type] [price]
```
Create a digital product. Example: `VAULT: /product-create "The Philosophy Coloring Book" pdf 15`

```
VAULT: /launch-product [name]
```
Full launch sequence: email campaign, social posts, landing page, sales tracker

```
HERALD: /newsletter [week]
```
Compose the weekly newsletter. Example: `HERALD: /newsletter 1`

---

## PART 4: CONTINUITY — HOW TO RESUME EACH SESSION

**This is critical**: Claude needs context at the start of each session to pick up where you left off.

### Starting a New Day's Session:

1. Open Claude Desktop
2. Make sure you're in Cowork mode
3. Make sure the "TURBOMINDZ" project is selected from your Projects list
4. **Before asking for your daily tasks, give Claude this context:**

```
We're working on the Turbomindz philosophical art NFT project.
Today is Day [X] of the 90-day launch plan.

Current status:
- Today's date: [Date]
- Current week: [Week number]
- NFTs listed so far: [number] / 888
- NFTs sold so far: [number]
- Week [N] content: [Produced/In progress/Not started yet]
- Total revenue this month: $[amount]
- Last completed task: [Description]
- Any blockers or issues: [Yes/No - describe if yes]

What's on the agenda today?
```

Replace the [bracketed] items with your actual numbers. If you don't know a number, just write "Unknown" or make your best estimate.

5. Claude will now give you today's specific checklist based on your real progress
6. Follow the checklist

**Example of a proper context message:**

```
We're working on the Turbomindz philosophical art NFT project.
Today is Day 8 of the 90-day launch plan.

Current status:
- Today's date: March 18, 2026
- Current week: Week 2
- NFTs listed so far: 42 / 888
- NFTs sold so far: 3
- Week 2 content: Produced on Sunday
- Total revenue this month: $147 (from NFT sales and Ko-fi tips)
- Last completed task: Posted Monday's content
- Any blockers or issues: My Midjourney is running slow

What's on the agenda today?
```

### Weekly Status Update (Do This Every Sunday Before Production):

Before you run the `/week [N]` command on Sunday, give Claude this information:

```
COSMO: /status

Weekly Update for Week [N]:
- NFTs listed this week: [count]
- NFTs sold this week: [count]
- Total revenue this week: $[amount]
  - From NFT sales: $[amount]
  - From Ko-fi: $[amount]
  - From Patreon: $[amount]
  - From other sources: $[amount]
- Discord server members: [count]
- Newsletter subscribers: [count]
- Patreon patrons: [count]
- Instagram followers: [count]
- Twitter followers: [count]
- Content published this week: [count] posts
- Biggest win this week: [Description]
- Biggest challenge this week: [Description]
- What's working: [Description]
- What needs improvement: [Description]

Ready to produce Week [N]? /week [N]
```

This helps Claude adjust the content strategy based on what's actually working.

### Monthly Review (Do This on the 1st of Each Month):

```
WATCHTOWER: /transparency-report [month]

Monthly Data for [Month]:
- Total NFTs listed: [count]
- Total NFTs sold: [count]
- Total revenue: $[amount]
  - NFT sales: $[amount]
  - Ko-fi: $[amount]
  - Patreon: $[amount]
  - Other: $[amount]
- Total costs: $[amount]
  - Midjourney: $[amount]
  - Claude Pro: $[amount]
  - Hosting/Tools: $[amount]
  - Other: $[amount]
- Net profit: $[amount]
- Discord members: [count]
- Newsletter subscribers: [count]
- Patreon patrons: [count]
- Average engagement rate: [percentage]
- Best performing content: [Description]
- Customer feedback: [Summary]

Generate transparency report for public sharing.
```

---

## PART 5: TROUBLESHOOTING

### Problem: "Claude doesn't remember my project"
**Solution:**
- Make sure the TURBOMINDZ project is selected (highlighted) in the Projects list on the left
- Each time you open Claude Cowork, it's a new session
- Always provide context at the start about what you're working on
- The project knowledge files help, but you still need to give daily context

### Problem: "The /week command produces too much output"
**Solution:**
- Break it down into smaller commands:
  - Use `/week [N] nft-only` for just the NFT packages
  - Use `/week [N] instagram-only` for just Instagram content
  - Use `/week [N] day-[D]` for just one day's content
- Or ask Claude to "Generate Week [N] in sections — start with NFTs"

### Problem: "I'm falling behind the 90-day plan"
**Solution:**
- Type this message to Claude:
```
I'm on Day [X] but I've only completed up to Day [Y] due to [reason].
The 90-day plan is aggressive. Can you recalculate it based on my actual pace?
```
- Claude will adjust the schedule to match your real productivity
- Don't try to catch up all at once — focus on consistent daily progress

### Problem: "I can't afford both Midjourney and Claude Pro"
**Minimum viable toolkit:**
- Claude Pro: $20/month (absolutely required)
- Midjourney Basic: $10/month (required for images)
- Total: $30/month
- If budget is extremely tight, use free image sources initially (Unsplash, Pexels) and upgrade to Midjourney later
- But seriously — budget $30/month for this. It's the ROI engine for your entire project

### Problem: "I'm not sure if my content is good"
**Solution:**
- Use this command: `LUNA: /audit [paste your content]`
- Claude will check for:
  - Brand voice (does it sound like Turbomindz?)
  - Clarity (is it easy to understand?)
  - Engagement (would people want to like/share this?)
  - Accuracy (are there any errors?)
- Revise based on feedback

### Problem: "OpenSea isn't working"
**Most common issues:**
1. MetaMask not connected to Polygon
   - Open MetaMask extension
   - Click the network dropdown (top of extension)
   - Select "Polygon" or "Matic"
   - If not listed, click "Add Network" and use chainID 137, RPC: https://polygon-rpc.com
2. Not enough MATIC tokens for gas fees
   - You need at least 0.1 MATIC in your wallet
   - Go to a crypto exchange (Coinbase, Kraken), buy MATIC, and transfer to your MetaMask wallet
3. Browser issues
   - Try refreshing the page
   - Clear browser cache
   - Try a different browser

### Problem: "I don't understand what COSMO/NOVA/STELLA/LUNA commands do"
**Explanation:**
- These are shorthand for different agent roles in your system
- COSMO = Project coordinator (scheduling, status, planning)
- NOVA = Writer (essays, articles, captions)
- STELLA = Marketing specialist (campaigns, hashtags, growth)
- LUNA = Quality assurance (auditing, checking, verifying)
- VAULT = Finance & products (revenue, costs, digital products)
- WATCHTOWER = Analytics & reporting (KPIs, transparency)
- HERALD = Newsletter & communications (email campaigns)
- FORGE = Technical builder (when app development starts)
- You can also just say what you need without the role name and Claude will figure it out

### Problem: "My community isn't engaging"
**Solution:**
- Type: `STELLA: /campaign "engagement-boost"`
- Claude will give you a 2-week campaign plan
- Ask: "What content types get the most engagement in our Discord?"
- Share your analytics with Claude: "Instagram reach was 200 on Monday, 500 on Wednesday. What was different?"
- Claude will identify what's working and help you do more of it

### Problem: "I missed a day of posting"
**Solution:**
- Don't panic. Just pick up the next day.
- Type: "I missed yesterday's post. Can you help me catch up without overwhelming the feed?"
- Claude will suggest whether to post yesterday's content late, skip it, or combine it with today's
- Consistency over perfection — it's better to post once per day consistently than to miss days trying to catch up

---

## PART 6: SETTINGS CHECKLIST

Go through this checklist to make sure everything is set up correctly.

### Claude Desktop Settings:

- [ ] Claude Desktop is installed and running
- [ ] You're signed in with your Anthropic account
- [ ] Claude Pro subscription is active (check: https://claude.ai/account)
- [ ] Cowork mode is enabled (you see "Cowork" at the top)
- [ ] Workspace folder selected: `~/Documents/TURBOMINDZ` or `C:\Users\[You]\Documents\TURBOMINDZ`
- [ ] All 8 subfolders are created in TURBOMINDZ (nft-images, weekly-production, etc.)
- [ ] TURBOMINDZ project is created in Claude
- [ ] All knowledge files are uploaded to the project
- [ ] Project instructions are pasted into the Project Instructions field
- [ ] At least 2 skills are installed and tested (`turbomindz-opensea-lister` and `turbomindz-content-writer`)

### External Tools — Crypto/NFT:

- [ ] MetaMask is installed (https://metamask.io)
- [ ] MetaMask wallet is created with a secure password
- [ ] Recovery seed phrase is saved in a safe place (not on your computer)
- [ ] Polygon network is added to MetaMask
- [ ] You have some MATIC tokens in your MetaMask wallet (at least 0.1 MATIC for gas)
- [ ] OpenSea account is created (https://opensea.io)
- [ ] OpenSea is connected to your MetaMask wallet
- [ ] You've tested listing one NFT on OpenSea (can be a test image)

### External Tools — Image Generation:

- [ ] Midjourney account is created (https://midjourney.com)
- [ ] Midjourney subscription is active ($10/month)
- [ ] You've generated at least 3 test images in Midjourney
- [ ] You know how to download images from Midjourney
- [ ] You have Midjourney running and tested

### External Tools — Content Scheduling:

- [ ] Buffer account created (https://buffer.com) OR Later account (https://laterforinstagram.com)
- [ ] Instagram account connected to Buffer/Later
- [ ] You've scheduled at least 1 test post on Instagram
- [ ] Twitter account created (https://twitter.com)
- [ ] TweetDeck or Buffer account set up for Twitter scheduling
- [ ] Pinterest account created (https://pinterest.com)
- [ ] Tailwind account created (https://tailwindapp.com) for Pinterest scheduling
- [ ] You've tried scheduling one Pinterest pin

### External Tools — Community & Email:

- [ ] Discord server created (or you know the invite link)
- [ ] Ko-fi account created (https://ko-fi.com)
- [ ] Ko-fi widget/link is working
- [ ] Patreon account created (optional, but recommended) (https://patreon.com)
- [ ] Buttondown account created for newsletter (https://buttondown.email)
- [ ] You've sent one test newsletter
- [ ] Medium account created (https://medium.com) — optional but recommended

### External Tools — YouTube (Optional for now, can do later):

- [ ] YouTube channel created (https://youtube.com)
- [ ] Channel art uploaded (or placeholder image)
- [ ] Channel description written
- [ ] You know where to find your upload settings

### Financial/Admin:

- [ ] You have a method for tracking income (spreadsheet or Claude session)
- [ ] You know your target monthly revenue ($500? $1000? $5000?)
- [ ] You've set up a simple expense tracker for tool costs
- [ ] You understand your revenue split (what % to marketing, content, personal income, etc.)

---

## QUICK START SUMMARY

**If you want to start TODAY with minimal setup:**

1. ✅ Claude Desktop is installed and signed in
2. ✅ Cowork mode is enabled
3. ✅ Create `~/Documents/TURBOMINDZ` folder
4. ✅ Create the 8 subfolders inside
5. ✅ Create TURBOMINDZ project in Claude
6. ✅ Upload your knowledge files
7. ✅ Install `turbomindz-opensea-lister` skill
8. ✅ Install `turbomindz-content-writer` skill
9. ✅ MetaMask is installed with Polygon configured
10. ✅ Midjourney Basic is subscribed

**Then you can:**
- Generate your first week of content: `/week 1`
- Create your first NFT images in Midjourney
- List your first NFT on OpenSea
- Schedule your first social media posts
- Launch your Discord server

**You're officially in business.**

---

## SUPPORT & GETTING HELP

If something breaks or you're stuck:

1. **Try the Troubleshooting section (PART 5)** — most common issues are covered
2. **Ask Claude directly**: "I'm stuck on [problem]. Here's what I tried. What's the fix?"
3. **Check your folder structure**: Make sure all your files are organized
4. **Verify your subscriptions**: Make sure Claude Pro and Midjourney are still active
5. **Test one thing at a time**: If multiple things aren't working, test each tool individually

---

## VERSION HISTORY

- **v1.0** — March 17, 2026 — Initial document for Hugo's setup
  - Complete installation guide for Claude Desktop
  - Daily operations workflow (Monday-Saturday quick ops + Sunday production)
  - All 7 agent commands documented
  - Troubleshooting section
  - Settings checklist

---

**Document created**: March 17, 2026
**For**: Hugo (Turbomindz project)
**Status**: Ready to use

**Next step**: Print this out, grab your MetaMask, and let's build something extraordinary. ✍️
