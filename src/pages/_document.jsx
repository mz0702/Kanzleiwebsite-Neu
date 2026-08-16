import { Html, Head, Main, NextScript } from "next/document";
import { basePath } from "@/lib/basePath";

export default function Document() {
  return (
    <Html lang="de" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" href={`${basePath}/images/Favicon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/images/Favicon.png`} />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased selection:bg-brand-primary selection:text-brand-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
