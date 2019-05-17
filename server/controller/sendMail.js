var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ // config mail server
  service: 'Gmail',
  auth: {
    user: 'dotafreelancer@gmail.com',
    pass: 'XXxx11@@'
  }
});

exports.sendMail = function (mailOptions) {
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(JSON.stringify(err));
      return err;
    }
    if (info) {
      console.log(JSON.stringify(info));
      return info;
    }
  });
};

exports.sendNotify = (req, res) => {
  const mailOptions = {
    from: 'nvkhanh1775@gmail.com',
    to: 'nvkhanh17@gmail.com',
    subject: 'New Request',
    html: '<p>Yuou got a new message</p>'
  }
  this.sendMail(mailOptions);
  res.send('OK');
}
