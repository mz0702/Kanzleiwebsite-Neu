const isProd = process.env.NODE_ENV === "production";

// basePath only applies to the production export (deployed under the GitHub Pages
// project subpath /Kanzleiwebsite-Neu/). Without this guard, `next dev` also serves
// everything under that subpath, so http://localhost:3001/ 404s and only
// http://localhost:3001/Kanzleiwebsite-Neu/ works — matches the same NODE_ENV check
// already used in src/lib/basePath.js for asset URLs.
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/Kanzleiwebsite-Neu" : "",
  assetPrefix: isProd ? "/Kanzleiwebsite-Neu/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
