import { Button } from "@/components/button";
import { Mark } from "@/components/mark";
import { CtaBand, MediaCard, Section, SectionHeader } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sound",
  description:
    "Records and live sets, made with the same obsessive craft as everything else at 80/20 VISION.",
  path: "/sound",
  og: "sound",
});

// TODO: real release links.
const listen = [
  { label: "Spotify", href: "https://open.spotify.com/" },
  { label: "Apple Music", href: "https://music.apple.com/" },
  { label: "Bandcamp", href: "https://bandcamp.com/" },
  { label: "SoundCloud", href: "https://soundcloud.com/" },
];

// TODO: discography and sets.
const releases = [
  { id: 1, title: "[Title]", meta: "Release · [Year]" },
  { id: 2, title: "[Title]", meta: "Live set · [Year]" },
  { id: 3, title: "[Title]", meta: "Mix · [Year]" },
  { id: 4, title: "[Title]", meta: "Release · [Year]" },
];

export default function SoundPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian text-bone">
        <div className="section-x relative mx-auto max-w-page pb-[72px] pt-[100px] lg:h-[820px] lg:pb-0 lg:pt-0">
          <Mark
            className="mx-auto size-[300px] md:size-[440px] lg:absolute lg:right-5 lg:top-[110px] lg:mx-0 lg:size-[min(640px,44vw)]"
            variant="op-art"
          />
          <div className="relative mt-10 flex flex-col gap-5 md:gap-7 lg:mt-0 lg:pt-[260px]">
            <p className="t-label text-lilac">Sound</p>
            <h1 className="t-display max-w-[720px] lg:max-w-[min(720px,50vw)]">
              Records and live sets.
            </h1>
            <p className="t-body-l max-w-[520px]">
              Made with the same obsessive craft as everything else here.
            </p>
          </div>
        </div>
      </section>

      {/* Latest release */}
      <Section className="section-y" tone="bone">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex aspect-square w-full shrink-0 items-center justify-center rounded-2xl bg-obsidian text-bone lg:w-[min(520px,38vw)]">
            <p className="t-label">[Artwork]</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-5 md:gap-6">
            <p className="t-label text-ultraviolet">Latest release · [Date]</p>
            <h2 className="t-headline">[Release title]</h2>
            {/* TODO: swap for the embedded player once the release is live. */}
            <div
              aria-label="Player coming soon"
              className="flex items-center gap-4 rounded-full bg-obsidian px-4 py-3 text-bone md:gap-5 md:px-6 md:py-5"
              role="img"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ultraviolet text-[15px]">
                ▶
              </span>
              <span className="h-[2px] flex-1 bg-bone" />
              <span className="t-label">0:00 / 6:12</span>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {listen.map((l) => (
                <li key={l.label}>
                  <a
                    className="t-ui transition-opacity hover:opacity-60"
                    href={l.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Discography */}
      <Section className="section-y" innerClassName="flex flex-col gap-8 md:gap-16">
        <SectionHeader
          label="Discography and sets"
          labelClassName="text-lilac"
          title="Everything so far."
        />
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-5 lg:grid-cols-4">
          {releases.map((r) => (
            <MediaCard key={r.id} aspect="square" label="[Artwork]" meta={r.meta} title={r.title} />
          ))}
        </div>
      </Section>

      <CtaBand
        action={
          <Button href="/contact?topic=booking" variant="ink">
            Book a set ↗
          </Button>
        }
        body="Available for clubs, festivals and private events."
        label="Booking"
        title="Live AV and DJ sets."
      />
    </>
  );
}
