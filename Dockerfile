FROM node:latest

WORKDIR /tradeadviser
COPY package.json   package.json
RUN npm install -- production
COPY ..


EXPOSE 3000
CMD ["npm run","production"]
