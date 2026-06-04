import { ApproachPageView } from "@/components/cms/ApproachPageView";
import type { Language } from "@/lib/i18n";

export default function ApproachPage({ params }: { params: { lang: Language } }) {
  return <ApproachPageView language={params.lang} />;
}
