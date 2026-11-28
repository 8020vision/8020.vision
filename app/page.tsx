import Image from "next/image";

import { Button } from "@/components/button";
import { DisciplineCard, WorkCard } from "@/components/cards";
import { Glows, HOME_GLOWS } from "@/components/glow";
import { Mark } from "@/components/mark";
import { Section, SectionHeader } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";
import { projects, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({ path: "/", og: "home" });

const disciplines = [
  {
    number: "01",
    title: "Design",
    image: {
      src: "/illustrations/services/design-window.png",
      alt: "A pencil inks a triangle on a drafting sheet, framed by op-art stripes.",
    },
    body: "Brands, interfaces and visual systems with one clear idea.",
    link: "Services →",
    href: "/services#design",
  },
  {
    number: "02",
    title: "Software",
    image: {
      src: "/illustrations/services/software-window.png",
      alt: "A computer monitor shows the triangle's eye, framed by op-art stripes.",
    },
    body: "Products built around the feature that actually matters.",
    link: "Services →",
    href: "/services#software",
  },
  {
    number: "03",
    title: "Events",
    image: {
      src: "/illustrations/services/events-window.png",
      alt: "A turntable spins a record under op-art stripes, with music notes overhead.",
    },
    body: "Nights designed for focus: sound, light, crowd.",
    link: "Events →",
    href: "/events",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian text-bone">
        <div className="section-x relative mx-auto max-w-page pb-[72px] pt-[80px] lg:min-h-[900px] lg:pb-[120px] lg:pt-0">
          <div className="relative mx-auto size-[260px] md:size-[420px] lg:absolute lg:right-20 lg:top-[170px] lg:mx-0 lg:size-[min(600px,46vw)]">
            <Glows glows={HOME_GLOWS} />
            <Mark className="absolute inset-0" variant="triangle-black" />
          </div>
          <div className="relative mt-10 flex max-w-[780px] flex-col gap-5 md:gap-8 lg:mt-0 lg:pt-[250px]">
            <p className="t-tagline">{siteConfig.tagline}</p>
            <h1 className="t-hero lg:max-w-[min(780px,50vw)]">
              Creating culture through cutting-edge technology.
            </h1>
            <p className="t-body-l max-w-[560px]">
              80/20 VISION is an independent creative studio for design,
              software and events. We find the vital 20% and obsess over it
              until it is right.
            </p>
            <div className="flex flex-wrap gap-[10px] md:gap-3">
              <Button href="/contact">Start a project ↗</Button>
              <Button href="/work" variant="outline">
                See the work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The idea */}
      <Section className="section-y" tone="bone">
        <Image
          alt="The 80/20 VISION mascot, a stick figure with the triangle eye for a head, stands on a mountain peak seen from behind, pointing at a sunrise ringed with op-art stripes."
          className="mb-12 h-auto w-full rounded-3xl md:mb-20"
          height={1040}
          sizes="(min-width: 1440px) 1280px, 100vw"
          src="/illustrations/see-the-20-summit.png"
          width={2400}
        />
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-8 md:gap-5">
            <p className="t-label text-ultraviolet">01 — The idea</p>
            <h2 className="font-display text-[44px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[88px] md:leading-none">
              See the 20%.
            </h2>
          </div>
          <p className="t-body-l lg:w-[480px]">
            Roughly 80% of results come from 20% of the effort. It is called the
            Pareto principle, and it is the whole studio. In a product, it is
            the one feature that matters. In a brand, the one idea. In a night,
            the one sound. We find it first, then put everything into it.
          </p>
        </div>
      </Section>

      {/* What we do */}
      <Section
        className="section-y"
        innerClassName="flex flex-col gap-8 md:gap-16"
      >
        <SectionHeader
          label="02 — What we do"
          labelClassName="text-lilac"
          title="Three disciplines. One habit."
        />
        <div className="grid gap-3 md:grid-cols-3 md:gap-5">
          {disciplines.map((d) => (
            <DisciplineCard key={d.number} {...d} />
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section
        className="section-y"
        innerClassName="flex flex-col gap-8 md:gap-16"
        tone="stone"
      >
        <Image
          alt="The 80/20 VISION mascot rides a rocket diving into an op-art warp tunnel, pointing at the star in its center."
          className="h-auto w-full rounded-3xl"
          height={1040}
          sizes="(min-width: 1440px) 1280px, 100vw"
          src="/illustrations/selected-work-rocket.png"
          width={2400}
        />
        <SectionHeader
          label="03 — Selected work"
          labelClassName="text-ultraviolet"
          title="Selected work"
        >
          <Button
            className="hidden md:inline-flex"
            href="/work"
            variant="outline-ink"
          >
            All work →
          </Button>
        </SectionHeader>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <WorkCard key={p.slug} project={p} />
            ))}
        </div>
        <Button className="w-full md:hidden" href="/work" variant="outline-ink">
          All work →
        </Button>
      </Section>

      {/* Next up */}
      <Section className="pt-[72px] md:pt-[140px]">
        <div className="flex flex-col gap-4 rounded-3xl bg-ultraviolet p-7 md:flex-row md:items-end md:justify-between md:p-16">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="t-label">80/20 VISION presents</p>
            <h2 className="t-headline">SOUND/SIGHT 001</h2>
            <p className="t-body-l">
              [Day, date] · [Venue, city]. Bring your ears.
            </p>
          </div>
          <Button
            className="self-start md:self-auto"
            href="/events"
            variant="ink"
          >
            Details ↗
          </Button>
        </div>
      </Section>

      {/* Closing call */}
      <Section innerClassName="flex flex-col items-center gap-5 py-24 text-center md:gap-7 md:py-40">
        <p className="t-accent text-lilac">too focused for the noise</p>
        <h2 className="t-headline max-w-[760px]">
          Have something worth focusing on?
        </h2>
        <p className="t-body-l max-w-[600px]">
          Tell us what you are building. We will tell you what we think matters
          most, usually in the first call.
        </p>
        <Button href="/contact">Start a project ↗</Button>
      </Section>
    </>
  );
}
