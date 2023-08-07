FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y apt-utils
RUN apt-get upgrade -y
RUN apt-get install -y mysql-server
RUN service mysql start
RUN apt-get install -y lsb-release curl gpg
RUN curl -fsSL https://packages.redis.io/gpg |  gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

RUN echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" |  tee /etc/apt/sources.list.d/redis.list

RUN apt-get install -y redis

FROM node:latest
# Create an app directory
WORKDIR /tradeadviser

COPY package*.json ./  

RUN npm install  -- save
# If you are building your code for production

# Bundle app source
COPY . .

EXPOSE 3000
RUN npm run prepublish
CMD [ "npm run", "production" ]
