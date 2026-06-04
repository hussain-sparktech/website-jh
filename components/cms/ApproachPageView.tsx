"use client";

import {
  ClosingCTA,
  EditorialSection,
  FoundationsSection,
  PageHero,
  ProcessTimeline,
  ThreeCMethodDiagram
} from "@/components/ApproachSections";
import { PageLoading } from "@/components/cms/PageLoading";
import type { ApproachContent } from "@/lib/approachContent";
import type { Language } from "@/lib/i18n";
import { useCmsPage } from "@/hooks/useCmsPage";

export function ApproachPageView({ language }: { language: Language }) {
  const { data, loading, error } = useCmsPage<ApproachContent>("approach", language);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {error ? <p className="cms-inline-notice">{error}</p> : null}
      <PageHero headline={data.philosophy.headline} body={data.philosophy.body} />
      <EditorialSection label={data.method.label} headline={data.method.headline} body={data.method.body}>
        <ThreeCMethodDiagram method={data.method} />
      </EditorialSection>
      <ProcessTimeline headline={data.process.headline} steps={data.process.steps} />
      <FoundationsSection {...data.foundations} />
      <ClosingCTA {...data.closing} language={language} />
    </>
  );
}
