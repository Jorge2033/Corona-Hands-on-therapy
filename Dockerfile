# ============================================================
# Etapa 1: instalar dependencias y compilar el sitio
# (node:22-slim en vez de alpine: better-sqlite3 trae binario
#  precompilado para Debian y evita compilar en el servidor)
# ============================================================
FROM node:22-slim AS builder
WORKDIR /app

# Instala dependencias primero (se cachea si package.json no cambia)
COPY package.json package-lock.json* ./
RUN npm ci

# Copia el resto del código y compila
COPY . .
# Evita que la telemetría de Next intente salir a internet durante el build
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ============================================================
# Etapa 2: imagen final mínima, solo lo necesario para servir
# ============================================================
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario sin privilegios (no correr como root dentro del contenedor)
RUN groupadd --system nodejs && useradd --system --gid nodejs nextjs

# El build standalone incluye node_modules mínimos y server.js propio
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# Script para leer/descifrar los envíos guardados (docker compose exec web node scripts/read-submissions.mjs)
COPY --from=builder --chown=nextjs:nodejs /app/scripts ./scripts

# Carpeta de la base de datos (montada como volumen en docker-compose)
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
