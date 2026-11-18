import Button from "@/components/shared/Button";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { mainPhone } from "@/data/site";

const faqs = [
  {
    question: "Wie läuft eine Erstberatung ab?",
    answer:
      "Sie schildern uns Ihren Fall in einem persönlichen Gespräch in unserer Kanzlei. Wir geben Ihnen daraufhin eine erste Einschätzung und eine Empfehlung für das weitere Vorgehen.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "In der Regel innerhalb von 48 Stunden. Rufen Sie uns einfach an, und wir vereinbaren zeitnah ein persönliches Gespräch.",
  },
  {
    question: "Was kostet eine Erstberatung?",
    answer:
      "Die Kosten hängen vom Umfang Ihres Anliegens ab. Wir besprechen die Konditionen transparent mit Ihnen, bevor wir für Sie tätig werden.",
  },
  {
    question: "In welchen Rechtsgebieten sind Sie tätig?",
    answer:
      "Unsere Anwälte decken Erbrecht, Betreuungsrecht, Familienrecht, Insolvenzrecht, Arbeitsrecht und Verkehrsrecht ab.",
  },
  {
    question: "Vertreten Sie mich auch außergerichtlich?",
    answer:
      "Ja. Wo eine gütliche Einigung möglich ist, verhandeln wir für Sie außergerichtlich. Ist ein gerichtliches Verfahren nötig, vertreten wir Sie selbstverständlich auch vor Gericht.",
  },
];

export default function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="bg-paper">
      <div className="frame border-t border-line">
        <div className="pad grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="gs-reveal lg:col-span-5">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title" className="display h-lg mt-6">
              Häufige Fragen
            </h2>
            <p className="lead mt-6 max-w-md text-ink-soft">Ihre Frage ist nicht dabei? Rufen Sie uns an – wir helfen Ihnen gerne weiter.</p>
            <Button href={mainPhone.phoneHref} variant="ghost" icon="phone" arrow={false} className="mt-8">
              {mainPhone.phone}
            </Button>
          </div>
          <div className="gs-reveal lg:col-span-7">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
