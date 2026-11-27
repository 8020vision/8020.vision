"use client";

import { useState } from "react";
import clsx from "clsx";

import { WorkCard } from "@/components/cards";
import { type Discipline, disciplines, projects } from "@/lib/site";

export function WorkGrid() {
  // Only offer filters that match at least one project.
  const filters = disciplines.filter((d) => projects.some((p) => p.disciplines.includes(d)));
  const [filter, setFilter] = useState<Discipline | "All">("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.disciplines.includes(filter));

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div aria-label="Filter work" className="flex flex-wrap gap-[10px]" role="group">
        {(["All", ...filters] as const).map((d) => (
          <button
            key={d}
            aria-pressed={filter === d}
            className={clsx(
              "t-ui rounded-full px-[18px] py-[10px] transition-colors",
              filter === d
                ? "bg-obsidian text-bone"
                : "border border-obsidian text-obsidian hover:bg-obsidian/10",
            )}
            type="button"
            onClick={() => setFilter(d)}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-y-12">
        {shown.map((p) => (
          <WorkCard key={p.slug} project={p} />
        ))}
      </div>
      {shown.length === 0 && <p className="t-body">Nothing here yet.</p>}
    </div>
  );
}
