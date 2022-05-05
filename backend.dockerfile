FROM node:16

WORKDIR /usr/src/app

# Copy the nodeJs module
COPY ./src/app/backend/package*.json ./

RUN npm install

COPY ./dist/backend .

EXPOSE 7000

CMD [ "node", "index.js"]
