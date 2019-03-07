FROM node:carbon
# Create app directory
WORKDIR /usr/src/app
# Bundle app src
COPY dist .
COPY local.js .
EXPOSE 3000
RUN node local.js