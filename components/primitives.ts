import { tv } from "tailwind-variants";

export const textGradient = tv({
  base: "bg-gradient-to-t bg-clip-text text-transparent from-[#919EB6] to-white",
});

export const supertitle = tv({
  base: "text-ash-gray dark:text-cool-mist-gray font-sans text-base not-italic font-normal leading-normal tracking-[4.8px] uppercase block",
});

export const title = tv({
  base: "tracking-tightest inline font-semibold dark:text-cool-mist-gray text-obsidian-black",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl leading-7 lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-5xl leading-10 md:text-7xl md:leading-[4rem]",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 md:text-lg md:leading-6 text-default-600 block max-w-full text-slate-gray dark:text-brushed-silver leading-5",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
