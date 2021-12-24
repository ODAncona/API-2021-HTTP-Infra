const action = require('../action/action');

exports.sendMail = (req, res) => {
  action.sendMail(req.body)
    .then(
      () => res.status(200).json(
        "Your email has been sent. Confirmation will follow.")
    )
    .catch(
      error => res.status(500).json("Unable to send mail <= " + error)
    )
}
