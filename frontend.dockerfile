FROM nginx

COPY ./default.conf /etc/nginx/conf.d

COPY dist/frontend  /usr/share/nginx/html/

EXPOSE 8080
