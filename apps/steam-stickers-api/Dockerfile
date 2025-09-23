FROM node:24.8-alpine

ENV NODE_ENV=production

COPY package.json .
RUN npm install

COPY . .

ENV STEAM_STICKERS_API_CACHE_PATH=/mnt/steam-stickers-cache

CMD ["node", "index.ts"]
EXPOSE 3000