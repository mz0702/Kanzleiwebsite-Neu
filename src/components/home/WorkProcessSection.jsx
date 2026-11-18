import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionHeading from "@/components/shared/SectionHeading";
import { icons } from "@/components/shared/Icon";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "phone",
    title: "Terminvereinbarung",
    text: "Rufen Sie uns gerne an und wir vereinbaren einen Termin für ein persönliches Gespräch in unserer Kanzlei.",
  },
  {
    icon: "chat",
    title: "Erstberatung",
    text: "Sie erläutern uns Ihren Fall und wir geben Ihnen eine Einschätzung und Empfehlung für das weitere Vorgehen.",
  },
  {
    icon: "docCheck",
    title: "Weiterer Verlauf",
    text: "Danach entscheiden Sie, ob Sie uns das Mandat langfristig erteilen und uns beauftragen möchten.",
  },
];

// Isometrische Scheibe in Strichzeichnung (Referenz-Motiv): Deckfläche als Ellipse,
// Mantel mit Schraffur, Icon perspektivisch gestaucht auf der Oberseite.
const CX = 150, CY = 66, RX = 118, RY = 44, H = 32;
const hatch = Array.from({ length: 45 }, (_, k) => {
  const t = (Math.PI * k) / 44;
  return `M${(CX + RX * Math.cos(t)).toFixed(1)} ${(CY + RY * Math.sin(t)).toFixed(1)}v${H}`;
}).join("");
const side = `M${CX - RX} ${CY}v${H}A${RX} ${RY} 0 0 0 ${CX + RX} ${CY + H}V${CY}Z`;

function Disc({ icon }) {
  return (
    <svg viewBox="0 0 300 150" className="disc relative w-full max-w-[19rem]" aria-hidden="true" focusable="false">
      <path d={side} className="shape" />
      <path d={hatch} className="hatch" />
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} className="shape" />
      <g transform={`translate(${CX} ${CY}) scale(3.4 1.27) translate(-12 -12)`}>
        <path d={icons[icon]} className="glyph" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

export default function WorkProcessSection() {
  const listRef = useRef(null);

  // Der Schritt auf Höhe der Bildschirmmitte wird aktiv: Scheibe hebt sich, Linie färbt sich.
  useEffect(() => {
    const ctx = gsap.context(() => {
      listRef.current.querySelectorAll(".step").forEach((step) => {
        ScrollTrigger.create({ trigger: step, start: "top 62%", end: "bottom 62%", toggleClass: "is-active" });
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ablauf" data-theme="dark" aria-labelledby="ablauf-title" className="bg-night text-white">
      <div className="frame">
        <div className="pad py-20 md:py-28">
          <SectionHeading id="ablauf-title" label="Ablauf" title="In 3 Schritten zur Lösung">
            <p className="lead text-white/70">
              Vom ersten Anruf bis zu Ihrer Entscheidung über das Mandat – Sie wissen jederzeit, woran Sie sind.
            </p>
          </SectionHeading>
        </div>

        <ol ref={listRef} className="border-t border-line">
          {steps.map((step, i) => (
            <li key={step.title} className="step grid border-b border-line md:grid-cols-3">
              <div className={`step-text order-2 flex flex-col justify-center px-5 pb-12 md:px-10 md:py-16 ${i % 2 ? "md:order-3" : "md:order-1"}`}>
                <span className="text-sm text-white/50">Schritt {String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-4 text-[clamp(1.875rem,1.4rem+1.6vw,2.75rem)]">{step.title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-white/70">{step.text}</p>
              </div>
              <div className="relative order-1 flex items-center justify-center border-line px-8 py-12 md:order-2 md:border-x md:py-16">
                <span aria-hidden="true" className="absolute inset-y-0 left-1/2 hidden border-l border-dashed border-white/15 md:block" />
                <Disc icon={step.icon} />
              </div>
              <div aria-hidden="true" className={`hidden md:block ${i % 2 ? "md:order-1" : "md:order-3"}`} />
            </li>
          ))}
        </ol>
        <div className="h-16 md:h-24" />
      </div>
    </section>
  );
}
