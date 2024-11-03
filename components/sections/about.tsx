import React from "react";
import { title, subtitle, textGradient } from "@/components/primitives";
import clsx from "clsx";
import Image from "next/image";

export default function About() {
  return (
    <section className="lg:py-40" id="about">
      <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-10 max-w-8xl mx-auto">
        <div className="inline-block justify-center">
          <span className={clsx(title({ size: "lg" }))}>
            You focus on growing your business. We take care of the design and
            development that powers it.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            80/20 VISION was founded by Josh Worley, a multi-disciplined Digital
            Experience Architect (Designer, Developer, Product Manager) with 10+
            years of professional experience. Josh has designed and led
            development for over 30+ digital products, websites, and apps, for
            multinational corporations to budding startups and everything in
            between. Industries include eCommerce, investment banking, data
            analytics, telecommunications, music, entertainment, art commerce,
            decentralized finance, and web3.
          </div>
          <div className={subtitle({ class: "mt-4" })}>
            He personally oversees all output from 80/20 VISION to guarantee
            complete customer satisfaction with every partner.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/joshworley.jpg"
            alt="Logo"
            width={320}
            height={320}
            className="rounded-full"
          />
          <div className={subtitle({ class: "mt-4 text-center" })}>
            Josh Worley, Founder & CEO
          </div>
        </div>
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
