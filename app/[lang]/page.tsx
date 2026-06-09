import { HomePageView } from "@/components/cms/HomePageView";
import type { Language } from "@/lib/i18n";

export default function HomePage({ params }: { params: { lang: Language } }) {
  return <HomePageView language={params.lang} />;
}
