FROM node

WORKDIR /web

COPY . .

RUN npm install

RUN npm run build:frontend

FROM nginx

COPY ./default.conf /etc/nginx/conf.d

COPY --from=0 /web/dist/frontend  /usr/share/nginx/html/

EXPOSE 8080
