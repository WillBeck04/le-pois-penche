import type { NextConfig } from "next";

// Redirects from the old WordPress site live in lib/redirects.ts and are applied by proxy.ts.

const nextConfig: NextConfig = {
  trailingSlash: false,
  // proxy.ts handles trailing slashes so that old URLs like /menu-lunch/ redirect in a single hop
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560],
  },
  async redirects() {
    return [
      // The home page (/ -> /fr, /?lang=en -> /en, old /?p=123 links) is handled in proxy.ts
      // Old sitemap files from WordPress
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:name-sitemap.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
