# Quote Card PDF Generator (VAULT Agent)

## Overview
Creates beautiful, print-ready PDF quote cards using Turbomindz philosophical quotes. Each card is a sellable digital product for Gumroad and Etsy.

## Trigger Words
quote card, quote PDF, printable quote, Gumroad quote, philosophy card, quote poster, wisdom card

## Inputs Required
- **Quote text**: The exact public domain quote (required)
- **Author name**: Full name of the philosopher (required)
- **Theme**: One of 9 Turbomindz themes (optional — Claude will match by author)
- **Character presenter**: Which character "presents" this quote (optional — defaults based on theme)
- **Batch mode**: Generate a set of 5-10 cards at once (optional)

## Output Format
PDF file(s) saved to `products/gumroad/` with naming: `TM-quote-[author-lastname]-[number].pdf`

Also generate a companion file `TM-quote-[author-lastname]-[number]-listing.md` with Gumroad/Etsy listing copy.

### Card Specifications
- **Size**: 5 x 7 inches (portrait)
- **Background**: Deep Teal (#004D5C)
- **Quote text**: Warm White (#FFF8F0), centered, serif font (closest to Playfair Display)
- **Author attribution**: Gold (#C9A227), below quote
- **Theme accent bar**: Theme-specific color, thin horizontal line above and below quote
- **Footer**: "turbomindz.com" in small text, Warm White
- **Border**: Subtle Gold (#C9A227) inner border, 0.25 inch from edge

### Listing Copy Format
```markdown
# [Quote excerpt] — [Author]

## Product Description
[2-3 sentences in Turbomindz voice about the quote's meaning]

## What You Get
- High-resolution PDF (5x7 inches, 300 DPI)
- Print-ready for home printing or professional print services
- Instant digital download

## About This Quote
[1-2 sentences about the philosopher and why this quote matters]

## Tags
[5-8 relevant tags for Gumroad/Etsy SEO]

## Price
$1.99 (single) / $7.99 (bundle of 5) / $12.99 (bundle of 10)
```

## Quality Rules
1. **PD VERIFICATION (CRITICAL)**: The quote author MUST have died before 1956, or the quote must be attributed as "Ancient." NEVER use quotes from living authors or those who died after 1955.
2. **Exact quotes only**: Never paraphrase, abbreviate, or modify the original quote.
3. **Character threshold**: The presenting character must have been introduced (Cosmo TM-001+, Nova TM-006+, Stella TM-016+, Luna TM-050+). If no scenes have been produced yet, only Cosmo can present.
4. **Voice mix**: Listing copy uses 35% witty, 30% warm, 20% curious, 15% artfully simple. NEVER corporate or salesy.
5. **Typography**: Quote text should be large and readable. Author name slightly smaller. Ensure good contrast.

## Process
1. Verify the quote is exact and the author is PD-verified (death < 1956 or "Ancient")
2. Determine the theme based on the philosopher's tradition
3. Select the theme accent color
4. Generate the PDF using Python (reportlab library)
5. Save PDF to `products/gumroad/`
6. Generate listing copy and save to same folder
7. If batch mode, repeat for each quote in the set

## Theme-to-Color Mapping
| Theme | Color | Typical Philosophers |
|-------|-------|---------------------|
| Classical Foundations | #1A237E | Socrates, Plato, Aristotle, Seneca, Epictetus |
| Enlightenment & Reason | #C9A227 | Kant, Voltaire, Locke, Newton |
| Existentialism & Modern | #4A148C | Nietzsche, Kierkegaard, Camus |
| Mysticism & Esoterica | #00695C | Hermes Trismegistus, Rumi, Paracelsus |
| Eastern Wisdom | #E65100 | Laozi, Confucius, Buddha |
| Science & Modernity | #607D8B | Tesla, Einstein, Darwin, da Vinci |
| Poetry & Aesthetics | #AD1457 | Rilke, Whitman, Gibran, Keats |
| Civic & Social | #B71C1C | Paine, Gandhi, Marcus Aurelius |
| Psychology & Mind | #00838F | William James, Epictetus, Aristotle |

## Example
**Input**: "The unexamined life is not worth living." — Socrates
**Theme**: Classical Foundations (#1A237E)
**Character**: Cosmo (default for Classical)
**Output**: `products/gumroad/TM-quote-socrates-001.pdf` + `TM-quote-socrates-001-listing.md`
