import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { lawyers } from "@/data/lawyers";

gsap.registerPlugin(ScrollTrigger);

const personIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>
);

export default function StackedCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

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

  // Animate accordion content height
  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;
      const isActive = activeIndex === index;
      gsap.to(el, {
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    });
  }, [activeIndex]);

  const activeLawyer = lawyers[activeIndex] || lawyers[0];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 justify-center text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Unsere Anwälte
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight">
            Lernen Sie unser Team <br className="hidden sm:block" /> und seine Rechtsgebiete kennen
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden aspect-[3/4] max-w-[280px] mx-auto lg:mx-0 gs-reveal">
            <img
              src={activeLawyer.image}
              alt={activeLawyer.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col gap-4 gs-reveal">
            {lawyers.map((lawyer, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={lawyer.slug}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`rounded-3xl p-5 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 border ${
                    isActive
                      ? "bg-brand-dark text-white border-transparent shadow-xl"
                      : "bg-white border-gray-200 hover:border-brand-dark/30"
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-brand-primary" : "text-brand-dark"
                      }`}
                    >
                      {/* Below lg the portrait that follows the selection sits stacked
                          above the list and is off-screen while you tap, so each row
                          carries its own thumbnail. lg+ keeps the generic icon. */}
                      <img
                        src={lawyer.image}
                        alt={lawyer.name}
                        className="lg:hidden w-11 h-11 rounded-full object-cover"
                      />
                      <span className="hidden lg:block">{personIcon}</span>
                    </span>
                    <span className="font-light text-lg sm:text-xl text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-0">{lawyer.name}</h3>
                  <p className={`text-sm mt-1 ${isActive ? "text-gray-300" : "text-brand-gray"}`}>
                    {lawyer.tagline}
                  </p>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden"
                    style={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  >
                    <p className={`pt-4 leading-relaxed text-sm sm:text-base ${isActive ? "text-gray-300" : "text-brand-gray"}`}>
                      {lawyer.intro}
                    </p>
                    <Link
                      href={`/anwaelte/${lawyer.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
                    >
                      Zum Profil
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
