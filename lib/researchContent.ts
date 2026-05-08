import type { Language } from "./i18n";

export type InsightCardContent = {
  category: string;
  title: string;
  excerpt: string;
  link: string;
};

export type ResearchContent = {
  intro: {
    headline: string;
    body: string;
  };
  topics: {
    headline: string;
    items: string[];
  };
  insights: {
    headline: string;
    cards: InsightCardContent[];
  };
  note: {
    headline: string;
    body: string;
    links: string[];
  };
  closing: {
    headline: string;
    body: string;
    cta: string;
  };
};

export const researchContent: Record<Language, ResearchContent> = {
  en: {
    intro: {
      headline: "Research & Insights",
      body:
        "Our work builds on 20+ years of research and practice in leadership, learning, and transformation. Explore selected publications, articles, and speaking engagements."
    },
    topics: {
      headline: "Topics",
      items: [
        "Design-based Research",
        "Sustainable Behaviour Change",
        "Systems Theory",
        "Leadership & Learning Culture",
        "Interdisciplinary Approaches"
      ]
    },
    insights: {
      headline: "Selected publications, articles, and talks",
      cards: [
        {
          category: "Publication",
          title: "Strategic HR Business Partnering",
          excerpt:
            "Exploring how HR can become a strategic driver of organizational learning, leadership, and transformation.",
          link: "Read more →"
        },
        {
          category: "Insight",
          title: "Learning Culture as Transformation Practice",
          excerpt:
            "How organizations can create spaces where new behaviors, leadership practices, and cultural patterns can emerge.",
          link: "Read more →"
        },
        {
          category: "Talk",
          title: "Leadership in Complexity",
          excerpt:
            "Reflections on leadership presence, systemic thinking, and the human side of organizational change.",
          link: "Read more →"
        },
        {
          category: "Article",
          title: "Designing Transformation Architectures",
          excerpt:
            "Why sustainable transformation requires more than isolated initiatives — it requires designed conditions for change.",
          link: "Read more →"
        }
      ]
    },
    note: {
      headline: "Speaking engagements and publications",
      body:
        "Selected speaking engagements and publications will be added here. This section can later link to detailed pages or external resources.",
      links: ["Speaking engagements →", "Publications →"]
    },
    closing: {
      headline: "Discover research that informs transformation.",
      body:
        "Explore how research, learning, and leadership practice can shape meaningful organizational change.",
      cta: "Start a conversation →"
    }
  },
  de: {
    intro: {
      headline: "Forschung & Einblicke",
      body:
        "Unsere Arbeit basiert auf über 20 Jahren Forschung und Praxis in Führung, Lernen und Transformation. Ausgewählte Publikationen, Artikel und Vortragsauftritte."
    },
    topics: {
      headline: "Themen",
      items: [
        "Design-based Research",
        "Nachhaltige Verhaltensänderung",
        "Systemtheorie",
        "Führung & Lernkultur",
        "Interdisziplinäre Ansätze"
      ]
    },
    insights: {
      headline: "Ausgewählte Publikationen, Artikel und Vorträge",
      cards: [
        {
          category: "Publikation",
          title: "Strategisches HR Business Partnering",
          excerpt:
            "Wie HR zu einem strategischen Treiber für organisationales Lernen, Führung und Transformation werden kann.",
          link: "Mehr erfahren →"
        },
        {
          category: "Einblick",
          title: "Lernkultur als Transformationspraxis",
          excerpt:
            "Wie Organisationen Räume schaffen können, in denen neue Verhaltensweisen, Führungspraktiken und kulturelle Muster entstehen.",
          link: "Mehr erfahren →"
        },
        {
          category: "Vortrag",
          title: "Führung in Komplexität",
          excerpt:
            "Reflexionen über Führungspräsenz, systemisches Denken und die menschliche Seite organisationaler Veränderung.",
          link: "Mehr erfahren →"
        },
        {
          category: "Artikel",
          title: "Transformationsarchitekturen gestalten",
          excerpt:
            "Warum nachhaltige Transformation mehr braucht als einzelne Maßnahmen — sie braucht gestaltete Bedingungen für Veränderung.",
          link: "Mehr erfahren →"
        }
      ]
    },
    note: {
      headline: "Vorträge und Publikationen",
      body:
        "Ausgewählte Vorträge und Publikationen werden hier ergänzt. Dieser Bereich kann später auf Detailseiten oder externe Ressourcen verlinken.",
      links: ["Vorträge →", "Publikationen →"]
    },
    closing: {
      headline: "Forschung entdecken, die Transformation ermöglicht.",
      body:
        "Entdecken Sie, wie Forschung, Lernen und Führungspraxis bedeutsamen organisationalen Wandel gestalten können.",
      cta: "Gespräch starten →"
    }
  }
};
