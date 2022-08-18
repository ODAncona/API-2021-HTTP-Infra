require('dotenv').config();
const User = require('../data-schematic/user-schematic');
const jwt = require('jsonwebtoken');


exports.getUserFromToken = (req, res) => {
  verifiedJwt = jwt.verify(req.params.token, process.env.JWT_SECRET);
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
