import type { MetadataRoute } from "next";
import { SITE } from "@/lib/siteData";
import { CONDITIONS } from "@/lib/conditionsData";

// Sitemap generado automáticamente en /sitemap.xml.
// Le entrega a Google la lista completa de URLs en vez de esperar a que las
// descubra navegando. Al añadir una condición nueva en conditionsData.ts,
// su página entra aquí sola.

// Rutas fijas del sitio. La prioridad es relativa entre páginas propias:
// orienta a Google sobre cuáles importan más, no compite con otros sitios.
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/conditions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/patient-info/insurance", priority: 0.7, changeFrequency: "monthly" },
  { path: "/patient-info/forms", priority: 0.6, changeFrequency: "yearly" },
  { path: "/patient-info/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/patient-info/refer-a-friend", priority: 0.5, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Una entrada por condición tratada: son las páginas que compiten por
  // búsquedas específicas ("back pain Elmhurst", "sciatica Queens").
  const conditionPages = CONDITIONS.map((condition) => ({
    url: `${SITE.url}/conditions/${condition.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...conditionPages];
}
