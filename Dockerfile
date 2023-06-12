FROM ubuntu:latest AS Build
RUN apt update -y

RUN apt install npm -y
RUN  npm cache clean -f
RUN  npm install -g n

#RUN  sudo chown -R `whoami` ~/.n
RUN  n latest  # fix /usr/bin/node
RUN node -v

RUN apt get install -y mysql-server
RUN service mysql-server start

WORKDIR ./usr/local/tradeadviser
COPY package.json ./
RUN npm install -- production
COPY . .
RUN npm run prepublish

#CMD ["npm run" ,"production"]
#
#
FROM httpd:2.4 AS bin
COPY   ./build  ./usr/local/apache2/htdocs/
EXPOSE 8080
CMD ["docker build -t my-apache2 && run -dit --name tradeadviser -p 8080:80 my-apache2"]