"use client";

import React from "react";
import { useTheme } from "next-themes";

import { LogoOnDark, LogoOnLight } from "@/components/logos";

export default function Logo({
  className,
}: {
  direction?: "horizontal" | "vertical";
  iconOnly?: boolean;
  className?: string;
}) {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <LogoOnLight className={className} />
      ) : (
        <LogoOnDark className={className} />
      )}
    </>
  );
}
