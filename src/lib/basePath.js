// Matches the `basePath` in next.config.js. Plain <img src="/..."> strings
// (unlike next/link or next/image) aren't rewritten by Next.js automatically,
// so every hardcoded asset path needs this prefix to resolve correctly once
// deployed under a GitHub Pages project subpath. Empty locally (`next dev`
// serves from the domain root), so nothing changes for local testing.
export const basePath = process.env.NODE_ENV === "production" ? "/Kanzleiwebsite" : "";
