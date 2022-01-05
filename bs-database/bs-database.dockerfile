FROM mongo:latest
WORKDIR .
COPY . .
COPY populate.sh /docker-entrypoint-initdb.d/
COPY *.json /docker-entrypoint-initdb.d/
EXPOSE 27017
