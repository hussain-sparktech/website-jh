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
import { aboutContent } from "@/lib/aboutContent";
import type { Language } from "@/lib/i18n";

export default function AboutPage({ params }: { params: { lang: Language } }) {
  const t = aboutContent[params.lang];

  return (
    <>
      <PageHero {...t.mission} />
      <ProfileCard profile={t.profile} />
      <CredentialList items={t.profile.credentials} />
      <CertificationTimeline {...t.certifications} />
      <AcademicBackgroundCards {...t.academic} />
      <EditorialStorySection {...t.story} />
      <ValuesGrid {...t.values} />
      <NetworkSection {...t.network} />
      <ClosingCTA {...t.closing} language={params.lang} />
    </>
  );
}
