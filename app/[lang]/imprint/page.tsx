import { PageHero, TextPanel } from "@/components/Sections";
import type { Language } from "@/lib/i18n";

export default function ImprintPage({ params }: { params: { lang: Language } }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={params.lang === "en" ? "Imprint" : "Impressum"} lead="Placeholder legal content." compact />
      <TextPanel title={params.lang === "en" ? "Imprint details" : "Angaben"} text="Placeholder legal text to be replaced." />
    </>
  );
}
