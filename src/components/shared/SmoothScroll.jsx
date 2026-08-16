import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Defensive: a prior instance should always have destroyed itself in this
    // effect's own cleanup, but this component can mount/unmount in quick
    // succession (e.g. gate <-> unlocked content) — guard against ever running
    // two Lenis instances/raf loops at once if cleanup and mount ever race.
    window.lenis?.destroy();

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Expose lenis globally so other components (Footer back-to-top) can use it
    window.lenis = lenis;

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return children;
}
