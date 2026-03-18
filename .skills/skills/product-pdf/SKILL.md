# Digital Product PDF Creator (VAULT Agent)

## Overview
Creates complete, sellable digital products (journals, planners, workbooks, guides, essay collections, flashcard sets, bookmarks) as professionally formatted PDFs. Each product includes the PDF itself plus marketplace listing copy for Gumroad and Etsy.

## Trigger Words
product, PDF product, journal, planner, workbook, guide, essay collection, flashcards, bookmarks, digital product, create product, VAULT, Gumroad product, Etsy product

## Inputs Required
- **Product type**: journal, planner, workbook, guide, essay collection, flashcard set, bookmark set, art book, or custom (required)
- **Topic/theme**: Philosophical theme or subject matter (required)
- **Target audience**: Who this is for (optional — defaults to philosophy enthusiasts)
- **Price tier**: free lead magnet ($0), low ($1-$5), mid ($5-$15), or premium ($15-$30) (optional)

## Output Files
1. **PDF product**: Saved to `products/gumroad/[product-slug].pdf`
2. **Listing copy**: Saved to `products/gumroad/[product-slug]-listing.md`
3. **Etsy copy** (if applicable): Saved to `products/etsy/[product-slug]-etsy-listing.md`

## Product Type Specifications

### Journal (20-40 pages)
- Cover page with title, Turbomindz branding
- Introduction (1 page, Cosmo voice)
- Themed journal pages with prompts (1 quote + 1 reflection prompt per page)
- Each prompt connects to a philosophical tradition
- Blank lined space for writing
- Closing page with character encouragement

### Planner (30-50 pages)
- Cover page
- How to Use This Planner (1 page)
- Monthly overview pages
- Weekly planning pages with philosophical quote headers
- Reflection pages at month boundaries
- Goal-setting pages tied to philosophical principles

### Workbook (15-25 pages)
- Cover page
- Introduction to the philosophical concept
- Exercises (fill-in, reflection, matching, short-answer)
- PD quotes with analysis prompts
- Summary page
- Further reading suggestions

### Guide (10-20 pages)
- Cover page
- Topic overview
- Key concepts explained simply
- PD quotes illustrating each concept
- Practical applications
- Character commentary throughout
- Resource list

### Essay Collection (30-60 pages)
- Cover page
- Table of contents
- 5-10 essays (800-1500 words each)
- Each essay follows the Medium article voice mix
- Author bio page
- Turbomindz project description

### Flashcard Set (20-50 cards)
- Each card: front (quote or concept) / back (explanation + philosopher)
- Formatted 2-up or 4-up for printing and cutting
- Cover page with instructions
- Answer key page

### Bookmark Set (8-12 bookmarks)
- 2 x 6 inch bookmark format
- Each features a PD quote, author, and theme color
- Formatted for home printing (4 per page)
- Cut lines included

## Design Standards
- **Background**: White or Warm White (#FFF8F0) for printability
- **Accent colors**: Theme-specific color from the 9 themes
- **Heading font**: Serif (closest to Playfair Display available in reportlab)
- **Body font**: Sans-serif (closest to Inter available)
- **Turbomindz branding**: Small logo/text on each page footer
- **Print-friendly**: High contrast, standard margins (0.75 inch minimum)

## Quality Rules
1. **All quotes PD-verified** — death before 1956 or "Ancient"
2. **Professional formatting** — consistent margins, page numbers, headers
3. **Value-first content** — the product must be genuinely useful, not just a Turbomindz ad
4. **Voice mix**: 35% witty, 30% warm, 20% curious, 15% artfully simple
5. **Character appearances respect thresholds**
6. **No filler pages** — every page has purpose
7. **File size**: Under 10MB for fast downloads

## Pricing Guide
| Product Type | Pages | Suggested Price | Free Version? |
|-------------|-------|----------------|---------------|
| Quote card set (5) | 5 | $1.99 | First card free |
| Bookmark set | 3 | $2.99 | 2 free bookmarks |
| Flashcard set | 10-15 | $3.99 | 5 free cards |
| Mini guide | 10 | $4.99 | Free chapter |
| Journal | 20-40 | $7.99 | 5 free pages |
| Planner | 30-50 | $9.99 | Weekly sample |
| Workbook | 15-25 | $7.99 | Free exercise |
| Full guide | 20+ | $12.99 | Free overview |
| Essay collection | 30-60 | $14.99 | 1 free essay |
| Course PDF | 50+ | $19.99-$29.99 | Free lesson |

## Process
1. Confirm product type, topic, and price tier
2. Research and collect PD-verified quotes for the theme
3. Create the content outline
4. Write all content following voice mix rules
5. Generate the PDF using Python (reportlab)
6. Generate Gumroad and Etsy listing copy
7. Save all files to appropriate folders
8. Suggest a "free sample" version as a lead magnet
