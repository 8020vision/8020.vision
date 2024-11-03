import React from "react";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import { coreValues } from "@/config/coreValues";
import CoreValue from "@/components/core-value";

export default function CoreValues() {
  return (
    <section
      className="lg:py-40 flex flex-col gap-4 py-8 md:py-10 bg-white dark:bg-obsidian-black"
      id="corevalues"
    >
      <div className="max-w-8xl mx-auto flex flex-col gap-40 lg:grid lg:grid-cols-[1fr_2fr] min-h-screen">
        <div className="flex flex-col gap-6 sticky top-10 z-10">
          <span className={clsx(title({ size: "lg" }))}>Core Values</span>
          <span className={clsx(subtitle())}>
            How you do anything is how you do everything.
          </span>
        </div>
        <div className="flex flex-col gap-16">
          {coreValues.map((value, i) => {
            const { superTitle, title, description, iconDark } = value;
            return (
              <CoreValue
                key={i}
                superTitle={superTitle}
                title={title}
                description={description}
                icon={iconDark}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
