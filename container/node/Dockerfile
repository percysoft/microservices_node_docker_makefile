FROM node:10

WORKDIR /usr/app

COPY application/package*.json ./

RUN npm install

COPY application .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]