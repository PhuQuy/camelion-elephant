var nodemailer = require("nodemailer");
var path = require("path");
const handlebars = require("handlebars");
const fs = require("fs");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dotafreelancer@gmail.com",
    pass: "XXxx11@@"
  }
});

const sendEmailTemplate = (templateFile, subject, data, callback) => {
  var filePath = path.join(__dirname, "../", "templates", templateFile);
  let source = fs.readFileSync(filePath, "utf8");
  const precompiled = new Function("return " + handlebars.precompile(source))();
  let theTemplate = handlebars.template(precompiled);
  const theCompiledHtml = theTemplate(data);
  const mailOptions = {
    to: data.to,
    subject: subject,
    html: theCompiledHtml
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log("Error", JSON.stringify(err));
      callback(err, null);
    } else {
      console.log("Success", JSON.stringify(info));
      callback(null, info);
    }
  });
};

exports.sendNotify = (req, res) => {
  const email = req.body.email;
  console.log('email', email);
  const dataClient = {
    fullname: "Le Xuan Thinh",
    to: email
  };
  const dataAdmin = {
    fullname: "Admin",
    host: req.headers.origin,
    to: "lethinh0510@gmail.com"
  };
  sendEmailTemplate("admin.html", "New Contact", dataAdmin, function(
    err,
    result
  ) {
    console.log("callback", err, result);
    if (err) {
      res.status(500).json({ success: false });
    } else {
      sendEmailTemplate("index.html", "Contact", dataClient, function(err, result2) {
        console.log("callback2", err, result2);
        if (err) {
          res.status(500).json({ success: false });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
};
