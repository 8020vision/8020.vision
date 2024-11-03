import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        "8xl": "90rem", // Customize this value as needed
      },
      letterSpacing: {
        tightest: "-0.08em", // Custom tracking
      },
      colors: {
        "obsidian-black": "#0A0A0A",
        "charcoal-gray": "#2B2B2B",
        "graphite-gray": "#3F3F3F",
        "slate-gray": "#545454",
        "ash-gray": "#737373",
        "smoke-gray": "#9E9E9E",
        "cool-mist-gray": "#E8E8E8",
        "soft-ivory": "#F4F4F2",
        "midnight-blue": "#1A1E2E",
        "steel-midnight": "#2C334A",
        "slate-midnight": "#404960",
        "cool-sky": "#5A6B88",
        "misty-gray-blue": "#7889A5",
        "ice-blue": "#A6B5C8",
        "burnt-orange": "#D97742",
        "amber-gold": "#FFB347",
        "deep-vermilion": "#D64545",
        "warm-orange-gold": "#F4A259",
        "lustrous-gold": "#C5A880",
        "brushed-silver": "#C0C0C0",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(180deg, #0A0A0A 0%, #1A1E2E 100%)",
        "gradient-light": "linear-gradient(180deg, #F0F0F0 0%, #DBDBDB 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
