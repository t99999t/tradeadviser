#
# Node.js Dockerfile
#
# https://github.com/dockerfile/nodejs
#

# Pull base image.
FROM node:latest

RUN npm install -g npm@latest
# Define working directory.
WORKDIR /tradeadviser
COPY package*.json /
# If you are building your code for production

COPY ./build    ./build
RUN npm install --production
# Bundle app source
COPY . .
EXPOSE 3000
# Define default command.
#CMD ["bash"]
CMD ["npm run", "production"]
