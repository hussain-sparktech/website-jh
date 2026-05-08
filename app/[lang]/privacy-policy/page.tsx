import { PageHero, TextPanel } from "@/components/Sections";
import type { Language } from "@/lib/i18n";

export default function PrivacyPolicyPage({ params }: { params: { lang: Language } }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={params.lang === "en" ? "Privacy Policy" : "Datenschutz"} lead="Placeholder privacy content." compact />
      <TextPanel title={params.lang === "en" ? "Privacy notes" : "Datenschutzhinweise"} text="Placeholder privacy text to be replaced." />
    </>
  );
}
