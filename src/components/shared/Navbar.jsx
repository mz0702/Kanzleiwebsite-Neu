import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";
import Button from "@/components/shared/Button";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import { basePath } from "@/lib/basePath";

// Two groups so the menu keeps a real hierarchy instead of flattening every
// link to the same weight: Kanzlei (who) first, Rechtsgebiete (what) second,
// styled smaller since it's the secondary tier. Impressum sits directly in the
// top-tier list (not in the smaller secondary group below) so it's visible the
// instant the menu opens, no scrolling required — it kept getting missed when
// it was a smaller link further down. Datenschutz/Haftungsausschluss stay
// footer-only — standard placement, not "subpages" in the sense of site content.
const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Impressum", href: "/impressum" },
  ...lawyers.map((lawyer) => ({ label: lawyer.name, href: `/anwaelte/${lawyer.slug}` })),
];

const areaLinks = practiceAreas.map((area) => ({
  label: area.title,
  href: `/rechtsgebiete/${area.slug}`,
}));

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const btnRef = useRef(null);
  const navRef = useRef(null);
  const lineIconRef = useRef(null);
  const closeIconRef = useRef(null);
  const itemsRef = useRef([]);

  // router.pathname is the file-based route pattern (e.g. "/anwaelte/[slug]") for
  // dynamic routes, never the real URL — asPath is the actual resolved path.
  const isActive = (href) => {
    if (href === "/") return router.asPath === "/";
    return router.asPath === href || router.asPath.startsWith(href + "/");
  };

  const addItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
  };

  // Establish the hidden entrance state once, purely via GSAP (matches the
  // rest of the site's reveal pattern) — the clip-path already keeps this
  // invisible on first paint, so there's nothing to flash.
  useEffect(() => {
    gsap.set(itemsRef.current, { x: -60, opacity: 0 });
  }, []);

  // Lock body scroll while the menu is open. body{overflow:hidden} alone doesn't
  // stop Lenis (it scrolls the document programmatically) and iOS Safari ignores
  // it for touch, so stop the smooth-scroll instance too.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.lenis?.stop();
    else window.lenis?.start();
    return () => {
      document.body.style.overflow = "";
      window.lenis?.start();
    };
  }, [open]);

  const getBtnCenter = () => {
    const btnRect = btnRef.current.getBoundingClientRect();
    return { cx: btnRect.left + btnRect.width / 2, cy: btnRect.top + btnRect.height / 2 };
  };

  const openMenu = () => {
    if (openRef.current) return;
    const { cx, cy } = getBtnCenter();
    const radius = Math.hypot(window.innerWidth, window.innerHeight);

    gsap.set(btnRef.current, { pointerEvents: "none" });
    gsap
      .timeline({ onComplete: () => gsap.set(btnRef.current, { pointerEvents: "all" }) })
      .fromTo(
        navRef.current,
        { clipPath: `circle(0px at ${cx}px ${cy}px)` },
        { clipPath: `circle(${radius}px at ${cx}px ${cy}px)`, duration: 1.2, ease: "power4.out" },
        0
      )
      .fromTo(
        itemsRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "elastic.out(1.1, 0.85)" },
        0.15
      )
      .to(closeIconRef.current, { opacity: 1, yPercent: -125, duration: 0.7, ease: "power4.out" }, 0)
      .to(lineIconRef.current, { opacity: 0, yPercent: -125, duration: 0.7, ease: "power4.out" }, 0);

    openRef.current = true;
    setOpen(true);
  };

  const closeMenu = () => {
    if (!openRef.current) return;
    const { cx, cy } = getBtnCenter();

    gsap.set(btnRef.current, { pointerEvents: "none" });
    gsap
      .timeline({ onComplete: () => gsap.set(btnRef.current, { pointerEvents: "all" }) })
      .to(itemsRef.current, { x: -60, opacity: 0, duration: 0.5, stagger: 0.04, ease: "power4.out" }, 0)
      .to(navRef.current, { clipPath: `circle(0px at ${cx}px ${cy}px)`, duration: 0.9, ease: "power4.out" }, "-=0.6")
      .to(closeIconRef.current, { opacity: 0, yPercent: 125, duration: 0.6, ease: "power4.out" }, 0)
      .to(lineIconRef.current, { opacity: 1, yPercent: 0, duration: 0.6, ease: "power4.out" }, 0);

    openRef.current = false;
    setOpen(false);
  };

  const toggleMenu = () => (openRef.current ? closeMenu() : openMenu());

  // Close (with the same animation) on route change
  useEffect(() => {
    router.events.on("routeChangeStart", closeMenu);
    return () => router.events.off("routeChangeStart", closeMenu);
  }, [router.events]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4">
          <div className="relative dark-glass rounded-full flex items-center justify-between h-16 sm:h-20 pl-3 pr-3 sm:pl-4 sm:pr-4">
            {/* Trigger button */}
            <button
              ref={btnRef}
              onClick={toggleMenu}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-primary flex items-center justify-center shrink-0 overflow-hidden hover:bg-white transition-colors duration-300 group"
            >
              <svg
                ref={lineIconRef}
                className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:text-brand-primary transition-colors"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
              <svg
                ref={closeIconRef}
                className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:text-brand-primary transition-colors opacity-0"
                style={{ transform: "translateY(125%)" }}
                viewBox="0 0 320 512"
                fill="currentColor"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </button>

            {/* Logo — centered */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <img src={`${basePath}/logo-light.svg`} alt="Logo" className="h-11 sm:h-14 w-auto" />
            </Link>

            {/* CTA */}
            <div className="shrink-0">
              <Button
                href="mailto:kanzlei@wegner-schoebener.de"
                variant="primary"
                size="md"
                radius="rounded"
                className="hidden sm:inline-flex"
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen circular-reveal menu */}
      <nav
        ref={navRef}
        aria-hidden={!open}
        data-lenis-prevent
        className="fixed inset-0 z-[90] bg-brand-dark text-white overflow-y-auto overscroll-contain"
        style={{ clipPath: "circle(0px at 0px 0px)" }}
      >
        <div className="min-h-full flex items-center justify-center px-6 sm:px-10 py-20 sm:py-24">
          <div className="w-full max-w-4xl">
            <ul className="flex flex-col">
              {mainLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.label} ref={addItemRef}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`nav-link inline-block py-2 sm:py-3 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight transition-colors duration-300 ${
                        active ? "text-brand-primary" : "text-white/50 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Rechtsgebiete
              </div>
              <ul className="flex flex-col">
                {areaLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.label} ref={addItemRef}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`nav-link inline-block py-1.5 sm:py-2 text-base sm:text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${
                          active ? "text-brand-primary" : "text-white/50 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-10 sm:mt-14 pt-8 border-t border-white/10 sm:hidden">
              <Button href="mailto:kanzlei@wegner-schoebener.de" variant="primary" size="md" radius="rounded" fullWidth>
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
