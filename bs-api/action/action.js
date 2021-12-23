const reviewService = require('./review-service');
const menuService = require('./menu-service');
const promotionService = require('./promotion-service');
const mailService = require('./mail-service');

const action = {
  createReview: reviewService.createReview,
  getAllReviews: reviewService.getAllReviews,
  getAllActiveReviews: reviewService.getAllActiveReviews,
  updateReview: reviewService.updateReview,
  deleteReview: reviewService.deleteReview,

  createMenu: menuService.createMenu,
  getAllMenus: menuService.getAllMenus,
  updateMenu: menuService.updateMenu,
  deleteMenu: menuService.deleteMenu,

  createPromotion: promotionService.createPromotion,
  getAllPromotions: promotionService.getAllPromotions,
  getAPromotion: promotionService.getAPromotion,
  updatePromotion: promotionService.updatePromotion,
  deletePromotion: promotionService.deletePromotion,

  sendMail: mailService.sendMail,
}

module.exports = action;
