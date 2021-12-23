const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const reviewController = require('../controller/review-controller');

//Routes
router.post('/', reviewController.createReview);
router.get('/', auth, reviewController.getAllReviews);
router.get('/:isActive', reviewController.getAllActiveReviews);
router.put('/', auth, reviewController.updateReview);
router.delete('/:reviewId', auth, reviewController.deleteReview);

module.exports = router;
