const User = require('../data-schematic/user-schematic');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../secret');

exports.getUserFromToken = (req, res, next) => {
  verifiedJwt = jwt.verify(req.params.token, secret);
  let userId = verifiedJwt.userId;
  User.findOne({
      _id: userId
    })
    .then(
      user => res.status(200).json(user)
    )
    .catch(
      error => res.status(500).json("Unable to retrieve user <= " + error)
    )
}
