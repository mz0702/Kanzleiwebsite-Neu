import Seo from "@/components/shared/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import { ORG_ID } from "@/components/shared/OrganizationSchema";
import { site, mailtoTermin, routeUrl } from "@/data/site";

const steps = [
  { title: "Terminvereinbarung", text: "Rufen Sie uns an – wir vereinbaren in der Regel innerhalb von 48 Stunden einen persönlichen Termin." },
  { title: "Erstberatung", text: "Sie erläutern uns Ihren Fall, wir geben Ihnen eine Einschätzung und Empfehlung für das weitere Vorgehen." },
  { title: "Weiterer Verlauf", text: "Danach entscheiden Sie, ob Sie uns das Mandat erteilen und uns beauftragen möchten." },
];

const bring = [
  "Alle Schreiben, Bescheide und Verträge, die Ihr Anliegen betreffen",
  "Bei fristgebundenen Schreiben (z. B. Kündigung, Bußgeldbescheid): das Datum, an dem Sie es erhalten haben",
  "Falls vorhanden: die Angaben Ihrer Rechtsschutzversicherung",
];

export default function KontaktPage() {
  return (
    <>
      <Seo
        title="Kontakt & Termin | Wegner & Schöbener Ochsenfurt & Würzburg"
        description="Termin vereinbaren: Kanzlei Ochsenfurt (Marktbreiter Str. 1, 09331 981 99-0) und Kanzlei Würzburg (Marktgasse 9, 0931 166 33) – meist innerhalb von 48 Stunden."
        path="/kontakt/"
        schema={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Kontakt", about: { "@id": ORG_ID } }}
      />

      <section className="bg-paper">
        <div className="frame">
          <div className="pad grid gap-10 pb-16 pt-28 md:pb-20 md:pt-36 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Breadcrumbs path="/kontakt/" items={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]} />
              <p className="eyebrow hero-in mt-10" style={{ "--d": "0.05s" }}>
                Kontakt
              </p>
              <h1 className="display h-xl hero-in mt-6" style={{ "--d": "0.15s" }}>
                Termin vereinbaren
              </h1>
            </div>
            <p className="lead hero-in text-ink-soft lg:col-span-4" style={{ "--d": "0.3s" }}>
              Rufen Sie uns an oder schreiben Sie uns – wir vereinbaren in der Regel innerhalb von 48 Stunden einen
              persönlichen Termin in Ochsenfurt oder Würzburg.
            </p>
          </div>

          {/* Standorte */}
          <ul className="cells border-t border-line md:grid-cols-2">
            {site.locations.map((loc) => (
              <li key={loc.city} className="gs-reveal flex flex-col bg-paper p-6 md:p-10">
                <p className="eyebrow">Kanzlei {loc.city}</p>
                <address className="mt-8 text-2xl not-italic leading-snug tracking-tight md:text-3xl">
                  {loc.street}
                  {loc.note && <span className="text-muted"> ({loc.note})</span>}
                  <br />
                  {loc.zip} {loc.city}
                </address>
                <dl className="mt-10 grid gap-0 border-t border-line">
                  <div className="flex items-center justify-between gap-4 border-b border-line py-4">
                    <dt className="flex items-center gap-3 text-sm text-muted">
                      <Icon name="phone" className="h-4 w-4 text-accent" /> Telefon
                    </dt>
                    <dd>
                      <a href={loc.phoneHref} className="link-u text-xl tracking-tight">
                        {loc.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-line py-4">
                    <dt className="flex items-center gap-3 text-sm text-muted">
                      <Icon name="fax" className="h-4 w-4 text-accent" /> Fax
                    </dt>
                    <dd className="text-xl tracking-tight">{loc.fax}</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={loc.phoneHref} icon="phone" arrow={false}>
                    Anrufen
                  </Button>
                  <Button href={routeUrl(loc)} variant="ghost">
                    Route planen
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          {/* E-Mail + Vorbereitung */}
          <div className="cells border-t border-line lg:grid-cols-2">
            <div data-theme="dark" className="gs-reveal bg-night p-6 text-white md:p-10">
              <p className="eyebrow text-white/70">E-Mail</p>
              <a href={`mailto:${site.email}`} className="mt-8 block break-all text-2xl tracking-tight md:text-3xl">
                {site.email}
              </a>
              <p className="mt-6 max-w-md leading-relaxed text-white/70">
                Nennen Sie uns kurz Ihr Rechtsgebiet und wie wir Sie am besten erreichen – wir melden uns zur
                Terminabstimmung bei Ihnen.
              </p>
              <Button href={mailtoTermin} variant="light" icon="mail" className="mt-8">
                E-Mail-Anfrage
              </Button>
              <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-white/55">
                Läuft bereits eine Frist – etwa nach einer Kündigung oder einem Bußgeldbescheid? Dann rufen Sie uns
                bitte direkt an.
              </p>
            </div>
            <div className="gs-reveal bg-paper p-6 md:p-10">
              <p className="eyebrow">Zum Termin</p>
              <h2 className="display h-md mt-8">Was Sie mitbringen sollten</h2>
              <ul className="mt-8 border-t border-line">
                {bring.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-line py-4 leading-relaxed">
                    <Icon name="docCheck" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ablauf */}
          <div className="pad border-t border-line py-14 md:py-16">
            <h2 className="display h-md">So geht es weiter</h2>
          </div>
          <ol className="cells border-t border-line md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="gs-reveal bg-paper p-6 md:p-10">
                <span className="display text-6xl leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="h-20 md:h-28" />
        </div>
      </section>
    </>
  );
}
