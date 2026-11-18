// Fristen-Zeitstrahl: ein Strich je Tag/Monat macht die Dauer greifbar
// ("3 Wochen" = 21 Striche). Zeichnet sich per CSS, sobald `.is-in` gesetzt ist.
export default function Timeline({ fact }) {
  const { from, to, ticks, major, tickUnit } = fact;
  return (
    <figure>
      <div className="flex justify-between gap-6 text-sm text-white/70">
        <span className="max-w-[45%]">{from}</span>
        <span className="max-w-[45%] text-right">{to}</span>
      </div>
      <div className="relative mt-5 h-14">
        <div className="tl-line absolute inset-x-0 top-1/2 h-px origin-left bg-white/35" />
        <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-bright" />
        <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-bright ring-4 ring-accent-bright/25" />
        {ticks > 0 && (
          <div aria-hidden="true" className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
            {Array.from({ length: ticks + 1 }, (_, i) => {
              const edge = i === 0 || i === ticks;
              const big = !edge && major && i % major === 0;
              return (
                <span
                  key={i}
                  style={{ "--i": i }}
                  className={`tick block w-px ${edge ? "h-14 bg-accent-bright" : big ? "h-8 bg-white/70" : "h-3.5 bg-white/35"}`}
                />
              );
            })}
          </div>
        )}
      </div>
      {ticks > 0 && (
        <figcaption className="mt-4 text-xs uppercase tracking-[0.09em] text-white/45">
          1 Strich = 1 {tickUnit} · {ticks} {tickUnit === "Tag" ? "Tage" : "Monate"}
        </figcaption>
      )}
    </figure>
  );
}
