"use client";

import {
  Credibility,
  HomeClosingCta,
  HomeHero,
  HowIWork,
  ServicesTeaser,
  ValueProposition
} from "@/components/HomeSections";
import { PageLoading } from "@/components/cms/PageLoading";
import type { HomeContent } from "@/lib/homeContent";
import type { Language } from "@/lib/i18n";
import { useCmsPage } from "@/hooks/useCmsPage";

export function HomePageView({ language }: { language: Language }) {
  const { data, loading, error } = useCmsPage<HomeContent>("home", language);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {error ? <p className="cms-inline-notice">{error}</p> : null}
      <HomeHero content={data.hero} language={language} />
      <ValueProposition {...data.value} />
      <HowIWork {...data.work} />
      <ServicesTeaser {...data.services} language={language} />
      <Credibility {...data.credibility} />
      <HomeClosingCta {...data.closing} language={language} />
    </>
  );
}
