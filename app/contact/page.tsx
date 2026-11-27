import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Start a project",
  description: "Tell us what you are working on. One short form, and a clear reply.",
  path: "/contact",
  og: "home",
});

export default function ContactPage() {
  return (
    <Section innerClassName="grid gap-10 pb-[72px] pt-[100px] md:pb-[160px] md:pt-[150px] lg:grid-cols-[1fr_minmax(0,640px)] lg:gap-x-24 lg:gap-y-0 lg:pt-[193px]">
      <div className="flex flex-col gap-5 md:gap-7">
        <p className="t-label text-lilac">Contact</p>
        <h1 className="t-display max-w-[560px]">Start a project.</h1>
        <p className="t-body-l max-w-[480px]">
          Tell us what you are working on. We reply within [two working days].
        </p>
      </div>

      <Suspense>
        <ContactForm className="lg:row-span-2" />
      </Suspense>

      <div className="flex flex-col gap-3 lg:pt-12">
        <p className="t-label">Also</p>
        {/* TODO: studio email address. */}
        <p className="t-ui">[email address]</p>
        {siteConfig.social.map((s) => (
          <a
            key={s.label}
            className="t-ui self-start transition-opacity hover:opacity-70"
            href={s.href}
            rel="noreferrer"
            target="_blank"
          >
            {s.label} ↗
          </a>
        ))}
      </div>
    </Section>
  );
}
