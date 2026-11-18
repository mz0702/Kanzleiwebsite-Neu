import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import { mainPhone, site } from "@/data/site";
import { basePath } from "@/lib/basePath";

const lawyerName = (slug) => lawyers.find((l) => l.slug === slug).name;

const menus = [
  {
    label: "Rechtsgebiete",
    href: "/#rechtsgebiete",
    items: practiceAreas.map((a) => ({ label: a.title, meta: lawyerName(a.lawyerSlug), href: `/rechtsgebiete/${a.slug}` })),
  },
  {
    label: "Anwälte",
    href: "/#anwaelte",
    items: lawyers.map((l) => ({ label: l.name, meta: l.tagline, href: `/anwaelte/${l.slug}` })),
  },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const router = useRouter();
  const headerRef = useRef(null);
  const [onDark, setOnDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Welche Sektion liegt gerade unter der Kopfzeile? Deren data-theme bestimmt,
  // ob Logo und Links hell oder dunkel sind (wie in der Referenz).
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const header = headerRef.current;
      if (!header) return;
      const under = document
        .elementsFromPoint(window.innerWidth / 2, header.offsetHeight / 2)
        .find((el) => !header.contains(el));
      setOnDark(under?.closest("[data-theme]")?.dataset.theme === "dark");
      setScrolled(window.scrollY > 24);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const afterRoute = () => setTimeout(update, 60);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    router.events.on("routeChangeComplete", afterRoute);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      router.events.off("routeChangeComplete", afterRoute);
    };
  }, [router.events]);

  // Menü schließen + Fokus lösen (sonst bleibt ein Hover-Dropdown via :focus-within offen).
  useEffect(() => {
    const close = () => {
      setOpen(false);
      document.activeElement?.blur?.();
    };
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  // Scroll-Sperre fürs mobile Menü: overflow allein stoppt Lenis und iOS nicht.
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    window.lenis?.stop();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = onDark || open;

  return (
    <>
      <header
        ref={headerRef}
        data-theme={dark ? "dark" : "light"}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${dark ? "text-white" : "text-ink"}`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 border-b border-line backdrop-blur-md transition-opacity duration-300 ${
            scrolled && !open ? "opacity-100" : "opacity-0"
          } ${dark ? "bg-night/75" : "bg-paper/85"}`}
        />
        <div className="frame-bare pad flex h-16 items-center justify-between gap-4 md:h-[4.75rem]">
          <Link href="/" aria-label={`${site.name} – Startseite`} className="relative block h-10 shrink-0 md:h-[3.25rem]" style={{ aspectRatio: "306 / 97" }}>
            {/* ponytail: zwei fertige SVGs überblenden statt Inline-SVG mit currentColor (25 KB je Seite). */}
            <img src={`${basePath}/logo-dark.svg`} alt="" width="306" height="97" className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${dark ? "opacity-0" : ""}`} />
            <img src={`${basePath}/logo-light.svg`} alt="" width="306" height="97" className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${dark ? "" : "opacity-0"}`} />
          </Link>

          <nav aria-label="Hauptnavigation" className={`hidden items-center rounded-full p-1 backdrop-blur lg:flex ${dark ? "bg-white/10" : "bg-ink/[0.06]"}`}>
            {menus.map((menu) => (
              <div key={menu.label} className="group relative">
                <Link
                  href={menu.href}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.8125rem] font-medium uppercase tracking-[0.05em] transition-colors ${
                    dark ? "hover:bg-white/10" : "hover:bg-white"
                  }`}
                >
                  {menu.label}
                  {menu.items && <Icon name="chevronDown" className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
                </Link>
                {menu.items && (
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-80 rounded-2xl bg-white p-2 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                      {menu.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="group/item flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-paper">
                            <span>
                              <span className="block text-[0.95rem] tracking-tight">{item.label}</span>
                              <span className="block text-xs text-muted">{item.meta}</span>
                            </span>
                            <Icon name="arrowRight" className="h-4 w-4 -translate-x-1 text-accent opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={mainPhone.phoneHref} className="hidden items-center gap-2 px-3 text-sm font-medium xl:inline-flex">
              <Icon name="phone" className="h-4 w-4" />
              {mainPhone.phone}
            </a>
            <Button href="/kontakt" className="hidden sm:inline-flex">
              Termin vereinbaren
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${dark ? "bg-white/10" : "bg-ink/[0.06]"}`}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobiles Menü */}
      <div
        id="mobile-menu"
        data-theme="dark"
        data-lenis-prevent
        className={`fixed inset-0 z-40 overflow-y-auto bg-night text-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="frame min-h-full px-5 pb-10 pt-24">
          {menus.map((menu) => (
            <div key={menu.label} className="border-b border-line py-5">
              <Link href={menu.href} className="display text-4xl" onClick={() => setOpen(false)}>
                {menu.label}
              </Link>
              {menu.items && (
                <ul className="mt-4 grid gap-1">
                  {menu.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-baseline justify-between gap-4 py-1.5 text-white/75" onClick={() => setOpen(false)}>
                        <span className="text-lg">{item.label}</span>
                        <span className="text-xs text-white/40">{item.meta}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="mt-8 grid gap-3">
            <Button href="/kontakt">Termin vereinbaren</Button>
            {site.locations.map((loc) => (
              <a key={loc.city} href={loc.phoneHref} className="flex items-center justify-between border-b border-line py-3 text-white/80">
                <span className="text-sm uppercase tracking-[0.08em] text-white/50">{loc.city}</span>
                <span className="flex items-center gap-2 text-lg">
                  <Icon name="phone" className="h-4 w-4 text-accent-bright" />
                  {loc.phone}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
