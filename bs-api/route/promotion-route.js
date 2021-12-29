const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const promotionController = require('../controller/promotion-controller');

const promotionUpload = [{
    name: 'image',
    maxCount: 1
  },
  {
    name: 'pdf',
    maxCount: 1
  }
];

//Routes
router.post('/', auth, multer.fields(promotionUpload), promotionController.createPromotion);
router.get('/', promotionController.getAllPromotions);
router.get('/:promotionId', promotionController.getAPromotion);
router.put('/', auth, multer.fields(promotionUpload), promotionController.updatePromotion);
router.delete('/:promotionId', auth, promotionController.deletePromotion);

module.exports = router;
