import Link from "next/link";
import Head from "next/head";
import { jsonLd } from "@/components/shared/Seo";
import { absoluteUrl } from "@/lib/basePath";

// Sichtbare Brotkrumen + BreadcrumbList-Schema aus derselben Liste.
// Letzter Eintrag = aktuelle Seite (ohne href).
export default function Breadcrumbs({ items, path }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href || path),
    })),
  };

  return (
    <>
      <Head>
        {jsonLd(schema)}
      </Head>
      <nav aria-label="Brotkrumen" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="link-u hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
