"use client";

import React from "react";
// import { Link } from "@nextui-org/link";
// import { button as buttonStyles } from "@nextui-org/theme";
// import { siteConfig } from "@/config/site";
import { title, subtitle, textGradient } from "@/components/primitives";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    // <section className="bg-[url('/backgrounds/sphere-bg-light.jpg')] dark:bg-[url('/backgrounds/sphere-bg-dark.jpg')] bg-cover bg-center flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-[880px]">
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-[800px]">
      <div className="max-w-4xl text-center justify-center flex flex-col items-center gap-6">
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

      {/* <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            variant: "shadow",
            size: "lg",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
      </div> */}
    </section>
  );
}
