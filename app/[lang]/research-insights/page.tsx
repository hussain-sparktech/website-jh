import { ClosingCTA, ResearchArchive, ResearchHero, SelectedHighlightsSection } from "@/components/ResearchSections";
import { presentationsData, publicationsData, researchContent } from "@/lib/researchContent";
import type { Language } from "@/lib/i18n";

export default function ResearchInsightsPage({ params }: { params: { lang: Language } }) {
  const t = researchContent[params.lang];

  return (
    <>
      <ResearchHero {...t.intro} />
      <SelectedHighlightsSection {...t.highlights} linkLabel={t.archive.openPublication} />
      <ResearchArchive content={t.archive} publications={publicationsData} presentations={presentationsData} />
      <ClosingCTA {...t.closing} language={params.lang} />
    </>
  );
}
