/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Example: https://a.espncdn.com/i/teamlogos/ncaa/500/66.png
    // Default: https://a.espncdn.com/i/teamlogos/default-team-logo-500.png
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.espncdn.com',
        port: '',
        pathname: '/i/teamlogos/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
    fetchCache: true,
  },
  // @ts-ignore
  redirects: () => [
    {
      source: '/',
      destination: '/13', // Default to Lakers
      permanent: false,
    },
  ],
}

module.exports = nextConfig
