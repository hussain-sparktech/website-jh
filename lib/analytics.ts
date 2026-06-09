import { CONSENT_UPDATED_EVENT, isCategoryAllowed } from "./cookieConsent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

let isLoaded = false;

export function getGaMeasurementId(): string | undefined {
  return GA_MEASUREMENT_ID || undefined;
}

function ensureGtag(): NonNullable<Window["gtag"]> {
  window.dataLayer = window.dataLayer || [];
  const gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag = gtag;
  return gtag;
}

function setGaDisabled(disabled: boolean): void {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
}

function removeGaCookies(): void {
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`];

  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0]?.trim();
    if (!name?.startsWith("_ga")) {
      return;
    }

    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    });
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

export function loadGoogleAnalytics(): void {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  setGaDisabled(false);

  if (!document.querySelector('script[data-gv-analytics="gtag"]')) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    script.dataset.gvAnalytics = "gtag";
    document.head.appendChild(script);
  }

  const gtag = ensureGtag();
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false
  });

  isLoaded = true;
}

export function disableGoogleAnalytics(): void {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  setGaDisabled(true);
  removeGaCookies();
  isLoaded = false;
}

export function trackPageView(path: string): void {
  if (!GA_MEASUREMENT_ID || !isLoaded || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path
  });
}

export function syncAnalyticsWithConsent(): void {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  if (isCategoryAllowed("analytics")) {
    loadGoogleAnalytics();
    return;
  }

  disableGoogleAnalytics();
}

export function subscribeToConsentUpdates(onChange: () => void): () => void {
  window.addEventListener(CONSENT_UPDATED_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onChange);
}
