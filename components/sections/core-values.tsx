import React from "react";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import { coreValues } from "@/config/coreValues";
import CoreValue from "@/components/core-value";

export default function CoreValues() {
  return (
    <section
      className="py-20 px-4 lg:py-40 flex flex-col gap-4  bg-white dark:bg-obsidian-black"
      id="corevalues"
    >
      <div className="max-w-8xl mx-auto flex flex-col gap-16 lg:gap-40 lg:grid lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4 lg:gap-6 md:sticky md:top-10 z-10">
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
