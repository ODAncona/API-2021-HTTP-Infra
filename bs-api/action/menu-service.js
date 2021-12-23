const Menu = require('../data-schematic/menu-schematic');

exports.createMenu = (payload) => {
  return new Promise((resolve, reject) => {
    let menu = new Menu({
      ...payload
    });
    menu.save()
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

exports.getAllMenus = () => {
  return new Promise((resolve, reject) => {
    Menu.find()
      .then(menus => resolve(menus))
      .catch(error => reject(error))
  })
}

exports.updateMenu = (menu) => {
  return new Promise((resolve, reject) => {
    Menu.findByIdAndUpdate(menu._id, menu)
      .then(() => resolve())
      .catch((error) => reject(error))
  })
}

exports.deleteMenu = (menuId) => {
  return new Promise((resolve, reject) => {
    Menu.findByIdAndRemove(menuId)
      .then(() => resolve())
      .catch(() => reject())
  })
}
