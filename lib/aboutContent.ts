import type { Language } from "./i18n";

export type AboutContent = {
  mission: {
    headline: string;
    body: string[];
  };
  profile: {
    name: string;
    intro: string;
    credentials: string[];
  };
  certifications: {
    headline: string;
    items: string[];
  };
  academic: {
    headline: string;
    items: string[];
  };
  story: {
    headline: string;
    body: string;
    quote: string;
  };
  values: {
    headline: string;
    body: string;
    items: string[];
  };
  network: {
    headline: string;
    body: string;
    stat: string;
    statLabel: string;
    tags: string[];
  };
  closing: {
    headline: string;
    body: string;
    cta: string;
  };
};

export const aboutContent: Record<Language, AboutContent> = {
  en: {
    mission: {
      headline: "Creating spaces for development where people can grow beyond themselves.",
      body: [
        "Transformation requires creating experiential spaces where new behaviors and ways of thinking can be explored playfully and experimentally. The goal is sustainable change — one that reaches not just the surface, but deep into cultural and organizational structures. Together with a network of collaboration partners, foresight designers, developers, and thought leaders from diverse industries, I foster interdisciplinary exchange and new perspectives.",
        "I accompany leaders as a sparring partner in designing organizations that are sustainable, fair, and innovative — places where people can grow and unfold their potential."
      ]
    },
    profile: {
      name: "Dr. Jasmina Hasanbegovic",
      intro:
        "I have worked for over 20 years in senior HR and organizational development roles — with a clear focus on how organizations become genuinely capable of learning and transformation.",
      credentials: [
        "20+ years of leadership experience in HR and organizational development",
        "Certified Coach since 2006",
        "Lecturer and trainer at the University of St. Gallen from 2003 to 2008",
        "Research and publications on strategic HR business partnering, leadership, workplace learning, and learning culture",
        "Speaking engagements",
        "Publications"
      ]
    },
    certifications: {
      headline: "Professional Certifications",
      items: [
        "International Coaching Association Certification, 2025",
        "Mindfulness-Based Sustainable Transformation Program, Mindful Society Global Institute, Toronto, 2023",
        "Certified Systemic Team Coach, Calumis Akademie, Düsseldorf, 2019",
        "Solution-Focused Counselling with SySt-Miniatures, SySt®-Institut, Munich, 2019",
        "Emotional Intelligence Training Certificate, Dietz Training und Partner, Feldafing, 2018",
        "Certified Systemic Organisational Development, Beratergruppe Neuwaldegg, Vienna, 2011",
        "Certified Business Coach & Consultant, Kurszentrum Aarau, Switzerland, 2008"
      ]
    },
    academic: {
      headline: "Academic Background",
      items: ["PhD in Economics", "Diploma in Educational Sciences", "M.A. in Information Sciences"]
    },
    story: {
      headline: "A personal path shaped by learning, design, and transformation.",
      body:
        "Born and raised in Bavaria with Bosnian and Montenegrin roots, I developed a love for design, craftsmanship, and technology — shaped by my family environment. My academic journey reflects the conviction that complex challenges can only be understood in an interdisciplinary way. Today I connect learning, design, and transformation to understand organizations in their own logic and develop tailored interventions that create lasting impact. My ambition: leadership that doesn't just react — but enables the future.",
      quote: "What I love about learning is design."
    },
    values: {
      headline: "Guided by values. Driven by impact.",
      body:
        "I work with clarity, empathy, and deep respect for human potential. My goal: transformations that make organizations more alive — and leaders more human.",
      items: ["Ambition", "Integrity", "Sustainability", "Professionalism", "Learning"]
    },
    network: {
      headline: "A collective for transformation.",
      body:
        "Headquartered in Bavaria with international reach. A network of 30+ experts across strategy management, art direction, development, project management, HR IT, and training. We work at the intersection of culture, learning, and organizational development — bringing interdisciplinary expertise to every engagement.",
      stat: "30+",
      statLabel: "experts",
      tags: ["Strategy Management", "Art Direction", "Development", "Project Management", "HR IT", "Training"]
    },
    closing: {
      headline: "Let’s design spaces where transformation can grow.",
      body: "Start a conversation about leadership, culture, and the future of your organization.",
      cta: "Contact Dr. Jasmina Hasanbegovic →"
    }
  },
  de: {
    mission: {
      headline: "Räume für Entwicklung schaffen, in denen Menschen über sich hinauswachsen können.",
      body: [
        "Transformation erfordert das Schaffen von Erfahrungsräumen, in denen neue Verhaltensweisen und Denkmuster spielerisch und experimentell erprobt werden können. Ziel ist nachhaltige Veränderung, die nicht nur oberflächlich, sondern tief in die kulturellen und organisatorischen Strukturen eingreift. Gemeinsam mit einem Netzwerk aus Kollaborationspartnern, Foresight-Designern, Entwicklern und Thought Leaders aus verschiedenen Branchen fördere ich den interdisziplinären Austausch und neue Perspektiven.",
        "Ich begleite Führungskräfte als Sparringspartner dabei, Organisationen zu gestalten, die nachhaltig, gerecht und innovativ sind – Orte, an denen Menschen wachsen und ihr Potenzial entfalten können."
      ]
    },
    profile: {
      name: "Dr. Jasmina Hasanbegovic",
      intro:
        "Ich arbeite seit über 20 Jahren in leitenden Funktionen im Personalwesen und in der Organisationsentwicklung – mit einem klaren Fokus darauf, wie Organisationen in der Tiefe lern- und transformationsfähig werden.",
      credentials: [
        "Über 20 Jahre Führungserfahrung im HR und in der Organisationsentwicklung",
        "Zertifizierter Coach seit 2006",
        "Dozentin und Trainerin an der Universität St. Gallen von 2003 bis 2008",
        "Forschung und Publikationen zu strategischem HR Business Partnering, Führung, Lernen am Arbeitsplatz und Lernkultur",
        "Vorträge",
        "Publikationen"
      ]
    },
    certifications: {
      headline: "Professionelle Zertifizierungen",
      items: [
        "International Coaching Association Certification, 2025",
        "Mindfulness-Based Sustainable Transformation Program, Mindful Society Global Institute, Toronto, 2023",
        "Certified Systemic Team Coach, Calumis Akademie, Düsseldorf, 2019",
        "Solution-Focused Counselling with SySt-Miniatures, SySt®-Institut, München, 2019",
        "Emotional Intelligence Training Certificate, Dietz Training und Partner, Feldafing, 2018",
        "Certified Systemic Organisational Development, Beratergruppe Neuwaldegg, Wien, 2011",
        "Certified Business Coach & Consultant, Kurszentrum Aarau, Schweiz, 2008"
      ]
    },
    academic: {
      headline: "Akademischer Hintergrund",
      items: ["Doktorin der Wirtschaftswissenschaften", "Diplom in Erziehungswissenschaften", "M.A. in Informationswissenschaften"]
    },
    story: {
      headline: "Ein persönlicher Weg, geprägt von Lernen, Design und Transformation.",
      body:
        "Geboren und aufgewachsen in Bayern mit bosnischen und montenegrinischen Wurzeln habe ich die Liebe zu Design, Handwerkskunst und Technik entwickelt – geprägt durch mein familiäres Umfeld. Mein akademischer Weg folgt der Überzeugung, dass komplexe Herausforderungen nur interdisziplinär verstanden werden können. Heute verbinde ich Lernen, Design und Transformation, um Organisationen in ihrer Eigenlogik zu verstehen und maßgeschneiderte Interventionen zu entwickeln, die nachhaltig Wirkung entfalten. Mein Anspruch: Führung, die nicht nur reagiert – sondern Zukunft ermöglicht.",
      quote: "What I love about learning is design."
    },
    values: {
      headline: "Von Werten geleitet. Durch Wirkung angetrieben.",
      body:
        "Ich arbeite mit Klarheit, Empathie und einem tiefen Respekt vor menschlichem Potenzial. Mein Ziel: Transformationen, die Organisationen lebendiger machen – und Führungskräfte menschlicher.",
      items: ["Ambition", "Integrität", "Nachhaltigkeit", "Professionalität", "Lernen"]
    },
    network: {
      headline: "Ein Kollektiv für Transformation.",
      body:
        "Bayerischer Sitz mit internationaler Reichweite. Ein Netzwerk mit über 30 Experten aus Strategie-Management, Art Direction, Entwicklung, Projektmanagement, HR-IT und Training. Wir arbeiten an der Schnittstelle von Kultur, Lernen und Organisationsentwicklung – mit interdisziplinärer Expertise in jedem Projekt.",
      stat: "30+",
      statLabel: "Experten",
      tags: ["Strategie-Management", "Art Direction", "Entwicklung", "Projektmanagement", "HR-IT", "Training"]
    },
    closing: {
      headline: "Lassen Sie uns Räume gestalten, in denen Transformation wachsen kann.",
      body: "Beginnen Sie ein Gespräch über Führung, Kultur und die Zukunft Ihrer Organisation.",
      cta: "Kontakt aufnehmen →"
    }
  }
};
