import { useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { practiceAreas } from "@/data/practiceAreas";
import { basePath } from "@/lib/basePath";

export default function PracticeAreasSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="rechtsgebiete" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Rechtsgebiete"
            title="Unsere Fachgebiete auf einen Blick"
            description="Klicken Sie auf ein Rechtsgebiet, um mehr über unsere Arbeit und den zuständigen Anwalt zu erfahren."
            variant="light"
          />
        </div>

        {/* The 70% cap only makes sense once the grid is 3 columns wide (lg); below that
            it squeezed the tiles to ~70% of an already narrow phone viewport. */}
        <div className="lg:max-w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {practiceAreas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/rechtsgebiete/${area.slug}`}
              className="pa-tile gs-reveal group relative block bg-brand-dark aspect-[4/3] overflow-hidden cursor-pointer"
            >
              {/* Images are 4:3 — the tile matches that ratio so the fill below shows the full illustration, uncropped */}
              {/* .pa-tile* classes: touch fallback for the hover reveal, see globals.css */}
              <img
                src={`${basePath}${area.image}`}
                alt={area.title}
                className="pa-tile-img absolute inset-0 w-full h-full object-cover opacity-0 blur-none scale-105 group-hover:opacity-80 group-hover:blur-sm group-hover:scale-100 transition-all duration-500 ease-out"
              />
              <div className="pa-tile-scrim absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-light/20 transition-colors duration-500" />

              {/* Absolutely positioned (not normal flow) so text can never grow the tile past its fixed aspect ratio */}
              <div className="absolute inset-0 z-10 p-6 sm:p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-500 group-hover:text-brand-dark/50 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4-4m0 0h-8m8 0v8M7 16l-4 4m0 0v-8m0 8h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-dark transition-colors duration-500">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3 group-hover:text-brand-dark/70 transition-colors duration-500">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
