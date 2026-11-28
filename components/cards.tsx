import type { Project } from "@/lib/site";

import Image from "next/image";
import Link from "next/link";

import { Placeholder } from "@/components/section";

/** "Web / Card / Discipline". */
export function DisciplineCard({
  number,
  title,
  body,
  link,
  href,
  image,
}: {
  number: string;
  title: string;
  body: string;
  link: string;
  href: string;
  /** 16:10 window picture drawn on Graphite with its own Bone frame. */
  image?: { src: string; alt: string };
}) {
  return (
    <Link
      className="group flex h-full flex-1 flex-col gap-4 rounded-3xl border border-bone bg-graphite p-5 text-bone transition-colors hover:bg-[#232327] md:p-6"
      href={href}
    >
      {image ? (
        <Image
          alt={image.alt}
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
          height={600}
          sizes="(min-width: 1440px) 400px, (min-width: 768px) 33vw, 100vw"
          src={image.src}
          width={960}
        />
      ) : null}
      <div className="flex flex-1 flex-col gap-4 px-3 pb-3 pt-2">
        <p className="t-label text-lilac">{number}</p>
        <div className="flex-1" />
        <h3 className="t-title">{title}</h3>
        <p className="t-body">{body}</p>
        <p className="t-ui transition-transform group-hover:translate-x-1">
          {link}
        </p>
      </div>
    </Link>
  );
}

/** "Web / Card / Work". */
export function WorkCard({ project }: { project: Project }) {
  const body = (
    <>
      {project.image ? (
        <div className="h-[260px] w-full overflow-hidden rounded-3xl bg-obsidian md:h-[304px]">
          <Image
            alt={project.image.alt}
            className="h-full w-full object-cover"
            height={project.image.height}
            sizes="(min-width: 1024px) 405px, (min-width: 768px) 50vw, 100vw"
            src={project.image.src}
            width={project.image.width}
          />
        </div>
      ) : (
        <Placeholder
          className="h-[260px] w-full rounded-3xl md:h-[304px]"
          label="[Project image]"
        />
      )}
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
