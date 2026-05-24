"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import type { ArchiveItemContent, ArchiveYearGroup, HighlightContent, ResearchContent, ResearchTopicContent } from "@/lib/researchContent";
import type { Language } from "@/lib/i18n";

function applyArchiveSearch(input: HTMLInputElement) {
  const archive = input.closest<HTMLElement>(".archive-shell");
  if (!archive) {
    return;
  }

  const query = input.value.trim().toLowerCase();
  const panels = archive.querySelectorAll<HTMLElement>(".archive-panel");

  panels.forEach((panel) => {
    let visibleGroups = 0;
    const groups = panel.querySelectorAll<HTMLElement>("[data-year-group]");

    groups.forEach((group) => {
      let visibleItems = 0;
      const items = group.querySelectorAll<HTMLElement>(".archive-item");

      items.forEach((item) => {
        const matches = !query || (item.dataset.search ?? "").includes(query);
        item.classList.toggle("is-hidden-by-search", !matches);
        if (matches) {
          visibleItems += 1;
        }
      });

      group.classList.toggle("is-hidden-by-search", visibleItems === 0);
      if (visibleItems > 0) {
        visibleGroups += 1;
      }
    });

    const empty = panel.querySelector<HTMLElement>(".archive-empty");
    if (empty) {
      empty.classList.toggle("is-hidden-by-search", visibleGroups > 0);
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

export function ResearchHero({ headline, body }: ResearchContent["intro"]) {
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

export function TopicCard({ item }: { item: ResearchTopicContent }) {
  return (
    <article className="research-topic-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

export function TopicsSection({ headline, intro, items }: ResearchContent["topics"]) {
  return (
    <section className="research-section topics-section">
      <div className="research-heading">
        <p className="eyebrow">01</p>
        <div>
          <h2>{headline}</h2>
          <p>{intro}</p>
        </div>
      </div>
      <div className="research-topic-grid">
        {items.map((item) => (
          <TopicCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export function HighlightCard({ card }: { card: HighlightContent }) {
  return (
    <article className="highlight-card">
      <div className="highlight-meta">
        <span>{card.year}</span>
        <span>{card.type}</span>
      </div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </article>
  );
}

export function SelectedHighlightsSection({ headline, cards }: ResearchContent["highlights"]) {
  return (
    <section className="research-section highlights-section">
      <div className="research-heading compact-heading">
        <p className="eyebrow">02</p>
        <h2>{headline}</h2>
      </div>
      <div className="highlight-grid">
        {cards.map((card) => (
          <HighlightCard key={`${card.year}-${card.title}`} card={card} />
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

export function ArchiveTabs({
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

export function ArchiveItem({ item, year, openPublication }: { item: ArchiveItemContent; year: string; openPublication: string }) {
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

export function YearAccordion({
  group,
  defaultOpen,
  itemSingular,
  itemPlural,
  openPublication
}: {
  group: ArchiveYearGroup;
  defaultOpen: boolean;
  itemSingular: string;
  itemPlural: string;
  openPublication: string;
}) {
  return (
    <details className="year-accordion" data-year-group open={defaultOpen}>
      <summary>
        <span>{group.year}</span>
        <small>
          {group.items.length} {group.items.length === 1 ? itemSingular : itemPlural}
        </small>
      </summary>
      <div className="year-items">
        {group.items.map((item) => (
          <ArchiveItem key={`${group.year}-${item.title}`} item={item} year={group.year} openPublication={openPublication} />
        ))}
      </div>
    </details>
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
  function renderYearGroups(groups: ArchiveYearGroup[], panel: string) {
    if (groups.length === 0) {
      return <p className="archive-empty">{content.noResults}</p>;
    }

    return (
      <>
        {groups.map((group, index) => (
          <YearAccordion
            key={`${panel}-${group.year}`}
            group={group}
            defaultOpen={index === 0}
            itemSingular={content.itemSingular}
            itemPlural={content.itemPlural}
            openPublication={content.openPublication}
          />
        ))}
        <p className="archive-empty is-hidden-by-search">
          {content.noResults}
        </p>
      </>
    );
  }

  return (
    <section className="research-section archive-section">
      <div className="research-heading archive-heading">
        <p className="eyebrow">03</p>
        <div>
          <h2>{content.headline}</h2>
          <p>{content.body}</p>
        </div>
      </div>
      <div className="archive-shell">
        <input className="archive-tab-input" type="radio" name="research-archive-tab" id="archive-tab-publications" defaultChecked />
        <input className="archive-tab-input" type="radio" name="research-archive-tab" id="archive-tab-presentations" />
        <div className="archive-controls">
          <ArchiveTabs labels={content.tabs} />
          <SearchInput placeholder={content.searchPlaceholder} />
        </div>
        <div className="archive-panels">
          <div className="archive-years archive-panel publications-panel" id="archive-panel" role="tabpanel">
            {renderYearGroups(publications, "publications")}
          </div>
          <div className="archive-years archive-panel presentations-panel" role="tabpanel">
            {renderYearGroups(presentations, "presentations")}
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
                    var visibleGroups = 0;
                    panel.querySelectorAll("[data-year-group]").forEach(function (group) {
                      var visibleItems = 0;
                      group.querySelectorAll(".archive-item").forEach(function (item) {
                        var matches = !query || (item.getAttribute("data-search") || "").indexOf(query) !== -1;
                        item.classList.toggle("is-hidden-by-search", !matches);
                        if (matches) visibleItems += 1;
                      });
                      group.classList.toggle("is-hidden-by-search", visibleItems === 0);
                      if (visibleItems > 0) visibleGroups += 1;
                    });
                    var empty = panel.querySelector(".archive-empty");
                    if (empty) empty.classList.toggle("is-hidden-by-search", visibleGroups > 0);
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
