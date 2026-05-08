import type { Language } from "./i18n";

export type ServiceAccent = "blue" | "teal" | "gold";

export type ServiceDetail = {
  eyebrow: string;
  title: string;
  claim: string;
  description: string;
  listLabel: string;
  items: string[];
  asideLabel: string;
  asideText?: string;
  asideTags?: string[];
  cta: string;
  accent: ServiceAccent;
};

export type ServicesContent = {
  intro: {
    headline: string;
    subheadline: string;
    body: string;
    quote: string;
  };
  services: ServiceDetail[];
  closing: {
    headline: string;
    body: string;
    cta: string;
  };
};

export const servicesContent: Record<Language, ServicesContent> = {
  en: {
    intro: {
      headline: "Where strategy meets humanity.",
      subheadline: "Services for Transformational Leadership.",
      body: "I help organizations transform from within — aligning strategy, people, and culture through consulting, coaching, and co-design. Each discipline offers a distinct perspective; together they create a living architecture of transformation.",
      quote:
        "With analytical acuity, creative innovative strength and interdisciplinary thinking, solutions are created that are strategically sound, culturally compatible and sustainably effective."
    },
    services: [
      {
        eyebrow: "01 · Consulting",
        title: "Consulting",
        claim: "Designing architectures for organizational transformation.",
        description:
          "I guide leaders and HR teams through complex transformation processes — from strategic design to cultural embodiment. My consulting practice connects systemic diagnosis with pragmatic implementation.",
        listLabel: "Services",
        items: [
          "Transformational Architectures & Culture Design",
          "HR Transformation & People Strategy",
          "Leadership Journeys & Capability Building",
          "Diagnostics & 360 Feedback",
          "Change Agent Training"
        ],
        asideLabel: "For whom",
        asideText:
          "Organizations scaling, restructuring, or redefining purpose. HR & transformation leaders. Senior leadership teams.",
        cta: "Explore Consulting →",
        accent: "blue"
      },
      {
        eyebrow: "02 · Coaching",
        title: "Coaching",
        claim: "Empowering leaders in complexity.",
        description:
          "As a certified coach, I support executives and teams to navigate uncertainty, reconnect with purpose, and expand their leadership presence. From insight to action — practical coaching for real-world results.",
        listLabel: "Offerings",
        items: [
          "Executive & Leadership Coaching (1:1)",
          "Team Coaching & Collective Intelligence",
          "Career & Life Design",
          "Coach2Coaching for Leaders",
          "Transition & Outplacement"
        ],
        asideLabel: "You will gain",
        asideTags: [
          "Clarity on priorities and strengths",
          "Confidence and communication skills",
          "Tools to navigate conflict and change",
          "Resilience under pressure"
        ],
        cta: "Start your coaching journey →",
        accent: "teal"
      },
      {
        eyebrow: "03 · Co-Design",
        title: "Co-Design",
        claim: "Creating impact through collaboration.",
        description:
          "Co-Design brings people, perspectives, and systems into dialogue. I design and facilitate participatory learning processes that enable organizations to choreograph meaningful, lasting change — no top-down mandates, just genuine co-creation.",
        listLabel: "Formats",
        items: [
          "Tailored Leadership Programs",
          "Business Simulations",
          "Strategic Interventions",
          "Co-Design Runs & Design Sprints",
          "Cross-disciplinary Learning Experiences",
          "Leadership Labs"
        ],
        asideLabel: "Topics",
        asideTags: [
          "Digital & AI-driven Leadership",
          "Client-Centricity & Omnichannel",
          "Sustainable Leadership",
          "High Performing Teams",
          "Future of Work"
        ],
        cta: "Design transformation together →",
        accent: "gold"
      }
    ],
    closing: {
      headline: "Not sure where to begin?",
      body:
        "Let’s explore which combination of consulting, coaching, and co-design can create the right transformation architecture for your organization.",
      cta: "Start a conversation →"
    }
  },
  de: {
    intro: {
      headline: "Wo Strategie auf Menschlichkeit trifft.",
      subheadline: "Leistungen für transformationale Führung.",
      body:
        "Ich unterstütze Organisationen dabei, sich von innen heraus zu transformieren – durch die Verbindung von Strategie, Menschen und Kultur. Jede Disziplin bietet eine eigene Perspektive; gemeinsam bilden sie eine lebendige Architektur der Transformation.",
      quote:
        "Mit analytischer Schärfe, kreativer Innovationskraft und interdisziplinärem Denken entstehen Lösungen, die strategisch fundiert, kulturell anschlussfähig und nachhaltig wirksam sind."
    },
    services: [
      {
        eyebrow: "01 · Consulting",
        title: "Consulting",
        claim: "Architekturen für die Unternehmenstransformation entwerfen.",
        description:
          "Ich begleite Führungskräfte und HR-Teams durch komplexe Transformationsprozesse – von der strategischen Gestaltung bis zur kulturellen Verankerung. Meine Beratungspraxis verbindet systemische Diagnose mit pragmatischer Umsetzung.",
        listLabel: "Leistungen",
        items: [
          "Transformationsarchitekturen & Kulturgestaltung",
          "HR-Transformation & People-Strategie",
          "Leadership Journeys & Kompetenzaufbau",
          "Diagnostik & 360-Grad-Feedback",
          "Change-Agent-Training"
        ],
        asideLabel: "Für wen",
        asideText:
          "Organisationen in Wachstum, Restrukturierung oder mit neuem Purpose. HR- und Transformationsverantwortliche. Senior-Führungsteams.",
        cta: "Consulting entdecken →",
        accent: "blue"
      },
      {
        eyebrow: "02 · Coaching",
        title: "Coaching",
        claim: "Führungskräfte in Komplexität stärken.",
        description:
          "Als zertifizierter Coach unterstütze ich Führungskräfte und Teams dabei, Unsicherheit zu navigieren, den eigenen Purpose neu zu entdecken und Führungspräsenz auszubauen. Von der Erkenntnis zur Handlung – praxisorientiertes Coaching für echte Ergebnisse.",
        listLabel: "Angebote",
        items: [
          "Executive & Leadership Coaching (1:1)",
          "Team-Coaching & kollektive Intelligenz",
          "Karriere & Life Design",
          "Coach2Coaching für Führungskräfte",
          "Transition & Outplacement"
        ],
        asideLabel: "Sie gewinnen",
        asideTags: [
          "Klarheit über Prioritäten und Stärken",
          "Sicherheit und Kommunikationskompetenz",
          "Werkzeuge für Konflikt und Wandel",
          "Resilienz unter Druck"
        ],
        cta: "Coaching-Reise starten →",
        accent: "teal"
      },
      {
        eyebrow: "03 · Co-Design",
        title: "Co-Design",
        claim: "Wirkung durch gemeinsame Gestaltung.",
        description:
          "Co-Design bringt Menschen, Perspektiven und Systeme in Dialog. Ich gestalte und begleite partizipative Lernprozesse, die Organisationen befähigen, bedeutsamen Wandel zu choreografieren – keine Top-down-Vorgaben, sondern echte Mitgestaltung.",
        listLabel: "Formate",
        items: [
          "Maßgeschneiderte Leadership-Programme",
          "Business Simulationen",
          "Strategische Interventionen",
          "Co-Design-Runs & Design Sprints",
          "Interdisziplinäre Lernerfahrungen",
          "Leadership Labs"
        ],
        asideLabel: "Themen",
        asideTags: [
          "Digital & KI-gestützte Führung",
          "Kundenzentrierung & Omnichannel",
          "Nachhaltige Führung",
          "High Performing Teams",
          "Zukunft der Arbeit"
        ],
        cta: "Transformation gemeinsam gestalten →",
        accent: "gold"
      }
    ],
    closing: {
      headline: "Sie wissen nicht, wo Sie beginnen sollen?",
      body:
        "Lassen Sie uns gemeinsam herausfinden, welche Kombination aus Consulting, Coaching und Co-Design die passende Transformationsarchitektur für Ihre Organisation schafft.",
      cta: "Gespräch starten →"
    }
  }
};
