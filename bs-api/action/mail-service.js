const nodemailer = require('nodemailer');

exports.sendMail = (payload) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: "beausitemailer@gmail.com",
        pass: "baderi3y",
      },
    });
    resolve();
    console.log(payload);
    transporter.sendMail(payload).then((s) => {
      console.log("email envoyé", s);
      resolve();
    }).catch((e) => {
      console.log(e);
      reject(e)
    });
  });
}
