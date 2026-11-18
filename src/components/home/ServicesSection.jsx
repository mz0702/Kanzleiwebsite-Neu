import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";
import { basePath } from "@/lib/basePath";

// Reihenfolge = typischer Weg eines Mandats: erst Einschätzung, dann Einigung, nur wenn nötig Gericht.
const services = [
  {
    icon: "chat",
    image: "erstberatung",
    title: "Erstberatung",
    text: "Sie schildern uns Ihren Fall – wir hören zu und geben Ihnen eine erste, klare Einschätzung sowie eine Empfehlung für das weitere Vorgehen.",
  },
  {
    icon: "agreement",
    image: "aussergerichtliche-vertretung",
    title: "Außergerichtliche Vertretung",
    text: "Oft lässt sich eine gute Lösung auch ohne Gericht erzielen. Wir verhandeln für Sie und setzen auf pragmatische Einigungen.",
  },
  {
    icon: "scales",
    image: "vertretung-vor-gericht",
    title: "Vertretung vor Gericht",
    text: "Wenn eine gerichtliche Auseinandersetzung nötig wird, vertreten wir Sie konsequent und mit klarem Blick für Ihre Interessen.",
  },
];

export default function ServicesSection() {
  return (
    <section data-theme="dark" aria-labelledby="leistungen-title" className="relative overflow-hidden bg-night text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-56 h-[38rem] w-[38rem] rounded-full bg-accent/50 blur-[140px]" />
      <div className="frame relative">
        <div className="pad py-20 md:py-28">
          <SectionHeading id="leistungen-title" label="Leistungen" title="So unterstützen wir Sie">
            <p className="lead text-white/70">
              Von der ersten Einschätzung bis zur Vertretung vor Gericht – alles aus einer Hand.
            </p>
          </SectionHeading>
        </div>

        <ol className="cells border-t border-line md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="gs-reveal group bg-night p-6 md:p-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`${basePath}/images/${s.image}.webp`}
                  alt=""
                  width="1000"
                  height="666"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover brightness-[0.82] grayscale-[45%] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 bg-night px-2.5 py-1 text-xs text-white/70">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Icon name={s.icon} draw strokeWidth={1.25} className="h-9 w-9 shrink-0 text-accent-bright" />
                {i < services.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 border-t border-dashed border-white/20 md:block" />
                )}
              </div>
              <h3 className="mt-6 text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="h-16 md:h-24" />
      </div>
    </section>
  );
}
