import Link from "next/link";
import Icon from "@/components/shared/Icon";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import { site } from "@/data/site";
import { basePath } from "@/lib/basePath";

const columns = [
  {
    title: "Kanzlei",
    links: [
      { label: "Startseite", href: "/" },
      ...lawyers.map((l) => ({ label: l.name, href: `/anwaelte/${l.slug}` })),
      { label: "Ablauf", href: "/#ablauf" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtsgebiete",
    links: practiceAreas.map((a) => ({ label: a.title, href: `/rechtsgebiete/${a.slug}` })),
  },
];

const legal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Haftungsausschluss", href: "/haftungsausschluss" },
];

export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-night text-white">
      <div className="frame">
        <div className="pad grid gap-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={`${basePath}/logo-light.svg`} alt={site.name} width="306" height="97" loading="lazy" className="h-16 w-auto md:h-20" />
            <p className="mt-8 max-w-sm leading-relaxed text-white/65">
              Wir helfen Ihnen in allen juristischen Belangen weiter. Vertrauen, Kompetenz und Zusammenarbeit stehen
              für uns im Mittelpunkt.
            </p>
            <p className="mt-6 text-sm text-white/45">Rechtsanwälte in Ochsenfurt &amp; Würzburg</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-[1fr_1fr_1.35fr] lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-[0.09em] text-white/45">{col.title}</p>
                <ul className="mt-5 grid gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-u text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-xs uppercase tracking-[0.09em] text-white/45">Standorte</p>
              {site.locations.map((loc) => (
                <address key={loc.city} className="mt-5 not-italic leading-relaxed text-white/80">
                  <span className="text-white">Kanzlei {loc.city}</span>
                  <br />
                  {loc.street}
                  <br />
                  {loc.zip} {loc.city}
                  <a href={loc.phoneHref} className="mt-1 flex items-center gap-2 text-white hover:text-accent-bright">
                    <Icon name="phone" className="h-3.5 w-3.5" />
                    {loc.phone}
                  </a>
                </address>
              ))}
              <a href={`mailto:${site.email}`} className="mt-5 flex items-center gap-2 text-[0.9375rem] text-white/80 [overflow-wrap:anywhere] hover:text-white">
                <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        {/* Dekorative Wortmarke — kein Heading, die Seite hat ihre eigene Gliederung. */}
        <p aria-hidden="true" className="pad select-none overflow-hidden whitespace-nowrap border-t border-line pt-6 text-[9.6vw] font-medium pb-[0.12em] leading-[1] tracking-[-0.05em] text-accent 2xl:text-[10.6rem]">
          Wegner &amp; Schöbener
        </p>

        <div className="pad flex flex-col gap-4 border-t border-line py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <a href="https://www.zivion.de" target="_blank" rel="noopener noreferrer" className="font-medium text-accent-bright transition-colors hover:text-white">
              Made by ZIVION
            </a>
          </p>
          <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
