import { useEffect, useRef, useState } from "react";
import useReveal from "@/hooks/useReveal";

// Echte Google-Rezensionen, wörtliche Zitate (bei langen Originalen ein zusammenhängender,
// unveränderter Ausschnitt statt Kürzung mit Auslassungen). Nicht übernommen: eine Rezension
// mit Emojis/Tippfehlern, die auf einer Kanzlei-Seite nicht professionell wirkt.
const testimonials = [
  {
    quote: "Hervorragende Rechtsvertretung und außergewöhnliches Ergebnis!",
    initials: "YM",
    name: "Yusuf Monaf",
    role: "Google Rezension",
  },
  {
    quote:
      "Hervorragende rechtliche Beratung – Absolut empfehlenswert! Seit vielen Jahren vertraue ich auf die kompetente Unterstützung dieses Anwalts und seines Teams – und das aus gutem Grund. In sämtlichen Fällen wurde ich stets objektiv, souverän und ehrlich beraten.",
    initials: "HE",
    name: "Hartmut Erbel",
    role: "Google Rezension",
  },
  {
    quote: "Sehr nett und hilfsbereit.",
    initials: "MU",
    name: "Marina Ulsamer",
    role: "Google Rezension",
  },
  {
    quote:
      "Sehr kompetent! Nicht nur dass Herr Wegner schnell arbeitet, sondern auch bei der Interessenvertretung seiner Mandanten macht er großartige Arbeit. Ich fühle mich immer wieder gut aufgehoben!",
    initials: "JW",
    name: "Janni Wittmann",
    role: "Google Rezension",
  },
  {
    quote: "Sehr zuverlässige Anwältin. Die Mitarbeiter sind nett und hilfsbereit. Fühlen uns seit Jahren sehr gut aufgehoben!",
    initials: "DO",
    name: "Darina Odinzow",
    role: "Google Rezension",
  },
  {
    quote: "Ich kenne die Frau Wegner schon sehr lange und bin vollkommen zufrieden mit dem ganzen Team, kann es nur weiterempfehlen.",
    initials: "JK",
    name: "Jürgen Krones",
    role: "Google Rezension",
  },
  {
    quote:
      "Vielen Dank für die schnelle und unkomplizierte Schadensregulierung. Mir ist bewusst, dass eine fiktive Abrechnung nicht selbstverständlich ist. Umso mehr schätze ich Ihre Unterstützung und die professionelle Abwicklung.",
    initials: "RI",
    name: "ringoz1969",
    role: "Google Rezension",
  },
  {
    quote:
      "Schnell, kompetent und absolut zuverlässig. Die Rechtsanwälte haben die komplette Abwicklung meines Schadensfalls übernommen. Die Kommunikation war top und ich musste mich um fast nichts kümmern.",
    initials: "MS",
    name: "Max Spitzer",
    role: "Google Rezension",
  },
  {
    quote:
      "Ich bin mit der Kanzlei Wegner & Schöbener, insbesondere mit Herrn Wegner, rundum zufrieden. Mein Haftpflichtschaden wurde von Anfang an professionell, zuverlässig und kompetent betreut.",
    initials: "PF",
    name: "Paavo Frank",
    role: "Google Rezension",
  },
  {
    quote:
      "Ich kann die Kanzlei Wegner und Schöbener in Ochsenfurt uneingeschränkt weiterempfehlen. Dank der kompetenten Unterstützung konnte mein Schaden erfolgreich reguliert werden. Von Anfang bis Ende fühlte ich mich bestens betreut und jederzeit gut informiert.",
    initials: "VV",
    name: "Veronika Vetter",
    role: "Google Rezension",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useReveal(sectionRef);

  // ponytail: the track is a native scroll-snap container, so swipe/trackpad/
  // keyboard scrolling is the browser's job. Arrows and dots only push a
  // scroll position into it — no autoplay, no drag physics, no pause logic.
  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  // Keep the dots in sync when the track is scrolled directly (swipe, trackpad,
  // arrow keys). Nearest card centre wins; 3 cards, so no throttling needed and
  // React bails out of the re-render whenever the index is unchanged.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const onScroll = () => {
      const centre = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let shortest = Infinity;
      Array.from(track.children).forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - centre);
        if (distance < shortest) {
          shortest = distance;
          nearest = i;
        }
      });
      setActive(nearest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 justify-center text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Bewertungen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark">
            Was unsere Mandanten sagen
          </h2>
        </div>

        <div className="gs-reveal max-w-2xl mx-auto">
          {/* `relative` is load-bearing: it makes the track the offsetParent, so
              card.offsetLeft lines up with track.scrollLeft in the maths above.
              `data-lenis-prevent-wheel` hands wheel/trackpad gestures over this
              container back to the browser — Lenis otherwise swallows them. */}
          <div
            ref={trackRef}
            tabIndex={0}
            role="group"
            aria-label="Bewertungen unserer Mandanten"
            data-lenis-prevent-wheel
            className="relative flex gap-4 px-10 sm:px-14 overflow-x-auto overscroll-x-contain snap-x snap-mandatory no-scrollbar rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
          >
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="w-full shrink-0 snap-center bg-white border border-gray-200 rounded-3xl p-6 sm:p-8"
              >
                <svg className="w-7 h-7 text-brand-primary mb-4" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M116,72v88a64.07,64.07,0,0,1-64,64,8,8,0,0,1,0-16,48.05,48.05,0,0,0,48-48v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H100A16,16,0,0,1,116,72Zm100-16H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h44v8a48.05,48.05,0,0,1-48,48,8,8,0,0,0,0,16,64.07,64.07,0,0,0,64-64V72A16,16,0,0,0,216,56Z" />
                </svg>
                <p className="text-base sm:text-lg font-medium text-brand-dark leading-relaxed mb-6 min-h-[3.5em]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-semibold text-sm shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-brand-dark">{item.name}</h3>
                    <p className="text-xs text-brand-gray">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls: prev — dots — next. Wraps around, so nothing ever sits disabled. */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}
              aria-label="Vorherige Bewertung"
              className="w-11 h-11 shrink-0 rounded-full border border-gray-300 text-brand-dark flex items-center justify-center transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
              </svg>
            </button>

            <div className="flex items-center gap-1">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Bewertung ${i + 1} von ${testimonials.length} anzeigen`}
                  aria-current={i === active ? "true" : undefined}
                  className="px-1 py-3 group"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-brand-primary" : "w-2.5 bg-brand-dark/20 group-hover:bg-brand-dark/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo((active + 1) % testimonials.length)}
              aria-label="Nächste Bewertung"
              className="w-11 h-11 shrink-0 rounded-full border border-gray-300 text-brand-dark flex items-center justify-center transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
