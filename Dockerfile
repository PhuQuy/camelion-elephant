FROM node:8

WORKDIR /usr/src/app
COPY local.js ./
COPY dist/ ./dist
COPY server/ ./server
RUN cd server && npm install && cd ..
CMD ["node", "local.js"]