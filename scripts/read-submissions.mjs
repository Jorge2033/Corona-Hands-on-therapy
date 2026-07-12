// ============================================================
// Lee y descifra los envíos de formularios guardados en SQLite.
//
// Uso (local):
//   DATA_ENCRYPTION_KEY=<clave-hex> node scripts/read-submissions.mjs
//
// Uso (dentro del contenedor en el VPS):
//   docker compose exec web node scripts/read-submissions.mjs
//   (la clave y DB_PATH ya vienen del entorno del contenedor)
//
// Opciones:
//   --limit 20        cuántos registros mostrar (por defecto 50, más recientes primero)
//   --type careers    filtra por tipo de formulario
// ============================================================

import Database from "better-sqlite3";
import { createDecipheriv } from "crypto";
import path from "path";

const keyHex = process.env.DATA_ENCRYPTION_KEY;
if (!keyHex || !/^[0-9a-fA-F]{64}$/.test(keyHex)) {
  console.error("Falta DATA_ENCRYPTION_KEY (64 caracteres hex).");
  process.exit(1);
}
const key = Buffer.from(keyHex, "hex");

const dbPath = process.env.DB_PATH || path.join(process.cwd(), "data", "submissions.db");

const args = process.argv.slice(2);
function argValue(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}
const limit = Number(argValue("--limit") || 50);
const typeFilter = argValue("--type");

function decrypt(payload) {
  const [ivB64, tagB64, dataB64] = payload.split(":");
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(ivB64, "base64"));
  decipher.setAuthTag(Buffer.from(tagB64, "base64"));
  return Buffer.concat([decipher.update(Buffer.from(dataB64, "base64")), decipher.final()]).toString("utf8");
}

const db = new Database(dbPath, { readonly: true });
const rows = typeFilter
  ? db.prepare("SELECT * FROM submissions WHERE form_type = ? ORDER BY id DESC LIMIT ?").all(typeFilter, limit)
  : db.prepare("SELECT * FROM submissions ORDER BY id DESC LIMIT ?").all(limit);

console.log(`${rows.length} envío(s) en ${dbPath}\n`);
for (const row of rows) {
  console.log(`#${row.id} [${row.form_type}] ${row.created_at} UTC`);
  try {
    const data = JSON.parse(decrypt(row.data_enc));
    for (const [k, v] of Object.entries(data)) {
      if (v) console.log(`   ${k}: ${String(v).slice(0, 300)}`);
    }
  } catch {
    console.log("   (no se pudo descifrar — ¿clave incorrecta?)");
  }
  console.log();
}
