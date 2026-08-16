import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import CtaBanner from "@/components/shared/CtaBanner";
import useReveal from "@/hooks/useReveal";
import { absoluteUrl } from "@/lib/basePath";

export function getStaticPaths() {
  return {
    paths: lawyers.map((l) => ({ params: { slug: l.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const lawyer = lawyers.find((l) => l.slug === params.slug);
  return { props: { lawyer } };
}

export default function LawyerDetailPage({ lawyer }) {
  const timelineRef = useRef(null);
  useReveal(timelineRef);

  const others = lawyers.filter((l) => l.slug !== lawyer.slug);
  const url = absoluteUrl(`/anwaelte/${lawyer.slug}/`);
  // Erster Satz von intro statt des vollen Absatzes — sonst schneidet Google die
  // Meta-Description (~160 Zeichen) mitten im Satz ab.
  const metaDescription = lawyer.intro.split(". ")[0] + ".";

  return (
    <>
      <Head>
        <title>{`${lawyer.name} — Wegner & Schöbener Rechtsanwälte`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${lawyer.name} — ${lawyer.role} in Ochsenfurt`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={absoluteUrl(lawyer.image)} />
      </Head>

      {/* Hero */}
      <section className="bg-brand-dark text-white pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/70 font-medium mb-8 sm:mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand-primary">{lawyer.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-10 md:gap-16 items-center">
            <div className="aspect-[3/4] max-w-xs rounded-3xl overflow-hidden bg-white/5 mx-auto md:mx-0">
              <img
                src={lawyer.image}
                alt={lawyer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                {lawyer.role}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-5 sm:mb-6">
                {lawyer.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
                {lawyer.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Fachgebiete
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-brand-dark mb-10 sm:mb-12">
            Rechtsgebiete von {lawyer.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {lawyer.specialties.map((spec, i) => {
              // Jedes Fachgebiet hat eine eigene Themenseite (practiceAreas.js).
              const area = practiceAreas.find((a) => a.title === spec.title);
              return (
                <Link
                  key={i}
                  href={`/rechtsgebiete/${area.slug}`}
                  className="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-brand-gray text-sm sm:text-base leading-relaxed">{spec.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-brand-primary font-semibold text-sm">
                    Mehr zum {spec.title}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          <a
            href="mailto:kanzlei@wegner-schoebener.de"
            className="mt-10 inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors"
          >
            Termin vereinbaren
          </a>
        </div>
      </section>

      {/* Über mich */}
      {lawyer.timeline?.length > 0 && (
        <section ref={timelineRef} className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 justify-center text-brand-gray">
                <span className="w-2 h-2 rounded-full bg-brand-dark" />
                Über mich
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark">
                Werdegang von {lawyer.name}
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center vertical line (desktop) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

              <div className="space-y-10 md:space-y-16">
                {lawyer.timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`gs-reveal relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                      i % 2 === 1 ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={`md:[direction:ltr] ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <div className="inline-block px-4 py-1 rounded-full bg-brand-primary text-white text-sm font-semibold mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium text-brand-dark">{item.title}</h3>
                      {item.description && (
                        <p className="text-brand-gray text-sm mt-1">{item.description}</p>
                      )}
                    </div>

                    {/* Dot on center line */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-brand-primary border-4 border-white" />
                    </div>

                    <div className="md:[direction:ltr]" />
                  </div>
                ))}
              </div>
            </div>

            {lawyer.memberships?.length > 0 && (
              <div className="gs-reveal max-w-4xl mx-auto mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-gray-100">
                <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-6">
                  Mitgliedschaften &amp; Ämter
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {lawyer.memberships.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-brand-gray text-sm sm:text-base">
                      <svg className="w-4 h-4 text-brand-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Other lawyers */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark mb-10 sm:mb-12">
            Weitere Anwälte
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/anwaelte/${item.slug}`}
                className="group bg-brand-light rounded-3xl p-4 flex items-center gap-5 hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-brand-dark">{item.name}</h3>
                  <p className="text-brand-gray text-sm">{item.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Wir sind für Sie da"
        title={`Termin bei ${lawyer.name}\nvereinbaren`}
        description="Rufen Sie uns an oder schreiben Sie uns — wir melden uns innerhalb von 48 Stunden bei Ihnen."
        buttonLabel="Jetzt Kontakt aufnehmen"
        buttonHref="mailto:kanzlei@wegner-schoebener.de"
      />
    </>
  );
}
