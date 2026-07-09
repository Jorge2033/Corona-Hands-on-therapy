import { NextRequest } from "next/server";

// ============================================================
// Utilidades de seguridad compartidas por las rutas de formularios.
// ============================================================

// --- Rate limiting simple en memoria (suficiente para un solo contenedor) ---
// Ventana deslizante: máx. N envíos por IP cada WINDOW_MS.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_PER_IP = 5;
// Sin proxy delante, puede no venir X-Forwarded-For; en ese caso se usa un
// cubo global más generoso para no bloquear a todos los visitantes juntos.
const MAX_GLOBAL_FALLBACK = 30;

const hits = new Map<string, number[]>();

export function isRateLimited(req: NextRequest): boolean {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "";
  const key = ip || "__global__";
  const max = ip ? MAX_PER_IP : MAX_GLOBAL_FALLBACK;

  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  // Limpieza periódica para que el mapa no crezca sin límite
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

// --- Verificación de mismo origen (defensa tipo anti-CSRF) ---
// Si el navegador manda el header Origin, debe coincidir con el Host del
// servidor. Bloquea que otros sitios web usen nuestros endpoints de correo.
export function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // peticiones sin Origin (no provienen de un navegador cross-site)
  const host = req.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// --- Límites de tamaño por campo ---
export const FIELD_LIMITS = {
  short: 200, // nombre, teléfono, email
  medium: 100, // caseType, role, fecha, hora
  long: 5000, // mensajes y notas
} as const;

// Recorta un string al límite dado (los formularios legítimos nunca lo alcanzan).
export function clamp(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

// Formato razonable de email (no exhaustivo, solo evita basura obvia
// y cabeceras inyectadas: sin espacios ni saltos de línea).
export function isEmailish(value: string): boolean {
  return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(value);
}

// Rechaza cuerpos demasiado grandes antes de parsear el JSON.
export function isBodyTooLarge(req: NextRequest, maxBytes: number): boolean {
  const len = Number(req.headers.get("content-length") || 0);
  return len > maxBytes;
}
