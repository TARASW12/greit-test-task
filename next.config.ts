import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.resales-online.com'],
  },
};

export default nextConfig;
