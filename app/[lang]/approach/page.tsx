import {
  ClosingCTA,
  EditorialSection,
  FoundationsSection,
  PageHero,
  ProcessTimeline,
  ThreeCMethodDiagram
} from "@/components/ApproachSections";
import { approachContent } from "@/lib/approachContent";
import type { Language } from "@/lib/i18n";

export default function ApproachPage({ params }: { params: { lang: Language } }) {
  const t = approachContent[params.lang];

  return (
    <>
      <PageHero {...t.philosophy} />
      <EditorialSection label={t.method.label} headline={t.method.headline} body={t.method.body}>
        <ThreeCMethodDiagram nodes={t.method.nodes} />
      </EditorialSection>
      <ProcessTimeline {...t.process} />
      <FoundationsSection {...t.foundations} />
      <ClosingCTA {...t.closing} language={params.lang} />
    </>
  );
}
