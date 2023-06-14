FROM ubuntu:latest AS Builder

RUN apt update -y
RUN apt-get install apt-utils
RUN apt install npm -y
RUN  npm cache clean -f
RUN  npm install -g n

RUN apt-get install -y wget;

RUN apt get install -y mysql
RUN service mysql start
RUN apt-get install -y apache2

WORKDIR ./usr/local/tradeadviser
COPY package.json ./
RUN npm install -- production
COPY . .
RUN npm run prepublish
EXPOSE 3000
COPY ./build  ./var/www/html

EXPOSE 8080
CMD ["npm run" ,"production"]


