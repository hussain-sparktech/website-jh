import { CONSENT_UPDATED_EVENT, isCategoryAllowed } from "./cookieConsent";

const GTM_ID = "GTM-KHZ3T3ZP";

const GTM_SCRIPT_ID = "gtm-script";
const GTM_NOSCRIPT_ID = "gtm-noscript";

let gtmLoaded = false;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function getGtmId(): string {
  return GTM_ID;
}

export function isGTMLoaded(): boolean {
  return gtmLoaded || !!document.getElementById(GTM_SCRIPT_ID);
}

function removeTrackingCookies(): void {
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`];

  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0]?.trim();
    if (!name?.startsWith("_ga") && !name?.startsWith("_gid")) {
      return;
    }

    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    });
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

export function loadGoogleTagManager(): void {
  if (gtmLoaded || !GTM_ID || typeof window === "undefined") {
    return;
  }

  if (document.getElementById(GTM_SCRIPT_ID)) {
    gtmLoaded = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const gtmScript = document.createElement("script");
  gtmScript.id = GTM_SCRIPT_ID;
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtmScript);

  if (!document.getElementById(GTM_NOSCRIPT_ID)) {
    const noscript = document.createElement("noscript");
    noscript.id = GTM_NOSCRIPT_ID;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);
  }

  gtmLoaded = true;
}

export function disableGoogleTagManager(): void {
  if (typeof window === "undefined") {
    return;
  }

  document.getElementById(GTM_SCRIPT_ID)?.remove();
  document.getElementById(GTM_NOSCRIPT_ID)?.remove();
  removeTrackingCookies();
  gtmLoaded = false;
}

export function trackPageView(path: string): void {
  if (!GTM_ID || !isGTMLoaded()) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: path,
    page_title: document.title,
    page_location: window.location.href
  });
}

export function syncGTMWithConsent(): void {
  if (!GTM_ID) {
    return;
  }

  if (isCategoryAllowed("analytics")) {
    loadGoogleTagManager();
    return;
  }

  disableGoogleTagManager();
}

export function subscribeToConsentUpdates(onChange: () => void): () => void {
  window.addEventListener(CONSENT_UPDATED_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onChange);
}
