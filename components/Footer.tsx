import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieBanner";
import type { Language } from "@/lib/i18n";
import { content } from "@/lib/content";

export function Footer({ language }: { language: Language }) {
  const footer = content[language].meta.footer;

  return (
    <footer className="site-footer">
      <div>
        <strong>3C Transforming Leadership</strong>
        <p>Dr. Jasmina Hasanbegovic</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href={`/${language}/imprint`}>{footer.imprint}</Link>
        <Link href={`/${language}/privacy-policy`}>{footer.privacy}</Link>
        <Link href={`/${language}/cookie-policy`}>{footer.cookies}</Link>
        <CookieSettingsLink language={language} />
      </nav>
    </footer>
  );
}
