import clsx from "clsx";

import { Button } from "@/components/button";
import { PageHero, Section, SectionHeader } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "We design and build for companies that would rather do fewer things well. Every project starts with the same question: what is the 20% that will make this work?",
  path: "/services",
  og: "services",
});

const offerings = [
  {
    id: "design",
    label: "01 — #Design",
    title: "Design",
    tone: "bone" as const,
    body: "Brands, interfaces and visual systems with one clear idea. We start by finding the idea, then build the system that carries it everywhere it needs to go.",
    items: [
      "Brand identity",
      "Logo and visual systems",
      "Product and UI design",
      "Websites",
      "Design systems",
      "Event and release artwork",
    ],
  },
  {
    id: "software",
    label: "02 — #Software",
    title: "Software",
    tone: "obsidian" as const,
    body: "Products built around the feature that actually matters. We ship the core first, measure it, and only then add what the data asks for.",
    items: [
      "Web and mobile apps",
      "MVPs and prototypes",
      "Product strategy",
      "Analytics and growth",
      "Ongoing support and maintenance",
    ],
  },
];

const steps = [
  {
    title: "Find",
    body: "One or two weeks of listening, research and teardown. We come back with the 20%.",
  },
  { title: "Focus", body: "We agree on that 20% in writing. Everything else waits." },
  { title: "Make", body: "Small team, short loops, real work to review every week." },
  {
    title: "Hand over",
    body: "You own everything: files, code, systems and the know-how to run them.",
  },
];

const shapes = [
  { title: "Project", body: "A defined scope with a start and an end." },
  { title: "Retainer", body: "Ongoing design or engineering, reserved monthly." },
  { title: "Advisory", body: "Product and technology guidance for teams that build in-house." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        intro="We design and build for companies that would rather do fewer things well. Every project starts with the same question: what is the 20% that will make this work?"
        label="Services"
        title="Two disciplines. One habit."
      />

      {offerings.map((o) => {
        const onBone = o.tone === "bone";

        return (
          <Section key={o.id} className="section-y scroll-mt-0" id={o.id} tone={o.tone}>
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
              <div className="flex flex-1 flex-col gap-[14px] md:gap-5">
                <p className={clsx("t-label", onBone ? "text-ultraviolet" : "text-lilac")}>
                  {o.label}
                </p>
                <h2 className="t-display">{o.title}</h2>
              </div>
              <div className="flex flex-col gap-8 lg:w-[560px]">
                <p className="t-body-l">{o.body}</p>
                <ul>
                  {o.items.map((item) => (
                    <li
                      key={item}
                      className={clsx(
                        "t-ui flex justify-between border-t py-4",
                        onBone ? "border-obsidian" : "border-bone",
                      )}
                    >
                      <span>{item}</span>
                      <span aria-hidden>↗</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        );
      })}

      {/* How we work */}
      <Section className="pb-[72px] md:pb-[140px]" innerClassName="flex flex-col gap-8 md:gap-16">
        <SectionHeader
          label="03 — How we work"
          labelClassName="text-lilac"
          title="Find. Focus. Make. Hand over."
        />
        <ol className="grid gap-8 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-4 border-t-2 border-lilac pt-7">
              <p className="t-label text-lilac">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="t-title">{s.title}</h3>
              <p className="t-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Ways to work together */}
      <Section className="section-y" innerClassName="flex flex-col gap-8 md:gap-16" tone="stone">
        <SectionHeader
          label="04 — Ways to work together"
          labelClassName="text-ultraviolet"
          title="Pick the shape that fits."
        />
        <div className="grid gap-3 md:grid-cols-3 md:gap-5">
          {shapes.map((s) => (
            <div key={s.title} className="flex flex-col gap-4 rounded-3xl bg-bone p-7 md:p-9">
              <h3 className="t-title">{s.title}</h3>
              <p className="t-body">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="t-subhead max-w-[720px]">
            Not sure which you need? That is what the first call is for.
          </p>
          <Button className="self-start md:self-auto" href="/contact" variant="ink">
            Start a project ↗
          </Button>
        </div>
      </Section>
    </>
  );
}
