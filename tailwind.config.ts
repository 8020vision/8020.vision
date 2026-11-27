import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0b",
        graphite: "#1a1a1d",
        bone: "#f2f0eb",
        stone: "#e4e1da",
        ultraviolet: "#6a3df5",
        lilac: "#b9a6ff",
        electric: "#2e4bff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        tagline: ["var(--font-michroma)", "system-ui", "sans-serif"],
        accent: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
