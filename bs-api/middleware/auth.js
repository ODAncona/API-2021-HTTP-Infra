require('dotenv').config();
const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  //console.log(req.get('authorization'));
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json("Avez-vous le laisser-passer A-38 ?");
  }
};
