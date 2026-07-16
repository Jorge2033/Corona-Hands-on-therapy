/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un servidor autocontenido en .next/standalone para Docker
  output: "standalone",
  // nodemailer se resuelve en runtime (Node), no lo empaqueta Turbopack:
  // su import profundo (lib/mail-composer) rompe la compilación si se bundlea
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // Headers de seguridad para todas las respuestas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que el navegador "adivine" tipos de contenido
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Bloquea que el sitio se cargue dentro de iframes de terceros (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // No filtra la URL completa a sitios externos
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // El sitio no usa cámara, micrófono ni geolocalización
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
