"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Button } from "@/components/button";
import { Lockup } from "@/components/mark";
import { siteConfig } from "@/lib/site";

/** "Web / Nav" on desktop and "Web / Mobile / Nav" with a full-screen menu below lg. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-[18px] md:px-10 lg:px-20 lg:py-6">
        <Link aria-label="80/20 VISION home" className="relative z-40" href="/">
          <Lockup className="text-[15.12px] lg:text-[18.36px]" />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="t-ui text-bone transition-opacity hover:opacity-70 aria-[current=page]:text-lilac"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact">Start a project ↗</Button>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="t-ui relative z-40 rounded-full border border-bone px-4 py-[10px] text-bone lg:hidden"
          type="button"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        className={clsx(
          "fixed inset-0 z-30 flex flex-col bg-obsidian px-5 pb-10 pt-[120px] transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        id="mobile-menu"
      >
        <ul className="flex flex-col gap-6">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link className="t-headline text-bone" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className="t-headline text-bone" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <Button className="w-full" href="/contact">
            Start a project ↗
          </Button>
          <p className="t-tagline mt-6 text-bone">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}
