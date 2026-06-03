import Link from "next/link";
import type { ReactNode } from "react";
import { HeroVisual } from "@/components/HeroVisual";
import type { ServiceDetail } from "@/lib/servicesContent";
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
    <Link className={`services-cta ${variant}`} href={href}>
      {children}
    </Link>
  );
}

export function PageHero({
  headline,
  subheadline,
  body,
  quote
}: {
  headline: string;
  subheadline: string;
  body: string;
  quote: string;
}) {
  return (
    <section className="services-hero has-atmosphere atmosphere--flare has-hero-panel">
      <div className="services-hero-copy">
        <p className="eyebrow">{subheadline}</p>
        <h1>{headline}</h1>
        <p>{body}</p>
      </div>
      <blockquote>{quote}</blockquote>
      <HeroVisual
        src={siteImagery.flare}
        alt="Prismatic light — creative transformation of services"
        focus="35% center"
        className="services-hero-art"
      >
        <span className="services-arc arc-one" />
        <span className="services-path path-one" />
      </HeroVisual>
    </section>
  );
}

export function ServiceList({ items }: { items: string[] }) {
  return (
    <ol className="service-detail-list">
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export function BenefitTags({ tags }: { tags: string[] }) {
  return (
    <div className="service-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export function ServiceDetailSection({
  service,
  language
}: {
  service: ServiceDetail;
  language: Language;
}) {
  return (
    <section className={`service-detail-section accent-${service.accent}`}>
      <div className="service-detail-grid">
        <div className="service-detail-main">
          <p className="eyebrow">{service.eyebrow}</p>
          <h2>{service.claim}</h2>
          <p>{service.description}</p>
          <CTAButton href={`/${language}/contact`}>{service.cta}</CTAButton>
        </div>
        <div className="service-detail-panel">
          <h3>{service.listLabel}</h3>
          <ServiceList items={service.items} />
        </div>
        <aside className="service-aside">
          <h3>{service.asideLabel}</h3>
          {service.asideText ? <p>{service.asideText}</p> : null}
          {service.asideTags ? <BenefitTags tags={service.asideTags} /> : null}
        </aside>
      </div>
    </section>
  );
}

export function ClosingCTA({
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
    <section className="services-closing has-atmosphere atmosphere--magenta">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
