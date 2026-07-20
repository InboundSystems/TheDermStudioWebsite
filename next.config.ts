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
  async redirects() {
    return [
      {
        source: '/services/chemical-peel-redcliffe',
        destination: '/services/skin-treatments-redcliffe',
        permanent: true,
      },
      {
        source: '/services/skin-needling-redcliffe',
        destination: '/services/skin-treatments-redcliffe',
        permanent: true,
      },
      {
        source: '/services/led-light-therapy-redcliffe',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/skin-clinic-moreton-bay',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/2025/07/07/hello-world',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
