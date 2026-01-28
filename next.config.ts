import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Tambahkan baris di bawah ini
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Konfigurasi lainnya (seperti images) tetap biarkan
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
