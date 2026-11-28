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
};

export type Discipline = "Design" | "Software" | "Events" | "Music";

export type Img = { src: string; alt: string; width: number; height: number };

/** Real case study copy. Source of truth: Notion, Marketing > Website > Work > CalMaster. */
export type CaseStudy = {
  /** Hero eyebrow, e.g. "CalMaster · Software · 2026". */
  label: string;
  brief: string;
  liveUrl?: string;
  cover: Img;
  twenty: string;
  twentyAccent?: string;
  workTitle: string;
  workIntro: string;
  details: { title: string; body: string }[];
  images: Img[];
  resultTitle: string;
  stats: { value: string; label: string }[];
  credits: string;
};

export type Project = {
  slug: string;
  title: string;
  meta: string;
  line: string;
  disciplines: Discipline[];
  /** Placeholder cards from the design have no case study yet. */
  hasCaseStudy: boolean;
  featured?: boolean;
  /** 4:3 card image for Home and Work. */
  image?: Img;
  caseStudy?: CaseStudy;
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
    image: {
      src: "/work/calmaster/card.webp",
      alt: "CalMaster Explore view: LA venue map above a week of events, Nov 30 to Dec 6",
      width: 1600,
      height: 1200,
    },
    caseStudy: {
      label: "CalMaster · Software · 2026 · In development",
      brief:
        "Finding a good night out in LA means checking venue sites, ticket apps and feeds, then typing it all into your calendar by hand. CalMaster is our own launch: one public calendar of LA music events that goes straight into yours.",
      liveUrl: "https://calmaster.vercel.app/",
      cover: {
        src: "/work/calmaster/cover.webp",
        alt: "CalMaster Explore view: the LA venue map above a week of events, Nov 30 to Dec 6",
        width: 2560,
        height: 1440,
      },
      twenty:
        "Finding the event was never the hard part. Getting it into your own calendar was.",
      twentyAccent:
        "So every screen serves one path: find it, save it, and it’s on your phone.",
      workTitle: "One calendar, built around one path.",
      workIntro:
        "We started with twelve desktop wireframes and cut anything that didn’t move someone from a listing to their own calendar. What was left became four pieces.",
      details: [
        {
          title: "A calendar, not a feed.",
          body: "Explore opens on this week, events stacked by start time, Pacific time throughout. A night belongs to the evening it starts, so a 1 AM set still sits on Friday.",
        },
        {
          title: "Save, then subscribe.",
          body: "Favorites and custom calendars live in CalMaster. Add one event as a file, or subscribe to a whole calendar and Apple, Google or Outlook pick up changes on their own.",
        },
        {
          title: "Facts you can check.",
          body: "Every listing links back to its source and shows when it was last checked. Saving never buys a ticket. We send you to the people who sell them.",
        },
        {
          title: "An agent that keeps it fresh.",
          body: "Collectors re-check each venue every few hours, Claude extracts the listings, duplicates merge, and a person approves each one before it goes live.",
        },
      ],
      images: [
        {
          src: "/work/calmaster/event.webp",
          alt: "Event details panel for Andy C at Avalon Hollywood, with source and calendar actions",
          width: 1256,
          height: 960,
        },
        {
          src: "/work/calmaster/add.webp",
          alt: "Add this event dialog, choosing Google Calendar, Apple Calendar or Outlook",
          width: 1256,
          height: 960,
        },
      ],
      resultTitle: "Live in preview. Pilot next.",
      stats: [
        {
          value: "3",
          label: "calendar apps it hands off to: Apple, Google, Outlook",
        },
        { value: "4 wk", label: "pilot with 30 to 50 people in LA" },
        { value: "0", label: "tickets sold or RSVPs taken, on purpose" },
      ],
      credits:
        "Credits · 80/20 VISION (own launch) · Design + build: Josh · 2026 · calmaster.vercel.app",
    },
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
];

export const disciplines: Discipline[] = [
  "Design",
  "Software",
  "Events",
  "Music",
];
