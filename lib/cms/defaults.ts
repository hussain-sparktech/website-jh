import { aboutContent, type AboutContent } from "@/lib/aboutContent";
import { approachContent, type ApproachContent } from "@/lib/approachContent";
import { contactContent, type ContactContent } from "@/lib/contactContent";
import { homeContent, type HomeContent } from "@/lib/homeContent";
import type { Language } from "@/lib/i18n";
import {
  presentationsData,
  publicationsData,
  researchContent,
  type ResearchContent
} from "@/lib/researchContent";
import { servicesContent, type ServicesContent } from "@/lib/servicesContent";
import type { CmsPageDocument, CmsPageId } from "./types";

export type ResearchPagePayload = {
  content: ResearchContent;
  publications: typeof publicationsData;
  presentations: typeof presentationsData;
};

export type CmsDefaults = {
  home: Record<Language, HomeContent>;
  about: Record<Language, AboutContent>;
  approach: Record<Language, ApproachContent>;
  services: Record<Language, ServicesContent>;
  contact: Record<Language, ContactContent>;
  research: Record<Language, ResearchPagePayload>;
};

export const cmsDefaults: CmsDefaults = {
  home: homeContent,
  about: aboutContent,
  approach: approachContent,
  services: servicesContent,
  contact: contactContent,
  research: {
    en: {
      content: researchContent.en,
      publications: publicationsData,
      presentations: presentationsData
    },
    de: {
      content: researchContent.de,
      publications: publicationsData,
      presentations: presentationsData
    }
  }
};

export function getDefaultLocalePayload(pageId: CmsPageId, language: Language): Record<string, unknown> {
  return structuredClone(cmsDefaults[pageId][language]) as Record<string, unknown>;
}

export function buildDefaultPageDocument(pageId: CmsPageId): CmsPageDocument {
  return {
    en: getDefaultLocalePayload(pageId, "en"),
    de: getDefaultLocalePayload(pageId, "de"),
    updatedAt: new Date().toISOString()
  };
}

export function buildAllDefaultDocuments(): Record<CmsPageId, CmsPageDocument> {
  return {
    home: buildDefaultPageDocument("home"),
    about: buildDefaultPageDocument("about"),
    approach: buildDefaultPageDocument("approach"),
    services: buildDefaultPageDocument("services"),
    contact: buildDefaultPageDocument("contact"),
    research: buildDefaultPageDocument("research")
  };
}
