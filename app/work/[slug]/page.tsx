import type { Metadata } from "next";

import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/button";
import {
  PageHero,
  Placeholder,
  Section,
  SectionHeader,
} from "@/components/section";
import { pageMetadata } from "@/lib/metadata";
import { type Img, projects } from "@/lib/site";

const caseStudies = projects.filter((p) => p.hasCaseStudy);

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) return {};

  return pageMetadata({
    title: project.title,
    description: project.caseStudy?.brief ?? project.line,
    path: `/work/${project.slug}`,
    og: "work",
  });
}

const placeholderStats = [
  { value: "[00%]", label: "[Metric that moved]" },
  { value: "[0x]", label: "[Second metric]" },
  { value: "[00]", label: "[Third metric]" },
];

function Shot({
  img,
  className,
  sizes,
  priority,
}: {
  img: Img;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      <Image
        alt={img.alt}
        className="h-auto w-full rounded-3xl"
        height={img.height}
        priority={priority}
        sizes={sizes}
        src={img.src}
        width={img.width}
      />
    </div>
  );
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const index = caseStudies.findIndex((p) => p.slug === params.slug);

  if (index === -1) notFound();

  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const cs = project.caseStudy;

  return (
    <>
      <PageHero
        intro={cs?.brief ?? project.line}
        label={cs?.label ?? project.meta}
        title={project.title}
      >
        {cs?.liveUrl && (
          <div>
            <Button href={cs.liveUrl} variant="outline">
              See it live ↗
            </Button>
          </div>
        )}
      </PageHero>

      <Section>
        {cs ? (
          <Shot
            priority
            img={cs.cover}
            sizes="(min-width: 1440px) 1280px, 100vw"
          />
        ) : (
          <Placeholder
            dark
            className="h-[260px] rounded-3xl md:h-[720px]"
            label="[Hero image]"
          />
        )}
      </Section>

      {/* The 20% */}
      <Section className="section-y">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <p className="t-label shrink-0 text-lilac lg:w-[320px]">The 20%</p>
          <div className="flex max-w-[880px] flex-col gap-7">
            <p className="t-headline">
              {cs?.twenty ??
                "The one thing we found that mattered most. This is the heart of the case study, written as a single strong statement."}
            </p>
            {cs?.twentyAccent && (
              <p className="t-accent text-lilac">{cs.twentyAccent}</p>
            )}
          </div>
        </div>
      </Section>

      {/* The work */}
      <Section
        className="section-y"
        innerClassName="flex flex-col gap-8 md:gap-16"
        tone="bone"
      >
        <SectionHeader
          label="The work"
          labelClassName="text-ultraviolet"
          title={cs?.workTitle ?? "What we made, and how."}
        />
        <p className="t-body-l max-w-[720px]">
          {cs?.workIntro ??
            "Process and detail, not adjectives. Twelve rounds to get the iris right. Show the decisions, the dead ends, and the final system."}
        </p>
        {cs && (
          <ol className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-12">
            {cs.details.map((d, i) => (
              <li
                key={d.title}
                className="flex flex-col gap-[10px] border-t border-obsidian/15 pt-5 md:gap-[14px] md:pt-6"
              >
                <p className="t-label text-ultraviolet">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="t-title">{d.title}</h3>
                <p className="t-body text-obsidian/70">{d.body}</p>
              </li>
            ))}
          </ol>
        )}
        <div className="flex flex-col gap-6 md:flex-row">
          {cs ? (
            cs.images.map((img) => (
              <Shot
                key={img.src}
                className="md:flex-1"
                img={img}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ))
          ) : (
            <>
              <Placeholder
                className="h-[260px] rounded-3xl md:h-[480px] md:w-[49%]"
                label="[Process image]"
              />
              <Placeholder
                className="h-[260px] flex-1 rounded-3xl md:h-[480px]"
                label="[Process image]"
              />
            </>
          )}
        </div>
      </Section>

      {/* The result */}
      <Section
        className="section-y"
        innerClassName="flex flex-col gap-8 md:gap-16"
      >
        <SectionHeader
          label="The result"
          labelClassName="text-lilac"
          title={cs?.resultTitle ?? "Numbers if we have them."}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {(cs?.stats ?? placeholderStats).map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3 border-t border-bone pt-8"
            >
              <p className="t-display">{s.value}</p>
              <p className="t-body max-w-[380px]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="t-label">
            {cs?.credits ?? "Credits · [Client] · [Team] · [Year] · [Link]"}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={`/work/${next.slug}`} variant="outline">
              Next: {next.title} →
            </Button>
            <Button href="/contact">Start a project ↗</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
