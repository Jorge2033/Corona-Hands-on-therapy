import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

// ============================================================
// Cifrado AES-256-GCM para los datos de pacientes guardados en
// la base de datos. La clave vive SOLO en la variable de entorno
// DATA_ENCRYPTION_KEY (64 caracteres hex = 32 bytes).
// Genera una con:  openssl rand -hex 32
// ============================================================

const ALGO = "aes-256-gcm";
const IV_BYTES = 12; // tamaño estándar recomendado para GCM

function getKey(): Buffer | null {
  const hex = process.env.DATA_ENCRYPTION_KEY;
  if (!hex || !/^[0-9a-fA-F]{64}$/.test(hex)) return null;
  return Buffer.from(hex, "hex");
}

// Indica si el cifrado está configurado (si no, las rutas avisan por consola).
export function encryptionReady(): boolean {
  return getKey() !== null;
}

// Devuelve "iv:tag:ciphertext" en base64. GCM además de cifrar autentica:
// si alguien modifica el dato en la base, el descifrado falla.
export function encryptField(plaintext: string): string {
  const key = getKey();
  if (!key) throw new Error("DATA_ENCRYPTION_KEY is missing or invalid (need 64 hex chars).");
  const iv = randomBytes(IV_BYTES);
  const cipher = createCipheriv(ALGO, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString("base64")}:${tag.toString("base64")}:${encrypted.toString("base64")}`;
}

export function decryptField(payload: string): string {
  const key = getKey();
  if (!key) throw new Error("DATA_ENCRYPTION_KEY is missing or invalid (need 64 hex chars).");
  const [ivB64, tagB64, dataB64] = payload.split(":");
  if (!ivB64 || !tagB64 || !dataB64) throw new Error("Malformed encrypted payload.");
  const decipher = createDecipheriv(ALGO, key, Buffer.from(ivB64, "base64"));
  decipher.setAuthTag(Buffer.from(tagB64, "base64"));
  return Buffer.concat([
    decipher.update(Buffer.from(dataB64, "base64")),
    decipher.final(),
  ]).toString("utf8");
}
