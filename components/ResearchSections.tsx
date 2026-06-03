"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { HeroVisual } from "@/components/HeroVisual";
import type { ArchiveItemContent, ArchiveYearGroup, HighlightContent, ResearchContent } from "@/lib/researchContent";
import type { Language } from "@/lib/i18n";
import { siteImagery } from "@/lib/siteImagery";

function applyArchiveSearch(input: HTMLInputElement) {
  const archive = input.closest<HTMLElement>(".archive-shell");
  if (!archive) {
    return;
  }

  const query = input.value.trim().toLowerCase();
  const panels = archive.querySelectorAll<HTMLElement>(".archive-panel");

  panels.forEach((panel) => {
    let visibleItems = 0;
    const items = panel.querySelectorAll<HTMLElement>(".archive-item");

    items.forEach((item) => {
      const matches = !query || (item.dataset.search ?? "").includes(query);
      item.classList.toggle("is-hidden-by-search", !matches);
      if (matches) {
        visibleItems += 1;
      }
    });

    const empty = panel.querySelector<HTMLElement>(".archive-empty");
    if (empty) {
      empty.classList.toggle("is-hidden-by-search", visibleItems > 0);
    }
  });
}

export function CTAButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="research-cta" href={href}>
      {children}
    </Link>
  );
}

export function ResearchHero({ eyebrow, headline, body }: ResearchContent["intro"]) {
  return (
    <section className="research-hero has-atmosphere atmosphere--iris has-hero-panel">
      <div className="research-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{headline}</h1>
        <p>{body}</p>
      </div>
      <HeroVisual
        src={siteImagery.eye}
        alt="Close view of the eye — insight and perception"
        focus="62% 40%"
        className="research-hero-art"
      >
        <span className="paper-axis axis-one" />
      </HeroVisual>
    </section>
  );
}

export function HighlightCard({ card, index, linkLabel }: { card: HighlightContent; index: number; linkLabel: string }) {
  return (
    <article className={`highlight-card highlight-card-${index + 1}`}>
      <div className="highlight-card-content">
        <div className="highlight-meta">
          <span>{card.year}</span>
          <span>{card.type}</span>
        </div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        {card.url ? (
          <Link href={card.url} target="_blank" rel="noreferrer">
            {linkLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function SelectedHighlightsSection({
  headline,
  cards,
  linkLabel
}: ResearchContent["highlights"] & {
  linkLabel: string;
}) {
  return (
    <section className="research-section highlights-section">
      <div className="research-heading compact-heading">
        <p className="eyebrow">01</p>
        <h2>{headline}</h2>
      </div>
      <div className="highlight-grid">
        {cards.map((card, index) => (
          <HighlightCard key={`${card.year}-${card.title}`} card={card} index={index} linkLabel={linkLabel} />
        ))}
      </div>
    </section>
  );
}

export function SearchInput({
  placeholder
}: {
  placeholder: string;
}) {
  function handleInput(event: FormEvent<HTMLInputElement>) {
    applyArchiveSearch(event.currentTarget);
  }

  return (
    <label className="archive-search">
      <span className="sr-only">{placeholder}</span>
      <input className="archive-search-input" type="search" placeholder={placeholder} onInput={handleInput} />
    </label>
  );
}

export function ResearchTabs({
  labels
}: {
  labels: ResearchContent["archive"]["tabs"];
}) {
  return (
    <div className="archive-tabs" role="tablist">
      <label
        htmlFor="archive-tab-publications"
        role="tab"
        aria-controls="archive-panel"
      >
        {labels.publications}
      </label>
      <label
        htmlFor="archive-tab-presentations"
        role="tab"
        aria-controls="archive-panel"
      >
        {labels.presentations}
      </label>
    </div>
  );
}

export function ResearchListItem({ item, year, openPublication }: { item: ArchiveItemContent; year: string; openPublication: string }) {
  const searchableText = [year, item.authors, item.title, item.details].join(" ").toLowerCase();

  return (
    <article className="archive-item" data-search={searchableText}>
      <div className="archive-item-year">{year}</div>
      <div className="archive-item-body">
        <p className="archive-authors">{item.authors}</p>
        <h3>{item.title}</h3>
        <p>{item.details}</p>
        {item.url ? (
          <Link href={item.url} target="_blank" rel="noreferrer">
            {openPublication}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function flattenArchive(groups: ArchiveYearGroup[]) {
  return groups
    .flatMap((group) => group.items.map((item) => ({ year: group.year, item })))
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function ResearchList({
  groups,
  openPublication,
  noResults
}: {
  groups: ArchiveYearGroup[];
  openPublication: string;
  noResults: string;
}) {
  const items = flattenArchive(groups);

  if (items.length === 0) {
    return <p className="archive-empty">{noResults}</p>;
  }

  return (
    <div className="archive-list">
      {items.map(({ item, year }) => (
        <ResearchListItem key={`${year}-${item.title}-${item.details}`} item={item} year={year} openPublication={openPublication} />
      ))}
      <p className="archive-empty is-hidden-by-search">
        {noResults}
      </p>
    </div>
  );
}

export function ResearchArchive({
  content,
  publications,
  presentations
}: {
  content: ResearchContent["archive"];
  publications: ArchiveYearGroup[];
  presentations: ArchiveYearGroup[];
}) {
  return (
    <section className="research-section archive-section">
      <div className="research-heading archive-heading">
        <p className="eyebrow">02</p>
        <div>
          <h2>{content.headline}</h2>
          <p>{content.body}</p>
        </div>
      </div>
      <div className="archive-shell">
        <input className="archive-tab-input" type="radio" name="research-archive-tab" id="archive-tab-publications" defaultChecked />
        <input className="archive-tab-input" type="radio" name="research-archive-tab" id="archive-tab-presentations" />
        <div className="archive-controls">
          <ResearchTabs labels={content.tabs} />
          <SearchInput placeholder={content.searchPlaceholder} />
        </div>
        <div className="archive-panels">
          <div className="archive-panel publications-panel" id="archive-panel" role="tabpanel">
            <ResearchList groups={publications} openPublication={content.openPublication} noResults={content.noResults} />
          </div>
          <div className="archive-panel presentations-panel" role="tabpanel">
            <ResearchList groups={presentations} openPublication={content.openPublication} noResults={content.noResults} />
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function filterArchive(input) {
                  var archive = input.closest(".archive-shell");
                  if (!archive) return;
                  var query = input.value.trim().toLowerCase();
                  archive.querySelectorAll(".archive-panel").forEach(function (panel) {
                    var visibleItems = 0;
                    panel.querySelectorAll(".archive-item").forEach(function (item) {
                      var matches = !query || (item.getAttribute("data-search") || "").indexOf(query) !== -1;
                      item.classList.toggle("is-hidden-by-search", !matches);
                      if (matches) visibleItems += 1;
                    });
                    var empty = panel.querySelector(".archive-empty");
                    if (empty) empty.classList.toggle("is-hidden-by-search", visibleItems > 0);
                  });
                }
                if (!window.__researchArchiveSearchBound) {
                  window.__researchArchiveSearchBound = true;
                  ["input", "search"].forEach(function (eventName) {
                    document.addEventListener(eventName, function (event) {
                      if (event.target && event.target.matches(".archive-search-input")) {
                        filterArchive(event.target);
                      }
                    });
                  });
                }
              })();
            `
          }}
        />
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
    <section className="research-closing has-atmosphere atmosphere--iris">
      <div>
        <p className="eyebrow">3C Transforming Leadership</p>
        <h2>{headline}</h2>
        <p>{body}</p>
        <CTAButton href={`/${language}/contact`}>{cta}</CTAButton>
      </div>
    </section>
  );
}
