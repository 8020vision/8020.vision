"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Button } from "@/components/button";
import { Lockup } from "@/components/mark";
import { siteConfig } from "@/lib/site";

/** True when the band of page sitting under the nav has a light (bone/stone) background. */
function isLightBehind(header: HTMLElement | null) {
  if (!header) return false;
  const y = header.offsetHeight / 2;

  for (const el of document.elementsFromPoint(window.innerWidth / 2, y)) {
    if (header.contains(el)) continue;

    let node: Element | null = el;

    while (node) {
      const m = getComputedStyle(node).backgroundColor.match(/[\d.]+/g);

      if (m && (m[3] === undefined || Number(m[3]) >= 0.5)) {
        const [r, g, b] = m.map(Number);

        return 0.2126 * r + 0.7152 * g + 0.0722 * b > 160;
      }
      node = node.parentElement;
    }
  }

  return false;
}

/** "Web / Nav" on desktop and "Web / Mobile / Nav" with a full-screen menu below lg. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      setLight(isLightBehind(header.current));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  // The open mobile menu is obsidian, so the bar stays dark while it is showing.
  const showLight = light && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-30">
      {/* Faded glass: blurred, tinted backdrop that dissolves into the page below. No border. */}
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+20px)] bg-gradient-to-b backdrop-blur-md backdrop-saturate-150 transition-[opacity,background-color] duration-300 [mask-image:linear-gradient(to_bottom,black_45%,transparent)]",
          showLight
            ? "from-bone/70 via-bone/40 to-bone/0"
            : "from-obsidian/50 via-obsidian/25 to-obsidian/0",
          scrolled && !open ? "opacity-100" : "opacity-0",
        )}
      />
      <nav className="relative mx-auto flex max-w-page items-center justify-between px-5 py-[18px] md:px-10 lg:px-20 lg:py-6">
        <Link aria-label="80/20 VISION home" className="relative z-40" href="/">
          <Lockup
            className={clsx(
              "bg-transparent text-[15.12px] transition-colors duration-300 lg:text-[18.36px]",
              showLight && "text-obsidian",
            )}
            light={showLight}
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className={clsx(
                "t-ui transition-[opacity,color] duration-300 hover:opacity-70",
                showLight
                  ? "text-obsidian aria-[current=page]:text-ultraviolet"
                  : "text-bone aria-[current=page]:text-lilac",
              )}
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
          className={clsx(
            "t-ui relative z-40 rounded-full border px-4 py-[10px] transition-colors duration-300 lg:hidden",
            showLight ? "border-obsidian text-obsidian" : "border-bone text-bone",
          )}
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
