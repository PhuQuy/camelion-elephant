FROM node:8

WORKDIR /usr/src/app
COPY local.js ./
COPY dist/ ./dist
CMD ["node", "local.js"]