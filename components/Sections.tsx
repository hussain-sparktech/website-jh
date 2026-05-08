import Link from "next/link";
import type { ReactNode } from "react";
import type { Language } from "@/lib/i18n";
import { content } from "@/lib/content";

type Card = {
  title: string;
  text: string;
  number?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  compact = false
}: {
  eyebrow: string;
  title: string;
  lead: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "page-hero compact" : "page-hero"}>
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <span className="movement-line line-one" />
        <span className="movement-line line-two" />
        <span className="movement-line line-three" />
        <span className="flower-mark">✦</span>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "navy" | "sand";
}) {
  return (
    <section className={`content-section ${tone}`}>
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function CardGrid({
  cards,
  variant = "standard"
}: {
  cards: Card[];
  variant?: "standard" | "steps" | "articles";
}) {
  return (
    <div className={`card-grid ${variant}`}>
      {cards.map((card) => (
        <article className="info-card" key={card.title}>
          {card.number ? <span className="card-number">{card.number}</span> : null}
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

export function TextPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-panel">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function ClosingCta({ language }: { language: Language }) {
  const t = content[language];

  return (
    <section className="closing-cta">
      <p className="eyebrow">3C</p>
      <h2>{language === "en" ? "Ready to shape the next movement?" : "Bereit für den nächsten Schritt?"}</h2>
      <Link className="button" href={`/${language}/contact`}>
        {t.meta.cta}
      </Link>
    </section>
  );
}
