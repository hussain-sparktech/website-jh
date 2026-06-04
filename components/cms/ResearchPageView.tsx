"use client";

import { ClosingCTA, ResearchArchive, ResearchHero, SelectedHighlightsSection } from "@/components/ResearchSections";
import { PageLoading } from "@/components/cms/PageLoading";
import type { ResearchPagePayload } from "@/lib/cms/defaults";
import type { Language } from "@/lib/i18n";
import { useCmsPage } from "@/hooks/useCmsPage";

export function ResearchPageView({ language }: { language: Language }) {
  const { data, loading, error } = useCmsPage<ResearchPagePayload>("research", language);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {error ? <p className="cms-inline-notice">{error}</p> : null}
      <ResearchHero {...data.content.intro} />
      <SelectedHighlightsSection
        {...data.content.highlights}
        linkLabel={data.content.archive.openPublication}
      />
      <ResearchArchive
        content={data.content.archive}
        publications={data.publications}
        presentations={data.presentations}
      />
      <ClosingCTA {...data.content.closing} language={language} />
    </>
  );
}
