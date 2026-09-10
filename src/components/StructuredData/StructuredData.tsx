import { SITE, HOURS, SERVICES } from "@/lib/siteData";

// ============================================================
// Datos estructurados (JSON-LD, schema.org).
//
// Es la ficha que Google lee para entender QUÉ es este negocio.
// Alimenta el panel lateral y los resultados enriquecidos con
// dirección, teléfono y horario, y refuerza el perfil de Google Maps.
//
// Todo sale de siteData.ts: si cambia un horario o el teléfono allí,
// cambia aquí solo. Nunca escribir datos a mano en este archivo.
// ============================================================

/** "5:00 PM" -> "17:00" (formato que exige schema.org). */
function to24Hour(value: string): string | null {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}`;
}

/** Convierte HOURS a openingHoursSpecification; omite los días cerrados. */
function buildOpeningHours() {
  return HOURS.flatMap((entry) => {
    // El separador en los datos es un guion largo (–)
    const parts = entry.time.split(/\s*[–—-]\s*/);
    if (parts.length !== 2) return []; // "Closed" y cualquier formato raro

    const opens = to24Hour(parts[0]);
    const closes = to24Hour(parts[1]);
    if (!opens || !closes) return [];

    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${entry.day}`,
        opens,
        closes,
      },
    ];
  });
}

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE.url}/#clinic`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneHref,
    faxNumber: SITE.fax,
    email: SITE.email,
    image: `${SITE.url}/images/Logo4.png`,
    logo: `${SITE.url}/images/Logo4.png`,
    description:
      "Physical therapy, chiropractic care, and acupuncture in Elmhurst, NY for patients recovering from auto accidents, work injuries, home accidents, and other personal injuries.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    hasMap: SITE.mapEmbedSrc,
    openingHoursSpecification: buildOpeningHours(),
    // Los tres servicios clínicos, tal como están definidos en siteData
    availableService: SERVICES.map((service) => ({
      "@type": "MedicalTherapy",
      name: service.name,
    })),
    // Zonas de las que reciben pacientes: refuerza las búsquedas locales
    areaServed: [
      { "@type": "City", name: "Elmhurst" },
      { "@type": "City", name: "Corona" },
      { "@type": "City", name: "Jackson Heights" },
      { "@type": "AdministrativeArea", name: "Queens" },
    ],
    // Idiomas de atención: relevante en Queens
    availableLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es generado por nosotros desde siteData, no entra
      // nada del usuario. Se escapa "<" por precaución.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
