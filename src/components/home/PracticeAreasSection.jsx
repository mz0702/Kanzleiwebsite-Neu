import Link from "next/link";
import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";
import { practiceAreas } from "@/data/practiceAreas";
import { lawyers } from "@/data/lawyers";
import { basePath } from "@/lib/basePath";

const lawyerOf = (slug) => lawyers.find((l) => l.slug === slug);
const lawyerName = (slug) => lawyerOf(slug).name;
const contactLabel = (slug) => (lawyerOf(slug).role === "Rechtsanwältin" ? "Ansprechpartnerin" : "Ansprechpartner");

export default function PracticeAreasSection() {
  return (
    <section id="rechtsgebiete" aria-labelledby="rechtsgebiete-title" className="bg-paper">
      <div className="frame border-t border-line">
        <div className="pad py-20 md:py-28">
          <SectionHeading id="rechtsgebiete-title" label="Rechtsgebiete" title="Unsere Fachgebiete auf einen Blick">
            <p className="lead text-ink-soft">
              Wählen Sie Ihr Rechtsgebiet: Sie erfahren, wobei wir helfen, welche Fristen gelten und wer Sie bei uns
              berät.
            </p>
            <Button href="/kontakt" variant="dark" className="mt-8">
              Termin vereinbaren
            </Button>
          </SectionHeading>
        </div>

        <ul className="cells border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => (
            <li key={area.slug} className="gs-reveal bg-paper">
              <Link href={`/rechtsgebiete/${area.slug}`} className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-white md:p-8">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-inset ring-[color:var(--line-strong)] transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </span>
                </div>
                <img
                  src={`${basePath}${area.image}`}
                  alt=""
                  width="1000"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto my-2 w-full max-w-[17rem] transition-transform sm:max-w-[23rem] duration-700 ease-out group-hover:scale-[1.04]"
                />
                <h3 className="text-2xl tracking-tight md:text-[1.75rem]">{area.title}</h3>
                <p className="mb-7 mt-3 text-ink-soft">{area.description}</p>
                <p className="mt-auto border-t border-line pt-5 text-sm text-muted">
                  {contactLabel(area.lawyerSlug)}: <span className="text-ink">{lawyerName(area.lawyerSlug)}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
