#### Stage 0, Build website from a node image
FROM node:alpine as node
LABEL author="Olivier D'Ancona"
RUN npm i npm@latest -g
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
COPY . .
RUN npm run build

####Stage 1, Build Nginx backend
FROM nginx:alpine
COPY --from=node /app/dist/bs-website /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
