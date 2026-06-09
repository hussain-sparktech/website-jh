export type CookieCategory = "necessary" | "analytics" | "marketing";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsent = {
  preferences: CookiePreferences;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = "gv-cookie-consent";
export const CONSENT_UPDATED_EVENT = "cookie-consent-updated";
export const CONSENT_OPEN_SETTINGS_EVENT = "cookie-consent-open-settings";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parsePreferences(value: unknown): CookiePreferences | null {
  if (!isRecord(value)) {
    return null;
  }

  return {
    necessary: true,
    analytics: value.analytics === true,
    marketing: value.marketing === true
  };
}

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) {
      return null;
    }

    const preferences = parsePreferences(parsed.preferences);
    if (!preferences || typeof parsed.updatedAt !== "string") {
      return null;
    }

    return {
      preferences,
      updatedAt: parsed.updatedAt
    };
  } catch {
    return null;
  }
}

export function hasConsent(): boolean {
  return getStoredConsent() !== null;
}

export function saveConsent(preferences: CookiePreferences): CookieConsent {
  const consent: CookieConsent = {
    preferences: {
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing
    },
    updatedAt: new Date().toISOString()
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: consent }));

  return consent;
}

export function acceptAllCookies(): CookieConsent {
  return saveConsent({
    necessary: true,
    analytics: true,
    marketing: true
  });
}

export function rejectOptionalCookies(): CookieConsent {
  return saveConsent(defaultPreferences);
}

export function isCategoryAllowed(category: CookieCategory): boolean {
  if (category === "necessary") {
    return true;
  }

  const consent = getStoredConsent();
  if (!consent) {
    return false;
  }

  return consent.preferences[category];
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_SETTINGS_EVENT));
}
