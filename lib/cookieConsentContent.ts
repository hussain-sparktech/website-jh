import type { Language } from "./i18n";

type CookieConsentCopy = {
  title: string;
  description: string;
  acceptAll: string;
  rejectOptional: string;
  privacyLink: string;
  cookiePolicyLink: string;
};

const en: CookieConsentCopy = {
  title: "We use cookies",
  description:
    "We use essential cookies to run this site. With your consent, we may also use analytics and marketing cookies to understand how the site is used and improve our communication.",
  acceptAll: "Accept all",
  rejectOptional: "Reject optional",
  privacyLink: "Privacy Policy",
  cookiePolicyLink: "Cookie Policy"
};

const de: CookieConsentCopy = {
  title: "Wir verwenden Cookies",
  description:
    "Wir nutzen notwendige Cookies für den Betrieb dieser Website. Mit Ihrer Einwilligung können wir zusätzlich Analyse- und Marketing-Cookies verwenden, um die Nutzung zu verstehen und unsere Kommunikation zu verbessern.",
  acceptAll: "Alle akzeptieren",
  rejectOptional: "Optionale ablehnen",
  privacyLink: "Datenschutzerklärung",
  cookiePolicyLink: "Cookie-Richtlinie"
};

export const cookieConsentContent: Record<Language, CookieConsentCopy> = {
  en,
  de
};
