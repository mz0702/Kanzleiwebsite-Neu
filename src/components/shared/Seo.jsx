import Head from "next/head";
import { absoluteUrl } from "@/lib/basePath";

// Strukturierte Daten: nur statische, im Repo gepflegte Inhalte. Das Escaping von
// "<" verhindert, dass ein "</script>" im Text aus dem Script-Tag ausbricht.
// Als Funktion statt Komponente: next/head übernimmt nur direkte Kind-Elemente.
export const jsonLd = (data, key = data["@type"]) => (
  <script
    key={key}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default function Seo({ title, description, path, image = "/og.jpg", type = "website", noindex, schema }) {
  const url = absoluteUrl(path);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:site_name" content="Wegner & Schöbener Rechtsanwälte" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteUrl(image)} />
      <meta name="twitter:card" content="summary_large_image" />
      {[].concat(schema || []).map((data, i) => jsonLd(data, `ld-${i}`))}
    </Head>
  );
}
