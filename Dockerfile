FROM node:24-alpine as builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run docs:build

FROM caddy:2
WORKDIR /app
COPY --from=builder /src/docs/.vitepress/dist /app
COPY Caddyfile /etc/caddy/Caddyfile
