import Database from "better-sqlite3";
import { mkdirSync } from "fs";
import path from "path";
import { encryptField, encryptionReady } from "./crypto";

// ============================================================
// Almacenamiento de envíos de formularios en SQLite.
// - El archivo vive en DB_PATH (por defecto ./data/submissions.db);
//   en Docker esa carpeta se monta como volumen para que sobreviva
//   reconstrucciones del contenedor.
// - TODOS los datos personales van cifrados con AES-256-GCM
//   (ver crypto.ts). En claro solo quedan: id, tipo de formulario,
//   idioma/origen y fecha — nada que identifique al paciente.
// ============================================================

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), "data", "submissions.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;
  mkdirSync(path.dirname(DB_PATH), { recursive: true });
  db = new Database(DB_PATH);
  // WAL: escrituras seguras y rápidas para un solo proceso
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      form_type TEXT NOT NULL,
      data_enc TEXT NOT NULL
    )
  `);
  return db;
}

// Guarda un envío con todo su contenido cifrado como un solo JSON.
// Devuelve true si se guardó, false si el cifrado no está configurado
// (en ese caso solo se registra la advertencia y el flujo de correo sigue).
export function saveSubmission(formType: string, fields: Record<string, string>): boolean {
  if (!encryptionReady()) {
    console.warn(
      "DATA_ENCRYPTION_KEY missing/invalid — submission NOT saved to database. " +
        "Generate one with: openssl rand -hex 32"
    );
    return false;
  }
  try {
    const dataEnc = encryptField(JSON.stringify(fields));
    getDb()
      .prepare("INSERT INTO submissions (form_type, data_enc) VALUES (?, ?)")
      .run(formType, dataEnc);
    return true;
  } catch (err) {
    // Nunca rompemos el envío del correo por un fallo de almacenamiento
    console.error("Failed to save submission to database:", err);
    return false;
  }
}
