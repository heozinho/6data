import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  serverExternalPackages: ['alasql'],
};

export default nextConfig;
