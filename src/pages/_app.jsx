import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Preloader from "@/components/shared/Preloader";
import PasswordGate from "@/components/shared/PasswordGate";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Next.js doesn't reset scroll when navigating between two URLs that
  // resolve to the same dynamic page (e.g. /anwaelte/[slug] -> /anwaelte/[slug]),
  // since the page component stays mounted. Force it to the top on every navigation.
  useEffect(() => {
    const scrollToTop = () => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };
    router.events.on("routeChangeComplete", scrollToTop);
    return () => router.events.off("routeChangeComplete", scrollToTop);
  }, [router.events]);

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  // Das Impressum der Vorschau-Sperre selbst (/agentur-impressum, ZIVION) muss
  // laut § 5 DDG von jeder Seite aus erreichbar sein — auch ohne Passwort. Das
  // echte Kanzlei-Impressum unter /impressum bleibt dagegen normal gesperrt und
  // ist erst erreichbar, sobald man tatsächlich auf der Website ist (Menü/Footer
  // nach dem Entsperren) — genau wie vom Kunden gewünscht.
  //
  // PasswordGate bleibt hier immer im Baum (gleiche Position, gleicher Typ) und
  // entscheidet selbst per `bypass`-Prop, ob es sperrt. Würde man stattdessen je
  // nach Route bedingt MIT/OHNE PasswordGate rendern, wechselt der Elementtyp an
  // dieser Stelle des Baums bei jeder Navigation zwischen der Bypass-Seite und
  // dem Rest der Seite — React unmountet dann Preloader/SmoothScroll/Navbar/
  // Footer komplett und mountet sie neu, was Lenis/GSAP in einen Race-Condition-
  // Zustand bringen kann (beobachtet als "Application error: a client-side
  // exception").
  return (
    <PasswordGate bypass={router.pathname === "/agentur-impressum"}>
      <Preloader />
      <SmoothScroll>
        {getLayout(<Component {...pageProps} />)}
      </SmoothScroll>
    </PasswordGate>
  );
}
