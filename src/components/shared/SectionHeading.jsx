// Referenz-Muster: Label + große Headline links, Erläuterung/CTA rechts unten.
export default function SectionHeading({ label, title, children, as: H = "h2", id }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div className="gs-reveal lg:col-span-7">
        <p className="eyebrow">{label}</p>
        <H id={id} className="display h-lg mt-6">
          {title}
        </H>
      </div>
      {children && <div className="gs-reveal lg:col-span-5 lg:col-start-8 lg:pb-2">{children}</div>}
    </div>
  );
}
