const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

exports.sendMail = (req, res) => {

  const myOAuth2Client = new OAuth2(
    process.env.MAILER_CLIENT_ID,
    process.env.MAILER_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )

  myOAuth2Client.setCredentials({
    refresh_token: process.env.MAILER_REFRESH_TOKEN
  });

  const myAccessToken = myOAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAILER_EMAIL,
      clientId: process.env.MAILER_CLIENT_ID,
      clientSecret: process.env.MAILER_CLIENT_SECRET,
      refreshToken: process.env.MAILER_REFRESH_TOKEN,
      accessToken: myAccessToken
    }
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
