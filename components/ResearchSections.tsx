import Link from "next/link";
import type { ReactNode } from "react";
import type { InsightCardContent, ResearchContent } from "@/lib/researchContent";
import type { Language } from "@/lib/i18n";

export function CTAButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="research-cta" href={href}>
      {children}
    </Link>
  );
}

export function PageHero({ headline, body }: ResearchContent["intro"]) {
  return (
    <section className="research-hero">
      <div className="research-hero-copy">
        <p className="eyebrow">Research · Insights</p>
        <h1>{headline}</h1>
        <p>{body}</p>
      </div>
      <div className="research-hero-art" aria-hidden="true">
        <span className="paper-layer paper-one" />
        <span className="paper-layer paper-two" />
        <span className="paper-layer paper-three" />
        <span className="paper-axis axis-one" />
        <span className="paper-axis axis-two" />
      </div>
    </section>
  );
}

export function TopicTag({ children }: { children: ReactNode }) {
  return <span className="research-topic-tag">{children}</span>;
}

export function TopicsSection({ headline, items }: ResearchContent["topics"]) {
  return (
    <section className="research-section topics-section">
      <div className="research-heading">
        <p className="eyebrow">01</p>
        <h2>{headline}</h2>
      </div>
      <div className="research-topic-grid">
        {items.map((item) => (
          <TopicTag key={item}>{item}</TopicTag>
        ))}
      </div>
    </section>
  );
}

export function InsightCard({ card, index }: { card: InsightCardContent; index: number }) {
  return (
    <article className="insight-card">
      <div className="insight-cover" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <p className="eyebrow">{card.category}</p>
      <h3>{card.title}</h3>
      <p>{card.excerpt}</p>
      <Link href="#">{card.link}</Link>
    </article>
  );
}

export function EditorialGrid({ headline, cards }: ResearchContent["insights"]) {
  return (
    <section className="research-section insights-section">
      <div className="research-heading">
        <p className="eyebrow">02</p>
        <h2>{headline}</h2>
      </div>
      <div className="insight-grid">
        {cards.map((card, index) => (
          <InsightCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

export function InfoBlock({ headline, body, links }: ResearchContent["note"]) {
  return (
    <section className="research-section research-note-section">
      <div className="research-note">
        <div>
          <p className="eyebrow">03</p>
          <h2>{headline}</h2>
          <p>{body}</p>
        </div>
        <div className="research-note-links">
          {links.map((link) => (
            <Link href="#" key={link}>
              {link}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCTA({
  headline,
  body,
  cta,
  language
}: ResearchContent["closing"] & {
  language: Language;
}) {
  return (
    <section className="research-closing">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
