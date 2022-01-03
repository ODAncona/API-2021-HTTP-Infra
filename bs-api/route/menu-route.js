const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const menuController = require('../controller/menu-controller');

//Routes
router.post('/dailyMenu/', auth, multer.single('file'), menuController.createDailyMenu);
router.get('/dailyMenu/', menuController.getDailyMenu);
router.put('/dailyMenu/', auth, multer.single('file'), menuController.updateDailyMenu);
router.post('/', auth, multer.single('file'), menuController.createMenu);
router.get('/', menuController.getAllMenus);
router.put('/', auth, multer.single('file'), menuController.updateMenu);
router.delete('/:menuId', auth, menuController.deleteMenu);

module.exports = router;
