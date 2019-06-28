const functions = require('firebase-functions');
const server = require('./dist/server');

const http = functions.https.onRequest((request, response) => {
    return server.app(request, response);
    // const isBot = botDetect.detectBot(request.headers['user-agent']);
    // if (!isBot) {
    //   return client.app(request, response);
    // }
    // if (!request.path) {
    //   request.url = "/" + request.url;
    // }
  });

  module.exports = {
    http
  }