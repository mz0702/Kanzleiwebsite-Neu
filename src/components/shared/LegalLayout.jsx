import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function LegalLayout({ title, updatedAt, sections, breadcrumbLabel, path }) {
  return (
    <section className="bg-paper">
      <div className="frame">
        <div className="pad pb-14 pt-28 md:pb-20 md:pt-36">
          <Breadcrumbs path={path} items={[{ label: "Startseite", href: "/" }, { label: breadcrumbLabel || title }]} />
          <p className="eyebrow mt-10">Rechtliches</p>
          <h1 className="display h-xl mt-6">{title}</h1>
          <p className="mt-6 text-muted">Zuletzt aktualisiert am {updatedAt}.</p>
        </div>

        <div className="pad grid gap-12 border-t border-line py-16 md:py-20 lg:grid-cols-12">
          <nav aria-label="Inhaltsverzeichnis" className="self-start lg:sticky lg:top-28 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.09em] text-muted">Inhalt</p>
            <ol className="mt-4 grid gap-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#abschnitt-${i + 1}`} className="text-ink-soft transition-colors hover:text-accent">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl lg:col-span-8 lg:col-start-5">
            {sections.map((s, i) => (
              <div key={s.title} id={`abschnitt-${i + 1}`} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
                <h2 className="text-2xl tracking-tight md:text-3xl">
                  {i + 1}. {s.title}
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
