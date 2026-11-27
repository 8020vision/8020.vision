import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type MarkVariant = "triangle" | "triangle-black" | "eye" | "op-art";

/* Iris placement inside each mark, as fractions of the mark's box (from Figma). */
const LAYERS: Record<
  Exclude<MarkVariant, "op-art">,
  { frame: string; iris: string; left: string; top: string; size: string }
> = {
  // D / Mark / Triangle / Dark: bone triangle, black eye.
  triangle: {
    frame: "/brand/mark-triangle.svg",
    iris: "/brand/mark-iris.svg",
    left: "28.5%",
    top: "37%",
    size: "43%",
  },
  // D / Mark / Triangle / Light: black triangle, bone eye.
  "triangle-black": {
    frame: "/brand/mark-triangle-black.svg",
    iris: "/brand/mark-iris-black.svg",
    left: "28.5%",
    top: "37%",
    size: "43%",
  },
  // D / Mark / Eye / Dark: eye only.
  eye: {
    frame: "/brand/mark-eye.svg",
    iris: "/brand/mark-eye-iris.svg",
    left: "24%",
    top: "24%",
    size: "52%",
  },
};

/** The 80/20 VISION mark. Fills its parent box, which should be square. */
export function Mark({
  variant = "triangle",
  className,
  label = "80/20 VISION",
}: {
  variant?: MarkVariant;
  className?: string;
  label?: string;
}) {
  if (variant === "op-art") {
    return (
      <div aria-label={label} className={twMerge("relative", className)} role="img">
        <div className="absolute inset-[1%] overflow-hidden rounded-full bg-obsidian">
          <img
            alt=""
            className="absolute left-[-1.02%] top-[-1.02%] block size-[102.04%] max-w-none"
            src="/brand/opart-stripes.svg"
          />
        </div>
        <svg
          aria-hidden
          className="absolute inset-0 size-full"
          fill="none"
          viewBox="0 0 640 640"
        >
          <circle cx="320" cy="320" r="307.2" stroke="#f2f0eb" strokeWidth="12.8" />
        </svg>
        <img alt="" className="absolute inset-0 block size-full" src="/brand/opart-eye.svg" />
        <img
          alt=""
          className="absolute left-[35%] top-[35%] block size-[30%]"
          src="/brand/opart-iris.svg"
        />
      </div>
    );
  }

  const l = LAYERS[variant];

  return (
    <div aria-label={label} className={twMerge("relative", className)} role="img">
      <img alt="" className="absolute inset-0 block size-full" src={l.frame} />
      <img
        alt=""
        className="absolute block"
        src={l.iris}
        style={{ left: l.left, top: l.top, width: l.size, height: l.size }}
      />
    </div>
  );
}

/**
 * "80/20 VISION · D / Lockup / Horizontal / Unbounded / Dark".
 * Every measurement scales with the font size, so pass a text size class.
 */
export function Lockup({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-[0.611em] rounded-[0.556em] bg-obsidian px-[1em] py-[0.778em] font-display font-bold leading-none tracking-[-0.02em] text-bone",
        className,
      )}
    >
      <Mark className="size-[1.653em] shrink-0" label="" variant="triangle" />
      <span className="whitespace-nowrap">80/20 VISION</span>
    </span>
  );
}
