"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  getGaMeasurementId,
  subscribeToConsentUpdates,
  syncAnalyticsWithConsent,
  trackPageView
} from "@/lib/analytics";
import { isCategoryAllowed } from "@/lib/cookieConsent";

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    syncAnalyticsWithConsent();

    return subscribeToConsentUpdates(() => {
      syncAnalyticsWithConsent();

      if (isCategoryAllowed("analytics")) {
        trackPageView(window.location.pathname);
      }
    });
  }, []);

  useEffect(() => {
    if (!getGaMeasurementId() || !isCategoryAllowed("analytics")) {
      return;
    }

    trackPageView(pathname || window.location.pathname);
  }, [pathname]);

  return null;
}
