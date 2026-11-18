import Link from "next/link";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import { practiceAreas } from "@/data/practiceAreas";
import { mainPhone } from "@/data/site";
import { basePath } from "@/lib/basePath";

const headline = "Ihre Rechtsanwälte in Ochsenfurt & Würzburg";

export default function HeroSection() {
  return (
    <section data-theme="dark" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-white">
      <div className="absolute inset-0">
        <img
          src={`${basePath}/images/hero.webp`}
          alt=""
          width="1264"
          height="842"
          fetchpriority="high"
          className="hero-img h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-night/20 to-transparent" />
      </div>

      <div className="frame relative flex flex-1 flex-col">
        <div className="pad flex flex-1 flex-col justify-end pb-12 pt-32 md:pb-16">
          <p className="eyebrow hero-in text-white/80" style={{ "--d": "0.1s" }}>
            Wegner &amp; Schöbener Rechtsanwälte
          </p>
          {/* Wörter einzeln maskiert; Text bleibt als normaler H1-Inhalt lesbar. */}
          <h1 className="display h-xl mt-6 max-w-[15ch]">
            {headline.split(" ").map((word, i) => (
              <span key={i}>
                <span className="word">
                  <span style={{ "--i": i }}>{word}</span>
                </span>{" "}
              </span>
            ))}
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="lead hero-in max-w-xl text-white/80 md:col-span-7 lg:col-span-6" style={{ "--d": "0.65s" }}>
              Wir helfen Ihnen in allen juristischen Belangen weiter – persönlich, verständlich und mit über 20 Jahren
              Kanzleierfahrung.
            </p>
            <div className="hero-in flex flex-wrap gap-3 md:col-span-5 md:justify-end lg:col-span-6" style={{ "--d": "0.8s" }}>
              <Button href="/kontakt">Termin vereinbaren</Button>
              <Button href={mainPhone.phoneHref} variant="ghost" icon="phone" arrow={false}>
                {mainPhone.phone}
              </Button>
            </div>
          </div>
        </div>

        {/* Schnellzugriff: die sechs Rechtsgebiete direkt im ersten Bildschirm. */}
        <nav aria-label="Rechtsgebiete" className="hero-in border-t border-line" style={{ "--d": "1s" }}>
          <ul className="cells grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {practiceAreas.map((area, i) => (
              <li key={area.slug} className="bg-night">
                <Link href={`/rechtsgebiete/${area.slug}`} className="group flex items-center justify-between gap-2 px-4 py-4 transition-colors hover:bg-white/[0.06] md:px-6 md:py-5">
                  <span className="flex items-baseline gap-3">
                    <span className="hidden text-xs text-white/40 sm:inline">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[0.95rem] tracking-tight md:text-base">{area.title}</span>
                  </span>
                  <Icon name="arrowUpRight" className="h-4 w-4 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
