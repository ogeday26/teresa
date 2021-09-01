FROM node:16.7-alpine

WORKDIR /usr/app/

COPY ./package* ./

RUN npm i && npm i -g tsc

ENV NODE_ENV=production

COPY . .

RUN tsc

CMD ["node", "./dist/index.js"]