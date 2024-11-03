"use client";

import React from "react";
import { useTheme } from "next-themes";

import {
  IconOnDark,
  LogoOnDark,
  LogoOnDarkVertical,
  IconOnLight,
  LogoOnLight,
  LogoOnLightVertical,
} from "@/components/logos";

export default function Logo({
  direction = "horizontal",
  iconOnly = false,
}: {
  direction?: "horizontal" | "vertical";
  iconOnly?: boolean;
}) {
  const { theme } = useTheme();

  if (iconOnly === true) {
    return <>{theme === "light" ? <IconOnLight /> : <IconOnDark />}</>;
  }

  return (
    <>
      {theme === "light" ? (
        direction === "horizontal" ? (
          <LogoOnLight />
        ) : (
          <LogoOnLightVertical />
        )
      ) : direction === "horizontal" ? (
        <LogoOnDark />
      ) : (
        <LogoOnDarkVertical />
      )}
    </>
  );
}
