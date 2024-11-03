"use client";

import React from "react";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import Logo from "@/components/logo";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-20 min-h-[760px] md:min-h-[920px] px-4">
      <div className="max-w-4xl text-center justify-center flex flex-col items-center gap-4">
        <Logo iconOnly={true} />
        <div className="flex flex-col gap-4">
          <span className={clsx(title({ size: "lg" }))}>
            Premium Design & Development Agency
          </span>
          <div className={subtitle()}>
            At 80/20 Vision we focus on what matters to build future-proof
            foundations for our partners. We design and develop second-nature,
            human-focused applications where everyone wins. We partner with
            other forward-thinking companies to unlock new value, optimize
            resources, and achieve sustainable success faster, forging their
            future for exponential growth.
          </div>
        </div>
        <Button
          size={"lg"}
          className="w-full md:max-w-[320px] mt-4 bg-obsidian-black text-cool-mist-gray dark:bg-cool-mist-gray dark:text-obsidian-black"
          onPress={() => scrollToSection("contact")}
        >
          Contact
        </Button>
      </div>
    </section>
  );
}
