// generated by @ng-toolkit/universal
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')
const server = require('./dist/server');
const mailController = require('./server/controller/sendMail');

server.app.use(bodyParser.json())
server.app.post('/api/sendEmail', mailController.sendNotify);

server.app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});
