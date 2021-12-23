const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/upload');
const promotionController = require('../controller/promotion-controller');

//Routes
router.post('/', auth, multer, promotionController.createPromotion);
router.get('/', promotionController.getAllPromotions);
router.get('/:promotionId', promotionController.getAPromotion);
router.put('/', auth, multer, promotionController.updatePromotion);
router.delete('/:promotionId', auth, promotionController.deletePromotion);

module.exports = router;
