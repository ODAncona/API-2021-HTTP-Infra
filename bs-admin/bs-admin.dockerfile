#### Stage 0, Build admin app from a node image
FROM node:alpine as build
LABEL author="Olivier D'Ancona"
RUN npm i npm@latest -g
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
COPY . .
RUN npm run build

####Stage 1, Build Nginx http server
FROM nginx:alpine
COPY --from=build /app/dist/bs-admin /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
