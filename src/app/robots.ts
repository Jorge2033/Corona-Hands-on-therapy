import type { MetadataRoute } from "next";
import { SITE } from "@/lib/siteData";

// Genera /robots.txt.
// Permite rastrear todo el sitio salvo las rutas de API (no aportan nada a
// Google y solo gastan presupuesto de rastreo) y apunta al sitemap.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
