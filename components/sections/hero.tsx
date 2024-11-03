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
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-20 min-h-[800px] xl:min-h-[920px]">
      <div className="max-w-4xl text-center justify-center flex flex-col items-center gap-6">
        <Logo iconOnly={true} />
        <span className={clsx(title({ size: "lg" }))}>
          Premium Design & Development Agency
        </span>
        <div className={subtitle()}>
          At 80/20 Vision we focus on what matters to build future-proof
          foundations for our partners. We design and develop second-nature,
          human-focused applications where everyone wins. We partner with other
          forward-thinking companies to unlock new value, optimize resources,
          and achieve sustainable success faster, forging their future for
          exponential growth.
        </div>
        <Button
          size={"lg"}
          className="w-full max-w-[320px] mt-5"
          onPress={() => scrollToSection("contact")}
        >
          Contact
        </Button>
      </div>
    </section>
  );
}
