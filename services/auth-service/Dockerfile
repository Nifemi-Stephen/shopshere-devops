# Stage 1 - Dependencies
FROM node:24-alpine AS dependencies
WORKDIR /app
COPY package*.json ./

RUN npm ci

# Stage 2 - Runtime
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=dependencies /app/package*.json ./
COPY --from=dependencies /app/node_modules ./node_modules
COPY prisma ./prisma
COPY src ./src
COPY VERSION ./

RUN npx prisma generate
RUN addgroup -S shopverse \
    && adduser -S shopverse -G shopverse
USER shopverse
EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD node -e "fetch('http://localhost:3001/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["npm", "start"]