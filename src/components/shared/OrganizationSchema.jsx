import Head from "next/head";
import { lawyers } from "@/data/lawyers";

const SITE_URL = "https://mz0702.github.io/Kanzleiwebsite";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Wegner & Schöbener Rechtsanwälte",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/logo-light.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marktbreiter Straße 1",
      postalCode: "97199",
      addressLocality: "Ochsenfurt",
      addressCountry: "DE",
    },
    telephone: "+499331503695",
    email: "kanzlei@wegner-schoebener.de",
    areaServed: "Ochsenfurt und Umgebung",
    employee: lawyers.map((lawyer) => ({
      "@type": "Person",
      name: lawyer.name,
      jobTitle: `${lawyer.role}, ${lawyer.specialties.map((s) => `Fachanwalt/-anwältin für ${s.title}`).join(" und ")}`,
      url: `${SITE_URL}/anwaelte/${lawyer.slug}/`,
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        // Static, developer-authored data only (lawyers.js + hardcoded firm info) — no user
        // input ever reaches this. The <\/script> escape guards against JSON-LD script-tag
        // breakout, the one real risk with this pattern (Next.js's own recommended approach).
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </Head>
  );
}
