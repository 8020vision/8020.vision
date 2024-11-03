"use client";

import React, { useState } from "react";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
// import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";
import Logo from "@/components/logo";

export const Navbar = () => {
  const [navMenuOpen, toggleNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    toggleNavMenuOpen(!navMenuOpen);
  };

  function scrollToSection(sectionId: string) {
    const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with ID ${id} not found.`);
    }
  }

  const handleLinkSelect = (sectionId: string) => {
    toggleNavMenu();
    scrollToSection(sectionId);
  };

  return (
    <NextUINavbar
      maxWidth="2xl"
      className="fixed lg:py-4"
      isMenuOpen={navMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo className="h-[32px] w-[210px] md:h-[48px] md:w-[309px]" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
                )}
                color="foreground"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link> */}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle onPress={toggleNavMenu} />
      </NavbarContent>

      <NavbarMenu>
        <div className="mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="dark:text-cool-mist-gray"
                size="lg"
                onPress={() => handleLinkSelect(item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
