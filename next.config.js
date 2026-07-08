/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un servidor autocontenido en .next/standalone para Docker
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
