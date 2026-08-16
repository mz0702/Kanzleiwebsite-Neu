import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { basePath } from "@/lib/basePath";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current.querySelectorAll(".gs-reveal");
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="gs-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark mb-6 sm:mb-8">
              Häufige<br />Fragen
            </h2>
            <img
              src={`${basePath}/images/Sonstiges.jpg`}
              alt=""
              className="rounded-3xl w-full h-[220px] sm:h-[280px] lg:h-[300px] object-cover"
            />
          </div>

          <div className="gs-reveal">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
