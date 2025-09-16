FROM node:24.1-alpine

ENV NODE_ENV=production

COPY package.json .
RUN npm install

COPY . .

CMD ["node", "index.ts"]
EXPOSE 3000