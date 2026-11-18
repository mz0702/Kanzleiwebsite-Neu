import Head from "next/head";
import Icon from "@/components/shared/Icon";
import { jsonLd } from "@/components/shared/Seo";

// Natives <details>: Antworten stehen immer im HTML (Suchmaschinen/KI lesen sie),
// Tastatur & Screenreader funktionieren ohne eigenes JS. `name` = nur eine offen.
// Das FAQPage-Schema hängt direkt an der Liste, damit es keine Seite vergisst.
export default function FaqAccordion({ faqs }) {
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
        {jsonLd(schema)}
      </Head>
      <div className="border-t border-line">
        {faqs.map((faq) => (
          <details key={faq.question} name="faq" className="faq group border-b border-line">
            <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 md:py-7">
              <h3 className="text-lg leading-snug tracking-tight transition-colors group-hover:text-accent md:text-xl">
                {faq.question}
              </h3>
              <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 ring-inset ring-[color:var(--line-strong)]">
                <Icon name="plus" className="h-4 w-4" />
              </span>
            </summary>
            <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-ink-soft">{faq.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
