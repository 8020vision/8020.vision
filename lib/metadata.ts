import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type OgImage = "home" | "work" | "services" | "events" | "sound" | "about";

/** Builds per-page metadata with the matching 1200×630 OG image from /public/og. */
export function pageMetadata({
  title,
  description,
  path,
  og,
}: {
  title?: string;
  description?: string;
  path: string;
  og: OgImage;
}): Metadata {
  const fullTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.name;
  const desc = description ?? siteConfig.description;
  const image = {
    url: `/og/${og}.png`,
    width: 1200,
    height: 630,
    alt: title ? `${title} · ${siteConfig.name}` : siteConfig.name,
  };

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description: desc,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image.url],
    },
  };
}
