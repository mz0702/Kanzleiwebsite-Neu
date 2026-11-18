import { Html, Head, Main, NextScript } from "next/document";
import { basePath } from "@/lib/basePath";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="icon" type="image/png" href={`${basePath}/icon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <meta name="theme-color" content="#0F0E0D" />
        {/* Markiert "JS läuft", bevor gemalt wird — nur dann werden Zeichnungen
            zum Nachzeichnen vorab versteckt. Ohne JS bleibt alles sichtbar. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
