import React from "react";
import {
  title as titleClasses,
  subtitle,
  supertitle as supertitleClasses,
} from "@/components/primitives";
import clsx from "clsx";

export default function CoreValue({
  superTitle,
  title,
  description,
  icon,
}: {
  superTitle: string;
  title: string;
  description: string;
  icon?: any;
}) {
  return (
    <div className="flex grid-cols-[80px_1fr] gap-2 md:gap-5">
      <div>{icon}</div>
      <div className="flex flex-col gap-2">
        <span className={clsx(supertitleClasses())}>{superTitle}</span>
        <span className={titleClasses({ size: "sm" })}>{title}</span>
        <span className={clsx(subtitle())}>{description}</span>
      </div>
    </div>
  );
}
