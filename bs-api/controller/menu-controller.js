const action = require('../action/action');

exports.createMenu = (req, res) => {
  action.createMenu(req.body)
    .then(() => res.status(200).json("Success"))
    .catch((err) => res.status(400).json("Failure"))
}

exports.getAllMenus = (req, res) => {
  action.getAllMenus()
    .then((reviews) => res.status(200).json(reviews))
    .catch(() => res.status(400).json("Failure"))
}

exports.updateMenu = (req, res) => {
  action.updateMenu(req.body)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(400).json("no " + error))
}

exports.deleteMenu = (req, res) => {
  action.deleteMenu(req.params.menuId)
    .then(() => res.status(200).json())
    .catch(() => res.status(400).json())
}
