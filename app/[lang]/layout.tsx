import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { isLanguage, type Language } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }];
}

export default function LanguageLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const language = params.lang as Language;

  return (
    <>
      <Header language={language} />
      <main>{children}</main>
      <Footer language={language} />
    </>
  );
}
