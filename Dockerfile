FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y apt-utils
RUN apt-get install -y mysql-server
RUN service mysql-server restart

FROM node:latest

# Create app directory
WORKDIR /usr/src/tradeadviser

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --production
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm run", "production" ]


FROM httpd:latest AS bin
COPY   ./build  ./usr/local/apache2/htdocs/
EXPOSE 8080
CMD ["docker build -t my-apache2 && run -dit --name tradeadviser -p 8080:80 my-apache2"]