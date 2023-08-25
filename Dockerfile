FROM node:20-slim

WORKDIR /home/node/app

USER root

RUN apt-get update -y && apt-get install -y openssl
RUN npm install -g pnpm@latest

COPY . .

RUN pnpm i

CMD [ "pnpm", "start:dev" ]
