import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/button";
import { PageHero, Placeholder, Section, SectionHeader } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/site";

const caseStudies = projects.filter((p) => p.hasCaseStudy);

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) return {};

  return pageMetadata({
    title: project.title,
    description: project.line,
    path: `/work/${project.slug}`,
    og: "work",
  });
}

const stats = [
  { value: "[00%]", label: "[Metric that moved]" },
  { value: "[0x]", label: "[Second metric]" },
  { value: "[00]", label: "[Third metric]" },
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = caseStudies.findIndex((p) => p.slug === params.slug);

  if (index === -1) notFound();

  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <PageHero intro={project.line} label={project.meta} title={project.title} />

      <Section>
        <Placeholder dark className="h-[260px] rounded-3xl md:h-[720px]" label="[Hero image]" />
      </Section>

      {/* The 20% */}
      <Section className="section-y">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <p className="t-label shrink-0 text-lilac lg:w-[320px]">The 20%</p>
          <p className="t-headline max-w-[880px]">
            The one thing we found that mattered most. This is the heart of the case study,
            written as a single strong statement.
          </p>
        </div>
      </Section>

      {/* The work */}
      <Section className="section-y" innerClassName="flex flex-col gap-8 md:gap-16" tone="bone">
        <SectionHeader
          label="The work"
          labelClassName="text-ultraviolet"
          title="What we made, and how."
        />
        <p className="t-body-l max-w-[720px]">
          Process and detail, not adjectives. Twelve rounds to get the iris right. Show the
          decisions, the dead ends, and the final system.
        </p>
        <div className="flex flex-col gap-6 md:flex-row">
          <Placeholder className="h-[260px] rounded-3xl md:h-[480px] md:w-[49%]" label="[Process image]" />
          <Placeholder className="h-[260px] flex-1 rounded-3xl md:h-[480px]" label="[Process image]" />
        </div>
      </Section>

      {/* The result */}
      <Section className="section-y" innerClassName="flex flex-col gap-8 md:gap-16">
        <SectionHeader
          label="The result"
          labelClassName="text-lilac"
          title="Numbers if we have them."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3 border-t border-bone pt-8">
              <p className="t-display">{s.value}</p>
              <p className="t-body">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="t-label">Credits · [Client] · [Team] · [Year] · [Link]</p>
          <div className="flex flex-wrap gap-3">
            <Button href={`/work/${next.slug}`} variant="outline">
              Next project →
            </Button>
            <Button href="/contact">Start a project ↗</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
