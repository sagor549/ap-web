import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "sdmntprwestus.oaiusercontent.com" },
      { hostname: "media1.popsugar-assets.com" },
      { hostname: "images.squarespace-cdn.com" },
    ],
  },
};

export default nextConfig;
