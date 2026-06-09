import { ServicesPageView } from "@/components/cms/ServicesPageView";
import type { Language } from "@/lib/i18n";

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  return <ServicesPageView language={params.lang} />;
}
