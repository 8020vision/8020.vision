import { PageHero, Section } from "@/components/section";
import { WorkGrid } from "@/components/work-grid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Our own launches and client work, each told through the decision that made it.",
  path: "/work",
  og: "work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        intro="Our own launches and client work, each told through the decision that made it."
        label="Work"
        title="The work."
      />
      <Section className="pb-[72px] pt-14 md:pb-[140px] md:pt-[100px]" tone="stone">
        <WorkGrid />
      </Section>
    </>
  );
}
