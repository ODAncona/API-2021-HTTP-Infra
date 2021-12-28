const Menu = require('../data-schematic/menu-schematic');

exports.createMenu = (req, res) => {
  let menu = new Menu({
      ...req.body
    }).save()
    .then(() => res.status(201).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.getAllMenus = (req, res) => {
  Menu.find()
    .then((menus) => res.status(200).json(menus))
    .catch(() => res.status(500).json("Failure: " + error))
}

exports.updateMenu = (req, res) => {
  Menu.findByIdAndUpdate(req.body._id, req.body)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.deleteMenu = (req, res) => {
  Menu.findByIdAndRemove(req.params.menuId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}
