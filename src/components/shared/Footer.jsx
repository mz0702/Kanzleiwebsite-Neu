import Link from "next/link";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";

const mainLinks = [
  { label: "Home", href: "/" },
  ...lawyers.map((lawyer) => ({ label: lawyer.name, href: `/anwaelte/${lawyer.slug}` })),
];

export default function Footer() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Col 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Wegner &amp; Schöbener Rechtsanwälte</h4>
            <p className="text-gray-400 text-sm max-w-xs">
              Wir helfen Ihnen in allen juristischen Belangen weiter. Vertrauen, Kompetenz und
              Zusammenarbeit stehen für uns im Mittelpunkt.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-4 mt-8">Rechtsgebiete</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-400">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/rechtsgebiete/${area.slug}`}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontakt</h4>
            <div className="space-y-4 text-gray-400 mb-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Ochsenfurt</p>
                <p>Marktbreiter Str. 1</p>
                <p>97199 Ochsenfurt</p>
                <a href="tel:+499331981990" className="block hover:text-brand-primary transition-colors mt-1">
                  09331 - 981 99 - 0
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Würzburg</p>
                <p>Marktgasse 9</p>
                <p>97070 Würzburg</p>
                <a href="tel:+4993116633" className="block hover:text-brand-primary transition-colors mt-1">
                  0931 - 166 33
                </a>
              </div>
            </div>
            <a
              href="mailto:kanzlei@wegner-schoebener.de"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white hover:text-brand-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              E-Mail schreiben
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 pb-4 flex justify-center md:justify-end">
          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 hover:border-brand-primary hover:bg-brand-primary hover:text-brand-dark transition-all"
            aria-label="Nach oben"
          >
            <span className="text-sm font-medium">Nach oben</span>
            <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* WEGNER & SCHÖBENER full-width */}
      <div className="w-full flex flex-col items-center overflow-hidden leading-none mt-4 px-4">
        <h2 className="text-brand-primary font-bold tracking-tight whitespace-nowrap leading-[0.85] pt-[0.15em] text-[clamp(1.75rem,8vw,8rem)]">
          WEGNER &amp; SCHÖBENER
        </h2>
        <p className="text-gray-400 tracking-[0.3em] uppercase text-xs sm:text-sm mt-3">
          Rechtsanwälte
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 pt-6 border-t border-white/5 gap-4">
          <p>&copy; 2026 Wegner &amp; Schöbener Rechtsanwälte. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Haftungsausschluss</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
