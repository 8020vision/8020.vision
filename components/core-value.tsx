import React from "react";
import {
  title as titleClasses,
  subtitle,
  supertitle as supertitleClasses,
} from "@/components/primitives";
import clsx from "clsx";
import Icon from "@/components/icon";

export default function CoreValue({
  superTitle,
  title,
  description,
  iconDark,
  iconLight,
}: {
  superTitle: string;
  title: string;
  description: string;
  iconDark: any;
  iconLight: any;
}) {
  return (
    <div className="flex grid-cols-[80px_1fr] gap-2 md:gap-5">
      <div className="w-[80px]">
        <Icon iconDark={iconDark} iconLight={iconLight} />
      </div>
      <div className="flex flex-col gap-2">
        <span className={clsx(supertitleClasses())}>{superTitle}</span>
        <span className={titleClasses({ size: "sm" })}>{title}</span>
        <span className={clsx(subtitle())}>{description}</span>
      </div>
    </div>
  );
}
