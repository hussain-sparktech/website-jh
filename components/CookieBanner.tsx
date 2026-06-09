"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  acceptAllCookies,
  CONSENT_OPEN_SETTINGS_EVENT,
  getStoredConsent,
  rejectOptionalCookies
} from "@/lib/cookieConsent";
import { cookieConsentContent } from "@/lib/cookieConsentContent";
import type { Language } from "@/lib/i18n";

export function CookieBanner({ language }: { language: Language }) {
  const copy = cookieConsentContent[language];
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const closeBanner = useCallback(() => {
    setIsVisible(false);
  }, []);

  const openBanner = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!getStoredConsent()) {
      setIsVisible(true);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    window.addEventListener(CONSENT_OPEN_SETTINGS_EVENT, openBanner);
    return () => window.removeEventListener(CONSENT_OPEN_SETTINGS_EVENT, openBanner);
  }, [openBanner]);

  if (!isReady || !isVisible) {
    return null;
  }

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="cookie-banner__panel">
        <div className="cookie-banner__copy">
          <h2 id="cookie-banner-title">{copy.title}</h2>
          <p id="cookie-banner-description">{copy.description}</p>
          <p className="cookie-banner__links">
            <Link href={`/${language}/privacy-policy`}>{copy.privacyLink}</Link>
            <span aria-hidden="true">·</span>
            <Link href={`/${language}/cookie-policy`}>{copy.cookiePolicyLink}</Link>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--primary"
            onClick={() => {
              acceptAllCookies();
              closeBanner();
            }}
          >
            {copy.acceptAll}
          </button>
          <button
            type="button"
            className="cookie-banner__button"
            onClick={() => {
              rejectOptionalCookies();
              closeBanner();
            }}
          >
            {copy.rejectOptional}
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ language }: { language: Language }) {
  const label = language === "en" ? "Cookie settings" : "Cookie-Einstellungen";

  return (
    <button type="button" className="cookie-settings-link" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_SETTINGS_EVENT))}>
      {label}
    </button>
  );
}
