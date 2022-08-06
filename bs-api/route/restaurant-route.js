const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const menuController = require('../controller/menu-controller');

//Routes
router.post('/menu/', auth, multer.single('file'), menuController.createMenu);
router.get('/menu/', menuController.getMenu);
router.put('/menu/', auth, multer.single('file'), menuController.updateMenu);
router.post('/', auth, multer.single('file'), menuController.createMeal);
router.get('/', menuController.getAllMeals);
router.put('/', auth, multer.single('file'), menuController.updateMeal);
router.delete('/:mealId', auth, menuController.deleteMeal);

module.exports = router;
