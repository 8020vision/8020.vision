import clsx from "clsx";

export type GlowSpec = {
  /** Position and size as percentages of the parent box. */
  left: number;
  top: number;
  size: number;
  color: string;
  /** Gaussian blur as a percentage of the parent's width. */
  blur: number;
};

const PURPLE = "#6a3df5";
const ELECTRIC = "#2e4bff";
const LILAC = "#b9a6ff";

/* "Hypno glow" stacks from Figma, re-expressed relative to the mark they sit behind. */
export const HOME_GLOWS: GlowSpec[] = [
  { left: -10, top: -15, size: 126.7, color: PURPLE, blur: 19.2 },
  { left: 40, top: 41.7, size: 86.7, color: ELECTRIC, blur: 19.2 },
  { left: 23.3, top: 15, size: 50, color: LILAC, blur: 14.2 },
];

export const EVENTS_GLOWS: GlowSpec[] = [
  { left: -13, top: -37, size: 152, color: PURPLE, blur: 25 },
  { left: 39, top: 28.3, size: 104.3, color: ELECTRIC, blur: 23.9 },
  { left: 17.4, top: 2.2, size: 56.5, color: LILAC, blur: 17.4 },
];

/** Blurred colour fields. Place inside a square parent; it becomes the size container. */
export function Glows({ glows, className }: { glows: GlowSpec[]; className?: string }) {
  return (
    <div
      aria-hidden
      className={clsx("pointer-events-none absolute inset-0", className)}
      style={{ containerType: "size" }}
    >
      {glows.map((g, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${g.left}%`,
            top: `${g.top}%`,
            width: `${g.size}%`,
            height: `${g.size}%`,
            background: g.color,
            filter: `blur(${g.blur}cqw)`,
          }}
        />
      ))}
    </div>
  );
}
