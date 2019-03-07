FROM node:8

WORKDIR /usr/src/app
COPY local.js ./
COPY dist/ ./dist
RUN node local.js
