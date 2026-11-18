import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";

const areaSlug = (title) => practiceAreas.find((a) => a.title === title).slug;

export default function TeamSection() {
  return (
    <section id="anwaelte" aria-labelledby="anwaelte-title" className="bg-paper">
      <div className="frame">
        <div className="pad py-20 md:py-28">
          <SectionHeading id="anwaelte-title" label="Unsere Anwälte" title="Fachanwaltliche Beratung auf hohem Niveau">
            <p className="lead text-ink-soft">
              Lernen Sie unser Team und seine Rechtsgebiete kennen – jedes Rechtsgebiet hat bei uns eine feste
              Ansprechperson.
            </p>
          </SectionHeading>
        </div>

        <ul className="cells border-t border-line md:grid-cols-3">
          {lawyers.map((lawyer, i) => (
            <li key={lawyer.slug} className="gs-reveal flex flex-col bg-paper p-6 md:p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <Link href={`/anwaelte/${lawyer.slug}`} tabIndex={-1} aria-hidden="true" className="group block bg-paper-2 p-2">
                  <img
                    src={lawyer.image}
                    alt=""
                    width="200"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="h-[150px] w-[120px] object-cover grayscale-[30%] transition duration-500 group-hover:grayscale-0 md:h-[175px] md:w-[140px]"
                  />
                </Link>
                <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-10 text-xs uppercase tracking-[0.09em] text-muted">{lawyer.role}</p>
              <h3 className="mt-2 text-[1.75rem] tracking-tight">
                <Link href={`/anwaelte/${lawyer.slug}`} className="link-u">
                  {lawyer.name}
                </Link>
              </h3>
              <p className="mb-8 mt-4 leading-relaxed text-ink-soft">{lawyer.intro}</p>
              <div className="mt-auto">
                <ul className="flex flex-wrap gap-2">
                  {lawyer.specialties.map((s) => (
                    <li key={s.title}>
                      <Link
                        href={`/rechtsgebiete/${areaSlug(s.title)}`}
                        className="inline-flex rounded-full px-3.5 py-1.5 text-sm ring-1 ring-inset ring-[color:var(--line-strong)] transition-colors hover:bg-accent hover:text-white hover:ring-accent"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/anwaelte/${lawyer.slug}`} className="group mt-8 flex items-center justify-between border-t border-line pt-5 text-sm font-medium uppercase tracking-[0.05em]">
                  Zum Profil
                  <Icon name="arrowRight" className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
