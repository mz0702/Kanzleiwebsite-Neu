import { useState } from "react";
import Head from "next/head";

// Aufklapp-FAQ inkl. FAQPage-JSON-LD. Die Auszeichnung gehört direkt an die
// Komponente, damit sie nicht auf jeder Seite von Hand nachgezogen werden muss —
// jede Seite mit dieser Liste liefert automatisch dieselben Fragen als Schema aus.
export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          // Nur statische, im Repo gepflegte Texte — keine Nutzereingaben. Das
          // <\/script>-Escaping verhindert den Ausbruch aus dem Script-Tag
          // (gleiches Vorgehen wie in OrganizationSchema.jsx).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="flex flex-col gap-0">
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
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="pt-4 text-sm sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
