import type { Language } from "@/lib/i18n";

export const CMS_PAGE_IDS = ["home", "about", "approach", "services", "contact", "research"] as const;

export type CmsPageId = (typeof CMS_PAGE_IDS)[number];

export type CmsPageLabels = Record<CmsPageId, string>;

export const CMS_PAGE_LABELS: CmsPageLabels = {
  home: "Home",
  about: "About",
  approach: "Approach",
  services: "Services",
  contact: "Contact",
  research: "Research & Insights"
};

export type CmsLocalePayload = Record<string, unknown>;

export type CmsPageDocument = {
  en: CmsLocalePayload;
  de: CmsLocalePayload;
  updatedAt?: string;
  updatedBy?: string;
};

export type FieldType = "text" | "paragraph" | "lines";

export type CmsFieldDef = {
  path: string;
  label: string;
  type: FieldType;
  hint?: string;
};

export type CmsLanguage = Language;
