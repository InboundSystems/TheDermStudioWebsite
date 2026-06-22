import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
    ],
  },
};

export default nextConfig;
