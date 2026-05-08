import {
  Credibility,
  HomeClosingCta,
  HomeHero,
  HowIWork,
  ServicesTeaser,
  ValueProposition
} from "@/components/HomeSections";
import { homeContent } from "@/lib/homeContent";
import type { Language } from "@/lib/i18n";

export default function HomePage({ params }: { params: { lang: Language } }) {
  const t = homeContent[params.lang];

  return (
    <>
      <HomeHero content={t.hero} language={params.lang} />
      <ValueProposition {...t.value} />
      <HowIWork {...t.work} />
      <ServicesTeaser {...t.services} language={params.lang} />
      <Credibility {...t.credibility} />
      <HomeClosingCta {...t.closing} language={params.lang} />
    </>
  );
}
