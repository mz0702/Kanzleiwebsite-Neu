import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const testimonials = [
  {
    quote: "Hervorragende Rechtsvertretung und außergewöhnliches Ergebnis!",
    initials: "YM",
    name: "Yusuf Monaf",
    role: "Google Rezension",
  },
  {
    quote: "Hervorragende rechtliche Beratung – absolut empfehlenswert!",
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
];

// Duplicated once so the loop has a full extra set to scroll into.
const track = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const railRef = useRef(null);
  const thumbRef = useRef(null);

  // Heading scroll-reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current.querySelectorAll(".gs-reveal");
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Autoplay drift + slider handle, driven by one shared progress value
  useEffect(() => {
    const trackEl = trackRef.current;
    const marqueeEl = marqueeRef.current;
    const railEl = railRef.current;
    const thumbEl = thumbRef.current;
    if (!trackEl || !marqueeEl || !railEl || !thumbEl) return undefined;

    const wrapWidth = trackEl.scrollWidth / 2; // width of one set
    const thumbRange = railEl.offsetWidth - thumbEl.offsetWidth;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = { progress: 0 };
    const render = () => {
      const p = ((state.progress % 1) + 1) % 1;
      gsap.set(trackEl, { x: -p * wrapWidth });
      gsap.set(thumbEl, { x: p * thumbRange });
    };
    render();

    let autoplay;
    const startAutoplay = () => {
      autoplay?.kill();
      autoplay = gsap.to(state, {
        progress: "+=1",
        duration: 45,
        ease: "none",
        repeat: -1,
        onUpdate: render,
      });
      if (reduceMotion) autoplay.pause();
    };
    startAutoplay();

    const [draggable] = Draggable.create(thumbEl, {
      type: "x",
      bounds: { minX: 0, maxX: thumbRange },
      onPress: () => autoplay.pause(),
      onDrag() {
        state.progress = this.x / thumbRange;
        render();
      },
      onDragEnd: () => {
        if (!reduceMotion) startAutoplay();
      },
    });

    // Pause-on-hover only where hover actually exists. On touch a tap emits a
    // synthetic mouseenter but the matching mouseleave may never arrive, which
    // left the marquee permanently frozen after the first tap.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const pause = () => autoplay.pause();
    const resume = () => {
      if (!reduceMotion && !draggable.isPressed) autoplay.play();
    };
    if (canHover) {
      marqueeEl.addEventListener("mouseenter", pause);
      marqueeEl.addEventListener("mouseleave", resume);
    }

    return () => {
      autoplay.kill();
      draggable.kill();
      marqueeEl.removeEventListener("mouseenter", pause);
      marqueeEl.removeEventListener("mouseleave", resume);
    };
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
      </div>

      {/* Full-bleed marquee, drifts on its own */}
      <div ref={marqueeRef} className="testimonial-marquee w-full">
        <div ref={trackRef} className="testimonial-track flex w-max gap-5 sm:gap-6">
          {track.map((item, i) => (
            <div
              key={i}
              className="w-[300px] sm:w-[360px] shrink-0 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 select-none"
              aria-hidden={i >= testimonials.length}
            >
              <svg className="w-7 h-7 text-brand-primary mb-4 pointer-events-none" fill="currentColor" viewBox="0 0 256 256">
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
            </div>
          ))}
        </div>
      </div>

      {/* Slider handle — drag to scrub through the testimonials */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={railRef} className="gs-reveal relative h-1.5 rounded-full bg-gray-300/70 max-w-md mx-auto mt-8 sm:mt-10">
          <div
            ref={thumbRef}
            className="testimonial-thumb absolute top-1/2 -translate-y-1/2 left-0 h-3 w-16 sm:w-20 rounded-full bg-brand-primary cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>
    </section>
  );
}
