#### Stage 0, Build Beausite API
FROM node:alpine
LABEL author="Olivier D'Ancona"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 1470
CMD ["node","server.js"]
