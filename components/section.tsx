import clsx from "clsx";

type Tone = "obsidian" | "bone" | "stone" | "ultraviolet";

const tones: Record<Tone, string> = {
  obsidian: "bg-obsidian text-bone",
  bone: "bg-bone text-obsidian",
  stone: "bg-stone text-obsidian",
  ultraviolet: "bg-ultraviolet text-bone",
};

/** Full-bleed band with the 1440px content column and design gutters. */
export function Section({
  tone = "obsidian",
  className,
  innerClassName,
  children,
  id,
}: {
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className={clsx(tones[tone], className)} id={id}>
      <div className={clsx("section-x mx-auto max-w-page", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

/** Eyebrow label + headline used at the top of most sections. */
export function SectionHeader({
  label,
  title,
  labelClassName,
  className,
  children,
}: {
  label: string;
  title: React.ReactNode;
  labelClassName?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="flex flex-col gap-[14px] md:gap-5">
        <p className={clsx("t-label", labelClassName)}>{label}</p>
        <h2 className="t-headline max-w-[760px]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

/** Simple page hero used by Work, Services and the case study. */
export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Section innerClassName="flex flex-col gap-5 pb-[72px] pt-[133px] md:gap-7 md:pb-[120px] md:pt-[213px]">
      <p className="t-label text-lilac">{label}</p>
      <h1 className="t-display max-w-[1100px]">{title}</h1>
      <p className="t-body-l max-w-[620px]">{intro}</p>
      {children}
    </Section>
  );
}

/** Grey placeholder block used wherever the design shows "[Image]". */
export function Placeholder({
  label,
  className,
  dark,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center overflow-hidden",
        dark ? "bg-graphite text-bone" : "bg-obsidian/[0.08] text-obsidian",
        className,
      )}
    >
      <p className="t-label">{label}</p>
    </div>
  );
}

/** Full-width Ultraviolet call-to-action band ("For venues", "Booking"). */
export function CtaBand({
  label,
  title,
  body,
  action,
}: {
  label: string;
  title: string;
  body: string;
  action: React.ReactNode;
}) {
  return (
    <Section className="section-y" tone="ultraviolet">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-[14px] md:gap-5">
          <p className="t-label">{label}</p>
          <h2 className="t-headline max-w-[760px]">{title}</h2>
          <p className="t-body-l max-w-[620px]">{body}</p>
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    </Section>
  );
}

/** Poster or artwork tile with a name and a mono meta line (Events archive, Sound grid). */
export function MediaCard({
  label,
  title,
  meta,
  aspect,
}: {
  label: string;
  title: string;
  meta: string;
  aspect: "poster" | "square";
}) {
  return (
    <div className="flex min-w-0 flex-col gap-[10px] md:gap-[14px]">
      <Placeholder
        dark
        className={clsx(
          "w-full rounded-2xl",
          aspect === "poster" ? "aspect-[305/406]" : "aspect-square",
        )}
        label={label}
      />
      <p className="t-ui">{title}</p>
      <p className="t-label">{meta}</p>
    </div>
  );
}
