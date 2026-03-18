# Revenue & Analytics Report (WATCHTOWER Agent)

## Overview
Generates revenue tracking reports, KPI dashboards, and transparency reports for Turbomindz. Tracks all 20+ revenue streams, calculates totals, identifies trends, and produces both internal reports and public-facing transparency documents.

## Trigger Words
revenue report, analytics, WATCHTOWER, KPI, metrics, how much did I make, revenue tracking, transparency report, financial report, income report, weekly report

## Inputs Required
- **Report type**: weekly-snapshot, monthly-report, transparency-report, revenue-dashboard, platform-breakdown (required)
- **Period**: Date range or "this week" / "this month" / "last month" (required)
- **Revenue data**: User provides platform-by-platform numbers OR Claude asks for them (required for accurate reports)

## Output Format

### Weekly Snapshot
Save to `financials/revenue-reports/snapshot-[YYYY-MM-DD].md`
```markdown
# 💰 TURBOMINDZ WEEKLY REVENUE SNAPSHOT
**Week**: [Number] | **Period**: [Date range]
**Sprint Week**: [X] of 12

---

## 📊 Revenue Summary

| Platform | This Week | Last Week | Change |
|----------|-----------|-----------|--------|
| OpenSea (NFT Sales) | $[X] | $[X] | [+/-]% |
| Gumroad | $[X] | $[X] | [+/-]% |
| Ko-fi | $[X] | $[X] | [+/-]% |
| Patreon | $[X] | $[X] | [+/-]% |
| Etsy | $[X] | $[X] | [+/-]% |
| Medium | $[X] | $[X] | [+/-]% |
| Amazon KDP | $[X] | $[X] | [+/-]% |
| Printful | $[X] | $[X] | [+/-]% |
| YouTube | $[X] | $[X] | [+/-]% |
| Other | $[X] | $[X] | [+/-]% |
| **TOTAL** | **$[X]** | **$[X]** | **[+/-]%** |

## 📈 Top Performers
1. [Highest earning platform]: $[X] ([X]% of total)
2. [Second]: $[X] ([X]% of total)
3. [Third]: $[X] ([X]% of total)

## 📉 Underperformers
[Platforms earning $0 or below expectations. Brief note on what to try differently.]

## 🎯 Against Targets
- Week [X] target: $[X] → Actual: $[X] ([met/missed] by $[X])
- Monthly run rate: $[X]/month
- Budget coverage: [X]% of $41/month budget

## 💡 Nova's Analysis
[2-3 sentences in Nova voice identifying patterns. "The pattern is..." What's working? What's not? What should change next week?]

## 📋 Action Items
- [ ] [Specific revenue action for next week]
- [ ] [Second action]
- [ ] [Third action]
```

### Monthly Transparency Report (Public-Facing)
Save to `financials/transparency-reports/transparency-[YYYY-MM].md`
```markdown
# TURBOMINDZ TRANSPARENCY REPORT — [Month Year]

*"We show our work. Always."*

## What Happened This Month
[3-4 paragraph narrative of the month's activities. Cosmo voice. Honest about challenges.]

## Revenue (Complete Breakdown)
[Full platform-by-platform table]

## Expenses
| Expense | Amount |
|---------|--------|
| Midjourney | $10 |
| Domain (prorated) | $1 |
| [Other] | $[X] |
| **Total Expenses** | **$[X]** |

## Net Income
$[Revenue] - $[Expenses] = **$[Net]**

## Production Stats
- NFT scenes produced: [X]
- Digital products created: [X]
- Articles published: [X]
- Newsletter issues sent: [X]
- Social posts made: [X]

## Community Stats
- Discord members: [X]
- Newsletter subscribers: [X]
- Patreon patrons: [X]
- OpenSea collectors: [X]

## What's Next
[Brief preview of next month's plans]

---
*Published in the spirit of the Witnessed Economy. Every number is real.*
```

## KPI Reference
Track these metrics weekly:
- **Production**: Scenes produced / 888 total, scenes per week (target: 21)
- **Revenue**: Total monthly, per-platform breakdown, month-over-month growth
- **Audience**: Discord members, newsletter subscribers, Patreon patrons, social followers
- **Engagement**: NFT sales count, product sales count, article views, email open rate
- **App** (once live): Page views, wallet connections, marriage requests

## Quality Rules
1. **Real numbers only** — never estimate or invent revenue figures. If data isn't available, mark as "Data needed" and ask the user.
2. **Honest reporting** — transparency is a core Turbomindz value. Bad months get reported honestly.
3. **Actionable insights** — every report ends with specific next steps
4. **Nova voice for analysis** — pattern-finding, not judgmental
5. **Cosmo voice for narrative** — encouraging even in tough months
6. **Public reports sanitized** — no internal strategies or sensitive data in transparency reports

## Scheduling
Set up a **weekly scheduled task** (Monday 8:00 AM) that asks Claude to generate the weekly snapshot. Claude will ask for platform numbers if they weren't logged.

## Process
1. Determine report type and period
2. Collect revenue data (ask user or check tracked files)
3. Calculate totals, changes, percentages
4. Identify top performers and underperformers
5. Write Nova's analysis
6. Generate action items
7. Save to appropriate folder
8. For transparency reports: also save a copy ready for Discord posting
