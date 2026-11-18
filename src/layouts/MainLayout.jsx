import { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import OrganizationSchema from "@/components/shared/OrganizationSchema";

gsap.registerPlugin(ScrollTrigger);

// Ein zentraler Scroll-Reveal für alle `.gs-reveal`-Elemente der aktuellen Seite —
// statt einem Hook pro Sektion. `is-in` startet zusätzlich die CSS-Zeichnungen
// (Icons, Fristen-Zeitstrahl) innerhalb des Elements.
function useReveal() {
  const router = useRouter();
  const page = router.asPath.split("#")[0];

  useEffect(() => {
    const els = document.querySelectorAll(".gs-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const ctx = gsap.context(() => {
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
              onEnter: () => el.classList.add("is-in"),
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, [page]);
}

export default function MainLayout({ children }) {
  useReveal();
  return (
    <>
      <OrganizationSchema />
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="inhalt">{children}</main>
      <Footer />
    </>
  );
}
