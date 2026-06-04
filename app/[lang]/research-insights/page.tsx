import { ResearchPageView } from "@/components/cms/ResearchPageView";
import type { Language } from "@/lib/i18n";

export default function ResearchInsightsPage({ params }: { params: { lang: Language } }) {
  return <ResearchPageView language={params.lang} />;
}
