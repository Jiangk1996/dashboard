# FROM node:16

# WORKDIR /usr/src/app

# # Copy the nodeJs module
# COPY ./src/app/backend/package*.json ./
# # COPY start.sh ./

# RUN npm install

# COPY ./dist/backend .

# EXPOSE 7000

FROM nginx

# COPY --from=0 . .

COPY ./default.conf /etc/nginx/conf.d

COPY dist/frontend  /usr/share/nginx/html/

EXPOSE 8080

# CMD [ "pm2", "start", "index.js" ]
# CMD [ "node", "backend/index.js"]
# CMD [ "sh", "start.sh"]
