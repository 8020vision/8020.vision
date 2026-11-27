import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif, Michroma, Unbounded } from "next/font/google";

export const geistSans = GeistSans;
export const geistMono = GeistMono;

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-unbounded",
  display: "swap",
});

export const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
