export const siteConfig = {
  name: "80/20 VISION",
  url: "https://www.8020.vision",
  description:
    "80/20 VISION is an independent creative studio for design, software, events and sound. We find the vital 20% and obsess over it until it is right.",
  tagline: "DESIGN · SOFTWARE · EVENTS · MUSIC",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Events", href: "/events" },
    { label: "Sound", href: "/sound" },
    { label: "About", href: "/about" },
  ],
  // TODO: replace with the real profile URLs.
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "SoundCloud", href: "https://soundcloud.com/" },
  ],
};

export type Discipline = "Design" | "Software" | "Events" | "Music";

export type Project = {
  slug: string;
  title: string;
  meta: string;
  line: string;
  disciplines: Discipline[];
  /** Placeholder cards from the design have no case study yet. */
  hasCaseStudy: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "calmaster",
    title: "CalMaster",
    meta: "CalMaster · Software · In development",
    line: "Every LA night worth going to, straight into your own calendar.",
    disciplines: ["Software"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "atonal",
    title: "Atonal",
    meta: "Atonal · Game · Music · Pre-production",
    line: "A hand-drawn co-op game where the notes you collect become the song you play.",
    disciplines: ["Music", "Software"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "sunset-penthouse",
    title: "Sunset Penthouse",
    meta: "Sunset Penthouse · Events · Miami",
    line: "[One line to come.]",
    disciplines: ["Events"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "client-design-1",
    title: "[Project name]",
    meta: "[Client] · Design · [Year]",
    line: "The 20% we found, in one line.",
    disciplines: ["Design"],
    hasCaseStudy: false,
  },
  {
    slug: "client-software-1",
    title: "[Project name]",
    meta: "[Client] · Software · [Year]",
    line: "The 20% we found, in one line.",
    disciplines: ["Software"],
    hasCaseStudy: false,
  },
  {
    slug: "client-design-2",
    title: "[Project name]",
    meta: "[Client] · Design · [Year]",
    line: "The 20% we found, in one line.",
    disciplines: ["Design"],
    hasCaseStudy: false,
  },
];

export const disciplines: Discipline[] = ["Design", "Software", "Events", "Music"];
