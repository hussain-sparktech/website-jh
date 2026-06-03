import Link from "next/link";
import type { ReactNode } from "react";
import { HeroVisual } from "@/components/HeroVisual";
import type { HomeService } from "@/lib/homeContent";
import type { Language } from "@/lib/i18n";
import { siteImagery } from "@/lib/siteImagery";

export function CTAButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link className={`home-cta ${variant}`} href={href}>
      {children}
    </Link>
  );
}

export function SectionHeader({
  label,
  title,
  align = "split"
}: {
  label?: string;
  title: string;
  align?: "split" | "center";
}) {
  return (
    <div className={`home-section-header ${align}${label ? "" : " no-label"}`}>
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

export function HomeHero({
  content,
  language
}: {
  content: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  language: Language;
}) {
  return (
    <section className="home-hero has-atmosphere atmosphere--aurora has-hero-panel">
      <div className="home-hero-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.headline}</h1>
        <p>{content.subheadline}</p>
        <div className="home-hero-actions">
          <CTAButton href={`/${language}/contact`}>{content.primaryCta}</CTAButton>
          <CTAButton href={`/${language}/services`} variant="secondary">
            {content.secondaryCta}
          </CTAButton>
        </div>
      </div>
      <HeroVisual
        src={siteImagery.aurora}
        alt="Aurora light in the night sky — vision and transformation"
        focus="48% 36%"
        priority
        className="home-hero-visual home-hero-visual-aurora"
      />
    </section>
  );
}

export function ValueProposition({
  label,
  headline,
  body,
  quote
}: {
  label: string;
  headline: string;
  body: string[];
  quote: string;
}) {
  return (
    <section className="home-section value-proposition has-atmosphere atmosphere--form">
      <div className="value-grid">
        <SectionHeader label={label} title={headline} />
        <div className="value-body">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <blockquote>{quote}</blockquote>
      </div>
    </section>
  );
}

export function HowIWork({
  headline,
  body,
  principles
}: {
  headline: string;
  body: string;
  principles: string[];
}) {
  return (
    <section className="home-section how-work has-atmosphere atmosphere--flow">
      <div className="architecture-lines" aria-hidden="true" />
      <div className="work-grid">
        <div>
          <SectionHeader title={headline} />
          <p className="work-copy">{body}</p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle}>
              <h3>{principle}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  service,
  language
}: {
  service: HomeService;
  language: Language;
}) {
  return (
    <article className={`service-card accent-${service.accent}`}>
      <span className="service-accent" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href={`/${language}/services`}>{service.link}</Link>
    </article>
  );
}

export function ServicesTeaser({
  headline,
  cards,
  language
}: {
  headline: string;
  cards: HomeService[];
  language: Language;
}) {
  return (
    <section className="home-section services-teaser">
      <SectionHeader title={headline} align="center" />
      <div className="service-grid">
        {cards.map((service) => (
          <ServiceCard key={service.title} service={service} language={language} />
        ))}
      </div>
    </section>
  );
}

export function PillTag({ children }: { children: ReactNode }) {
  return <span className="pill-tag">{children}</span>;
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-block">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Credibility({
  headline,
  body,
  sectors,
  stats
}: {
  headline: string;
  body: string;
  sectors: string[];
  stats: Array<{ value: string; label: string }>;
}) {
  return (
    <section className="home-section credibility-section has-atmosphere atmosphere--artomat">
      <div className="credibility-grid">
        <div>
          <SectionHeader title={headline} />
          <p className="credibility-copy">{body}</p>
          <div className="pill-row">
            {sectors.map((sector) => (
              <PillTag key={sector}>{sector}</PillTag>
            ))}
          </div>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeClosingCta({
  headline,
  body,
  cta,
  language
}: {
  headline: string;
  body: string;
  cta: string;
  language: Language;
}) {
  return (
    <section className="home-closing has-atmosphere atmosphere--rainbow">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
