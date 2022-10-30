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

  /**
   * @param {string} mail - The email object who look like this:
   * {
   *  from: "", // sender address
   *  to: "", // list of receivers
   *  subject: "", // Subject line
   *  text: "", // plain text body
   *  html: "" // html body
   * }
   */
  transporter.sendMail(req.body)
    .then(
      () => res.status(200).json("Your email has been sent. Confirmation will follow.")
    )
    .catch(
      error => res.status(500).json("Unable to send mail <= " + error)
    )
}
