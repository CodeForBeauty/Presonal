import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http'
        hostname: '**', // Wildcard matches any domain
      },
    ],
  },
}

export default nextConfig
