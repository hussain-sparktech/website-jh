import Link from "next/link";
import type { ReactNode } from "react";
import type { ApproachContent } from "@/lib/approachContent";
import type { Language } from "@/lib/i18n";

export function CTAButton({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="approach-cta" href={href}>
      {children}
    </Link>
  );
}

export function PageHero({ headline, body }: ApproachContent["philosophy"]) {
  return (
    <section className="approach-hero">
      <div className="approach-hero-copy">
        <p className="eyebrow">3C Transforming Leadership</p>
        <h1>{headline}</h1>
        <p>{body}</p>
      </div>
      <div className="approach-hero-art" aria-hidden="true">
        <span className="rhythm-line rhythm-one" />
        <span className="rhythm-line rhythm-two" />
        <span className="rhythm-line rhythm-three" />
        <span className="rhythm-orbit orbit-one" />
        <span className="rhythm-orbit orbit-two" />
      </div>
    </section>
  );
}

export function EditorialSection({
  label,
  headline,
  body,
  children
}: {
  label: string;
  headline: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <section className="approach-section method-section">
      <div className="method-grid">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>{headline}</h2>
          <p>{body}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function ThreeCMethodDiagram({
  nodes
}: {
  nodes: ApproachContent["method"]["nodes"];
}) {
  return (
    <div className="three-c-diagram" aria-label={`${nodes.consulting}, ${nodes.coaching}, ${nodes.coDesign}`}>
      <div className="venn-circle consulting">{nodes.consulting}</div>
      <div className="venn-circle coaching">{nodes.coaching}</div>
      <div className="venn-circle codesign">{nodes.coDesign}</div>
      <div className="venn-overlap">{nodes.overlap}</div>
    </div>
  );
}

export function ProcessTimeline({
  headline,
  steps
}: ApproachContent["process"]) {
  return (
    <section className="approach-section process-section">
      <div className="process-heading">
        <h2>{headline}</h2>
      </div>
      <div className="process-timeline">
        {steps.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span className="step-marker">{String(index + 1).padStart(2, "0")}</span>
            <p className="eyebrow">{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FoundationCard({
  title,
  body,
  index
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <article className="foundation-card">
      <span className="foundation-marker">{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export function ConceptGraphic({ concepts }: { concepts: string[] }) {
  return (
    <div className="concept-graphic">
      {concepts.map((concept) => (
        <span key={concept}>{concept}</span>
      ))}
    </div>
  );
}

export function FoundationsSection({
  label,
  headline,
  blocks,
  paragraph,
  concepts
}: ApproachContent["foundations"]) {
  return (
    <section className="approach-section foundations-section">
      <div className="foundations-wrap">
        <div className="foundations-heading">
          <p className="eyebrow">{label}</p>
          <h2>{headline}</h2>
        </div>
        <div className="foundation-grid">
          {blocks.map((block, index) => (
            <FoundationCard key={block.title} {...block} index={index} />
          ))}
        </div>
        <div className="foundation-note">
          <p>{paragraph}</p>
          <ConceptGraphic concepts={concepts} />
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
}: ApproachContent["closing"] & {
  language: Language;
}) {
  return (
    <section className="approach-closing">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
