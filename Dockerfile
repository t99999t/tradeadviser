FROM ubuntu:latest
RUN apt-get install -y build-essential
RUN apt update -y
RUN apt-get install -y apache2
RUN apt install npm -y
RUN  npm cache clean -f
RUN  npm install -g n
RUN chown -R $whoami ~/.n
RUN  n latest  # fix /usr/bin/node
RUN node -v
RUN  n latest  # fix /usr/bin/node
RUN apt get install -y mysql-server
RUN service mysql-server start

WORKDIR /tradeadviser
COPY package.json ./
RUN npm install -- production
COPY . .
#RUN npm run prepublish

CMD ["npm run" ,"production"]
#
#
#FROM httpd:2.4 as bin
#COPY   ./build  ./usr/local/apache2/htdocs/
#EXPOSE 8080
#CMD ["docker build -t my-apache2 && run -dit --name tradeadviser -p 8080:80 my-apache2"]