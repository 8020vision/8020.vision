import React from "react";
import { LogoDarkMode } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Navbar, NavbarItem } from "@nextui-org/navbar";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-obsidian-black py-10">
      <LogoDarkMode />
      <Navbar>
        <ul className="lg:flex gap-4 mx-auto">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </Navbar>
      <p className="text-ash-gray">80/20 VISION LLC</p>
    </footer>
  );
}
