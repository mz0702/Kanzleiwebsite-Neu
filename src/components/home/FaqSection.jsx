import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
  const [openIndex, setOpenIndex] = useState(-1);
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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

          <div className="flex flex-col gap-0 gs-reveal">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-5 sm:py-6 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center group gap-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-brand-dark group-hover:text-brand-primary transition-colors">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 text-brand-gray ${
                    openIndex === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="pt-4 text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
