import Link from "next/link";

import { Placeholder } from "@/components/section";
import type { Project } from "@/lib/site";

/** "Web / Card / Discipline". */
export function DisciplineCard({
  number,
  title,
  body,
  link,
  href,
}: {
  number: string;
  title: string;
  body: string;
  link: string;
  href: string;
}) {
  return (
    <Link
      className="group flex h-[240px] flex-1 flex-col gap-4 rounded-3xl border border-bone bg-graphite p-8 text-bone transition-colors hover:bg-[#232327] md:h-[360px]"
      href={href}
    >
      <p className="t-label text-lilac">{number}</p>
      <div className="flex-1" />
      <h3 className="t-title">{title}</h3>
      <p className="t-body">{body}</p>
      <p className="t-ui transition-transform group-hover:translate-x-1">{link}</p>
    </Link>
  );
}

/** "Web / Card / Work". */
export function WorkCard({ project }: { project: Project }) {
  const body = (
    <>
      <Placeholder className="h-[260px] w-full rounded-3xl md:h-[304px]" label="[Project image]" />
      <p className="t-label text-ultraviolet">{project.meta}</p>
      <h3 className="t-title">{project.title}</h3>
      <p className="t-body">{project.line}</p>
    </>
  );

  if (!project.hasCaseStudy) {
    return <div className="flex flex-1 flex-col gap-5">{body}</div>;
  }

  return (
    <Link
      className="group flex flex-1 flex-col gap-5 [&>div]:transition-transform [&>div]:duration-300 hover:[&>div]:scale-[0.99]"
      href={`/work/${project.slug}`}
    >
      {body}
    </Link>
  );
}
