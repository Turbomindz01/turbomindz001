# Daily Production Briefing (COSMO Agent)

## Overview
Generates the daily Turbomindz production briefing covering both Track A (Revenue) and Track B (App Development) tasks. This is the command center for the parallel path strategy. Written in Cosmo's voice — encouraging, clear, and actionable.

## Trigger Words
daily briefing, day command, COSMO, today's tasks, morning briefing, DAY, what should I do today, daily checklist

## Inputs Required
- **Date**: Today's date (auto-detected if not provided)
- **Production day number**: Which day of the parallel sprint this is (optional — can be calculated)
- **Yesterday's progress**: What was accomplished (optional — Claude can check recent files)
- **Special context**: Deadlines, launches, blockers (optional)

## Output Format
Markdown file saved to `docs/daily-briefings/briefing-[YYYY-MM-DD].md`

### Briefing Structure
```markdown
# 🚀 TURBOMINDZ DAILY BRIEFING
**Date**: [Full date]
**Production Day**: [Number] of 84 (12 weeks)
**Sprint Week**: [Number] of 12
**Current Phase**: [Which mega-prompt for Track B]

---

## ☀️ Good Morning, Creator

[2-3 sentences from Cosmo. Motivational but not cheesy. Reference something specific — a philosopher's wisdom about persistence, a milestone approaching, or yesterday's win. Keep it real.]

---

## 📊 TRACK A: REVENUE TASKS (Today's Focus)

### 🔴 Priority 1 (Do First)
- [ ] [Most important revenue task — e.g., "Publish the Stoicism journal PDF on Gumroad"]
- [ ] [Second priority — e.g., "Write 500 words of Medium article draft"]

### 🟡 Priority 2 (Do If Time)
- [ ] [Third task — e.g., "Create 2 Pinterest pins for this week's NFT scenes"]
- [ ] [Fourth task — e.g., "Draft Patreon behind-the-scenes post"]

### 📈 Revenue Check
- [ ] Check Gumroad dashboard for sales
- [ ] Check Ko-fi for donations
- [ ] Check OpenSea for NFT activity
- [ ] Check Patreon for new patrons

---

## 💻 TRACK B: APP DEVELOPMENT (Today's Focus)

### Current Mega-Prompt: [NUMBER] — [NAME]
**Progress**: [X]% complete (estimated)

### Today's Dev Tasks
- [ ] [Specific component or page to build — e.g., "Build NFT card component with image, title, price"]
- [ ] [Second dev task — e.g., "Add theme filter to gallery page"]
- [ ] Run `npm run build` — verify zero errors

### Blockers (if any)
[List any known blockers from yesterday, or "None — clear skies!"]

---

## 🎨 NFT PRODUCTION

### Today's Scenes (3 per day)
1. **TM-[NEXT]**: [Universe], [Theme] — [Brief description]
2. **TM-[NEXT+1]**: [Universe], [Theme] — [Brief description]
3. **TM-[NEXT+2]**: [Universe], [Theme] — [Brief description]

*Use the `nft-scene` skill or say "MINT: /scene [number]" to generate full packages.*

---

## 🎯 THIS WEEK'S MILESTONES

| Milestone | Target | Status |
|-----------|--------|--------|
| [Milestone 1] | [Date] | ☐ / ✅ |
| [Milestone 2] | [Date] | ☐ / ✅ |
| [Milestone 3] | [Date] | ☐ / ✅ |

---

## ✅ YESTERDAY'S WINS

[List what was accomplished yesterday. If first day, skip this section.]
- [Win 1]
- [Win 2]
- [Revenue earned: $X]

---

*"[Short PD quote relevant to today's work]" — [Author]*

*Let's make today count. 🚀*
```

## Scheduling
This skill is designed to be triggered by a **scheduled task** that runs every day at 9:00 AM. To set this up, tell Claude:

> "Create a scheduled task called 'Daily Briefing' that runs every day at 9:00 AM. It should use the daily-briefing skill to generate today's production briefing and save it to docs/daily-briefings/."

## Context Sources
The briefing should reference:
- `art/nft-scenes/` — to determine the next scene numbers in sequence
- `docs/daily-briefings/` — to check yesterday's briefing for continuity
- `docs/weekly-plans/` — to pull this week's milestones
- The Parallel Path Strategy — to determine which mega-prompt phase we're in
- The current date — to calculate production day and sprint week

## Voice
- **Cosmo voice**: Encouraging, curious, practical
- **Tone**: Like a mission control briefing but friendly. "Here's what we've got today, crew."
- **NEVER**: Overwhelming. If there are too many tasks, prioritize ruthlessly. Max 6-8 actionable items per day.
- **Include a PD quote** at the bottom that relates to today's work theme

## Quality Rules
1. **Actionable items only** — no vague "work on the app." Be specific: "Build the NFT card component."
2. **Realistic scope** — a 5-hour day means 6-8 tasks maximum, not 20
3. **Track balance** — roughly equal time on Track A and Track B
4. **Checklist format** — use `- [ ]` for every task so they can be checked off
5. **NFT scenes always included** — 3 per day is the standard pace
6. **Revenue check always included** — builds the habit of monitoring all platforms daily
