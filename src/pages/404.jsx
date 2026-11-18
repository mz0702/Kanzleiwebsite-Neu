import Link from "next/link";
import Seo from "@/components/shared/Seo";
import Button from "@/components/shared/Button";
import { practiceAreas } from "@/data/practiceAreas";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Seite nicht gefunden — Wegner & Schöbener Rechtsanwälte"
        description="Die gesuchte Seite wurde verschoben, umbenannt oder existiert nicht mehr."
        path="/404/"
        noindex
      />
      <section className="bg-paper">
        <div className="frame">
          <div className="pad marks relative grid min-h-[80svh] content-end gap-10 pb-16 pt-32 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Fehler 404</p>
              <h1 className="display h-xl mt-6">Diese Seite gibt es nicht.</h1>
              <p className="lead mt-6 max-w-lg text-ink-soft">Die gesuchte Seite wurde verschoben, umbenannt oder existiert nicht mehr.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/">Zur Startseite</Button>
                <Button href="/kontakt" variant="ghost">
                  Kontakt
                </Button>
              </div>
            </div>
            <ul className="self-end border-t border-line lg:col-span-4 lg:col-start-9">
              {practiceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/rechtsgebiete/${a.slug}`} className="flex justify-between border-b border-line py-3 hover:text-accent">
                    {a.title} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
