"use client";

import { ClosingCTA, PageHero, ServiceDetailSection } from "@/components/ServicesSections";
import { PageLoading } from "@/components/cms/PageLoading";
import type { ServicesContent } from "@/lib/servicesContent";
import type { Language } from "@/lib/i18n";
import { useCmsPage } from "@/hooks/useCmsPage";

export function ServicesPageView({ language }: { language: Language }) {
  const { data, loading, error } = useCmsPage<ServicesContent>("services", language);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {error ? <p className="cms-inline-notice">{error}</p> : null}
      <PageHero {...data.intro} />
      {data.services.map((service) => (
        <ServiceDetailSection key={service.title} service={service} language={language} />
      ))}
      <ClosingCTA {...data.closing} language={language} />
    </>
  );
}
