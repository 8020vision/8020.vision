import Image from "next/image";

import { Button } from "@/components/button";
import { Mark } from "@/components/mark";
import { Section, SectionHeader } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";
import portrait from "@/public/joshworley.jpg";

export const metadata = pageMetadata({
  title: "About",
  description:
    "80/20 VISION is an independent creative studio for design, software, events and sound, named for the Pareto principle. We exist to find the vital 20%.",
  path: "/about",
  og: "about",
});

const meanings = [
  {
    title: "The eye",
    body: "Vision and focus. We see what matters before anyone else does.",
  },
  {
    title: "The triangle",
    body: "The few right decisions that lead to the top. The 20% is the summit.",
  },
  {
    title: "The lens",
    body: "8020 magnified in the iris. Focus made visible.",
  },
];

const habits = [
  {
    title: "Say less.",
    body: "Clear thinking makes clear decisions. Short briefs, short meetings, plain words.",
  },
  {
    title: "Sweat the detail.",
    body: "Twelve rounds to get the iris right. That is normal here.",
  },
  {
    title: "Leave you stronger.",
    body: "You get the tools, files and knowledge to run it without us.",
  },
  {
    title: "Keep learning, share it.",
    body: "We get better every project, and we give what we learn back to the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section innerClassName="flex flex-col-reverse gap-10 pb-[72px] pt-[100px] md:pb-[120px] md:pt-[150px] lg:flex-row lg:items-center lg:gap-20 lg:pt-[193px]">
        <div className="flex min-w-0 flex-1 flex-col gap-5 md:gap-7">
          <p className="t-label text-lilac">About</p>
          <h1 className="t-display max-w-[700px]">Focus on the vital 20%.</h1>
          <p className="t-body max-w-[620px] md:text-[21px]">
            80/20 VISION is an independent creative studio for design, software, events and sound.
            The name comes from the Pareto principle: roughly 80% of results come from 20% of the
            effort. We exist to find that 20%, whether it is the one feature that makes a product,
            the one sound that makes a night, or the one idea that makes a brand.
          </p>
        </div>
        <Mark
          className="mx-auto size-[240px] shrink-0 md:size-[360px] lg:mx-0 lg:size-[min(480px,34vw)]"
          variant="triangle"
        />
      </Section>

      {/* The mark */}
      <Section className="section-y" innerClassName="flex flex-col gap-8 md:gap-16" tone="bone">
        <SectionHeader
          label="The mark"
          labelClassName="text-ultraviolet"
          title="What the eye means."
        />
        <div className="grid gap-6 md:grid-cols-3 md:gap-5">
          {meanings.map((m) => (
            <div
              key={m.title}
              className="flex flex-col gap-3 border-t border-obsidian pt-5 md:gap-[14px] md:pt-7"
            >
              <h3 className="t-title text-[22px] md:text-[28px]">{m.title}</h3>
              <p className="t-body">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section className="section-y" innerClassName="flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col gap-[14px] md:gap-5">
          <p className="t-label text-lilac">The principle</p>
          <h2 className="t-display max-w-[1100px]">Find the 20%. Make it right. Leave the rest.</h2>
        </div>
        <ol className="grid gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
          {habits.map((h, i) => (
            <li
              key={h.title}
              className="flex flex-col gap-3 rounded-3xl bg-graphite p-6 md:gap-4 md:p-8"
            >
              <p className="t-label text-lilac">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="t-title text-[22px] md:text-[28px]">{h.title}</h3>
              <p className="t-body">{h.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Founder */}
      <Section className="section-y" tone="stone">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
          <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-3xl bg-obsidian/[0.08] lg:w-[min(480px,36vw)]">
            <Image
              fill
              alt="Josh Worley, founder of 80/20 VISION"
              className="object-cover"
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, 100vw"
              src={portrait}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-5 md:gap-6">
            <p className="t-label leading-[1.4] text-ultraviolet">
              Founder · Design, software, events, music
            </p>
            <h2 className="t-headline">Josh Worley</h2>
            <p className="t-body max-w-[640px] md:text-[21px]">
              Josh is a designer, developer and product manager with more than ten years in the work
              and over thirty digital products shipped. He started 80/20 VISION to do fewer things,
              better, and personally oversees everything the studio makes. Outside client work, he
              [throws events / makes music / short personal line].
            </p>
            <Button className="self-start" href="/contact" variant="ink">
              Start a project ↗
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
