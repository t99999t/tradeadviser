#
# Node.js Dockerfile
#
# https://github.com/dockerfile/nodejs
#

# Pull base image.
FROM node:latest AS Builder
RUN npm install -g npm@latest
# # Install Node.js
# RUN \
#   cd /tmp && \
#   wget http://nodejs.org/dist/node-latest.tar.gz && \
#   tar xvzf node-latest.tar.gz && \
#   rm -f node-latest.tar.gz && \
#   cd node-v* && \
#   ./configure && \
#   CXX="g++ -Wno-unused-local-typedefs" make && \
#   CXX="g++ -Wno-unused-local-typedefs" make install && \
#   cd /tmp && \
#   rm -rf /tmp/node-v* && \
#   npm install -g npm && \
#   printf '\n# Node.js\nexport PATH="node_modules/.bin:$PATH"' >> /root/.bashrc

# Define working directory.
WORKDIR /tradeadviser
COPY package*.json /
# If you are building your code for production
RUN npm ci --omit=dev
RUN npm install --production


# Bundle app source
COPY . .
EXPOSE 3000
# Define default command.

#CMD ["bash"]

CMD["npm run", "production"]
