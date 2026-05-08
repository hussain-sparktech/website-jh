import { ClosingCTA, EditorialGrid, InfoBlock, PageHero, TopicsSection } from "@/components/ResearchSections";
import { researchContent } from "@/lib/researchContent";
import type { Language } from "@/lib/i18n";

export default function ResearchInsightsPage({ params }: { params: { lang: Language } }) {
  const t = researchContent[params.lang];

  return (
    <>
      <PageHero {...t.intro} />
      <TopicsSection {...t.topics} />
      <EditorialGrid {...t.insights} />
      <InfoBlock {...t.note} />
      <ClosingCTA {...t.closing} language={params.lang} />
    </>
  );
}
