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
    culturalElements: string[];
    phases: string[];
    reflection: string;
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
    note?: string;
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
        "The 3C approach — Consulting, Coaching, Co-Design — is one integrated method, applied at the intersection of strategy, culture, and human development.",
      nodes: {
        consulting: "Consulting",
        coaching: "Coaching",
        coDesign: "Co-Design",
        overlap: "Transformational Architecture"
      },
      culturalElements: [
        "Empower employees",
        "Enhance leaders",
        "Create infrastructure",
        "Co-design learning",
        "Measure goals and results"
      ],
      phases: [
        "Kickstart and initiate",
        "Diagnosis",
        "Create excitement and position",
        "Build a winning strategy",
        "Deliver transfer"
      ],
      reflection: "Reflection as a meta process"
    },
    process: {
      headline: "From insight to impact.",
      steps: [
        {
          label: "01",
          title: "Kickstart & Diagnose",
          body: "Understanding the system, its rhythms and dynamics."
        },
        {
          label: "02",
          title: "Create Excitement",
          body: "Co-designing the vision and mobilizing energy for change."
        },
        {
          label: "03",
          title: "Build a Winning Strategy",
          body: "Designing the transformation architecture — modular, tailored, measurable."
        },
        {
          label: "04",
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
          title: "International & Interdisciplinary",
          body: "Linking knowledge, strategy, and execution from different disciplines across cultures and industries."
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
        "Der 3C-Ansatz – Consulting, Coaching, Co-Design – ist eine integrierte Methode, die an der Schnittstelle von Strategie, Kultur und menschlicher Entwicklung wirkt.",
      nodes: {
        consulting: "Consulting",
        coaching: "Coaching",
        coDesign: "Co-Design",
        overlap: "Transformational Architecture"
      },
      culturalElements: [
        "Empower employees",
        "Enhance leaders",
        "Create infrastructure",
        "Co-design learning",
        "Measure goals and results"
      ],
      phases: [
        "Kickstart and initiate",
        "Diagnosis",
        "Create excitement and position",
        "Build a winning strategy",
        "Deliver transfer"
      ],
      reflection: "Reflection as a meta process"
    },
    process: {
      headline: "Von der Erkenntnis zur Wirkung.",
      steps: [
        {
          label: "01",
          title: "Kickstart & Initiierung",
          body: "Das System, seine Rhythmen und Dynamiken verstehen."
        },
        {
          label: "02",
          title: "Aufbruchsstimmung erzeugen",
          body: "Vision gemeinsam gestalten und Energie für Wandel mobilisieren."
        },
        {
          label: "03",
          title: "Gewinnende Strategie entwickeln",
          body: "Transformationsarchitektur für die Strategie gestalten – modular, maßgeschneidert, messbar."
        },
        {
          label: "04",
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
          title: "International & Interdisciplinary",
          body: "Verknüpfung von Wissen, Strategie und Umsetzungskraft aus unterschiedlichen Disziplinen über Kulturen und Branchen hinweg."
        },
        {
          title: "20+ Jahre Führungserfahrung",
          body: "Langjährige Praxis als HR-Führungskraft auf Top-Level in Strategie, Organisation und Transformation im DACH-Raum."
        }
      ],
      note:
        "Internationale Kooperationspartner aus unterschiedlichsten Disziplinen, Sektoren, Kulturen und Ländern.",
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
