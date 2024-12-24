"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-6 justify-center bg-white dark:bg-obsidian-black pt-20 pb-8">
      <Logo />
      <ul className="flex flex-col items-center text-center gap-2 mx-auto">
        {siteConfig.navItems.map((item) => (
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </NextLink>
        ))}
      </ul>
      <p className="text-ash-gray">
        © {new Date().getFullYear()} 80/20 VISION LLC
      </p>
    </footer>
  );
}
