"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function Icon({
  className,
  iconDark,
  iconLight,
}: {
  className?: string;
  iconDark: React.ReactNode; // Updated type
  iconLight: React.ReactNode; // Updated type
}) {
  const { theme } = useTheme();

  return <>{theme === "light" ? iconLight : iconDark}</>; // Render directly without extra braces
}
