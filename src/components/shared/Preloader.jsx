import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Preloader — "Die Waage findet ihr Gleichgewicht".
 *
 * One idea: the beam angle IS the progress readout. The scale starts tipped and
 * swings through a decaying oscillation whose amplitude is (1 - progress), so it
 * comes to rest perfectly level exactly at 100%. The hairline bar and the
 * counter are the literal reading of the same value.
 *
 * GEOMETRY — the artwork is the untouched 512x512 drawing from
 * public/images/favicon.svg, kept in its native viewBox (no re-cropping).
 * Its ink bounding box, with a round-cap stroke of half-width s:
 *   x: [60 - s, 452 + s]  -> midpoint 256      == viewBox mid-x, already centred
 *   y: [80 - s, 415 + s]  -> midpoint 247.5    != viewBox mid-y (256)
 * (both midpoints are independent of s, since the cap grows both ends equally;
 * the pan arcs bottom out at y=290 and the pillar at y=390, both inside 415.)
 * So the drawing sits 8.5 user units too high — corrected by one wrapper
 * translate below rather than by touching the viewBox. The beam pivots on
 * svgOrigin 256,160, i.e. the crossbar's own pivot circle in artwork units.
 */

const TILT = 14; // degrees at progress 0
const SWINGS = 3; // half-oscillations before it settles level

export default function Preloader() {
  const [done, setDone] = useState(false);
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const beamRef = useRef(null);
  const barRef = useRef(null);
  const pctRef = useRef(null);

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let onLoad;
    const ctx = gsap.context(() => {
      const p = { v: 0 };

      if (!reduced) {
        gsap.from(stageRef.current, { autoAlpha: 0, y: 12, duration: 0.7, ease: "power2.out" });
      }

      const render = () => {
        const f = p.v / 100;
        barRef.current.style.transform = `scaleX(${f})`;
        pctRef.current.textContent = `${Math.round(p.v)}%`;
        if (!reduced) {
          // Damped swing, guaranteed to be exactly 0 when f === 1.
          gsap.set(beamRef.current, {
            svgOrigin: "256 160", // the crossbar's own pivot, in artwork units
            rotation: TILT * (1 - f) * Math.cos(f * SWINGS * Math.PI),
          });
        }
      };
      render();

      const exit = () =>
        gsap.to(rootRef.current, {
          autoAlpha: 0,
          duration: 0.55,
          ease: "power2.inOut",
          delay: 0.2,
          onComplete: () => {
            document.body.style.overflow = bodyOverflow;
            setDone(true);
          },
        });

      const finish = () =>
        gsap.to(p, { v: 100, duration: 0.5, ease: "power2.inOut", onUpdate: render, onComplete: exit });

      gsap.to(p, {
        v: 92,
        duration: reduced ? 0.6 : 2,
        ease: "power2.inOut",
        onUpdate: render,
        onComplete: () => {
          if (document.readyState === "complete") finish();
          else window.addEventListener("load", (onLoad = finish), { once: true });
        },
      });
    }, rootRef);

    return () => {
      if (onLoad) window.removeEventListener("load", onLoad);
      ctx.revert();
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand-dark"
    >
      <div ref={stageRef} className="flex flex-col items-center">
        <svg
          viewBox="0 0 512 512"
          fill="none"
          stroke="#f5f5f4"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-20 w-20 sm:h-24 sm:w-24"
        >
          {/* +8.5 puts the ink bounding box mid-y (247.5) on the viewBox mid-y (256). */}
          <g transform="translate(0 8.5)">
            {/* Pillar, finial, pedestal — static */}
            <path d="M 256 90 L 256 390" />
            <path d="M 256 80 L 256 100" />
            <path d="M 176 390 L 336 390" />
            <path d="M 206 415 L 306 415" />

            {/* Crossbar + both pans — rotates about the pivot at 256,160 */}
            <g ref={beamRef}>
              <path d="M 116 160 L 396 160" />
              <path d="M 116 160 L 76 270" />
              <path d="M 116 160 L 156 270" />
              <path d="M 60 270 Q 116 310 172 270 Z" fill="#f5f5f4" fillOpacity="0.12" />
              <path d="M 396 160 L 356 270" />
              <path d="M 396 160 L 436 270" />
              <path d="M 340 270 Q 396 310 452 270 Z" fill="#f5f5f4" fillOpacity="0.12" />
              <circle cx="256" cy="160" r="15" fill="#9D2119" stroke="none" />
            </g>
          </g>
        </svg>

        <div className="mt-12 h-px w-44 overflow-hidden bg-brand-light/15 sm:w-52">
          <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-brand-primary" />
        </div>

        <span
          ref={pctRef}
          className="mt-5 text-[0.6875rem] uppercase tracking-[0.35em] text-brand-light/40 tabular-nums"
        >
          0%
        </span>
      </div>
    </div>
  );
}
