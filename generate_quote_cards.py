#!/usr/bin/env python3
"""
Generate Stoic Wisdom quote cards for Turbomindz
5x7 inch PDF cards with elegant design
"""

from reportlab.lib.pagesizes import landscape
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import textwrap

# Output directory
OUTPUT_DIR = "/sessions/gallant-jolly-wright/mnt/TMDZ/products/gumroad/"

# Color scheme
DEEP_TEAL = HexColor("#004D5C")
WARM_WHITE = HexColor("#FFF8F0")
GOLD = HexColor("#C9A227")
CLASSICAL = HexColor("#1A237E")

# Quote data
QUOTES = [
    {
        "quote": "The unexamined life is not worth living.",
        "author": "Socrates",
        "birth": "d. 399 BC",
        "filename": "TM-quote-socrates-001.pdf"
    },
    {
        "quote": "We suffer more often in imagination than in reality.",
        "author": "Seneca",
        "birth": "d. 65 AD",
        "filename": "TM-quote-seneca-001.pdf"
    },
    {
        "quote": "It is not death that a man should fear, but he should fear never beginning to live.",
        "author": "Marcus Aurelius",
        "birth": "d. 180 AD",
        "filename": "TM-quote-aurelius-001.pdf"
    },
    {
        "quote": "First say to yourself what you would be; and then do what you have to do.",
        "author": "Epictetus",
        "birth": "d. 135 AD",
        "filename": "TM-quote-epictetus-001.pdf"
    },
    {
        "quote": "No man is free who is not master of himself.",
        "author": "Epictetus",
        "birth": "d. 135 AD",
        "filename": "TM-quote-epictetus-002.pdf"
    }
]

def create_quote_card(quote_data):
    """Create a single quote card PDF"""
    filename = OUTPUT_DIR + quote_data["filename"]

    # 5x7 inches landscape
    page_width = 7 * inch
    page_height = 5 * inch

    c = canvas.Canvas(filename, pagesize=(page_width, page_height))

    # Fill background with deep teal
    c.setFillColor(DEEP_TEAL)
    c.rect(0, 0, page_width, page_height, fill=1, stroke=0)

    # Draw subtle gold inner border
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    border_margin = 0.25 * inch
    c.rect(border_margin, border_margin,
           page_width - (2 * border_margin),
           page_height - (2 * border_margin),
           fill=0, stroke=1)

    # Draw classical accent line above quote (thin line)
    c.setStrokeColor(CLASSICAL)
    c.setLineWidth(0.5)
    line_y_top = 3.2 * inch
    c.line(1.2 * inch, line_y_top, 5.8 * inch, line_y_top)

    # Draw classical accent line below quote
    line_y_bottom = 1.5 * inch
    c.line(1.2 * inch, line_y_bottom, 5.8 * inch, line_y_bottom)

    # Quote text - centered, large serif font
    c.setFillColor(WARM_WHITE)

    # Use built-in serif font (Times-Roman is always available)
    quote_font = "Times-Roman"
    quote_size = 20

    # Wrap quote text
    quote_text = quote_data["quote"]
    max_width = 5.5 * inch

    # Simple line wrapping for multi-line quotes
    words = quote_text.split()
    lines = []
    current_line = []

    c.setFont(quote_font, quote_size)

    for word in words:
        current_line.append(word)
        test_string = " ".join(current_line)
        string_width = c.stringWidth(test_string, quote_font, quote_size)

        if string_width > max_width:
            current_line.pop()
            lines.append(" ".join(current_line))
            current_line = [word]

    if current_line:
        lines.append(" ".join(current_line))

    # Draw quote centered
    line_height = 28
    total_height = len(lines) * line_height
    start_y = (page_height / 2) + (total_height / 2) - 0.5 * inch

    for i, line in enumerate(lines):
        y_pos = start_y - (i * line_height)
        x_pos = page_width / 2
        c.drawCentredString(x_pos, y_pos, line)

    # Author name in gold, below quote
    c.setFillColor(GOLD)
    c.setFont("Times-Italic", 14)
    author_y = line_y_bottom - 0.35 * inch
    c.drawCentredString(page_width / 2, author_y, f"— {quote_data['author']}")

    # Footer with website
    c.setFillColor(WARM_WHITE)
    c.setFont("Times-Roman", 8)
    footer_y = 0.35 * inch
    c.drawCentredString(page_width / 2, footer_y, "turbomindz.com")

    c.save()
    print(f"✓ Created: {quote_data['filename']}")

def main():
    """Generate all quote cards"""
    print("Generating Stoic Wisdom Quote Cards...")
    print("=" * 50)

    for quote_data in QUOTES:
        create_quote_card(quote_data)

    print("=" * 50)
    print(f"All {len(QUOTES)} quote cards generated successfully!")
    print(f"Saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
