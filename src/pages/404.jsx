import Head from "next/head";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { basePath } from "@/lib/basePath";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Seite nicht gefunden — Wegner &amp; Schöbener Rechtsanwälte</title>
      </Head>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/images/Hero Background.jpg`}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-6 justify-center text-gray-300">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Error 404
            </div>

            <h1 className="text-[30vw] sm:text-[22vw] md:text-[18vw] lg:text-[220px] font-bold leading-none text-brand-primary tracking-tighter mb-4">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Diese Seite gibt es nicht
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto text-base sm:text-lg">
              Die gesuchte Seite wurde verschoben, umbenannt oder existiert nicht mehr.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/" variant="primary" size="lg" radius="pill">
                Zur Startseite
              </Button>
              <Link
                href="mailto:kanzlei@wegner-schoebener.de"
                className="text-sm font-semibold text-white border-b border-white/30 pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                Oder Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
