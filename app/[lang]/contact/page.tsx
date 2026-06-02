import { ClosingNote, ContactPanel, PageHero } from "@/components/ContactSections";
import { contactContent } from "@/lib/contactContent";
import type { Language } from "@/lib/i18n";

export default function ContactPage({ params }: { params: { lang: Language } }) {
  const t = contactContent[params.lang];

  return (
    <>
      <PageHero {...t.hero} lang={params.lang} />
      <ContactPanel content={t} />
      <ClosingNote note={t.note} />
    </>
  );
}
