FROM ubuntu:latest
RUN apt update
RUN apt install -y nodejs

WORKDIR /tradeadviser
COPY package.json   package.json
RUN npm install -- production
RUN npm prepublish
COPY ..


EXPOSE 3000
CMD ["npm run","production"]
