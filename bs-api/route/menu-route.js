const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const menuController = require('../controller/menu-controller');

//Routes
router.post('/', auth, menuController.createMenu);
router.get('/', menuController.getAllMenus);
router.put('/', auth, menuController.updateMenu);
router.delete('/:menuId', auth, menuController.deleteMenu);

module.exports = router;
