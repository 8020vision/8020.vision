import { Fira_Code as FontMono, Inter } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"], // Optional: Use specific weights
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});
