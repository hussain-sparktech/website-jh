"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isCategoryAllowed } from "@/lib/cookieConsent";
import {
  getGtmId,
  subscribeToConsentUpdates,
  syncGTMWithConsent,
  trackPageView
} from "@/lib/gtm";

export function GoogleTagManager() {
  const pathname = usePathname();

  useEffect(() => {
    syncGTMWithConsent();

    return subscribeToConsentUpdates(() => {
      syncGTMWithConsent();

      if (isCategoryAllowed("analytics")) {
        trackPageView(window.location.pathname);
      }
    });
  }, []);

  useEffect(() => {
    if (!getGtmId() || !isCategoryAllowed("analytics")) {
      return;
    }

    trackPageView(pathname || window.location.pathname);
  }, [pathname]);

  return null;
}
