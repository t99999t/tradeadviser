FROM webdevops/php-apache
RUN apt update
RUN apt install -y nodejs

WORKDIR /
COPY package.json  package.json
RUN npm install -- production

COPY ..

COPY nodejs.conf /opt/docker/etc/supervisor.d/

EXPOSE 8000
EXPOSE 80

CMD ["supervisord"]
