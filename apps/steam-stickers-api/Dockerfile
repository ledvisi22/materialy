FROM node:24.8-alpine

ENV NODE_ENV=production

COPY package.json .
RUN npm install

COPY . .

ARG STEAM_STICKERS_API_CACHE_PATH

CMD ["node", "index.ts"]
EXPOSE 3000