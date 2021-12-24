const nodemailer = require('nodemailer');

exports.sendMail = (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: "beausitemailer@gmail.com",
      pass: "baderi3y",
    },
  });
  transporter.sendMail(req.body)
    .then(
      () => res.status(200).json("Your email has been sent. Confirmation will follow.")
    )
    .catch(
      error => res.status(500).json("Unable to send mail <= " + error)
    )
}
