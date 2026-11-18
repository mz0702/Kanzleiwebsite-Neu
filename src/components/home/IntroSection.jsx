import Icon from "@/components/shared/Icon";

const facts = [
  { value: "48 h", icon: "clock", title: "Termin innerhalb von 48 Stunden", text: "Schnell einen persönlichen Gesprächstermin bekommen." },
  { value: "20+", icon: "columns", title: "Jahre Kanzleierfahrung", text: "Langjährige Praxis in allen Rechtsgebieten der Kanzlei." },
  { value: "6", icon: "layers", title: "Rechtsgebiete", text: "Von Erbrecht bis Verkehrsrecht – jeweils mit fester Ansprechperson." },
  { value: "2", icon: "pin", title: "Standorte", text: "Persönlich für Sie da in Ochsenfurt und in Würzburg." },
];

export default function IntroSection() {
  return (
    <section aria-labelledby="intro-title" className="bg-paper">
      <div className="frame">
        <div className="pad marks relative py-28 text-center md:py-40">
          <p className="eyebrow gs-reveal">Unser Anspruch</p>
          <h2 id="intro-title" className="display h-lg gs-reveal mx-auto mt-8 max-w-[20ch] text-accent">
            Vertrauen, Kompetenz und Zusammenarbeit stehen für uns im Mittelpunkt.
          </h2>
          <p className="lead gs-reveal mx-auto mt-8 max-w-xl text-ink-soft">
            Zufrieden sind wir dann, wenn wir die beste Lösung für Sie gefunden haben.
          </p>
        </div>

        <ul className="cells border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <li key={fact.title} className="gs-reveal flex flex-col bg-paper p-6 md:p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <Icon name={fact.icon} draw strokeWidth={1.25} className="h-10 w-10 text-accent" />
                <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="display mt-8 text-[clamp(3.25rem,2.4rem+3vw,5.5rem)] leading-none md:mt-14">{fact.value}</p>
              <h3 className="mt-5 text-lg tracking-tight">{fact.title}</h3>
              <p className="mt-2 text-ink-soft">{fact.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
