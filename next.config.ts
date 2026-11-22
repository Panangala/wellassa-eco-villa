import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to ./out
  // Cache Components is off on purpose: it doesn't support the `dynamic = "force-static"`
  // that static export needs for sitemap.xml / robots.txt, and a fully static site gains nothing from it.
  output: "export",
  images: {
    // Photos are pre-optimised by scripts/optimize-images.mjs (npm run images);
    // this loader picks the right pre-built size. Keep sizes in sync with that script.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 1080, 1920],
    imageSizes: [384],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
