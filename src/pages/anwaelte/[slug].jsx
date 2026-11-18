import Link from "next/link";
import Seo from "@/components/shared/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import CtaBanner from "@/components/shared/CtaBanner";
import Icon from "@/components/shared/Icon";
import { ORG_ID } from "@/components/shared/OrganizationSchema";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import { mainPhone } from "@/data/site";
import { basePath, absoluteUrl } from "@/lib/basePath";

export function getStaticPaths() {
  return { paths: lawyers.map((l) => ({ params: { slug: l.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { lawyer: lawyers.find((l) => l.slug === params.slug) } };
}

export default function LawyerPage({ lawyer }) {
  const path = `/anwaelte/${lawyer.slug}/`;
  const others = lawyers.filter((l) => l.slug !== lawyer.slug);
  const areas = lawyer.specialties.map((s) => ({ ...s, area: practiceAreas.find((a) => a.title === s.title) }));
  // Erster Satz statt ganzem Absatz — sonst schneidet Google die Description mitten im Satz ab.
  const description = `${lawyer.intro.split(". ")[0]}.`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: lawyer.name,
    jobTitle: lawyer.role,
    description: lawyer.intro,
    image: absoluteUrl(lawyer.image),
    url: absoluteUrl(path),
    knowsAbout: lawyer.specialties.map((s) => s.title),
    worksFor: { "@id": ORG_ID },
    workLocation: { "@type": "Place", name: "Ochsenfurt" },
  };

  return (
    <>
      <Seo
        title={`${lawyer.name} – ${lawyer.tagline} in Ochsenfurt`}
        description={description}
        path={path}
        type="profile"
        schema={personSchema}
      />

      {/* Hero */}
      <section className="bg-paper">
        <div className="frame">
          <div className="pad grid gap-12 pb-16 pt-28 md:pb-20 md:pt-36 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Breadcrumbs
                path={path}
                items={[
                  { label: "Startseite", href: "/" },
                  { label: "Anwälte", href: "/#anwaelte" },
                  { label: lawyer.name },
                ]}
              />
              <p className="eyebrow hero-in mt-10" style={{ "--d": "0.05s" }}>
                {lawyer.role} · {lawyer.tagline}
              </p>
              <h1 className="display h-xl hero-in mt-6" style={{ "--d": "0.15s" }}>
                {lawyer.name}
              </h1>
              <p className="lead hero-in mt-8 max-w-2xl text-ink-soft" style={{ "--d": "0.3s" }}>
                {lawyer.intro}
              </p>
              <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ "--d": "0.45s" }}>
                <Button href="/kontakt">Termin vereinbaren</Button>
                <Button href={mainPhone.phoneHref} variant="ghost" icon="phone" arrow={false}>
                  {mainPhone.phone}
                </Button>
              </div>
            </div>
            <div className="hero-in lg:col-span-3 lg:col-start-10" style={{ "--d": "0.25s" }}>
              <div className="marks relative w-fit border border-line bg-paper-2 p-3">
                <img src={lawyer.image} alt={`Porträt von ${lawyer.name}`} width="200" height="250" className="h-[250px] w-[200px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fachgebiete */}
      <section aria-labelledby="fachgebiete" className="bg-paper">
        <div className="frame border-t border-line">
          <div className="pad py-14 md:py-16">
            <p className="eyebrow">Fachgebiete</p>
            <h2 id="fachgebiete" className="display h-md mt-5">
              Rechtsgebiete von {lawyer.name}
            </h2>
          </div>
          <ul className="cells border-t border-line md:grid-cols-2">
            {areas.map(({ title, description: text, area }) => (
              <li key={title} className="gs-reveal bg-paper">
                <Link href={`/rechtsgebiete/${area.slug}`} className="group grid h-full items-center gap-6 p-6 transition-colors hover:bg-white sm:grid-cols-[1fr_12rem] md:p-10">
                  <div>
                    <h3 className="text-[1.75rem] tracking-tight">{title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.05em] text-accent">
                      Mehr zum {title}
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <img src={`${basePath}${area.image}`} alt="" width="1000" height="750" loading="lazy" className="w-full max-w-[14rem] transition-transform duration-700 group-hover:scale-105" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Werdegang */}
      {lawyer.timeline?.length > 0 && (
        <section aria-labelledby="werdegang" className="bg-paper">
          <div className="frame border-t border-line">
            <div className="pad grid gap-12 py-20 md:py-28 lg:grid-cols-12">
              <div className="gs-reveal lg:col-span-4">
                <p className="eyebrow">Über mich</p>
                <h2 id="werdegang" className="display h-lg mt-6">
                  Werdegang
                </h2>
              </div>
              <ol className="lg:col-span-8">
                {lawyer.timeline.map((item, i) => (
                  <li key={i} className="gs-reveal grid grid-cols-[7.5rem_1fr] gap-6 border-t border-line py-6 last:border-b md:grid-cols-[10rem_1fr]">
                    <span className="text-lg tracking-tight text-accent tabular-nums">{item.year}</span>
                    <span>
                      <span className="block text-lg tracking-tight">{item.title}</span>
                      {item.description && <span className="mt-1 block text-sm text-muted">{item.description}</span>}
                    </span>
                  </li>
                ))}
              </ol>

              {lawyer.memberships?.length > 0 && (
                <>
                  <div className="gs-reveal lg:col-span-4">
                    <h2 className="display h-md">Mitgliedschaften &amp; Ämter</h2>
                  </div>
                  <ul className="gs-reveal lg:col-span-8">
                    {lawyer.memberships.map((m) => (
                      <li key={m} className="flex gap-4 border-t border-line py-5 leading-relaxed last:border-b">
                        <span className="mt-2.5 h-[7px] w-[7px] shrink-0 bg-accent" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Weitere Anwälte */}
      <section aria-labelledby="team" className="bg-paper">
        <div className="frame border-t border-line">
          <div className="pad py-14 md:py-16">
            <h2 id="team" className="display h-md">
              Weitere Anwälte der Kanzlei
            </h2>
          </div>
          <ul className="cells border-t border-line md:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug} className="bg-paper">
                <Link href={`/anwaelte/${item.slug}`} className="group flex items-center gap-6 p-6 transition-colors hover:bg-white md:p-8">
                  <img src={item.image} alt="" width="200" height="250" loading="lazy" className="h-[100px] w-[80px] object-cover grayscale-[30%] transition group-hover:grayscale-0" />
                  <span className="flex-1">
                    <span className="block text-2xl tracking-tight">{item.name}</span>
                    <span className="mt-1 block text-sm text-muted">{item.tagline}</span>
                  </span>
                  <Icon name="arrowUpRight" className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-16" />
        </div>
      </section>

      <CtaBanner title={`Termin bei ${lawyer.name} vereinbaren`} />
    </>
  );
}
