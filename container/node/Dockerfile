FROM node:10

RUN mkdir -p /home/usr/app
WORKDIR /usr/app

COPY package.json /usr/app

ADD . /usr/app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"] 