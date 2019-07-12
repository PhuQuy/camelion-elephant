const functions = require('firebase-functions');
const local = require('./local');
const sendMail = require('./controller/sendMail');

const http = functions.https.onRequest((request, response) => {
  return local.server.app(request, response);
});

const email = functions.https.onRequest((request, response) => {
  return sendMail.sendNotify(request, response);
});

module.exports = {
  http,
  email
}
