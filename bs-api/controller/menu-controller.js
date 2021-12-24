const action = require('../action/action');

exports.createMenu = (req, res) => {
  action.createMenu(req.body)
    .then(() => res.status(201).json("Success"))
    .catch((err) => res.status(500).json("Failure: " + error))
}

exports.getAllMenus = (req, res) => {
  action.getAllMenus()
    .then((reviews) => res.status(200).json(reviews))
    .catch(() => res.status(500).json("Failure: " + error))
}

exports.updateMenu = (req, res) => {
  action.updateMenu(req.body)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.deleteMenu = (req, res) => {
  action.deleteMenu(req.params.menuId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}
