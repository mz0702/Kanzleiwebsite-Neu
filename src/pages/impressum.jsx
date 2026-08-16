import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";
import { absoluteUrl } from "@/lib/basePath";

const sections = [
  {
    title: "Angaben gemäß § 5 DDG",
    paragraphs: [
      "Wegner & Schöbener Rechtsanwälte",
      "Inhaberinnen der Domain sowie Verantwortliche im Sinne des § 5 DDG: Susanne Schöbener, Beate Wegner",
      "E-Mail: kanzlei@wegner-schoebener.de",
    ],
  },
  {
    title: "Kanzlei Ochsenfurt",
    paragraphs: [
      "Marktbreiter Str. 1, 97199 Ochsenfurt",
      "Telefon: 09331 - 981 99 - 0",
      "Fax: 09331 - 981 99 - 28",
    ],
  },
  {
    title: "Kanzlei Würzburg",
    paragraphs: [
      "Marktgasse 9 (an der Marienkapelle), 97070 Würzburg",
      "Telefon: 0931 - 166 33",
      "Fax: 0931 - 571 4 56",
    ],
  },
  {
    title: "Berufsbezeichnung und berufsrechtliche Regelungen",
    paragraphs: [
      "Berufsbezeichnung: Rechtsanwältin / Rechtsanwalt. Die Zulassung zur Rechtsanwaltschaft wurde jeweils in der Bundesrepublik Deutschland verliehen.",
      "Zuständige Aufsichtsbehörde: Rechtsanwaltskammer Bamberg, Friedrichstraße 7, 96047 Bamberg, Telefon: 0951 / 98620.",
      "Die Rechtsanwälte Stephan Wegner, Susanne Schöbener und Beate Wegner sind Mitglieder der Rechtsanwaltskammer Bamberg.",
      "Berufsrechtliche Grundlagen unserer Tätigkeit sind insbesondere: Bundesrechtsanwaltsordnung (BRAO), Berufsordnung der Rechtsanwälte (BORA), Fachanwaltsordnung (FAO), Bundesgebührenordnung für Rechtsanwälte (BRAGO) sowie das Rechtsanwaltsvergütungsgesetz (RVG). Die Berufs- und Gebührenordnungen sind einsehbar unter www.brak.de bzw. www.dav.de.",
    ],
  },
  {
    title: "Berufshaftpflichtversicherung",
    paragraphs: [
      "[Platzhalter: Name und Anschrift des Berufshaftpflichtversicherers sowie räumlicher Geltungsbereich der Versicherung — bitte ergänzen. Diese Angabe ist gemäß § 5 DDG i. V. m. der Berufsordnung verpflichtend.]",
    ],
  },
  {
    title: "Steuernummer",
    paragraphs: ["Steuer-ID: 257 / 181 / 50208"],
  },
  {
    title: "Redaktionell verantwortlich",
    paragraphs: ["Susanne Schöbener, Beate Wegner (Anschrift: Kanzlei Ochsenfurt, siehe oben)."],
  },
  {
    title: "EU-Streitschlichtung",
    paragraphs: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben unter „Angaben gemäß § 5 DDG”.",
      "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum — Wegner &amp; Schöbener Rechtsanwälte</title>
        <meta name="description" content="Impressum und rechtliche Angaben von Wegner & Schöbener Rechtsanwälte, Standorte Ochsenfurt und Würzburg." />
        <link rel="canonical" href={absoluteUrl("/impressum/")} />
      </Head>
      <LegalLayout
        title="Impressum"
        updatedAt="16. August 2026"
        sections={sections}
        breadcrumbLabel="Impressum"
        image={null}
      />
    </>
  );
}
