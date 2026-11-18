// Matches the `basePath` in next.config.js. Plain <img src="/..."> strings
// (unlike next/link or next/image) aren't rewritten by Next.js automatically,
// so every hardcoded asset path needs this prefix to resolve correctly once
// deployed under a GitHub Pages project subpath. Empty locally (`next dev`
// serves from the domain root), so nothing changes for local testing.
export const basePath = process.env.NODE_ENV === "production" ? "/Kanzleiwebsite-Neu" : "";

// Öffentliche Adresse der Seite (GitHub Pages, inkl. basePath).
export const siteUrl = "https://mz0702.github.io/Kanzleiwebsite-Neu";

// Absolute URL für canonical- und OG-Tags. Nimmt Pfade mit oder ohne basePath
// entgegen (lawyer.image trägt ihn bereits, Routen wie "/impressum/" nicht), damit
// die Tags im Dev-Build dieselben Adressen erzeugen wie in der Produktion.
// encodeURI, weil einige Bilddateien Leerzeichen und Umlaute im Namen haben.
export const absoluteUrl = (path) =>
  encodeURI(siteUrl + (basePath && path.startsWith(basePath) ? path.slice(basePath.length) : path));
