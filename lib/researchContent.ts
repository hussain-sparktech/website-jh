import type { Language } from "./i18n";

export type ArchiveItemContent = {
  authors: string;
  title: string;
  details: string;
  url?: string;
};

export type ArchiveYearGroup = {
  year: string;
  items: ArchiveItemContent[];
};

export type ResearchTopicContent = {
  title: string;
  description: string;
};

export type HighlightContent = {
  year: string;
  type: string;
  title: string;
  description: string;
};

export type ResearchContent = {
  intro: {
    headline: string;
    body: string;
  };
  topics: {
    headline: string;
    intro: string;
    items: ResearchTopicContent[];
  };
  highlights: {
    headline: string;
    cards: HighlightContent[];
  };
  archive: {
    headline: string;
    body: string;
    tabs: {
      publications: string;
      presentations: string;
    };
    searchPlaceholder: string;
    openPublication: string;
    itemSingular: string;
    itemPlural: string;
    noResults: string;
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
        "Our work builds on 20+ years of research and practice in leadership, learning, and transformation. Explore selected publications, articles, presentations, and speeches."
    },
    topics: {
      headline: "Research themes",
      intro: "The work connects leadership, learning, systems thinking, and organizational transformation.",
      items: [
        {
          title: "Design-based Research",
          description: "Applied inquiry that turns complex organizational questions into tested learning designs."
        },
        {
          title: "Sustainable Behaviour Change",
          description: "Research and practice focused on lasting shifts in habits, routines, and leadership behavior."
        },
        {
          title: "Systems Theory",
          description: "A systemic lens on organizations, feedback loops, culture, and transformation dynamics."
        },
        {
          title: "Leadership & Learning Culture",
          description: "Work on how leaders enable development, transfer, and learning-oriented environments."
        },
        {
          title: "Interdisciplinary Approaches",
          description: "Perspectives from pedagogy, psychology, HR, learning science, and organizational development."
        }
      ]
    },
    highlights: {
      headline: "Selected highlights",
      cards: [
        {
          year: "2023",
          type: "Publication",
          title: "Omnichannel-Excellence in Organisationen durch Employee Experience",
          description: "Published in the online magazine Edge by Diva-e."
        },
        {
          year: "2025",
          type: "Presentation",
          title: "Unlocking Leadership Potential in Times of Transformation",
          description: "International Nigel Wright Female Empowerment Event: Leadership Unlocked, Amsterdam."
        },
        {
          year: "2008",
          type: "Publication",
          title: "Next Generation Leadership",
          description: "scil Arbeitsbericht Nr. 19, St. Gallen."
        }
      ]
    },
    archive: {
      headline: "Publications, presentations and speeches",
      body: "Browse selected publications, articles, presentations, and speeches grouped by year.",
      tabs: {
        publications: "Publications",
        presentations: "Presentations and speeches"
      },
      searchPlaceholder: "Search by title, year, or topic...",
      openPublication: "Open publication →",
      itemSingular: "item",
      itemPlural: "items",
      noResults: "No items match your search."
    },
    closing: {
      headline: "Research that informs transformation.",
      body:
        "Explore how research, learning, and leadership practice can shape meaningful organizational change.",
      cta: "Start a conversation →"
    }
  },
  de: {
    intro: {
      headline: "Forschung & Einblicke",
      body:
        "Unsere Arbeit basiert auf über 20 Jahren Forschung und Praxis in Führung, Lernen und Transformation. Entdecken Sie ausgewählte Publikationen, Artikel, Präsentationen und Vorträge."
    },
    topics: {
      headline: "Forschungsthemen",
      intro: "Die Arbeit verbindet Führung, Lernen, systemisches Denken und organisationale Transformation.",
      items: [
        {
          title: "Design-based Research",
          description: "Anwendungsorientierte Forschung, die komplexe Organisationsfragen in erprobte Lerndesigns übersetzt."
        },
        {
          title: "Nachhaltige Verhaltensänderung",
          description: "Forschung und Praxis zu dauerhaften Veränderungen von Routinen, Gewohnheiten und Führungsverhalten."
        },
        {
          title: "Systemtheorie",
          description: "Ein systemischer Blick auf Organisationen, Rückkopplungen, Kultur und Transformationsdynamiken."
        },
        {
          title: "Führung & Lernkultur",
          description: "Arbeiten dazu, wie Führung Entwicklung, Transfer und lernförderliche Umfelder ermöglicht."
        },
        {
          title: "Interdisziplinäre Ansätze",
          description: "Perspektiven aus Pädagogik, Psychologie, HR, Lernforschung und Organisationsentwicklung."
        }
      ]
    },
    highlights: {
      headline: "Ausgewählte Highlights",
      cards: [
        {
          year: "2023",
          type: "Publikation",
          title: "Omnichannel-Excellence in Organisationen durch Employee Experience",
          description: "Veröffentlicht im Online-Magazin Edge von Diva-e."
        },
        {
          year: "2025",
          type: "Präsentation",
          title: "Unlocking Leadership Potential in Times of Transformation",
          description: "International Nigel Wright Female Empowerment Event: Leadership Unlocked, Amsterdam."
        },
        {
          year: "2008",
          type: "Publikation",
          title: "Next Generation Leadership",
          description: "scil Arbeitsbericht Nr. 19, St. Gallen."
        }
      ]
    },
    archive: {
      headline: "Publikationen, Präsentationen und Vorträge",
      body: "Durchsuchen Sie ausgewählte Publikationen, Artikel, Präsentationen und Vorträge, gruppiert nach Jahr.",
      tabs: {
        publications: "Publikationen",
        presentations: "Präsentationen und Vorträge"
      },
      searchPlaceholder: "Nach Titel, Jahr oder Thema suchen...",
      openPublication: "Publikation öffnen →",
      itemSingular: "Eintrag",
      itemPlural: "Einträge",
      noResults: "Keine Einträge entsprechen Ihrer Suche."
    },
    closing: {
      headline: "Forschung, die Transformation ermöglicht.",
      body:
        "Entdecken Sie, wie Forschung, Lernen und Führungspraxis bedeutsamen organisationalen Wandel gestalten können.",
      cta: "Gespräch starten →"
    }
  }
};

export const publicationsData: ArchiveYearGroup[] = [
  {
    year: "2023",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Omnichannel-Excellence in Organisationen durch Employee Experience",
        details: "Veröffentlicht am 24.05.2023 im Online-Magazin Edge von Diva-e.",
        url:
          "https://www.diva-e.com/edge/de/voices/entwicklung-und-foerderung-von-omnichannel-excellence-in-organisationen-durch-employee-experience/"
      }
    ]
  },
  {
    year: "2010",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Beratung im betrieblichen Bildungsmanagement",
        details:
          "In Göhlich, M.; Weber, S. W.; Seitter, W.; Feld, T. F. (Hrsg.). Organisation und Beratung. Beiträge der AG Organisationspädagogik, Wiesbaden: VS Verlag."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Bringing Life Long Learning (LLL) into the Business - die Rolle des Business Partners im betrieblichen Bildungsmanagement",
        details:
          "In Breitner, M. H., Voigtländer, C. & Sohns, K. (Hrsg.), Perspektiven des Lebenslangen Lernens - dynamische Bildungsnetzwerke, Geschäftsmodelle, Trends. Interdisziplinäre Betrachtung mit 22 Expertenbeiträgen, 135-141, Gito Verlag, Berlin."
      }
    ]
  },
  {
    year: "2009",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Das Konzept professionellen Handelns in der Beratung als Balanceakt des betrieblichen Bildungsmanagements",
        details:
          "In Schreyögg, A. & Schmidt-Lellek, Ch. (Hrsg.), Die Organisation in Supervision und Coaching. OSC, Sonderheft 3/2009, S. 64-77. Wiesbaden: VS Verlag für Sozialwissenschaften."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Beratung im betrieblichen Bildungsmanagement. Analyse und Gestaltung eines Situationstypen",
        details: "Südwestdeutscher Verlag für Hochschulschriften."
      }
    ]
  },
  {
    year: "2008",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Faculty readiness in higher education: Individual Factors Influencing the professional growth for technology enhanced teaching",
        details: "Saarbrücken: VDM Verlag Dr. Müller."
      },
      {
        authors: "Seufert, S.; Hasanbegovic, J. & Euler, D.",
        title: "Next Generation Leadership",
        details: "scil Arbeitsbericht Nr. 19, St. Gallen."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Wie lernen Führungskräfte? Ergebnisse der scil Studie",
        details: "In S. Seufert; J. Hasanbegovic & D. Euler, Next Generation Leadership. Scil Arbeitsbericht Nr. 19, St. Gallen."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Beratung im betrieblichen Bildungsmanagement. Analyse und Gestaltung eines Situationstypen",
        details: "Bamberg: Difo Druck GmbH."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Beratung im betrieblichen Bildungsmanagement. Analyse und Gestaltung eines Situationstypen",
        details: "Elektronisch veröffentlichte Dissertation, Institut für Wirtschaftspädagogik, Nr. 3507. St. Gallen."
      },
      {
        authors: "Zellweger, F., Hasanbegovic, J. & Metzger, C.",
        title: "Fostering Learning Strategies in Universities to Prepare a Self-Regulated Workforce",
        details: "International Journal Human Resources Development and Management, 8(4), 332-345."
      }
    ]
  },
  {
    year: "2007",
    items: [
      {
        authors: "Seufert, S., Brahm, T., Hasanbegovic, J.",
        title: "Fallstudie IBM",
        details:
          "In D. Euler & S. Seufert (Hrsg.), Ergebnisse der Fallstudien zu transferorientiertem Bildungsmanagement (scil Arbeitsbericht Nr. 14, S. 73-106). St. Gallen: Universität St. Gallen."
      },
      {
        authors: "Seufert, S., Hasanbegovic, J. & Euler, D.",
        title: "Mehrwert für das Bildungsmanagement durch nachhaltige Lernkulturen",
        details: "Arbeitsbericht Nr. 11. St. Gallen: SCIL (Swiss Centre for Innovations in Learning)."
      },
      {
        authors: "Brahm, T., Hasanbegovic, J. & Dillenbourg, P.",
        title: "Experimentierfreudige computergestützte Kollaboration: Didaktische Innovation durch Involvierung der Lehrenden",
        details: "In E. Seiler Schiedt, S. Kälin & C. Sengstag (Hrsg.), E-Learning - Alltagstaugliche Innovation? (S. 223-233). Münster: Waxmann Verlag."
      },
      {
        authors: "Gruber, H., Harteis, C., Hasanbegovic, J. & Lehner, F.",
        title: "Über die Rolle epistemischer Überzeugungen für die Gestaltung von e-Learning. Eine empirische Studie bei Hochschul-Lehrenden",
        details: "In M. H. Breitner, B. Bruns & F. Lehner (Hrsg.), E-Learning. Technologiebasiertes Lehren und Lernen (S. 123-132). Berlin: Springer."
      },
      {
        authors: "Hasanbegovic, J. & Seufert, S.",
        title: "Benchmarkstudie zu Transferorientiertem Bildungsmanagement. Zentrale Ergebnisse der Befragung",
        details: "Bericht Nr. 14. St. Gallen: Universität St. Gallen."
      },
      {
        authors: "Hasanbegovic, J., Seufert, S. & Euler, D.",
        title: "Lernkultur als Ausgangspunkt eines Veränderungsprozesses für die erfolgreiche Implementierung von Bildungsinnovationen",
        details: "Zeitschrift für Organisationsentwicklung, 07(2)."
      },
      {
        authors: "Hasanbegovic, J., Seufert, S. & Euler, D.",
        title: "Transferorientierte Gestaltung von Bildungsmassnahmen",
        details: "Skript für das SCIL Fokusseminar Nr. 4. St. Gallen: Swiss Centre for Innovations in Learning."
      }
    ]
  },
  {
    year: "2006",
    items: [
      {
        authors: "Schönwald, I.; Euler, D.; Hasanbegovic, J. & Seufert, S.",
        title: "Evaluation eines Lernszenarios für eLearning Change Agents an Hochschulen",
        details: "scil Arbeitsbericht 10, St. Gallen."
      },
      {
        authors: "Euler, D., Hasanbegovic, J., Kerres, M. & Seufert, S.",
        title: "Handbuch der Kompetenzentwicklung für eLearning Innovationen. Eine Handlungsorientierung für innovative Bildungsarbeit in der Hochschule",
        details: "Bern: Hans Huber."
      },
      {
        authors: "Hasanbegovic, J., Gruber, H., Bauer, J. & Rehrl, M.",
        title: "The two-fold role of epistemological beliefs in higher education: A review of research about innovation in universities",
        details:
          "In P. Tynjälä, J. Välimaa & G. Boulton-Lewis (Hrsg.), Higher Education and Working Life. Collaborations, Confrontations and Challenges (S. 166-176). Amsterdam: Elsevier."
      },
      {
        authors: "Hasanbegovic, J. & Kerres, M.",
        title: "Entwicklung von Maßnahmenportfolios zur Vermittlung von E-Lehrkompetenz. Ein Ansatz zur nachhaltige Verankerung von technikgestützten Bildungsinnovationen",
        details: "In E. Seiler Schiedt, S. Kälin & C. Sengstag (Hrsg.), E-Learning - Alltagstaugliche Innovation? (S. 348-357). Münster: Waxmann."
      },
      {
        authors: "Hasanbegovic, J., Zellweger, F. & Metzger, C.",
        title: "Self Curriculum: Developing Swiss Students' Learning Strategies",
        details: "Academic Exchange Quarterly, 10(4), 90-95."
      }
    ]
  },
  {
    year: "2005",
    items: [
      {
        authors: "Gruber, H., Lehner, F., Harteis, C. & Hasanbegovic, J.",
        title: "Epistemische Überzeugungen von Hochschul-Lehrenden: Einfluss auf die Gestaltung von E-Learning?",
        details: "Paper presented at the 10. Tagung der Fachgruppe Pädagogische Psychologie der Deutschen Gesellschaft für Psychologie, Halle, September 2005."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Kategorisierungen als Ausgangspunkt der Gestaltung innovativer eLearning Szenarien",
        details: "In D. Euler & S. Seufert (Hrsg.), E-Learning in Hochschulen und Bildungszentren. Gestaltungshinweise für pädagogische Innovationen (S. 243-263). Muenchen: Oldenbourg."
      },
      {
        authors: "Kerres, M., Euler, D., Seufert, S., Hasanbegovic, J. & Voss, B.",
        title: "Lehrkompetenz für eLearning-Innovationen in der Hochschule. Ergebnisse einer explorativen Studie zu Massnahmen der Entwicklung von eLehrkompetenz",
        details: "SCIL-Arbeitsbericht Nr. 6. St. Gallen: Swiss Centre for Innovations in Learning."
      }
    ]
  },
  {
    year: "2004",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Faculty readiness in higher education? The challenge of technology enhanced teaching at university workplaces",
        details:
          "In N. Dordevic & M. Svetina (Hrsg.), 8. Adult Education Colloquium: Education and Training of Teachers in Adult Education. Ljubljana, Slovenia: Slovian Institute for Adult Education."
      }
    ]
  },
  {
    year: "2003",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "E-Learning als Unterstützungskomponente des Wissenserwerbes am Beispiel der Domäne Unternehmensberatung - Versuch einer Synthese von E-Learning und Wissensmanagement",
        details:
          "Magisterarbeit als Teil der Magisterprüfung für Informationswissenschaftler, Philosophische Fakultät IV, Institut für Medien, Informations- und Kulturwissenschaft, Universität Regensburg."
      }
    ]
  },
  {
    year: "2002",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Wissensentwicklung in der Unternehmensberatung. Projekterfahrung als Grundlage von Beraterkompetenz",
        details: "Unveröffentlichte Diplomarbeit, Lehrstuhl für Pädagogik II, Universität Regensburg."
      }
    ]
  }
];

export const presentationsData: ArchiveYearGroup[] = [
  {
    year: "2025",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Unlocking Leadership Potential in Times of Transformation",
        details: "International Nigel Wright Female Empowerment Event: Leadership Unlocked, Amsterdam."
      }
    ]
  },
  {
    year: "2023",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title:
          "Employee Experience im Luxury Retail: Wie gelingt es, im Luxury Retail außergewöhnliche Mitarbeiter Stories zu schreiben?",
        details:
          "Keynote im Rahmen des Roundtables Recruiting+Retention4Retail. Verkauf neu denken. Neue Perspektiven für Karrieren. Frankfurt am Main. 12./13.09.2023."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Die Zukunft der Führungskräfteentwicklung",
        details: "Keynote und Podiums-Mitstreiterin an der Mastermind Podiumsdiskussion. München: Sharpist. 14. Februar 2023."
      }
    ]
  },
  {
    year: "2022",
    items: [
      {
        authors: "Hasanbegovic, J. & Karup, B.",
        title: "Let’s talk talent",
        details: "Masterclass at Avantgarde. München. November 2022."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Performance Management. Employee Experience durch Performance Management. Ein Widerspruch?",
        details: "POP2022. Falkensteiner Balance Resort Stegersbach: Business Circle."
      }
    ]
  },
  {
    year: "2019",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Strategisches Lernen als Grundlage der Unternehmensentwicklung - Potentialorientiertes Coaching der Führungskräfte im Retail",
        details:
          "Vortrag im Rahmen der Psychologie Ringvorlesung Personal- und Organisationsberatung an der Humboldt-Universität zu Berlin des Master-Studienganges Psychologie im Sommer Semester am 07.06.2019."
      }
    ]
  },
  {
    year: "2016",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Leadership Development als Grundlage für Client-Centricity. Führungskräfte als Learning Leader",
        details: "Presentation at the Human Resources Gipfel 2016; 19-20 September 2016, Frankfurt, Deutschland."
      }
    ]
  },
  {
    year: "2015",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Strategische Ausrichtung des Personalmanagements - Transformationelle Führung",
        details: "Presentation at the Human Resources Gipfel 2015; 11-13 October 2015, Grand Hotel Heiligendamm, Bad Doberan, Deutschland."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Learning Leaders in Retail Organisations",
        details: "Presentation at the International 3rd Annual HR Minds Forum Conference, 10.-11.09.2015, Vienna, Austria."
      }
    ]
  },
  {
    year: "2014",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Systematisches Talent Management. Grundlage für die Verknüpfung von Behavioral Branding und Employer Branding",
        details: "Vortrag im Rahmen der Marketing Vorlesung Markenführung des Masterstudiengangs BWL bei Prof. Thorsten Tomzak am 15. April, Universität St. Gallen."
      }
    ]
  },
  {
    year: "2011",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Kennen Sie heute schon die Kollegen von morgen? Strategische Personalentwicklung als Grundlage für erfolgreiches Talentmanagement",
        details: "MUWIT 2011, 15. IIR-Konferenz für Personalentwicklung und Weiterbildung. 11. und 12. April, Berlin."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Wirkungsnetzbasierte Planspiele und Strategie-simulationen als zentraler Baustein in der Führungskräfteentwicklung",
        details: "Learntec 2011, 19. Internationale Leitmesse und Kongress für professionelle Bildung, Lernen und IT. Wachstumspotential in der Bildung. 01.02.2011, Messe Karlsruhe."
      }
    ]
  },
  {
    year: "2010",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Strategisches Lernen im Vertrieb - die Etablierung des Learning Leaders als Grundlage einer Lerninfrastruktur",
        details: "Strategie Tage Learning. 27.-28.09.2010, Business Factors Deutschland GmbH. Grandhotel Schloss Bensberg."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Strategisches Personalmanagement - Die Kollegen von morgen schon heute kennen",
        details: "Personalmanagementkongress, Bundesverband für Personalmanagement, 02. Juli 2010, Berlin."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Betriebliche Personalentwicklung – strategische Herausforderungen und Auswirkungen auf die Rolle von Personalentwicklern",
        details: "Ringvorlesung Pädagogische Berufe und Handlungsfelder an der Pädagogischen Hochschule Schwäbisch Gmünd, 10.06.2010, Schwäbisch Gmünd."
      }
    ]
  },
  {
    year: "2009",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Strategische Personalentwicklung in Unternehmen",
        details: "Workshop in Zusammenarbeit mit TeachConcepts AG zur Neuausrichtung des Produktportfolios, 15.10.2009, Frankfurt am Main."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Strategisches Bildungsmanagement in Unternehmen",
        details: "Vortrag im Rahmen des Workshops Corporate Growth - Bildungsstrategie 2015, 04.08.2009, Workshop Commax im Dialog."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Beratung im betrieblichen Bildungsmanagement",
        details: "Paper presented at Tagung der AG Organisationspädagogik in der Sektion Erwachsenenbildung der DGfE, 13.03.2009, Phillips-Universität Marburg."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Wie lernen Führungskräfte? Eine Untersuchung zum Lernstrategie-Portfolio der Führungskräfte und seine Auswirkung auf die lernförderliche Führungsrolle",
        details: "Workshop bei Helvetia Versicherungen in St. Gallen."
      }
    ]
  },
  {
    year: "2008",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Bringing Lifelong Learning into the Business - die Rolle des Business Partners im betrieblichen Bildungsmanagement",
        details: "Paper presented at the Workshop Perspektiven des Lebenslangen Lernens, Hannover. 15. und 16. April 2008."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Das strategische Lernverhalten von Führungskräften. Eine Untersuchung zum Lernstrategie-Portfolio der Führungskräfte und seine Auswirkung auf die lernförderliche Führungsrolle",
        details: "Paper presented at the Hernstein Praxisforschungsprojekt “Wie lernen Führungskräfte?” Schloss Hernstein, Wien. 15.-16.05.2008."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Effective Learning Governance: How to become a credible business partner?",
        details: "Paper presented at the 3. scil Congress: The changing face of learning - Creating the right balance, St. Gallen."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Transferförderung am Arbeitsplatz. Die Unterstützung des Teamleiters in der Rolle als lernorientierter Coach",
        details: "Paper presented at the Projektabschlussworkshop, Bonn. 12.06.2008."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Aligning learning to the needs of the line managers by investigating into a systematic transfer management",
        details: "Paper presented at the ECER conference, Gotenborg, Sweden."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Innovationen für Lernkompetenz explorieren",
        details: "HR CRM Talents and HR Young Talents Education. UBS, Morschach, Schweiz."
      }
    ]
  },
  {
    year: "2007",
    items: [
      {
        authors: "Brahm, T., Hasanbegovic, J. & Dillenbourg, P.",
        title: "Experimentierfreudige computergestützte Kollaboration: Didaktische Innovation durch Involvierung der Lehrenden",
        details: "Paper presented at the GMW 07 - Studieren neu erfinden - Hochschule neu denken, Universität Hamburg. 13.09.2007."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "The learning professional's role in enabling the line managers to support learning transfer",
        details: "Paper presented at the EARLI - Developing Potentials for Learning, University of Budapest. 30.08.2007."
      }
    ]
  },
  {
    year: "2006",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Designing learning culture for improvement and innovation in companies",
        details: "Paper presented at the ECER, Geneve, September."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "eLearning - Quo vadis?",
        details: "Paper presented at the Stiftung Winterthur, Winterthur."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Entwicklung von Maßnahmenportfolios zur Vermittlung von E-Lehrkompetenz. Ein Ansatz zur nachhaltige Verankerung von technikgestützten Bildungsinnovationen",
        details: "Paper presented at the GMW 2006, Zürich."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Lernkulturanalyse Telekom. Datenauswertung der Befragung TK NL Mitte",
        details: "Paper presented at the Telekom Netzwerktreffen, Ismaning."
      },
      {
        authors: "Hasanbegovic, J. & Brahm, T.",
        title: "Informelles Lernen im betrieblichen Bildungsmanagement. Entwicklung einer generischen Methodensystematik",
        details: "Paper presented at the Telekom Netzwerktreffen, Ismaning."
      }
    ]
  },
  {
    year: "2005",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "Professional Growth for Technology Enhanced Teaching - An Integrative Model for Trainer Readiness in Vocational Training",
        details: "Paper presented at the ECER, Dublin."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Ready to teach faculty for educational technology? Teaching counselling for technology enhanced teaching in higher education",
        details: "Paper presented at the EARLI, Nicosia, Zyprus."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Students’ perspective on eLearning as impact for faculty engagement. How to convince faculty of the potential added value of eLearning innovations for their students?",
        details: "Paper presented at SCIL Expert Workshop on Faculty Engagement on the 21./22.02.2005 in St. Gallen."
      }
    ]
  },
  {
    year: "2004",
    items: [
      {
        authors: "Hasanbegovic, J.",
        title: "The students' perspective on faculty development",
        details: "Paper presented at the SCIL Community of eLearning experts, University of St. Gallen. 13.-14.05.2004."
      },
      {
        authors: "Hasanbegovic, J.; Gruber, H.; Harteis, C. & Lehner, F.",
        title: "Epistemische Überzeugungen von Hochschullehrenden: Einfluss auf die Gestaltung von E-Learning?",
        details: "Paper presented at the Fachtagung der Fachgruppe Pädagogische Psychologie der Deutschen Gesellschaft für Psychologie; Halle."
      },
      {
        authors: "Hasanbegovic, J. & Dreier, M.",
        title: "Kompetenzentwicklung im Zuge technikgestützter Lehre",
        details: "Paper presented at the GMW Tagung, Graz."
      },
      {
        authors: "Hasanbegovic, J., Dreier, M. & Schoenwald, I.",
        title: "How to engage second wave faculty to improve their teaching by using eLearning?",
        details: "Paper presented at the ICNEE, Neuchatel."
      },
      {
        authors: "Hasanbegovic, J. & Zellweger, F.",
        title: "How to activate and motivate 2nd wave faculty?",
        details: "Paper presented at the SCIL Community of eLearning experts, University of St. Gallen. 13.-14.05.2004."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Faculty readiness in higher education? The challenge of technology enhanced teaching at university workplaces",
        details: "Paper presented at the Adult Education Colloquium: Education and Training of Teachers in Adult Education, Ljubljana, Slovenia."
      },
      {
        authors: "Hasanbegovic, J.",
        title: "Faculty Development",
        details: "Paper presented at the SCIL Community of eLearning experts, University of St. Gallen. 13.-14.05.2004."
      }
    ]
  }
];
