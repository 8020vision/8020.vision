import { Button } from "@/components/button";
import { Mark } from "@/components/mark";
import { CtaBand, MediaCard, Section, SectionHeader } from "@/components/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Events",
  description:
    "Nights designed for focus. Sound, light and crowd, tuned until the room locks in. Small rooms, good systems, no noise.",
  path: "/events",
  og: "events",
});

type UpcomingEvent = {
  name: string;
  date: string;
  place: string;
  /** Ticket or RSVP link. */
  href: string;
  cta: "Tickets ↗" | "RSVP ↗";
};

// TODO: real dates, venues and ticket links. An empty list shows the "nothing scheduled" state.
const upcoming: UpcomingEvent[] = [
  {
    name: "SOUND/SIGHT 001",
    date: "Saturday · [Date]",
    place: "[Venue], [City]",
    href: "#",
    cta: "Tickets ↗",
  },
  {
    name: "SOUND/SIGHT 002",
    date: "[Day] · [Date]",
    place: "[Venue], [City]",
    href: "#",
    cta: "Tickets ↗",
  },
];

// TODO: posters and details of past nights.
const past = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  name: "[Event name]",
  meta: "[Date · City]",
}));

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian text-bone">
        <div className="section-x relative mx-auto max-w-page pb-[72px] pt-[100px] lg:h-[900px] lg:pb-0 lg:pt-0">
          <Mark
            className="mx-auto size-[300px] md:size-[440px] lg:absolute lg:right-5 lg:top-[130px] lg:mx-0 lg:size-[min(640px,44vw)]"
            variant="op-art"
          />
          <div className="relative mt-14 flex flex-col gap-5 md:gap-7 lg:mt-0 lg:pt-[260px]">
            <p className="t-label text-lilac">80/20 VISION presents</p>
            <h1 className="t-display max-w-[720px] lg:max-w-[min(720px,52vw)]">
              Nights designed for focus.
            </h1>
            <p className="t-body-l max-w-[520px]">
              Sound, light and crowd, tuned until the room locks in. Small rooms, good systems, no
              noise.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <Section
        className="pb-[72px] pt-[72px] md:pb-[140px] md:pt-[120px]"
        innerClassName="flex flex-col gap-8 md:gap-16"
      >
        <SectionHeader label="Upcoming" labelClassName="text-lilac" title="Next on the calendar." />
        {upcoming.length > 0 ? (
          <ul>
            {upcoming.map((e) => (
              <li
                key={e.name}
                className="flex flex-col gap-3 border-t border-bone py-6 md:py-8 lg:flex-row lg:items-center lg:gap-10"
              >
                <h3 className="t-title shrink-0 lg:w-[420px]">{e.name}</h3>
                <p className="t-label lg:hidden">
                  {e.date} · {e.place}
                </p>
                <p className="t-label hidden w-[260px] shrink-0 lg:block">{e.date}</p>
                <p className="t-body hidden flex-1 lg:block">{e.place}</p>
                <Button className="mt-2 self-start lg:mt-0 lg:self-auto" href={e.href}>
                  {e.cta}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col gap-5 rounded-3xl border border-dashed border-bone p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="t-body md:text-[21px]">
              Nothing on the calendar yet. Get the next one first.
            </p>
            <Button className="self-start md:self-auto" href="#newsletter" variant="outline">
              Join the list
            </Button>
          </div>
        )}
      </Section>

      {/* Archive */}
      <Section className="pb-[72px] md:pb-[140px]" innerClassName="flex flex-col gap-8 md:gap-16">
        <SectionHeader label="Archive" labelClassName="text-lilac" title="Past nights." />
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-5 lg:grid-cols-4">
          {past.map((p) => (
            <MediaCard key={p.id} aspect="poster" label="[Poster]" meta={p.meta} title={p.name} />
          ))}
        </div>
      </Section>

      <CtaBand
        action={
          <Button href="/contact?topic=events" variant="ink">
            Get in touch ↗
          </Button>
        }
        body="We partner with venues, artists and brands who care about the details. Tell us about the room."
        label="For venues and collaborators"
        title="Want to host or play?"
      />
    </>
  );
}
