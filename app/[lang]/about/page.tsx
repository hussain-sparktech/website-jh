import { AboutPageView } from "@/components/cms/AboutPageView";
import type { Language } from "@/lib/i18n";

export default function AboutPage({ params }: { params: { lang: Language } }) {
  return <AboutPageView language={params.lang} />;
}
