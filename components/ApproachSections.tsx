import Link from "next/link";
import type { ReactNode } from "react";
import { HeroVisual } from "@/components/HeroVisual";
import type { ApproachContent } from "@/lib/approachContent";
import type { Language } from "@/lib/i18n";
import { siteImagery } from "@/lib/siteImagery";

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
    <section className="approach-hero has-atmosphere atmosphere--flow has-hero-panel">
      <div className="approach-hero-copy">
        <p className="eyebrow">3C Transforming Leadership</p>
        <h1>{headline}</h1>
        <p>{body}</p>
      </div>
      <HeroVisual
        src={siteImagery.waves}
        alt="Flowing teal light — choreography and transformation in motion"
        focus="center 52%"
        className="approach-hero-art"
      >
        <span className="rhythm-line rhythm-one" />
        <span className="rhythm-line rhythm-two" />
        <span className="rhythm-orbit orbit-one" />
      </HeroVisual>
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

export function ThreeCMethodDiagram({ method }: { method: ApproachContent["method"] }) {
  const nodes = [method.nodes.consulting, method.nodes.coaching, method.nodes.coDesign];

  return (
    <div className="three-c-diagram" aria-label={`${nodes.join(", ")}. ${method.reflection}`}>
      <div className="method-reflection">{method.reflection}</div>
      <div className="method-core">
        {nodes.map((node) => (
          <span key={node}>{node}</span>
        ))}
        <strong>{method.nodes.overlap}</strong>
      </div>
      <div className="method-layer phase-layer">
        {method.phases.map((phase, index) => (
          <span key={phase}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            {phase}
          </span>
        ))}
      </div>
      <div className="method-layer cultural-layer">
        {method.culturalElements.map((element) => (
          <span key={element}>{element}</span>
        ))}
      </div>
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
            <span className="step-marker">{step.label || String(index + 1).padStart(2, "0")}</span>
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
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="foundation-card">
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
  note,
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
          {blocks.map((block) => (
            <FoundationCard key={block.title} {...block} />
          ))}
        </div>
        <div className="foundation-note">
          <div>
            {note ? <p className="foundation-collaboration-note">{note}</p> : null}
            <p>{paragraph}</p>
          </div>
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
    <section className="approach-closing has-atmosphere atmosphere--urban">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
