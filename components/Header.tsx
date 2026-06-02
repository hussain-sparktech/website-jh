"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import type { Language } from "@/lib/i18n";
import { content, type PageKey } from "@/lib/content";

function MenuIcon() {
  return (
    <svg className="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const navItems: Array<{ key: PageKey; href: string }> = [
  { key: "services", href: "/services" },
  { key: "approach", href: "/approach" },
  { key: "about", href: "/about" },
  { key: "insights", href: "/research-insights" },
  { key: "contact", href: "/contact" }
];

export function Header({
  language
}: {
  language: Language;
}) {
  const t = content[language];
  const pathname = usePathname() || `/${language}`;
  const pathWithoutLanguage = pathname.replace(`/${language}`, "") || "";
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  return (
    <header className="site-header">
      <Link className="brand" href={`/${language}`} aria-label="3C Transforming Leadership home">
        <span className="brand-mark">3C</span>
        <span>
          <strong>Transforming Leadership</strong>
          <small>Dr. Jasmina Hasanbegovic</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.key} href={`/${language}${item.href}`}>
            {t.meta.nav[item.key]}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-toggle" aria-label="Language selector">
          <Link className={language === "en" ? "active" : ""} href={`/en${pathWithoutLanguage}`}>
            EN
          </Link>
          <span>|</span>
          <Link className={language === "de" ? "active" : ""} href={`/de${pathWithoutLanguage}`}>
            DE
          </Link>
        </div>
        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Open navigation">
            <MenuIcon />
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${language}${item.href}`} onClick={closeMobileMenu}>
                {t.meta.nav[item.key]}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
