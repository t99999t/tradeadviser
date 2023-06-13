FROM ubuntu:latest AS Builder
RUN apt-get install -y apt-utils
RUN apt update -y

RUN apt install npm -y
RUN  npm cache clean -f
RUN  npm install -g n

RUN  sudo chown -R $ whoami ~/.n
RUN  n latest  # fix /usr/bin/node
RUN node -v

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


