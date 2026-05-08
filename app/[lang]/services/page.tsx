import { ClosingCTA, PageHero, ServiceDetailSection } from "@/components/ServicesSections";
import { servicesContent } from "@/lib/servicesContent";
import type { Language } from "@/lib/i18n";

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  const t = servicesContent[params.lang];

  return (
    <>
      <PageHero {...t.intro} />
      {t.services.map((service) => (
        <ServiceDetailSection key={service.title} service={service} language={params.lang} />
      ))}
      <ClosingCTA {...t.closing} language={params.lang} />
    </>
  );
}
