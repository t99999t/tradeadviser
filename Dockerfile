FROM ubuntu:latest AS Build
RUN apt update -y
RUN apt-get install -y build-essential
RUN apt-get install -y apt-utils

RUN apt install npm -y
RUN  npm cache clean -f


RUN  apt-get install -y ccache
RUN   chown -R  whoami ~/.n
RUN apt-get install -y n
RUN  n latest  # fix /usr/bin/node
RUN node -v

RUN apt get install -y mysql
RUN service mysql start

WORKDIR /tradeadviser
COPY package.json ./

RUN npm install -- production
RUN npm run prepublish

COPY . .
EXPOSE 3000
CMD ["npm run" ,"production"]

#
#
FROM httpd:latest AS bin
COPY   ./build  ./usr/local/apache2/htdocs/
EXPOSE 8080
CMD ["docker build -t my-apache2 && run -dit --name tradeadviser -p 8080:80 my-apache2"]