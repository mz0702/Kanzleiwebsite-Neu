import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";
import { absoluteUrl } from "@/lib/basePath";

const sections = [
  {
    title: "Verantwortlicher",
    paragraphs: [
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist Wegner & Schöbener Rechtsanwälte, Marktbreiter Straße 1, 97199 Ochsenfurt, E-Mail: kanzlei@wegner-schoebener.de, Telefon: (09331) 503 96 95. Weitere Angaben finden Sie im Impressum.",
    ],
  },
  {
    title: "Hosting",
    paragraphs: [
      "Diese Website wird über GitHub Pages gehostet, einen Dienst der GitHub, Inc. (respektive GitHub B.V. für Nutzer in der EU). Beim Aufruf der Seite verarbeitet GitHub als Hosting-Anbieter automatisch technische Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, verwendeter Browser) in Server-Logfiles. Dies ist technisch notwendig, um die Website auszuliefern (Art. 6 Abs. 1 lit. f DSGVO).",
      "Da GitHub, Inc. ein Unternehmen mit Sitz in den USA ist, kann es dabei zu einer Datenübermittlung in ein Drittland kommen. Details zu den von GitHub getroffenen Garantien finden Sie in der Datenschutzerklärung von GitHub.",
    ],
  },
  {
    title: "Keine Cookies, kein Tracking",
    paragraphs: [
      "Diese Website setzt keine Analyse- oder Tracking-Tools ein und verwendet keine Cookies zu Marketing- oder Analysezwecken.",
      "Solange diese Seite als passwortgeschützte Vorschau läuft, wird lediglich im sessionStorage Ihres Browsers vermerkt, dass das Vorschau-Passwort erfolgreich eingegeben wurde. Diese Information verlässt Ihr Gerät nicht, wird nicht an uns übertragen und automatisch gelöscht, sobald Sie den Browser-Tab schließen.",
    ],
  },
  {
    title: "Google Fonts",
    paragraphs: [
      "Wir binden die Schriftart „Manrope” über Google Fonts ein, die von Servern der Google Ireland Limited (bzw. Google LLC in den USA) geladen wird. Dabei wird Ihre IP-Adresse an Google übertragen, damit die Schriftdatei ausgeliefert werden kann (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an einer einheitlichen Darstellung der Seite). Weitere Informationen: Datenschutzerklärung von Google.",
    ],
  },
  {
    title: "Kontaktaufnahme",
    paragraphs: [
      "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Inhalt der Anfrage) ausschließlich zur Bearbeitung Ihres Anliegens und einer möglichen Anschlusskommunikation (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Diese Website enthält kein eigenes Kontaktformular; Anfragen laufen direkt über Ihr E-Mail-Programm oder Telefon.",
    ],
  },
  {
    title: "Speicherdauer",
    paragraphs: [
      "Personenbezogene Daten aus einer Mandats- oder Erstkontaktanfrage speichern wir nur so lange, wie es für die Bearbeitung erforderlich ist oder gesetzliche Aufbewahrungsfristen (insbesondere aus der Bundesrechtsanwaltsordnung und steuerrechtlichen Vorschriften) dies verlangen.",
    ],
  },
  {
    title: "Ihre Rechte",
    paragraphs: [
      "Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die Verarbeitung (Art. 21) Ihrer personenbezogenen Daten. Wenden Sie sich hierzu an die oben genannte Kontaktadresse.",
      "Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, z. B. beim Bayerischen Landesamt für Datenschutzaufsicht (BayLDA).",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung — Wegner &amp; Schöbener Rechtsanwälte</title>
        <meta name="description" content="Datenschutzerklärung von Wegner & Schöbener Rechtsanwälte gemäß DSGVO." />
        <link rel="canonical" href={absoluteUrl("/privacy/")} />
      </Head>
      <LegalLayout
        title="Datenschutzerklärung"
        updatedAt="15. August 2026"
        sections={sections}
        breadcrumbLabel="Datenschutz"
      />
    </>
  );
}
