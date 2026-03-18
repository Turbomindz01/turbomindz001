# Amazon KDP Book Chapter Writer (NOVA Agent)

## Overview
Writes individual chapters for Turbomindz books published on Amazon Kindle Direct Publishing. Books explore philosophical themes through the lens of the Turbomindz universe, making ancient wisdom accessible and engaging for modern readers.

## Trigger Words
KDP, book chapter, Amazon book, write chapter, NOVA chapter, book writing, KDP manuscript, Kindle book

## Inputs Required
- **Book title**: The overall book this chapter belongs to (required)
- **Chapter number**: Where in the book this falls (required)
- **Chapter topic**: The specific philosophical concept or theme (required)
- **Target length**: Default 2,500-4,000 words per chapter (optional)
- **Book type**: essay collection, narrative guide, educational workbook, or philosophical exploration (optional)

## Output Format
Markdown file saved to `products/kdp/[book-slug]/chapter-[NUMBER]-[topic-slug].md`

### Chapter Structure
```markdown
# Chapter [NUMBER]: [Chapter Title]

*[Opening epigraph — PD quote that sets the chapter's theme]*
*— [Author]*

## [Section 1: The Opening Scene or Hook]
[400-600 words. Open with a vivid scene, story, or question. Can feature Turbomindz characters exploring the concept. Draw the reader in emotionally before going intellectual.]

## [Section 2: The Philosophical Core]
[600-800 words. Present the main philosophical idea. Explain it clearly. Use at least 2 PD quotes from relevant thinkers. Make connections the reader wouldn't expect.]

## [Section 3: The Counterpoint or Complication]
[400-600 words. Challenge the idea. What would critics say? What's the nuance? This is where the chapter gets interesting.]

## [Section 4: The Modern Mirror]
[400-600 words. How does this ancient idea appear in modern life? Specific, relatable examples. Pop culture references are fine if they serve the point.]

## [Section 5: The Invitation]
[200-400 words. Close with a reflection question or gentle challenge to the reader. Not a summary — an opening. Leave them thinking.]

---

*[Brief reflection prompt or journaling question related to the chapter]*
```

## Suggested Book Concepts

### Book 1: "The Astronaut's Notebook" (Narrative Philosophy Guide)
A philosophical journey told through Cosmo's voice. Each chapter explores one big question through a different universe. 12-15 chapters, ~40,000 words.

### Book 2: "39 Ways of Seeing" (Art + Philosophy)
One chapter per Turbomindz universe. Each chapter explores the art tradition AND the philosophical theme. Heavy on visual description and art education. 39 short chapters, ~35,000 words.

### Book 3: "Breakfast with Philosophers" (Accessible Introduction)
Imagined conversations between the reader and great thinkers, facilitated by Turbomindz characters. Lighthearted but substantive. 20 chapters, ~30,000 words.

### Book 4: "The Pattern Seeker's Guide" (Nova's Analytical Approach)
Nova identifies hidden patterns connecting philosophy, art, science, and daily life. More analytical, still accessible. 15 chapters, ~35,000 words.

## Voice Rules
- **Primary**: Nova voice (analytical, pattern-seeing, educational) — 40%
- **Supporting**: Cosmo voice (curious, wonder-filled, relatable) — 35%
- **Occasional**: Stella (practical applications) — 15%, Luna (cryptic insights) — 10%
- **Tone**: Like a brilliant friend explaining philosophy over coffee. Smart but never condescending. Passionate but never preachy.
- **Reading level**: Accessible to general adult audience. No academic jargon without explanation.

## Quality Rules
1. **All quotes PD-verified** — same strict rules (death < 1956 or "Ancient")
2. **Minimum 3 PD quotes per chapter** — woven naturally, not dropped in
3. **Character thresholds respected** — even in books
4. **Factual accuracy** — philosophical claims must be accurate to the thinker's actual positions
5. **No plagiarism** — all content original except direct quotes
6. **Chapter must stand alone** — readable independently, even if part of a series
7. **Word count**: 2,500-4,000 words per chapter (KDP sweet spot for non-fiction)
8. **No cliffhangers** — each chapter should feel complete

## KDP Formatting Notes
- Chapters will be compiled into a single manuscript later
- Use standard Markdown that can be converted to KDP-compatible format
- Include front matter templates: title page, copyright, dedication, table of contents
- Back matter: about the author (characters), other Turbomindz products, link to newsletter

## Process
1. Confirm book, chapter number, and topic
2. Research the philosophical concept and select 3+ PD quotes
3. Verify all quotes are PD
4. Write the chapter following the structure
5. Apply character voices throughout
6. Add reflection prompt at the end
7. Save to `products/kdp/[book-slug]/`
8. Update the book's table of contents file if it exists
