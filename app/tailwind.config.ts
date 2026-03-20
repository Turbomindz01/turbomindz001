import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary brand colors (Philosophical depth)
        "deep-teal": "#0D3D47",      // Deeper, more philosophical
        "warm-teal": "#0B5F6F",      // Richer teal
        gold: "#D4AF37",              // More refined gold
        silver: "#C0C0C0",            // Complementary silver
        "warm-white": "#F5F1E8",     // Warmer alabaster
        "rich-black": "#0A0A0A",     // Pure black
        "philosophy-dark": "#1A1A2E", // Philosophy foundation
        "wisdom-bronze": "#8B7355",   // Bronze for wisdom
        "insight-purple": "#6A3E86",  // Purple for mysticism

        // 9 Theme colors (deepened)
        classical: "#2C3E8F",         // Classical philosophy
        enlightenment: "#D4AF37",     // Reason & light
        existentialism: "#5A2E7C",    // Freedom & choice
        mysticism: "#1B5E5E",         // Hidden depths
        eastern: "#E8724C",           // Balance & harmony
        science: "#4A6FA5",           // Knowledge & truth
        poetry: "#C83968",            // Beauty & expression
        civic: "#8B3333",             // Justice & community
        psychology: "#3F7F7F",        // Self & mind
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(201, 162, 39, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(201, 162, 39, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
