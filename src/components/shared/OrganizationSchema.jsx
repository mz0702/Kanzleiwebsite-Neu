import Head from "next/head";
import { lawyers } from "@/data/lawyers";
import { practiceAreas } from "@/data/practiceAreas";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/basePath";
import { jsonLd } from "@/components/shared/Seo";

export const ORG_ID = `${siteUrl}/#kanzlei`;

const address = (loc) => ({
  "@type": "PostalAddress",
  streetAddress: loc.street,
  postalCode: loc.zip,
  addressLocality: loc.city,
  addressRegion: "Bayern",
  addressCountry: "DE",
});

const [ochsenfurt, wuerzburg] = site.locations;

// Kanzlei als LegalService mit zweitem Standort als eigener `department`, damit
// beide Adressen einzeln maschinenlesbar sind (Google, Bing, KI-Suchen).
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": ORG_ID,
      name: site.name,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/icon.png`,
      image: `${siteUrl}/og.jpg`,
      description:
        "Rechtsanwaltskanzlei in Ochsenfurt und Würzburg für Erbrecht, Betreuungsrecht, Familienrecht, Insolvenzrecht, Arbeitsrecht und Verkehrsrecht.",
      email: site.email,
      telephone: ochsenfurt.phoneIntl,
      faxNumber: ochsenfurt.faxIntl,
      address: address(ochsenfurt),
      areaServed: [
        { "@type": "City", name: "Ochsenfurt" },
        { "@type": "City", name: "Würzburg" },
        { "@type": "AdministrativeArea", name: "Landkreis Würzburg" },
      ],
      knowsAbout: practiceAreas.map((a) => a.title),
      knowsLanguage: "de",
      employee: lawyers.map((l) => ({
        "@type": "Person",
        name: l.name,
        jobTitle: l.role,
        knowsAbout: l.specialties.map((s) => s.title),
        url: `${siteUrl}/anwaelte/${l.slug}/`,
      })),
      department: [
        {
          "@type": "LegalService",
          name: `${site.name} — Kanzlei Würzburg`,
          address: address(wuerzburg),
          telephone: wuerzburg.phoneIntl,
          faxNumber: wuerzburg.faxIntl,
          email: site.email,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: site.name,
      inLanguage: "de-DE",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export default function OrganizationSchema() {
  return <Head>{jsonLd(schema, "org")}</Head>;
}
