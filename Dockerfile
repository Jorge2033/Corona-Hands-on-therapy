# ============================================================
# Etapa 1: instalar dependencias y compilar el sitio
# ============================================================
FROM node:22-alpine AS builder
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
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario sin privilegios (no correr como root dentro del contenedor)
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# El build standalone incluye node_modules mínimos y server.js propio
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
