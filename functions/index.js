const functions = require('firebase-functions');
const local = require('./local');

const http = functions.https.onRequest((request, response) => {
    return local.server.app(request, response);
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