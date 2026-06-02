import type { Language } from "./i18n";

export type ContactContent = {
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  details: {
    name: string;
    address: string;
    email: string;
    phone: string;
    labels: {
      heading: string;
      address: string;
      email: string;
      phone: string;
    };
  };
  form: {
    labels: {
      name: string;
      company: string;
      email: string;
      topic: string;
      message: string;
      privacy: string;
      submit: string;
      heading: string;
    };
    topics: string[];
    success: string;
    privacyNote: string;
    errors: {
      name: string;
      email: string;
      topic: string;
      message: string;
      privacy: string;
    };
  };
  note: string;
};

export const contactContent: Record<Language, ContactContent> = {
  en: {
    hero: {
      eyebrow: "Contact",
      headline: "Let's talk about your transformation journey.",
      body:
        "Whether you are rethinking your HR strategy, designing a leadership culture, or building a transformation architecture — it always begins with a conversation."
    },
    details: {
      name: "Dr. Jasmina Hasanbegovic",
      address: "Watzmannstr. 65, 85757 Karlsfeld, Germany",
      email: "hasanbegovic.jasmina@outlook.com",
      phone: "+49-174-3116355",
      labels: {
        heading: "Direct Contact",
        address: "Address",
        email: "Email",
        phone: "Phone"
      }
    },
    form: {
      labels: {
        name: "Name",
        company: "Company",
        email: "Email",
        topic: "Topic",
        message: "Message",
        privacy: "I agree to the privacy policy.",
        submit: "Send message →",
        heading: "Inquiry"
      },
      topics: ["Consulting", "Coaching", "Co-Design", "Other"],
      success: "Thank you. Your message has been prepared successfully.",
      privacyNote: "Your message is prepared locally for now. No backend submission is connected yet.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        topic: "Please select a topic.",
        message: "Please enter a message.",
        privacy: "Please accept the privacy policy."
      }
    },
    note: "Transformation begins with a meaningful conversation."
  },
  de: {
    hero: {
      eyebrow: "Kontakt",
      headline: "Lassen Sie uns über Ihre Transformationsreise sprechen.",
      body:
        "Ob Sie Ihre HR-Strategie neu ausrichten, eine Führungskultur gestalten oder eine Transformationsarchitektur aufbauen – es beginnt immer mit einem Gespräch."
    },
    details: {
      name: "Dr. Jasmina Hasanbegovic",
      address: "Watzmannstr. 65, 85757 Karlsfeld, Germany",
      email: "hasanbegovic.jasmina@outlook.com",
      phone: "+49-174-3116355",
      labels: {
        heading: "Direkter Kontakt",
        address: "Adresse",
        email: "E-Mail",
        phone: "Telefon"
      }
    },
    form: {
      labels: {
        name: "Name",
        company: "Unternehmen",
        email: "E-Mail",
        topic: "Thema",
        message: "Nachricht",
        privacy: "Ich stimme der Datenschutzerklärung zu.",
        submit: "Nachricht senden →",
        heading: "Anfrage"
      },
      topics: ["Consulting", "Coaching", "Co-Design", "Sonstiges"],
      success: "Vielen Dank. Ihre Nachricht wurde erfolgreich vorbereitet.",
      privacyNote: "Ihre Nachricht wird aktuell nur lokal vorbereitet. Es ist noch kein Backend angebunden.",
      errors: {
        name: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        topic: "Bitte wählen Sie ein Thema aus.",
        message: "Bitte geben Sie eine Nachricht ein.",
        privacy: "Bitte akzeptieren Sie die Datenschutzerklärung."
      }
    },
    note: "Transformation beginnt mit einem bedeutungsvollen Gespräch."
  }
};
