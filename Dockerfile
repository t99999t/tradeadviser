#
# Node.js Dockerfile
#
# https://github.com/dockerfile/nodejs
#

# Pull base image.
FROM ubuntu:latest
RUN apt-get update &&  apt-get install -y wget
RUN apt-get install -y apt-utils
RUN  apt-get install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
RUN wget https://www.python.org/ftp/python/3.11.3/Python-3.11.3.tgz
RUN tar -xf Python-3.11.3.tgz


# # Install Node.js
RUN \
  cd /tmp && \
  wget http://nodejs.org/dist/node-latest.tar.gz && \
  tar xvzf node-latest.tar.gz && \
  rm -f node-latest.tar.gz && \
  cd node-v* && \
  ./configure && \
  CXX="g++ -Wno-unused-local-typedefs" make && \
  CXX="g++ -Wno-unused-local-typedefs" make install && \
  cd /tmp && \
  rm -rf /tmp/node-v* 
  
  RUN npm install -g npm

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
