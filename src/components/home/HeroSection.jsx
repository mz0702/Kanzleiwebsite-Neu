import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";
import { basePath } from "@/lib/basePath";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const elemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 0.8, duration: 2, ease: "power3.out" },
      );

      gsap.fromTo(
        elemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        },
      );

      // Parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elemsRef.current.includes(el)) {
      elemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pb-12 pt-28 sm:pt-32 md:pt-36 flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          ref={bgRef}
          src={`${basePath}/images/Hero Background.jpg`}
          alt=""
          className="w-full h-full object-cover opacity-0 scale-105 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
      </div>

      {/* Faint horizontal line */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between">
        {/* Main Title Area */}
        <div className="flex flex-col justify-center">
          <div className="max-w-5xl text-white">
            <div
              ref={addToRefs}
              className="inline-flex items-center gap-2 text-sm font-medium mb-4 sm:mb-6 text-white/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Ochsenfurt &amp; Würzburg
            </div>
            <h1
              ref={addToRefs}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.1] tracking-tight"
            >
              Wir helfen Ihnen in allen juristischen Belangen weiter
            </h1>
          </div>
        </div>

        {/* Bottom Elements */}
        <div ref={addToRefs} className="w-full mt-8 sm:mt-12">
          <div className="max-w-[26rem]">
            <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Dabei stehen Vertrauen, Kompetenz und Zusammenarbeit für uns im
              Mittelpunkt.
            </p>
            <Button href="mailto:kanzlei@wegner-schoebener.de" variant="primary" size="lg" radius="rounded">
              Termin vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
