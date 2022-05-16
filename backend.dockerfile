FROM node:16

WORKDIR /usr/src/app

# Copy the nodeJs module
COPY ./src/app/backend/ ./

RUN npm install

RUN npm run build

EXPOSE 7000

CMD [ "node", "dist/index.js"]
