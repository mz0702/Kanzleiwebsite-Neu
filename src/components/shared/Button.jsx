import Link from "next/link";
import Icon from "@/components/shared/Icon";

const variants = {
  accent: "bg-accent text-white group-hover:bg-accent-deep",
  light: "bg-white text-ink group-hover:bg-paper-2",
  dark: "bg-ink text-white group-hover:bg-black",
  ghost: "ring-1 ring-inset ring-[color:var(--line-strong)] group-hover:bg-[color:var(--hover)]",
};

// Pille + separater Pfeil-Kreis. Interne Pfade über next/link, tel:/mailto:/extern als <a>.
export default function Button({ href, children, variant = "accent", arrow = true, icon, className = "", ...rest }) {
  const Tag = href.startsWith("/") ? Link : "a";
  const external = href.startsWith("http");
  return (
    <Tag
      href={href}
      className={`btn group ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      <span className={`btn-pill ${variants[variant]}`}>
        {icon && <Icon name={icon} className="mr-2 h-4 w-4" />}
        {children}
      </span>
      {arrow && (
        <span className={`btn-dot ${variants[variant]}`} aria-hidden="true">
          <Icon name={external ? "arrowUpRight" : "arrowRight"} className="h-4 w-4" />
        </span>
      )}
    </Tag>
  );
}
