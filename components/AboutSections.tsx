import Link from "next/link";
import type { ReactNode } from "react";
import { AboutFigure } from "@/components/AboutMedia";
import type { AboutContent } from "@/lib/aboutContent";
import type { Language } from "@/lib/i18n";

const PORTRAIT_PRIMARY = "/images/JasnimaHasnagbegovic-1.png";
const PORTRAIT_SECONDARY = "/images/JasnimaHasnagbegovic-2.png";

export function CTAButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="about-cta" href={href}>
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, headline, body }: AboutContent["mission"]) {
  return (
    <section className="about-hero">
      <div className="about-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{headline}</h1>
        <div>
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <AboutFigure
        src={PORTRAIT_PRIMARY}
        alt="Dr. Jasmina Hasanbegović — professional portrait"
        className="about-figure about-portrait-frame"
        priority
        sizes="(max-width: 900px) 100vw, 38vw"
      />
    </section>
  );
}

export function ProfileCard({ profile }: { profile: AboutContent["profile"] }) {
  return (
    <section className="about-section profile-section">
      <div className="profile-grid">
        <AboutFigure
          src={PORTRAIT_SECONDARY}
          alt="Dr. Jasmina Hasanbegović — portrait on black"
          className="about-figure about-portrait-frame about-portrait-frame-dark"
          sizes="(max-width: 900px) 100vw, 34vw"
        />
        <div className="profile-copy">
          <p className="eyebrow">Profile</p>
          <h2>{profile.name}</h2>
          <p>{profile.intro}</p>
        </div>
      </div>
    </section>
  );
}

export function CredentialList({ items }: { items: string[] }) {
  return (
    <section className="about-section credentials-section">
      <div className="credential-grid">
        {items.map((item, index) => (
          <article className="credential-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CertificationTimeline({ headline, items }: AboutContent["certifications"]) {
  return (
    <section className="about-section certification-section">
      <div className="about-section-heading">
        <p className="eyebrow">Credentials</p>
        <h2>{headline}</h2>
      </div>
      <ol className="certification-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

export function AcademicBackgroundCards({ headline, items }: AboutContent["academic"]) {
  return (
    <section className="about-section academic-section">
      <div className="academic-wrap">
        <div className="about-section-heading">
          <p className="eyebrow">Academic</p>
          <h2>{headline}</h2>
        </div>
        <div className="academic-grid">
          {items.map((item) => (
            <article className="academic-card" key={item}>
              <span />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialStorySection({ headline, body, quote }: AboutContent["story"]) {
  return (
    <section className="about-section story-section has-atmosphere atmosphere--aurora">
      <div className="story-grid">
        <div>
          <p className="eyebrow">Story</p>
          <h2>{headline}</h2>
          <p>{body}</p>
        </div>
        <blockquote>{quote}</blockquote>
      </div>
    </section>
  );
}

export function ValuesGrid({ headline, body, items }: AboutContent["values"]) {
  return (
    <section className="about-section values-section has-atmosphere atmosphere--ink">
      <div className="values-heading">
        <p className="eyebrow">Values</p>
        <h2>{headline}</h2>
        <p>{body}</p>
      </div>
      <div className="values-flower">
        {items.map((item, index) => (
          <article className="value-petal" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function NetworkSection({ headline, body, stat, statLabel, tags }: AboutContent["network"]) {
  return (
    <section className="about-section network-section has-atmosphere atmosphere--diagram">
      <div className="network-grid">
        <div>
          <p className="eyebrow">Network</p>
          <h2>{headline}</h2>
          <p>{body}</p>
          <div className="network-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="network-stat">
          <strong>{stat}</strong>
          <span>{statLabel}</span>
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
}: AboutContent["closing"] & {
  language: Language;
}) {
  return (
    <section className="about-closing has-atmosphere atmosphere--bloom">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
