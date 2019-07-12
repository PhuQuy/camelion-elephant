var nodemailer = require("nodemailer");
var path = require("path");
const handlebars = require("handlebars");
const fs = require("fs");

var transporter = nodemailer.createTransport({
//   host: "smtp.zoho.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "support@phuquy.dev",
//     pass: "XFxf12!@"
//   }
service: 'gmail',
auth: {
  user: 'dotafreelancer@gmail.com',
  pass: 'XXxx11@@',
}
});

const sendEmailTemplate = (templateFile, subject, data, callback) => {
  var filePath = path.join(__dirname, "../", "templates", templateFile);
  let source = fs.readFileSync(filePath, "utf8");
  const precompiled = new Function("return " + handlebars.precompile(source))();
  let theTemplate = handlebars.template(precompiled);
  const theCompiledHtml = theTemplate(data);
  const mailOptions = {
    from: 'dotafreelancer@gmail.com',
    to: data.to,
    subject: subject,
    html: theCompiledHtml
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, info);
    }
  });
};

exports.sendNotify = (req, res) => {
  const email = req.body.email;
  const fullname = req.body.fullname;
  const message = req.body.message;
  const phone = req.body.phone;

  const dataClient = {
    fullname: fullname,
    to: email
  };
  const dataAdmin = {
    fullname: "Admin",
    client: email,
    phone: phone,
    content:  message,
    host: req.headers.origin,
    to: "phuquy@gocodee.com"
  };
  sendEmailTemplate("admin.html", "New Contact", dataAdmin, function (
    err,
    result
  ) {
    if (err) {
        console.log(err);
        
      res.status(500).json({
        success: false,
        error: error
      });
    } else {
      sendEmailTemplate("index.html", "Contact", dataClient, function (err, result2) {
        if (err) {
        console.log(err);

          res.status(500).json({
            success: false
          });
        } else {
          res.json({
            success: true
          });
        }
      });
    }
  });
};
