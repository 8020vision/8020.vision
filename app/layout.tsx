import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import clsx from "clsx";

import { geistMono, geistSans, instrumentSerif, michroma, unbounded } from "./fonts";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...pageMetadata({ path: "/", og: "home" }),
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={clsx(
        geistSans.variable,
        geistMono.variable,
        unbounded.variable,
        michroma.variable,
        instrumentSerif.variable,
      )}
      lang="en"
    >
      <body className="min-h-screen bg-obsidian font-sans text-bone">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
