import { basePath } from "@/lib/basePath";
export const lawyers = [
  {
    slug: "beate-wegner",
    name: "Beate Wegner",
    role: "Rechtsanwältin",
    image: `${basePath}/images/Beate Wegner.webp`,
    tagline: "Erbrecht & Betreuungsrecht",
    intro:
      "Beate Wegner ist seit 1996 als Rechtsanwältin tätig und auf Erbrecht sowie Betreuungsrecht spezialisiert. Sie ist unter anderem als gerichtlich bestellte Betreuerin tätig und bildet sich regelmäßig im Erbrecht fort.",
    specialties: [
      {
        title: "Erbrecht",
        description:
          "Testamente, Erbverträge, Pflichtteilsansprüche und die Abwicklung von Nachlässen.",
      },
      {
        title: "Betreuungsrecht",
        description:
          "Rechtliche Betreuung, Vorsorgevollmacht, Patientenverfügung und Betreuungsverfahren.",
      },
    ],
    // Platzhalter-Werdegang (fiktiv) — bitte vor Veröffentlichung durch echte Daten ersetzen.
    // "seit 1996" und "gerichtlich bestellte Betreuerin" sind die einzigen bestätigten Fakten.
    timeline: [
      { year: "1965", title: "Geboren in Würzburg" },
      { year: "1985", title: "Studium der Rechtswissenschaft in Würzburg" },
      { year: "1990", title: "Erstes Juristisches Staatsexamen" },
      { year: "1991", title: "Referendariat in Würzburg" },
      { year: "1993", title: "Zweites Juristisches Staatsexamen" },
      { year: "seit 1996", title: "Rechtsanwältin in Ochsenfurt" },
      { year: "2001", title: "Fachanwältin für Erbrecht" },
      { year: "laufend", title: "Gerichtlich bestellte Betreuerin" },
    ],
    memberships: ["Arbeitsgemeinschaft Erbrecht im DAV"],
  },
  {
    slug: "susanne-schoebener",
    name: "Susanne Schöbener",
    role: "Rechtsanwältin",
    image: `${basePath}/images/Susanne Schöbener.webp`,
    tagline: "Familienrecht & Insolvenzrecht",
    intro:
      "Susanne Schöbener berät und vertritt Sie in allen Fragen des Familienrechts sowie im Insolvenzrecht — kompetent, diskret und mit einem klaren Blick für pragmatische Lösungen.",
    specialties: [
      {
        title: "Familienrecht",
        description:
          "Scheidung, Unterhalt, Sorge- und Umgangsrecht sowie Eheverträge.",
      },
      {
        title: "Insolvenzrecht",
        description:
          "Verbraucher- und Regelinsolvenz, Restschuldbefreiung und Gläubigervertretung.",
      },
    ],
    // Platzhalter-Werdegang (komplett fiktiv) — bitte vor Veröffentlichung durch echte Daten ersetzen.
    timeline: [
      { year: "1968", title: "Geboren in Kitzingen" },
      { year: "1988", title: "Studium der Rechtswissenschaft in Würzburg" },
      { year: "1993", title: "Erstes Juristisches Staatsexamen" },
      { year: "1994", title: "Referendariat in Würzburg" },
      { year: "1996", title: "Zweites Juristisches Staatsexamen" },
      { year: "1997", title: "Zulassung zur Rechtsanwaltschaft" },
      { year: "seit 1998", title: "Rechtsanwältin in Ochsenfurt" },
      { year: "2005", title: "Fachanwältin für Familienrecht" },
      { year: "2012", title: "Fachanwältin für Insolvenzrecht" },
    ],
    memberships: [
      "Arbeitsgemeinschaft Familienrecht im DAV",
      "Arbeitsgemeinschaft Insolvenzrecht und Sanierung im DAV",
    ],
  },
  {
    slug: "stephan-wegner",
    name: "Stephan Wegner",
    role: "Rechtsanwalt",
    image: `${basePath}/images/Stephan Wegner.webp`,
    tagline: "Arbeitsrecht & Verkehrsanwalt",
    intro:
      "Stephan Wegner vertritt Sie als Fachmann im Arbeitsrecht sowie als Verkehrsanwalt bei Unfällen, Bußgeldverfahren und im Verkehrsstrafrecht.",
    specialties: [
      {
        title: "Arbeitsrecht",
        description:
          "Kündigungsschutz, Arbeitsverträge, Abmahnungen und Abfindungen.",
      },
      {
        title: "Verkehrsrecht",
        description:
          "Unfallregulierung, Bußgeld- und Verkehrsstrafverfahren sowie Führerscheinangelegenheiten.",
      },
    ],
    timeline: [
      { year: "1961", title: "Geboren in Hamburg" },
      { year: "1984", title: "Studium der Rechtswissenschaft in Marburg" },
      { year: "1990", title: "Erstes Juristisches Staatsexamen" },
      { year: "1991", title: "Referendariat in Marburg/Hessen" },
      { year: "1994", title: "Zweites Juristisches Staatsexamen" },
      { year: "1994", title: "Zulassung zur Rechtsanwaltschaft" },
      { year: "1994", title: "Rechtsanwalt in Heidelberg" },
      { year: "seit 1995", title: "Rechtsanwalt in Ochsenfurt", description: "seit 01.04.1995" },
      { year: "2006", title: "Fachanwalt für Verkehrsrecht" },
      { year: "2011", title: "Fachanwalt für Arbeitsrecht" },
    ],
    memberships: [
      "Arbeitsgemeinschaft Verkehrsrecht im DAV",
      "Arbeitsgemeinschaft Arbeitsrecht im DAV",
      "Deutscher Verkehrsgerichtstag – Deutsche Akademie für Verkehrswissenschaften e.V.",
      "Vorsitzender des ADAC Ortsclubs AMC Ochsenfurt im ADAC e.V.",
    ],
  },
];
