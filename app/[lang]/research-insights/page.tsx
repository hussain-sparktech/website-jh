import { ClosingCTA, ResearchArchive, ResearchHero, SelectedHighlightsSection, TopicsSection } from "@/components/ResearchSections";
import { presentationsData, publicationsData, researchContent } from "@/lib/researchContent";
import type { Language } from "@/lib/i18n";

export default function ResearchInsightsPage({ params }: { params: { lang: Language } }) {
  const t = researchContent[params.lang];

  return (
    <>
      <ResearchHero {...t.intro} />
      <TopicsSection {...t.topics} />
      <SelectedHighlightsSection {...t.highlights} />
      <ResearchArchive content={t.archive} publications={publicationsData} presentations={presentationsData} />
      <ClosingCTA {...t.closing} language={params.lang} />
    </>
  );
}
