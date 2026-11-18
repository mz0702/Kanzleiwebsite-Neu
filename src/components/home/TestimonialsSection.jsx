import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";

// Echte Google-Rezensionen, wörtliche Zitate (bei langen Originalen ein zusammenhängender,
// unveränderter Ausschnitt statt Kürzung mit Auslassungen). Nicht übernommen: eine Rezension
// mit Emojis/Tippfehlern, die auf einer Kanzlei-Seite nicht professionell wirkt.
const testimonials = [
  { quote: "Hervorragende Rechtsvertretung und außergewöhnliches Ergebnis!", initials: "YM", name: "Yusuf Monaf" },
  {
    quote:
      "Hervorragende rechtliche Beratung – Absolut empfehlenswert! Seit vielen Jahren vertraue ich auf die kompetente Unterstützung dieses Anwalts und seines Teams – und das aus gutem Grund. In sämtlichen Fällen wurde ich stets objektiv, souverän und ehrlich beraten.",
    initials: "HE",
    name: "Hartmut Erbel",
  },
  { quote: "Sehr nett und hilfsbereit.", initials: "MU", name: "Marina Ulsamer" },
  {
    quote:
      "Sehr kompetent! Nicht nur dass Herr Wegner schnell arbeitet, sondern auch bei der Interessenvertretung seiner Mandanten macht er großartige Arbeit. Ich fühle mich immer wieder gut aufgehoben!",
    initials: "JW",
    name: "Janni Wittmann",
  },
  {
    quote: "Sehr zuverlässige Anwältin. Die Mitarbeiter sind nett und hilfsbereit. Fühlen uns seit Jahren sehr gut aufgehoben!",
    initials: "DO",
    name: "Darina Odinzow",
  },
  {
    quote: "Ich kenne die Frau Wegner schon sehr lange und bin vollkommen zufrieden mit dem ganzen Team, kann es nur weiterempfehlen.",
    initials: "JK",
    name: "Jürgen Krones",
  },
  {
    quote:
      "Vielen Dank für die schnelle und unkomplizierte Schadensregulierung. Mir ist bewusst, dass eine fiktive Abrechnung nicht selbstverständlich ist. Umso mehr schätze ich Ihre Unterstützung und die professionelle Abwicklung.",
    initials: "RI",
    name: "ringoz1969",
  },
  {
    quote:
      "Schnell, kompetent und absolut zuverlässig. Die Rechtsanwälte haben die komplette Abwicklung meines Schadensfalls übernommen. Die Kommunikation war top und ich musste mich um fast nichts kümmern.",
    initials: "MS",
    name: "Max Spitzer",
  },
  {
    quote:
      "Ich bin mit der Kanzlei Wegner & Schöbener, insbesondere mit Herrn Wegner, rundum zufrieden. Mein Haftpflichtschaden wurde von Anfang an professionell, zuverlässig und kompetent betreut.",
    initials: "PF",
    name: "Paavo Frank",
  },
  {
    quote:
      "Ich kann die Kanzlei Wegner und Schöbener in Ochsenfurt uneingeschränkt weiterempfehlen. Dank der kompetenten Unterstützung konnte mein Schaden erfolgreich reguliert werden. Von Anfang bis Ende fühlte ich mich bestens betreut und jederzeit gut informiert.",
    initials: "VV",
    name: "Veronika Vetter",
  },
];

const pad = (n) => String(n).padStart(2, "0");

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // ponytail: natives Scroll-Snap übernimmt Wischen/Trackpad/Tastatur. Die Pfeile
  // schieben nur die Scrollposition — kein Autoplay, keine eigene Drag-Physik.
  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[(index + testimonials.length) % testimonials.length];
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    const onScroll = () => {
      const card = track.children[0];
      setActive(Math.min(testimonials.length - 1, Math.round(track.scrollLeft / (card.offsetWidth + 1))));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section aria-labelledby="bewertungen-title" className="bg-paper">
      <div className="frame">
        <div className="pad py-20 md:py-28">
          <SectionHeading id="bewertungen-title" label="Bewertungen" title="Was unsere Mandanten sagen">
            <p className="lead text-ink-soft">Echte Rezensionen von Google – wörtlich zitiert.</p>
            <div className="mt-8 flex items-center gap-3">
              <button type="button" onClick={() => goTo(active - 1)} aria-label="Vorherige Bewertung" className="grid h-12 w-12 place-items-center rounded-full ring-1 ring-inset ring-[color:var(--line-strong)] transition-colors hover:bg-ink hover:text-white">
                <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
              </button>
              <button type="button" onClick={() => goTo(active + 1)} aria-label="Nächste Bewertung" className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white transition-colors hover:bg-accent-deep">
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <span className="ml-3 text-sm tabular-nums text-muted" aria-live="polite">
                {pad(active + 1)} / {pad(testimonials.length)}
              </span>
            </div>
          </SectionHeading>
        </div>

        {/* `relative` macht den Track zum offsetParent (offsetLeft == scrollLeft-Maßstab).
            `data-lenis-prevent-wheel` gibt Trackpad-Gesten über dem Slider an den Browser zurück. */}
        <div
          ref={trackRef}
          tabIndex={0}
          role="group"
          aria-label="Bewertungen unserer Mandanten"
          data-lenis-prevent-wheel
          className="no-scrollbar relative flex snap-x snap-mandatory gap-px overflow-x-auto overscroll-x-contain border-y border-line bg-[color:var(--line)]"
        >
          {testimonials.map((item) => (
            <figure key={item.name} className="flex w-[86%] shrink-0 snap-start flex-col bg-paper p-6 sm:w-[60%] md:p-10 lg:w-[calc((100%-2px)/3)]">
              <span aria-hidden="true" className="display text-7xl leading-[0.6] text-accent">
                „
              </span>
              <blockquote className="mb-10 mt-6 text-lg leading-relaxed tracking-tight md:text-xl">{item.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-xs font-medium text-white">{item.initials}</span>
                <span>
                  <span className="block text-sm font-medium">{item.name}</span>
                  <span className="block text-xs text-muted">Google-Rezension</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="h-20 md:h-28" />
      </div>
    </section>
  );
}
