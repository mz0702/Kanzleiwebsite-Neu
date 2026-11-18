import { useEffect } from "react";
import { useRouter } from "next/router";
import { Instrument_Sans } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import SmoothScroll from "@/components/shared/SmoothScroll";
import PasswordGate from "@/components/shared/PasswordGate";

// next/font lädt die Schrift beim Build herunter und liefert sie selbst aus —
// keine Verbindung zu Google-Servern beim Seitenaufruf (DSGVO).
const sans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Next.js setzt die Scrollposition nicht zurück, wenn zwei URLs auf dieselbe
  // dynamische Seite zeigen (z. B. /anwaelte/[slug] -> /anwaelte/[slug]).
  useEffect(() => {
    const scrollToTop = (url) => {
      if (url.includes("#")) return;
      if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    };
    router.events.on("routeChangeComplete", scrollToTop);
    return () => router.events.off("routeChangeComplete", scrollToTop);
  }, [router.events]);

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  // PasswordGate bleibt immer an derselben Stelle im Baum und entscheidet per
  // `bypass` selbst — bedingtes Weglassen würde bei jeder Navigation zwischen
  // /agentur-impressum und dem Rest alles darunter neu mounten (Lenis/GSAP-Race).
  return (
    <div className={`${sans.variable} font-sans`}>
      <PasswordGate bypass={router.pathname === "/agentur-impressum"}>
        <SmoothScroll>{getLayout(<Component {...pageProps} />)}</SmoothScroll>
      </PasswordGate>
    </div>
  );
}
