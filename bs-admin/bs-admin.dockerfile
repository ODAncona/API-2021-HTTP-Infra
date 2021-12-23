#### Stage 0, Build admin app from a node image
FROM node:alpine as node
LABEL author="Olivier D'Ancona"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

####Stage 1, Build Nginx backend
FROM nginx:alpine
COPY --from=node /app/dist/bs-admin /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
