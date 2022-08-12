const User = require("../data-schematic/user-schematic");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../secret");

exports.login = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .then((usr) => {
      if (!usr) {
        return res.status(401).json({
          error: "Utilisateur inexistant ou Mot de passe incorrect.",
        });
      }
      bcrypt
        .compare(req.body.password, usr.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: "Utilisateur inexistant ou Mot de passe incorrect.",
            });
          }
          res.status(200).json({
            userId: usr._id,
            token: jwt.sign(
              {
                userId: usr._id,
              },
              secret,
              {
                expiresIn: "24h",
              }
            ),
          });
        })
        .catch((error) =>
          res.status(500).json({
            error,
          })
        );
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};

exports.signupAdmin = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((cryptedPassword) => {
      const usr = new User({
        username: req.body.username,
        password: cryptedPassword,
      });
      usr
        .save()
        .then(() =>
          res.status(201).json({
            message: "Administrateur enregistré",
          })
        )
        .catch((error) =>
          res.status(400).json({
            error,
          })
        );
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};

exports.verifyToken = (req, res) => {
  try {
    verifiedJwt = jwt.verify(req.params.token, secret);
    let userId = verifiedJwt.userId;
    User.findOne({
      _id: userId,
    })
      .then((user) => {
        if (user) {
          res.status(200).send("true");
        } else {
          res.status(200).send("false");
        }
      })
      .catch(() => res.status(200).send("false"));
  } catch (e) {
    res.status(200).send("false");
  }
};

exports.updatePassword = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken.userId;
    console.log(userId);
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        return User.findOneAndUpdate(
          {
            _id: userId,
          },
          {
            $set: {
              password: hashedPassword,
            },
          }
        );
      })
      .then(() => res.status(200).json("Mot de passe changé avec succès"))
      .catch((error) =>
        res
          .status(500)
          .json(
            "Impossible de mettre le mot de passe à jour dans la base de donnée <= " +
              error
          )
      );
  } catch {
    res.status(400).json({
      error: new Error("Bad request!"),
    });
  }
};
