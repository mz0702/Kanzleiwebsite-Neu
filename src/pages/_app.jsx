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
  const content = (
    <>
      <Preloader />
      <SmoothScroll>
        {getLayout(<Component {...pageProps} />)}
      </SmoothScroll>
    </>
  );

  // Das Impressum muss laut § 5 DDG von jeder Seite aus erreichbar sein — auch
  // von einer passwortgeschützten Vorschau. Einzige Ausnahme von der Sperre.
  const isImpressum = router.pathname === "/impressum";
  return isImpressum ? content : <PasswordGate>{content}</PasswordGate>;
}
