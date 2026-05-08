import type { Language } from "./i18n";

export type ApproachContent = {
  philosophy: {
    headline: string;
    body: string;
  };
  method: {
    label: string;
    headline: string;
    body: string;
    nodes: {
      consulting: string;
      coaching: string;
      coDesign: string;
      overlap: string;
    };
  };
  process: {
    headline: string;
    steps: Array<{
      label: string;
      title: string;
      body: string;
    }>;
  };
  foundations: {
    label: string;
    headline: string;
    blocks: Array<{
      title: string;
      body: string;
    }>;
    paragraph: string;
    concepts: string[];
  };
  closing: {
    headline: string;
    body: string;
    cta: string;
  };
};

export const approachContent: Record<Language, ApproachContent> = {
  en: {
    philosophy: {
      headline: "Transformation is choreography.",
      body:
        "Every organization has its own rhythm. We design interventions that align structure and culture — enabling leaders and employees to act with awareness and impact in complexity. Transformation is not a project. Transformation is practice. It unfolds through sequences of designed interactions — thoughtfully staged and continuously developed."
    },
    method: {
      label: "The 3C Difference",
      headline: "Not programs. Not interventions. Architectures.",
      body:
        "Most consultants implement initiatives. I design the conditions for lasting change. The 3C approach — Consulting, Coaching, Co-Design — is not three separate services. It is one integrated method, applied at the intersection of strategy, culture, and human development.",
      nodes: {
        consulting: "Consulting",
        coaching: "Coaching",
        coDesign: "Co-Design",
        overlap: "Transformational Architecture"
      }
    },
    process: {
      headline: "From insight to impact.",
      steps: [
        {
          label: "Step 1",
          title: "Kickstart & Diagnose",
          body: "Understanding the system, its rhythms and dynamics."
        },
        {
          label: "Step 2",
          title: "Create Excitement",
          body: "Co-designing the vision and mobilizing energy for change."
        },
        {
          label: "Step 3",
          title: "Build a Winning Strategy",
          body: "Designing the transformation architecture — modular, tailored, measurable."
        },
        {
          label: "Step 4",
          title: "Deliver Transformation at Scale",
          body: "Implementing, measuring impact, and sustaining the change."
        }
      ]
    },
    foundations: {
      label: "Standing on the shoulders of giants",
      headline: "Methodological foundations for transformation.",
      blocks: [
        {
          title: "Applied Science & Consulting",
          body: "Connecting theory and practice through proven methods and innovative approaches."
        },
        {
          title: "Design & Co-Creation",
          body: "Learning Design, Design Thinking, and Experience Design — where they create real impact."
        },
        {
          title: "International Management & Impact",
          body: "Linking knowledge, strategy, and execution — across cultures and industries."
        },
        {
          title: "20+ Years of Leadership Experience",
          body: "Senior HR leadership across strategy, organization, and transformation in the DACH region."
        }
      ],
      paragraph:
        "Our methodological foundation combines Design Thinking with insights from systems theory, learning research, and organizational development. Solutions are created iteratively and participatively – always anchored in the reality of managers and teams. Interventions for self-regulation create the prerequisites for sustainable growth.",
      concepts: ["Design Thinking", "Systems Theory", "Behavioral Change through Learning"]
    },
    closing: {
      headline: "Design the conditions for lasting transformation.",
      body: "Let’s explore how a tailored transformation architecture can support your organization’s next phase.",
      cta: "Start a conversation →"
    }
  },
  de: {
    philosophy: {
      headline: "Transformation ist Choreographie.",
      body:
        "Jede Organisation hat ihren eigenen Rhythmus. Wir entwerfen Interventionen, die Struktur und Kultur in Einklang bringen – damit Führungskräfte und Mitarbeitende in Komplexität bewusst und wirksam handeln können. Transformation ist kein Projekt. Transformation ist Praxis. Sie entfaltet sich in der Abfolge gestalteter Interaktionen – durchdacht, inszeniert und kontinuierlich weiterentwickelt."
    },
    method: {
      label: "Der 3C-Unterschied",
      headline: "Keine Programme. Keine Interventionen. Architekturen.",
      body:
        "Die meisten Berater setzen Maßnahmen um. Ich gestalte die Bedingungen für nachhaltigen Wandel. Der 3C-Ansatz – Consulting, Coaching, Co-Design – ist nicht eine Auswahl aus drei Leistungen. Es ist eine integrierte Methode, die an der Schnittstelle von Strategie, Kultur und menschlicher Entwicklung wirkt.",
      nodes: {
        consulting: "Consulting",
        coaching: "Coaching",
        coDesign: "Co-Design",
        overlap: "Transformationsarchitektur"
      }
    },
    process: {
      headline: "Von der Erkenntnis zur Wirkung.",
      steps: [
        {
          label: "Schritt 1",
          title: "Kickstart & Diagnose",
          body: "Das System, seine Rhythmen und Dynamiken verstehen."
        },
        {
          label: "Schritt 2",
          title: "Aufbruchsstimmung erzeugen",
          body: "Vision gemeinsam gestalten und Energie für Wandel mobilisieren."
        },
        {
          label: "Schritt 3",
          title: "Gewinnende Strategie entwickeln",
          body: "Transformationsarchitektur gestalten – modular, maßgeschneidert, messbar."
        },
        {
          label: "Schritt 4",
          title: "Transformation im System verankern",
          body: "Umsetzung, Wirkungsmessung und nachhaltige Veränderung."
        }
      ]
    },
    foundations: {
      label: "Auf den Schultern von Giganten",
      headline: "Methodische Grundlagen für Transformation.",
      blocks: [
        {
          title: "Angewandte Wissenschaft & Beratung",
          body: "Verbindung von Theorie und Praxis durch bewährte Methoden und innovative Ansätze."
        },
        {
          title: "Design & Co-Creation",
          body: "Learning Design, Design Thinking und Experience Design – dort, wo sie Wirkung entfalten."
        },
        {
          title: "Internationales Management & Impact",
          body: "Verknüpfung von Wissen, Strategie und Umsetzungskraft – über Kulturen und Branchen hinweg."
        },
        {
          title: "20+ Jahre Führungserfahrung",
          body: "Langjährige Praxis als HR-Führungskraft auf Top-Level in Strategie, Organisation und Transformation im DACH-Raum."
        }
      ],
      paragraph:
        "Unser methodisches Fundament verbindet Design Thinking mit Erkenntnissen aus Systemtheorie, Lernforschung und Organisationsentwicklung. Lösungen entstehen iterativ und partizipativ – stets verankert in der Realität von Führungskräften und Teams. Interventionen zur Selbstregulierung schaffen dabei die Voraussetzung für nachhaltiges Wachstum.",
      concepts: ["Design Thinking", "Systemtheorie", "Verhaltensänderung durch Lernen"]
    },
    closing: {
      headline: "Die Bedingungen für nachhaltige Transformation gestalten.",
      body:
        "Lassen Sie uns besprechen, wie eine maßgeschneiderte Transformationsarchitektur die nächste Phase Ihrer Organisation unterstützen kann.",
      cta: "Gespräch starten →"
    }
  }
};
