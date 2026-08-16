import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { lawyers } from "@/data/lawyers";
import CtaBanner from "@/components/shared/CtaBanner";
import FaqAccordion from "@/components/shared/FaqAccordion";
import useReveal from "@/hooks/useReveal";
import { basePath, absoluteUrl } from "@/lib/basePath";

export function getStaticPaths() {
  return {
    paths: practiceAreas.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  const lawyer = lawyers.find((l) => l.slug === area.lawyerSlug);
  return { props: { area, lawyer } };
}

export default function PracticeAreaPage({ area, lawyer }) {
  const contentRef = useRef(null);
  const faqRef = useRef(null);
  useReveal(contentRef);
  useReveal(faqRef);

  const url = absoluteUrl(`/rechtsgebiete/${area.slug}/`);
  const others = practiceAreas.filter((a) => a.slug !== area.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Rechtsgebiete", item: absoluteUrl("/#rechtsgebiete") },
      { "@type": "ListItem", position: 3, name: area.title, item: url },
    ],
  };

  return (
    <>
      <Head>
        <title>{`${area.title} Anwalt in Ochsenfurt — Wegner & Schöbener Rechtsanwälte`}</title>
        <meta name="description" content={area.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${area.title} Anwalt in Ochsenfurt — Wegner & Schöbener Rechtsanwälte`} />
        <meta property="og:description" content={area.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={absoluteUrl(area.image)} />
        <script
          type="application/ld+json"
          // Statische Daten aus practiceAreas.js — das <\/script>-Escaping wie in
          // OrganizationSchema.jsx verhindert den Ausbruch aus dem Script-Tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
        />
      </Head>

      {/* Hero */}
      <section className="bg-brand-dark text-white pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/70 font-medium mb-8 sm:mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#rechtsgebiete" className="hover:text-brand-primary transition-colors">Rechtsgebiete</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand-primary">{area.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                Rechtsgebiet
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Anwalt für {area.title}
                <br />
                in Ochsenfurt
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
                {area.description}
              </p>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5">
              <img
                src={`${basePath}${area.image}`}
                alt={area.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Einordnung + typische Anliegen */}
      <section ref={contentRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 items-start">
            <div className="gs-reveal">
              <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
                <span className="w-2 h-2 rounded-full bg-brand-dark" />
                Überblick
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-brand-dark mb-6">
                Was macht ein Anwalt für {area.title}?
              </h2>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">{area.intro}</p>

              <h2 className="text-2xl sm:text-3xl font-medium text-brand-dark mt-12 sm:mt-14 mb-6">
                Typische Anliegen
              </h2>
              <ul className="grid grid-cols-1 gap-3">
                {area.anliegen.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-brand-gray text-sm sm:text-base">
                    <svg className="w-4 h-4 text-brand-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zuständiger Anwalt */}
            <div className="gs-reveal lg:sticky lg:top-28">
              <Link
                href={`/anwaelte/${lawyer.slug}`}
                className="group block bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-xs uppercase tracking-wider text-brand-gray mb-4">
                  Zuständig in diesem Rechtsgebiet
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                      {lawyer.name}
                    </h3>
                    <p className="text-brand-gray text-sm">{lawyer.role}</p>
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-brand-primary font-semibold text-sm">
                  Zum Profil von {lawyer.name}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <a
                href="mailto:kanzlei@wegner-schoebener.de"
                className="mt-6 inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors"
              >
                Termin vereinbaren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="gs-reveal">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark mb-6 sm:mb-8">
                Häufige Fragen
                <br />
                zum {area.title}
              </h2>
              <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                Die folgenden Antworten geben einen allgemeinen Überblick über die Rechtslage. Sie
                ersetzen keine Beratung im Einzelfall — dafür vereinbaren Sie am besten einen Termin
                in unserer Kanzlei in Ochsenfurt.
              </p>
            </div>

            <div className="gs-reveal">
              <FaqAccordion faqs={area.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Weitere Rechtsgebiete */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark mb-10 sm:mb-12">
            Weitere Rechtsgebiete
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/rechtsgebiete/${item.slug}`}
                className="group bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Wir sind für Sie da"
        title={`Beratung im ${area.title}\nvereinbaren`}
        description="Rufen Sie uns an oder schreiben Sie uns — wir melden uns innerhalb von 48 Stunden bei Ihnen."
        buttonLabel="Jetzt Kontakt aufnehmen"
        buttonHref="mailto:kanzlei@wegner-schoebener.de"
      />
    </>
  );
}
