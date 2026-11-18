import Link from "next/link";
import Seo from "@/components/shared/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import CtaBanner from "@/components/shared/CtaBanner";
import FaqAccordion from "@/components/shared/FaqAccordion";
import Icon from "@/components/shared/Icon";
import Timeline from "@/components/shared/Timeline";
import { ORG_ID } from "@/components/shared/OrganizationSchema";
import { practiceAreas } from "@/data/practiceAreas";
import { lawyers } from "@/data/lawyers";
import { mainPhone } from "@/data/site";
import { basePath, absoluteUrl } from "@/lib/basePath";

export function getStaticPaths() {
  return { paths: practiceAreas.map((a) => ({ params: { slug: a.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  const lawyer = lawyers.find((l) => l.slug === area.lawyerSlug);
  return { props: { area, lawyer } };
}

export default function PracticeAreaPage({ area, lawyer }) {
  const path = `/rechtsgebiete/${area.slug}/`;
  const others = practiceAreas.filter((a) => a.slug !== area.slug);
  const fact = area.keyFact;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Rechtsberatung ${area.title}`,
    serviceType: area.title,
    description: area.metaDescription,
    url: absoluteUrl(path),
    areaServed: ["Ochsenfurt", "Würzburg", "Landkreis Würzburg"],
    provider: { "@id": ORG_ID },
  };

  return (
    <>
      <Seo
        title={`${area.title} Anwalt Ochsenfurt | Wegner & Schöbener`}
        description={area.metaDescription}
        path={path}
        schema={serviceSchema}
      />

      {/* Hero */}
      <section className="bg-paper">
        <div className="frame">
          <div className="pad grid gap-12 pb-16 pt-28 md:pb-20 md:pt-36 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Breadcrumbs
                path={path}
                items={[
                  { label: "Startseite", href: "/" },
                  { label: "Rechtsgebiete", href: "/#rechtsgebiete" },
                  { label: area.title },
                ]}
              />
              <p className="eyebrow hero-in mt-10" style={{ "--d": "0.05s" }}>
                {lawyer.role} {lawyer.name}
              </p>
              <h1 className="display h-page hero-in mt-6" style={{ "--d": "0.15s" }}>
                Anwalt für {area.title} in Ochsenfurt
              </h1>
              <p className="lead hero-in mt-6 max-w-xl text-ink-soft" style={{ "--d": "0.3s" }}>
                {area.description}
              </p>
              <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ "--d": "0.45s" }}>
                <Button href="/kontakt">Termin vereinbaren</Button>
                <Button href={mainPhone.phoneHref} variant="ghost" icon="phone" arrow={false}>
                  {mainPhone.phone}
                </Button>
              </div>
            </div>
            <div className="hero-in marks relative border border-line bg-white/50 lg:col-span-5" style={{ "--d": "0.3s" }}>
              <img src={`${basePath}${area.image}`} alt={`Illustration zum ${area.title}`} width="1000" height="750" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Frist auf einen Blick */}
      <section data-theme="dark" aria-label={`${area.title} auf einen Blick`} className="bg-night text-white">
        <div className="frame">
          <div className="pad gs-reveal grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="eyebrow text-white/70">Auf einen Blick</p>
              <p className="mt-6 flex items-baseline gap-3">
                <span className="display text-[clamp(4.5rem,3rem+6vw,8.5rem)] leading-[0.85]">{fact.value}</span>
                {fact.unit && <span className="text-2xl tracking-tight">{fact.unit}</span>}
              </p>
              <p className="mt-5 max-w-sm leading-relaxed text-white/75">{fact.text}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Timeline fact={fact} />
            </div>
          </div>
        </div>
      </section>

      {/* Überblick + typische Anliegen */}
      <section aria-labelledby="ueberblick" className="bg-paper">
        <div className="frame">
          <div className="pad grid gap-14 py-20 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow gs-reveal">Überblick</p>
              <h2 id="ueberblick" className="display h-md gs-reveal mt-6">
                Was macht ein Anwalt für {area.title}?
              </h2>
              <div className="gs-reveal mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-ink-soft">
                {area.intro.split("\n\n").map((para, i) => (
                  <p key={i} className={i === 0 ? "text-ink" : ""}>
                    {para}
                  </p>
                ))}
              </div>

              <h2 className="display h-md gs-reveal mt-20">Typische Anliegen</h2>
              <ol className="gs-reveal mt-8 border-t border-line">
                {area.anliegen.map((item, i) => (
                  <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5">
                    <span className="text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="gs-reveal lg:sticky lg:top-28">
                <Link href={`/anwaelte/${lawyer.slug}`} className="group block border border-line bg-white/60 p-6 transition-colors hover:bg-white md:p-8">
                  <p className="text-xs uppercase tracking-[0.09em] text-muted">Ihre Ansprechperson</p>
                  <div className="mt-6 flex items-center gap-5">
                    <img src={lawyer.image} alt={lawyer.name} width="200" height="250" loading="lazy" className="h-[100px] w-[80px] object-cover" />
                    <div>
                      <p className="text-xl tracking-tight">{lawyer.name}</p>
                      <p className="mt-1 text-sm text-muted">{lawyer.tagline}</p>
                    </div>
                  </div>
                  <span className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm font-medium uppercase tracking-[0.05em]">
                    Zum Profil
                    <Icon name="arrowRight" className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <div data-theme="dark" className="mt-4 bg-night p-6 text-white md:p-8">
                  <p className="text-xl tracking-tight">Termin zum {area.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">In der Regel innerhalb von 48 Stunden – in Ochsenfurt oder Würzburg.</p>
                  <Button href="/kontakt" className="mt-6">
                    Termin vereinbaren
                  </Button>
                  <a href={mainPhone.phoneHref} className="mt-5 flex items-center gap-2 text-white/80 hover:text-white">
                    <Icon name="phone" className="h-4 w-4 text-accent-bright" />
                    {mainPhone.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-paper">
        <div className="frame border-t border-line">
          <div className="pad grid gap-12 py-20 md:py-28 lg:grid-cols-12">
            <div className="gs-reveal lg:col-span-5">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title" className="display h-lg mt-6">
                Häufige Fragen zum {area.title}
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                Die Antworten geben einen allgemeinen Überblick über die Rechtslage. Sie ersetzen keine Beratung im
                Einzelfall – dafür vereinbaren Sie am besten einen Termin in unserer Kanzlei.
              </p>
            </div>
            <div className="gs-reveal lg:col-span-7">
              <FaqAccordion faqs={area.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Weitere Rechtsgebiete */}
      <section aria-labelledby="weitere" className="bg-paper">
        <div className="frame border-t border-line">
          <div className="pad py-14 md:py-16">
            <h2 id="weitere" className="display h-md">
              Weitere Rechtsgebiete
            </h2>
          </div>
          <ul className="cells border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((item) => (
              <li key={item.slug} className="bg-paper">
                <Link href={`/rechtsgebiete/${item.slug}`} className="group flex h-full flex-col p-6 transition-colors hover:bg-white">
                  <img src={`${basePath}${item.image}`} alt="" width="1000" height="750" loading="lazy" className="mx-auto w-full max-w-[11rem] transition-transform duration-700 group-hover:scale-105" />
                  <span className="mt-4 flex items-center justify-between text-lg tracking-tight">
                    {item.title}
                    <Icon name="arrowUpRight" className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-16" />
        </div>
      </section>

      <CtaBanner title={`Beratung im ${area.title} vereinbaren`} />
    </>
  );
}
