const Menu = require('../data-schematic/menu-schematic');

exports.createMenu = (req, res) => {
  let payload = {
    ...req.body
  };

  // If req contains files
  if (req.file) {
    payload.image = req.protocol + "://" + req.get('host') + "/" + req.file.path;
  }

  // Save to database
  let menu = new Menu({
      ...payload
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
  let payload = {
    ...req.body
  };

  // If req contains files
  if (req.file) {
    payload.image = req.protocol + "://" + req.get('host') + "/" + req.file.path;
  }

  // Update database
  Menu.findByIdAndUpdate(payload._id, payload)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.deleteMenu = (req, res) => {
  Menu.findByIdAndRemove(req.params.menuId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}
