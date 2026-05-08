import type { Language } from "./i18n";

export type HomeService = {
  title: string;
  description: string;
  link: string;
  accent: "blue" | "teal" | "gold";
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  value: {
    label: string;
    headline: string;
    body: string[];
    quote: string;
  };
  work: {
    headline: string;
    body: string;
    principles: string[];
  };
  services: {
    headline: string;
    cards: HomeService[];
  };
  credibility: {
    headline: string;
    body: string;
    sectors: string[];
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  closing: {
    headline: string;
    body: string;
    cta: string;
  };
};

export const homeContent: Record<Language, HomeContent> = {
  en: {
    hero: {
      eyebrow: "Consulting · Coaching · Co-Design",
      headline: "Transforming Leadership.",
      subheadline: "Creating architectures and choreographies of transformation.",
      primaryCta: "Let's talk →",
      secondaryCta: "Explore services"
    },
    value: {
      label: "What we do",
      headline: "A strategy boutique for cultural innovation.",
      body: [
        "I support leaders in not just navigating transformation — but shaping and owning it. At the heart of my work are transformational architectures: integrated approaches that connect strategic initiatives, cultural dynamics, and leadership practice. Transformation only works when leaders and employees co-create it. That is why co-design is not an add-on — it is central to everything I do."
      ],
      quote: "I don't implement initiatives. I design transformational architectures."
    },
    work: {
      headline: "Transformation as choreography.",
      body: "Change does not happen through isolated actions. It emerges through carefully designed sequences of interactions, spaces, and experiences. I create choreographies of transformation that are deeply connected to the existing structures, rhythms, and dynamics of an organization.",
      principles: [
        "Structures, not symptoms",
        "Dynamics, not opinions",
        "Design, not isolated interventions"
      ]
    },
    services: {
      headline: "Designing Transformation. Enabling Leadership.",
      cards: [
        {
          title: "Consulting",
          description: "Designing transformational architectures & HR strategies that connect purpose with performance.",
          link: "Learn more →",
          accent: "blue"
        },
        {
          title: "Coaching",
          description: "Empowering leaders and teams to act with awareness, courage, and creativity.",
          link: "Learn more →",
          accent: "teal"
        },
        {
          title: "Co-Design",
          description: "Creating collaborative spaces where transformation becomes tangible and collectively owned.",
          link: "Learn more →",
          accent: "gold"
        }
      ]
    },
    credibility: {
      headline: "Trusted across industries.",
      body: "We've worked with leaders and organizations from retail, finance, consumer goods, and med-tech — supporting transformation from boardroom to team level.",
      sectors: ["Retail", "Finance", "Consumer Goods", "Automotive", "MedTech", "Public Sector"],
      stats: [
        { value: "20+", label: "Years" },
        { value: "200+", label: "Leaders Coached" },
        { value: "50+", label: "Organizations" }
      ]
    },
    closing: {
      headline: "Transformation begins with leadership.",
      body: "Whether you are rethinking your HR strategy, designing a leadership culture, or building a transformation architecture — it begins with a conversation.",
      cta: "Contact Dr. Jasmina Hasanbegovic →"
    }
  },
  de: {
    hero: {
      eyebrow: "Consulting · Coaching · Co-Design",
      headline: "Transforming Leadership.",
      subheadline: "Strategische Inszenierungen für die Unternehmenstransformation.",
      primaryCta: "Gespräch anfragen →",
      secondaryCta: "Leistungen entdecken"
    },
    value: {
      label: "Was wir tun",
      headline: "Eine Strategie-Boutique für kulturelle Innovation.",
      body: [
        "Ich unterstütze Führungskräfte dabei, Transformation nicht nur zu begleiten, sondern proaktiv zu gestalten und zu tragen. Im Zentrum steht die Entwicklung von Transformationsarchitekturen – integrierte Ansätze, die strategische Initiativen, kulturelle Dynamiken und Führungspraxis miteinander verbinden. Transformation gelingt nur, wenn Führungskräfte und Mitarbeitende sie mitgestalten. Deshalb ist Co-Creation kein Add-on, sondern ein zentraler Bestandteil.",
        "Wir analysieren Führungs- und Mitarbeiterverhalten im Kontext künftiger Kulturen – und entwickeln daraus strategische Initiativen mit nachhaltiger Wirkung für Unternehmen und Organisationen."
      ],
      quote: "Ich setze keine Maßnahmen um. Ich entwerfe Transformationsarchitekturen."
    },
    work: {
      headline: "Transformation als Choreographie.",
      body: "Veränderung entsteht nicht durch einzelne Maßnahmen. Sie entsteht durch präzise gestaltete Abfolgen von Interaktionen, Räumen und Erfahrungen. Ich entwickle Choreographien der Transformation, die eng mit den bestehenden Strukturen, Dynamiken und Rhythmen einer Organisation verbunden sind.",
      principles: [
        "An Strukturen arbeiten, nicht an Symptomen",
        "Dynamiken verstehen, nicht Meinungen",
        "Gestalten durch Design, nicht isolierte Interventionen"
      ]
    },
    services: {
      headline: "Transformation gestalten. Führung ermöglichen.",
      cards: [
        {
          title: "Consulting",
          description: "Transformationsarchitekturen & HR-Strategien, die Purpose mit Performance verbinden.",
          link: "Mehr erfahren →",
          accent: "blue"
        },
        {
          title: "Coaching",
          description: "Führungskräfte und Teams befähigen, mit Klarheit, Mut und Kreativität zu handeln.",
          link: "Mehr erfahren →",
          accent: "teal"
        },
        {
          title: "Co-Design",
          description: "Partizipative Räume schaffen, in denen Transformation greifbar und gemeinsam gestaltet wird.",
          link: "Mehr erfahren →",
          accent: "gold"
        }
      ]
    },
    credibility: {
      headline: "Bewährt in verschiedenen Branchen.",
      body: "Ich habe Führungskräfte und Organisationen aus Handel, Finanzen, Konsumgütern und MedTech begleitet – von der Führungsetage bis ins Team.",
      sectors: ["Handel", "Finanzen", "Konsumgüter", "Automotive", "MedTech", "Öffentlicher Sektor"],
      stats: [
        { value: "20+", label: "Jahre" },
        { value: "200+", label: "Führungskräfte begleitet" },
        { value: "50+", label: "Organisationen" }
      ]
    },
    closing: {
      headline: "Transformation beginnt mit Führung.",
      body: "Ob Sie Ihre HR-Strategie neu ausrichten, eine Führungskultur gestalten oder eine Transformationsarchitektur entwickeln wollen – es beginnt mit einem Gespräch.",
      cta: "Kontakt aufnehmen →"
    }
  }
};
