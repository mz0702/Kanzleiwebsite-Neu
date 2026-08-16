import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";
import { absoluteUrl } from "@/lib/basePath";

// TEMPORÄR — Agentur-Impressum während der Vorschau-Phase.
// Diese Seite wird der Kanzlei erst vorgestellt, verantwortlich für den Betrieb
// dieser Vorschau ist bis zur Übergabe Michael Zandler / ZIVION, nicht die Kanzlei.
//
// Bei Übergabe an die Kanzlei: `sections` unten durch das vorbereitete
// Kanzlei-Impressum ersetzen (identisch zu Commit b80b37b, mit EINER Änderung:
// die Zeile "vormals Kanzlei von Rechtsanwältin Elke Hambrecht..." im Abschnitt
// "Kanzlei Würzburg" entfällt — auf Wunsch der Kanzlei entfernt). Titel/Description
// im <Head> unten ebenfalls zurück auf die Kanzlei-Version stellen.
const sections = [
  {
    title: "Angaben gemäß § 5 DDG",
    paragraphs: [
      "Michael Zandler – ZIVION",
      "Bodan-Werft 6, 88079 Kressbronn",
      "Telefon: +49 176 34114728",
      "E-Mail: info@zivion.de",
    ],
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
        <title>Impressum — ZIVION</title>
        <meta name="description" content="Impressum dieser Vorschau-Website (ZIVION, Michael Zandler)." />
        <link rel="canonical" href={absoluteUrl("/impressum/")} />
        <meta name="robots" content="noindex" />
      </Head>
      <LegalLayout
        title="Impressum"
        updatedAt="16. August 2026"
        sections={sections}
        breadcrumbLabel="Impressum"
      />
    </>
  );
}
