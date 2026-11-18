import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import { site } from "@/data/site";
import { basePath } from "@/lib/basePath";

export default function CtaBanner({
  label = "Termin vereinbaren",
  title = "Lassen Sie uns über Ihr Anliegen sprechen",
  text = "Rufen Sie uns an – wir vereinbaren einen persönlichen Termin innerhalb von 48 Stunden.",
}) {
  return (
    <section data-theme="dark" aria-labelledby="cta-title" className="relative overflow-hidden bg-night text-white">
      <img src={`${basePath}/images/archiv.webp`} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/50" />
      <div className="frame relative">
        <div className="pad grid gap-14 py-24 md:py-32 lg:grid-cols-12 lg:items-end">
          <div className="gs-reveal lg:col-span-7">
            <p className="eyebrow text-white/70">{label}</p>
            <h2 id="cta-title" className="display h-lg mt-6 max-w-[16ch]">
              {title}
            </h2>
            <p className="lead mt-6 max-w-xl text-white/75">{text}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/kontakt">Termin vereinbaren</Button>
              <Button href={`mailto:${site.email}`} variant="ghost" icon="mail" arrow={false}>
                E-Mail schreiben
              </Button>
            </div>
          </div>
          <div className="gs-reveal lg:col-span-4 lg:col-start-9">
            {site.locations.map((loc) => (
              <a key={loc.city} href={loc.phoneHref} className="group flex items-center justify-between gap-4 border-t border-line py-5 last:border-b">
                <span>
                  <span className="block text-xs uppercase tracking-[0.09em] text-white/50">Kanzlei {loc.city}</span>
                  <span className="mt-1 block text-2xl tracking-tight">{loc.phone}</span>
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
              </a>
            ))}
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              Läuft bereits eine Frist – etwa nach einer Kündigung oder einem Bußgeldbescheid? Dann rufen Sie uns bitte
              direkt an.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
