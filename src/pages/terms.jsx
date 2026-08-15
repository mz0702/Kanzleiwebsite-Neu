import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Geltungsbereich",
    paragraphs: [
      "Diese Hinweise gelten für die Nutzung der Website von Wegner & Schöbener Rechtsanwälte. Sie betreffen ausschließlich den Internetauftritt — nicht das Zustandekommen, den Inhalt oder die Bedingungen eines Mandatsverhältnisses. Ein Mandat kommt ausschließlich durch eine gesonderte, ausdrückliche Vereinbarung zustande.",
    ],
  },
  {
    title: "Keine Rechtsberatung durch die Website",
    paragraphs: [
      "Die Inhalte dieser Website dienen der allgemeinen Information über die Kanzlei und ihre Tätigkeitsschwerpunkte. Sie stellen keine Rechtsberatung im Einzelfall dar und können eine individuelle anwaltliche Beratung nicht ersetzen.",
    ],
  },
  {
    title: "Haftung für Inhalte",
    paragraphs: [
      "Wir erstellen die Inhalte dieser Website mit Sorgfalt, können jedoch keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen (§§ 8 bis 10 DDG).",
    ],
  },
  {
    title: "Haftung für Links",
    paragraphs: [
      "Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter verantwortlich. Verlinkte Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; eine permanente inhaltliche Kontrolle ist ohne konkrete Anhaltspunkte nicht zumutbar.",
    ],
  },
  {
    title: "Urheberrecht",
    paragraphs: [
      "Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung.",
    ],
  },
  {
    title: "Änderungen",
    paragraphs: [
      "Wir behalten uns vor, diese Hinweise bei Bedarf zu aktualisieren, etwa bei Änderungen der Website oder der Rechtslage.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Haftungsausschluss — Wegner &amp; Schöbener Rechtsanwälte</title>
        <meta name="description" content="Haftungsausschluss und rechtliche Hinweise zur Website von Wegner & Schöbener Rechtsanwälte." />
      </Head>
      <LegalLayout
        title="Haftungsausschluss"
        updatedAt="15. August 2026"
        sections={sections}
        breadcrumbLabel="Haftungsausschluss"
      />
    </>
  );
}
