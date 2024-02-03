FROM node:14

WORKDIR /app

COPY /package*.json ./

RUN npm install -D @vue/cli-service
RUN npm install -D sass
RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
