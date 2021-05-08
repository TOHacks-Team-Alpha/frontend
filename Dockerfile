# Dockerfile
FROM node:latest

COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 8080

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

CMD [ "yarn", "start" ]