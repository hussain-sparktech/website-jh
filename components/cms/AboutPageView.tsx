"use client";

import {
  AcademicBackgroundCards,
  CertificationTimeline,
  ClosingCTA,
  CredentialList,
  EditorialStorySection,
  NetworkSection,
  PageHero,
  ProfileCard,
  ValuesGrid
} from "@/components/AboutSections";
import { PageLoading } from "@/components/cms/PageLoading";
import type { AboutContent } from "@/lib/aboutContent";
import type { Language } from "@/lib/i18n";
import { useCmsPage } from "@/hooks/useCmsPage";

export function AboutPageView({ language }: { language: Language }) {
  const { data, loading, error } = useCmsPage<AboutContent>("about", language);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {error ? <p className="cms-inline-notice">{error}</p> : null}
      <PageHero {...data.mission} />
      <ProfileCard profile={data.profile} />
      <CredentialList items={data.profile.credentials} />
      <CertificationTimeline {...data.certifications} />
      <AcademicBackgroundCards {...data.academic} />
      <EditorialStorySection {...data.story} />
      <ValuesGrid {...data.values} />
      <NetworkSection {...data.network} />
      <ClosingCTA {...data.closing} language={language} />
    </>
  );
}
