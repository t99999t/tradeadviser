FROM ubuntuL:latest
RUN apt update
RUN apt install -y nodejs

WORKDIR /tradeadviser
COPY package.json  package.json
RUN npm install -- production
RUN npm prepublish
COPY ..
FROM apache2 AS builder
COPY ./build  ./var/www/html
EXPOSE 8000
EXPOSE 80
RUN docker image build -t tradeadviser 


CMD ["docker run -p 9988:8000 -p 9987:80 tradeadviser:latest"]
