"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Language } from "@/lib/i18n";
import { content, type PageKey } from "@/lib/content";

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
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${language}${item.href}`}>
                {t.meta.nav[item.key]}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
