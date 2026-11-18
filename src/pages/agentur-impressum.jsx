import Seo from "@/components/shared/Seo";
import LegalLayout from "@/components/shared/LegalLayout";

// Impressum für die Vorschau-Sperre selbst (verlinkt vom Passwort-Bildschirm,
// siehe PasswordGate.jsx) — verantwortlich für den Betrieb dieser Vorschau ist
// bis zur Übergabe Michael Zandler / ZIVION, nicht die Kanzlei. Das "richtige"
// Impressum der Kanzlei liegt unter /impressum und wird verlinkt, sobald man
// tatsächlich auf der (entsperrten) Website ist.
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

export default function AgenturImpressumPage() {
  return (
    <>
      <Seo
        title="Impressum — ZIVION"
        description="Impressum dieser Vorschau-Website (ZIVION, Michael Zandler)."
        path="/agentur-impressum/"
        noindex
      />
      <LegalLayout
        title="Impressum"
        updatedAt="16. August 2026"
        sections={sections}
        breadcrumbLabel="Impressum"
        path="/agentur-impressum/"
      />
    </>
  );
}
