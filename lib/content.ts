import type { Language } from "./i18n";

export type PageKey =
  | "home"
  | "services"
  | "approach"
  | "about"
  | "insights"
  | "contact";

type Card = {
  title: string;
  text: string;
};

type Step = Card & {
  number: string;
};

type PageContent = {
  eyebrow: string;
  title: string;
  lead: string;
};

type Content = {
  meta: {
    nav: Record<PageKey, string>;
    footer: {
      imprint: string;
      privacy: string;
      cookies: string;
    };
    cta: string;
  };
  pages: Record<PageKey, PageContent>;
  home: {
    values: Card[];
    work: Card[];
    services: Card[];
    credibility: Card[];
  };
  services: {
    items: Card[];
  };
  approach: {
    method: Card[];
    process: Step[];
    foundations: Card[];
  };
  about: {
    sections: Card[];
    values: Card[];
  };
  insights: {
    topics: Card[];
    articles: Card[];
  };
  contact: {
    details: Card[];
    form: {
      name: string;
      company: string;
      email: string;
      topic: string;
      message: string;
      consent: string;
      submit: string;
      options: string[];
    };
  };
};

const en: Content = {
  meta: {
    nav: {
      home: "Home",
      services: "Services",
      approach: "Approach",
      about: "About",
      insights: "Research & Insights",
      contact: "Contact"
    },
    footer: {
      imprint: "Imprint",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy"
    },
    cta: "Start a conversation"
  },
  pages: {
    home: {
      eyebrow: "3C Transforming Leadership",
      title: "Leadership for complex transformation.",
      lead: "Placeholder copy for a premium consulting practice rooted in clarity, courage, and co-creation."
    },
    services: {
      eyebrow: "Services",
      title: "Consulting, coaching, and co-design for transformation work.",
      lead: "Short placeholder intro for the service portfolio and client contexts."
    },
    approach: {
      eyebrow: "Approach",
      title: "A structured yet human way to move leadership systems.",
      lead: "Placeholder copy introducing the philosophy, 3C method, process, and foundations."
    },
    about: {
      eyebrow: "About",
      title: "Dr. Jasmina Hasanbegovic",
      lead: "Placeholder profile copy for mission, credentials, story, values, and network."
    },
    insights: {
      eyebrow: "Research & Insights",
      title: "Ideas for leadership, learning, and transformation.",
      lead: "Placeholder intro for publications, research themes, and editorial perspectives."
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us explore the right format for your context.",
      lead: "Placeholder invitation for organizations, teams, and leaders."
    }
  },
  home: {
    values: [
      { title: "Clarity", text: "Make complex systems legible before changing them." },
      { title: "Courage", text: "Create room for honest dialogue and decisive movement." },
      { title: "Co-creation", text: "Shape solutions with the people who carry the work." }
    ],
    work: [
      { title: "Diagnose", text: "Read the context, tensions, and leadership patterns." },
      { title: "Design", text: "Build formats, rituals, and learning architectures." },
      { title: "Move", text: "Translate insight into practice with disciplined support." }
    ],
    services: [
      { title: "Consulting", text: "Strategic advisory for organizational transformation." },
      { title: "Coaching", text: "Reflective leadership work for individuals and teams." },
      { title: "Co-Design", text: "Collaborative formats for learning and change." }
    ],
    credibility: [
      { title: "Research-led", text: "Grounded in leadership theory and applied practice." },
      { title: "International", text: "Built for cross-cultural, multilingual environments." },
      { title: "Executive-ready", text: "Precise formats for senior leaders and institutions." }
    ]
  },
  services: {
    items: [
      { title: "Consulting", text: "Placeholder section copy for transformation consulting and advisory mandates." },
      { title: "Coaching", text: "Placeholder section copy for executive, team, and leadership coaching formats." },
      { title: "Co-Design", text: "Placeholder section copy for workshops, labs, and participatory design work." }
    ]
  },
  approach: {
    method: [
      { title: "Context", text: "Understand the system, its language, and its constraints." },
      { title: "Capability", text: "Strengthen leadership behaviors, practices, and routines." },
      { title: "Collective", text: "Build shared ownership across teams and stakeholders." }
    ],
    process: [
      { number: "01", title: "Orient", text: "Align on ambition, scope, and success signals." },
      { number: "02", title: "Sense", text: "Map dynamics, voices, and structural tensions." },
      { number: "03", title: "Shape", text: "Design interventions and learning experiences." },
      { number: "04", title: "Embed", text: "Support transfer into everyday leadership practice." }
    ],
    foundations: [
      { title: "Systems thinking", text: "Placeholder foundation copy." },
      { title: "Adult learning", text: "Placeholder foundation copy." },
      { title: "Dialogic change", text: "Placeholder foundation copy." }
    ]
  },
  about: {
    sections: [
      { title: "Mission", text: "Placeholder mission statement for the practice." },
      { title: "Profile", text: "Placeholder biography for Dr. Jasmina Hasanbegovic." },
      { title: "Credentials", text: "Placeholder credentials and certifications." },
      { title: "Personal story", text: "Placeholder personal narrative." },
      { title: "Network", text: "Placeholder partner and network description." }
    ],
    values: [
      { title: "Depth", text: "Work below the surface of visible behavior." },
      { title: "Integrity", text: "Hold rigor and humanity together." },
      { title: "Movement", text: "Create momentum without losing nuance." }
    ]
  },
  insights: {
    topics: [
      { title: "Transformation", text: "Placeholder topic description." },
      { title: "Leadership learning", text: "Placeholder topic description." },
      { title: "Culture and dialogue", text: "Placeholder topic description." }
    ],
    articles: [
      { title: "Article preview one", text: "Placeholder summary for a future insight." },
      { title: "Publication preview two", text: "Placeholder summary for a future publication." },
      { title: "Research note three", text: "Placeholder summary for a future research note." }
    ]
  },
  contact: {
    details: [
      { title: "Email", text: "hello@example.com" },
      { title: "Location", text: "Available for international work." },
      { title: "Response", text: "Placeholder availability and response time." }
    ],
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      topic: "Topic",
      message: "Message",
      consent: "I agree that my details may be used to respond to this inquiry.",
      submit: "Submit",
      options: ["Consulting", "Coaching", "Co-Design", "Other"]
    }
  }
};

const de: Content = {
  ...en,
  meta: {
    nav: {
      home: "Start",
      services: "Leistungen",
      approach: "Erfolgsansatz",
      about: "Über mich",
      insights: "Forschung & Erkenntnisse",
      contact: "Kontakt"
    },
    footer: {
      imprint: "Impressum",
      privacy: "Datenschutz",
      cookies: "Cookie-Richtlinie"
    },
    cta: "Gespräch starten"
  },
  pages: {
    home: {
      eyebrow: "3C Transforming Leadership",
      title: "Leadership für komplexe Transformation.",
      lead: "Platzhaltertext für eine hochwertige Beratungspraxis mit Klarheit, Mut und Co-Kreation."
    },
    services: {
      eyebrow: "Leistungen",
      title: "Consulting, Coaching und Co-Design für Transformationsarbeit.",
      lead: "Kurzer Platzhaltertext für Leistungsfelder und Kundensituationen."
    },
    approach: {
      eyebrow: "Ansatz",
      title: "Strukturiert, menschlich und bewegungsorientiert.",
      lead: "Platzhaltertext für Philosophie, 3C Methode, Prozess und Grundlagen."
    },
    about: {
      eyebrow: "Über mich",
      title: "Dr. Jasmina Hasanbegovic",
      lead: "Platzhaltertext für Mission, Profil, Qualifikationen, Geschichte, Werte und Netzwerk."
    },
    insights: {
      eyebrow: "Forschung & Erkenntnisse",
      title: "Impulse für Leadership, Lernen und Transformation.",
      lead: "Platzhaltertext für Publikationen, Forschungsthemen und Perspektiven."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lassen Sie uns das passende Format für Ihren Kontext finden.",
      lead: "Platzhaltertext für Organisationen, Teams und Führungskräfte."
    }
  },
  contact: {
    details: [
      { title: "E-Mail", text: "hello@example.com" },
      { title: "Standort", text: "Verfügbar für internationale Zusammenarbeit." },
      { title: "Antwort", text: "Platzhalter für Verfügbarkeit und Antwortzeit." }
    ],
    form: {
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      topic: "Thema",
      message: "Nachricht",
      consent: "Ich stimme zu, dass meine Angaben zur Beantwortung der Anfrage genutzt werden.",
      submit: "Senden",
      options: ["Consulting", "Coaching", "Co-Design", "Andere"]
    }
  }
};

export const content: Record<Language, Content> = { en, de };
