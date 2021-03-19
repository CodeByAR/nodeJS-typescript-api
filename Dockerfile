FROM node:15 As builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/app.js" ]