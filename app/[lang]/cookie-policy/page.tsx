import { PageHero, TextPanel } from "@/components/Sections";
import type { Language } from "@/lib/i18n";

export default function CookiePolicyPage({ params }: { params: { lang: Language } }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={params.lang === "en" ? "Cookie Policy" : "Cookie-Richtlinie"} lead="Placeholder cookie content." compact />
      <TextPanel title={params.lang === "en" ? "Cookie details" : "Cookie-Hinweise"} text="Placeholder cookie text to be replaced." />
    </>
  );
}
