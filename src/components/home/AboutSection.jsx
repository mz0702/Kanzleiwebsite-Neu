import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";
import { basePath } from "@/lib/basePath";

gsap.registerPlugin(ScrollTrigger);

const badges = [
  { title: "Termin innerhalb von 48h", description: "Schnell einen persönlichen Gesprächstermin bekommen." },
  { title: "Kanzleierfahrung seit über 20 Jahren", description: "Langjährige Praxis in allen Rechtsgebieten der Kanzlei." },
  { title: "Fachanwaltliche Beratung", description: "Kompetente Einschätzung auf hohem fachlichen Niveau." },
];

export default function AboutSection() {
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Image with Glass Card */}
          <div className="relative gs-reveal h-full">
            <img
              src={`${basePath}/images/Archiv.jpg`}
              alt=""
              className="rounded-3xl w-full h-[400px] sm:h-[500px] lg:h-full object-cover"
            />

            {/* Floating Glass Card */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 sm:left-8 sm:right-8 md:right-auto md:w-80 dark-glass p-5 sm:p-6 rounded-2xl">
              <h4 className="font-semibold text-base sm:text-lg mb-4">Warum Wegner &amp; Schöbener</h4>
              <ul className="space-y-3">
                {badges.map((badge, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{badge.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5 sm:mb-6 text-gray-400 gs-reveal">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Über uns
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8 leading-snug gs-reveal text-gray-200">
              Wir helfen Ihnen in allen juristischen Belangen weiter. Dabei stehen Vertrauen, Kompetenz und Zusammenarbeit für uns im Mittelpunkt.
            </h2>
            <div className="mb-12 sm:mb-16 gs-reveal">
              <Button href="/about" variant="primary" size="md" radius="pill">
                Mehr über uns
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 gap-x-6 sm:gap-x-8 border-t border-white/10 pt-8 sm:pt-12 gs-reveal">
              {badges.map((badge, index) => (
                <div key={index}>
                  <p className="font-medium text-base sm:text-lg mb-2 text-white">{badge.title}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
