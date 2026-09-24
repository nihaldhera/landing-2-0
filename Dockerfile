FROM node:22-alpine AS build
WORKDIR /app
COPY always-run-it-main/package.json always-run-it-main/package-lock.json ./
RUN npm ci
COPY always-run-it-main/ ./
ENV NITRO_PRESET=node-server
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_PRESET=node-server
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
