import Seo from "@/components/shared/Seo";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Haftungsausschluss (Disclaimer)",
    paragraphs: [
      "Sie finden auf diesen Internetseiten Informationen ausschließlich allgemeiner Art. Diese sind nicht dazu geeignet und auch nicht dafür vorgesehen, eine individuelle Beratung zu ersetzen. Dies kann nur durch unsere fachkundigen Anwälte unter Berücksichtigung der konkreten Umstände des Einzelfalles geschehen. Die Zusammenstellung der Informationen erfolgt mit größtmöglicher Sorgfalt. Eine Haftung, aus welchem Rechtsgrund auch immer, können wir weder für die Vollständigkeit noch für die Richtigkeit und Aktualität der Informationen übernehmen.",
      "Eine Haftung für Schäden, die aus der Nutzung und der Nichtnutzung der auf dieser Website angebotenen Informationen entstehen, ist — soweit gesetzlich zulässig — ausgeschlossen. Ebenso wird für etwaige Schäden, die beim Aufrufen oder Herunterladen von Daten durch Computerviren oder bei der Installation oder Nutzung von Software verursacht werden, nur im Rahmen der gesetzlichen Bestimmungen gehaftet.",
    ],
  },
  {
    title: "Internetseiten Dritter / Links",
    paragraphs: [
      "Unsere Internetseiten enthalten auch entsprechend gekennzeichnete Links oder Verweise auf Internetseiten Dritter. Der Link vermittelt lediglich den Zugang zur Nutzung dieser Inhalte. Eine Zustimmung zu den Inhalten der verlinkten Seiten Dritter ist damit nicht verbunden. Eine Verantwortung für die Verfügbarkeit oder den Inhalt solcher Internetseiten wird nicht übernommen. Es erfolgt auch keine Haftung für Schäden, die aus der Nutzung — gleich welcher Art — solcher Inhalte entstehen. Hierfür haftet allein der Anbieter der jeweiligen Seite.",
      "Bei der erstmaligen Verknüpfung mit einem anderen Internetangebot haben wir dessen Inhalt daraufhin geprüft, ob durch ihn eine mögliche zivilrechtliche oder strafrechtliche Verantwortlichkeit ausgelöst wird. Nachträglich dort eingebundene Inhalte können jedoch nicht überprüft werden. Sobald wir feststellen oder von anderen darauf hingewiesen werden, dass ein Internetangebot, zu dem ein Link bereitgestellt wurde, eine zivil- oder strafrechtliche Verantwortlichkeit auslöst, wird der Verweis auf dieses Angebot unverzüglich aufgehoben.",
    ],
  },
  {
    title: "Urheberrecht",
    paragraphs: [
      "Die Gestaltung dieser Website sowie die inhaltlichen Beiträge sind urheberrechtlich geschützt. Dies gilt insbesondere für Texte, Bilder, Grafiken oder Animationsdateien einschließlich deren Anordnung auf den Internetseiten. Veränderungen hieran dürfen nicht vorgenommen werden.",
      "Zum Download angebotene Informationen können zum persönlichen Gebrauch gespeichert und ausgedruckt werden. Im Übrigen darf die Veröffentlichung, Verarbeitung oder gewerbliche Nutzung aller Inhalte oder auch nur Teile davon nur nach vorheriger Genehmigung durch uns erfolgen.",
    ],
  },
];

export default function HaftungsausschlussPage() {
  return (
    <>
      <Seo
        title="Haftungsausschluss — Wegner & Schöbener Rechtsanwälte"
        description="Haftungsausschluss und rechtliche Hinweise zur Website von Wegner & Schöbener Rechtsanwälte."
        path="/haftungsausschluss/"
      />
      <LegalLayout
        title="Haftungsausschluss"
        updatedAt="16. August 2026"
        sections={sections}
        breadcrumbLabel="Haftungsausschluss"
        path="/haftungsausschluss/"
      />
    </>
  );
}
