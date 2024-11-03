import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import CoreValues from "@/components/sections/core-values";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <NextSeo {...seoConfig} />
      <Hero />
      <Services />
      <About />
      <CoreValues />
      <Contact />
    </>
  );
}
