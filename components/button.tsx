import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "outline" | "ink" | "outline-ink";

const styles: Record<Variant, string> = {
  primary: "bg-ultraviolet text-bone hover:bg-[#7b52ff]",
  outline: "border border-bone text-bone hover:bg-bone hover:text-obsidian",
  ink: "bg-obsidian text-bone hover:bg-graphite",
  "outline-ink": "border border-obsidian text-obsidian hover:bg-obsidian hover:text-bone",
};

const base =
  "t-ui inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-[15px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac";

/** "Web / Button": Primary, Outline, Ink and Outline on Bone. */
export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = /^https?:/.test(href);

  return (
    <Link
      className={clsx(base, styles[variant], className)}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  className,
  disabled,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={clsx(base, styles[variant], "disabled:opacity-60", className)}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
}
