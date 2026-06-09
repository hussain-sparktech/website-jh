import { siteImagery } from "@/lib/siteImagery";
import { CMS_PAGE_LABELS, type CmsPageId } from "./types";

export type PageImageSlot = {
  id: string;
  defaultSrc: string;
};

export type PageImageConfig = {
  panelTitle: string;
  slots: PageImageSlot[];
};

export const PAGE_IMAGE_CONFIG: Record<CmsPageId, PageImageConfig> = {
  home: {
    panelTitle: "Home page visuals",
    slots: [
      { id: "hero", defaultSrc: siteImagery.aurora },
      { id: "valueAtmosphere", defaultSrc: "/images/abstract-black-flower-cyan.png" },
      { id: "workAtmosphere", defaultSrc: siteImagery.waves }
    ]
  },
  about: {
    panelTitle: "About page visuals",
    slots: [
      { id: "portraitPrimary", defaultSrc: "/images/JasnimaHasnagbegovic-1.png" },
      { id: "portraitSecondary", defaultSrc: "/images/JasnimaHasnagbegovic-2.png" }
    ]
  },
  approach: {
    panelTitle: "Approach page visuals",
    slots: [{ id: "hero", defaultSrc: siteImagery.waves }]
  },
  services: {
    panelTitle: "Services page visuals",
    slots: [{ id: "hero", defaultSrc: siteImagery.flare }]
  },
  contact: {
    panelTitle: "Contact page visuals",
    slots: [{ id: "hero", defaultSrc: siteImagery.grass }]
  },
  research: {
    panelTitle: "Research page visuals",
    slots: [{ id: "hero", defaultSrc: siteImagery.eye }]
  }
};

export function getPageImageConfig(pageId: CmsPageId): PageImageConfig {
  return (
    PAGE_IMAGE_CONFIG[pageId] ?? {
      panelTitle: `${CMS_PAGE_LABELS[pageId]} page visuals`,
      slots: []
    }
  );
}
