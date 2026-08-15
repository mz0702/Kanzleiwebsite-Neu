import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Angaben gemäß § 5 DDG",
    paragraphs: [
      "Wegner & Schöbener Rechtsanwälte",
      "Marktbreiter Straße 1, 97199 Ochsenfurt",
      "[Platzhalter: Rechtsform der Kanzlei, z. B. Gesellschaft bürgerlichen Rechts — bitte ergänzen]",
      "Vertretungsberechtigte Rechtsanwältinnen und Rechtsanwälte: Beate Wegner, Susanne Schöbener, Stephan Wegner",
    ],
  },
  {
    title: "Kontakt",
    paragraphs: [
      "Telefon: (09331) 503 96 95",
      "E-Mail: kanzlei@wegner-schoebener.de",
    ],
  },
  {
    title: "Berufsbezeichnung und berufsrechtliche Regelungen",
    paragraphs: [
      "Berufsbezeichnung: Rechtsanwältin / Rechtsanwalt, verliehen in der Bundesrepublik Deutschland.",
      "Zuständige Rechtsanwaltskammer: [Platzhalter — bitte die zuständige Kammer mit Anschrift und Website ergänzen].",
      "Es gelten insbesondere folgende berufsrechtliche Regelungen: Bundesrechtsanwaltsordnung (BRAO), Berufsordnung für Rechtsanwälte (BORA), Rechtsanwaltsvergütungsgesetz (RVG), Fachanwaltsordnung (FAO). Die Regelungen sind einsehbar unter www.brak.de.",
    ],
  },
  {
    title: "Berufshaftpflichtversicherung",
    paragraphs: [
      "[Platzhalter: Name und Anschrift des Berufshaftpflichtversicherers sowie räumlicher Geltungsbereich der Versicherung — bitte ergänzen. Diese Angabe ist gemäß § 5 DDG i. V. m. der Berufsordnung verpflichtend.]",
    ],
  },
  {
    title: "Umsatzsteuer-Identifikationsnummer",
    paragraphs: [
      "[Platzhalter: Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG, sofern vorhanden — bitte ergänzen.]",
    ],
  },
  {
    title: "Redaktionell verantwortlich",
    paragraphs: [
      "Beate Wegner, Susanne Schöbener, Stephan Wegner (Anschrift wie oben).",
    ],
  },
  {
    title: "EU-Streitschlichtung",
    paragraphs: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben unter „Kontakt”.",
      "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [Falls die Kanzlei teilnehmen möchte, bitte anpassen.]",
    ],
  },
  {
    title: "Haftung für Inhalte",
    paragraphs: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
      "Die Inhalte dieser Website dienen der allgemeinen Information und stellen keine Rechtsberatung im Einzelfall dar. Für eine verbindliche rechtliche Einschätzung wenden Sie sich bitte direkt an uns.",
    ],
  },
  {
    title: "Haftung für Links",
    paragraphs: [
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
    ],
  },
  {
    title: "Urheberrecht",
    paragraphs: [
      "Die durch die Kanzlei erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.",
    ],
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum — Wegner &amp; Schöbener Rechtsanwälte</title>
        <meta name="description" content="Impressum und rechtliche Angaben von Wegner & Schöbener Rechtsanwälte, Ochsenfurt." />
      </Head>
      <LegalLayout
        title="Impressum"
        updatedAt="15. August 2026"
        sections={sections}
        breadcrumbLabel="Impressum"
      />
    </>
  );
}
