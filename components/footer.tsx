import Link from "next/link";

import { Lockup } from "@/components/mark";
import { Newsletter } from "@/components/newsletter";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Nights",
    links: [
      { label: "Events", href: "/events" },
      { label: "Sound", href: "/sound" },
    ],
  },
  { title: "Follow", links: siteConfig.social },
];

/** "Web / Footer" and "Web / Mobile / Footer". */
export function Footer() {
  return (
    <footer className="border-t border-bone bg-obsidian text-bone">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-5 pb-8 pt-14 md:gap-20 md:px-10 md:pb-12 md:pt-24 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-5">
            <Link aria-label="80/20 VISION home" className="self-start" href="/">
              <Lockup className="text-[12.24px] md:text-[15.12px]" />
            </Link>
            <p className="t-body">Get the next one first. Events, releases and the occasional note.</p>
            <Newsletter />
          </div>
          <div className="flex justify-between gap-6 md:justify-start md:gap-24">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3 md:gap-[14px]">
                <p className="t-label">{col.title}</p>
                {col.links.map((l) => {
                  const external = l.href.startsWith("http");

                  return (
                    <Link
                      key={l.label}
                      className="t-ui transition-opacity hover:opacity-70"
                      href={l.href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse gap-[10px] md:flex-row md:items-start md:justify-between">
          <p className="t-label">© 2026 80/20 VISION LLC · Privacy · Terms</p>
          <p className="t-tagline">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
