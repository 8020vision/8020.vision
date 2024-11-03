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
  className,
}: {
  direction?: "horizontal" | "vertical";
  iconOnly?: boolean;
  className?: string;
}) {
  const { theme } = useTheme();

  if (iconOnly === true) {
    return <>{theme === "light" ? <IconOnLight /> : <IconOnDark />}</>;
  }

  return (
    <>
      {theme === "light" ? (
        direction === "horizontal" ? (
          <LogoOnLight className={className} />
        ) : (
          <LogoOnLightVertical className={className} />
        )
      ) : direction === "horizontal" ? (
        <LogoOnDark className={className} />
      ) : (
        <LogoOnDarkVertical className={className} />
      )}
    </>
  );
}
