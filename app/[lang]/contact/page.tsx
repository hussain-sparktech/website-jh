import { ContactPageView } from "@/components/cms/ContactPageView";
import type { Language } from "@/lib/i18n";

export default function ContactPage({ params }: { params: { lang: Language } }) {
  return <ContactPageView language={params.lang} />;
}
