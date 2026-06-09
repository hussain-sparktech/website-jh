"use client";

import { ClosingNote, ContactPanel, PageHero } from "@/components/ContactSections";
import { PageLoading } from "@/components/cms/PageLoading";
import type { ContactContent } from "@/lib/contactContent";
import type { Language } from "@/lib/i18n";
import { useCmsPage } from "@/hooks/useCmsPage";

export function ContactPageView({ language }: { language: Language }) {
  const { data, loading, error } = useCmsPage<ContactContent>("contact", language);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {error ? <p className="cms-inline-notice">{error}</p> : null}
      <PageHero {...data.hero} lang={language} />
      <ContactPanel content={data} />
      <ClosingNote note={data.note} />
    </>
  );
}
