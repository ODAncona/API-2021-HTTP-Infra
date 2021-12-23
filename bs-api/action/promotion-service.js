const Promotion = require('../data-schematic/promotion-schematic');

exports.createPromotion = (payload) => {
  return new Promise((resolve, reject) => {
    let promotion = new Promotion({
      ...payload
    });
    promotion.save()
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

exports.getAllPromotions = () => {
  return new Promise((resolve, reject) => {
    Promotion.find()
      .then(promotions => resolve(promotions))
      .catch(error => reject(error))
  })
}

exports.getAPromotion = (promotionId) => {
  return new Promise((resolve, reject) => {
    Promotion.find({
        _id: promotionId
      })
      .then(promotion => resolve(promotion))
      .catch(error => reject(error))
  })
}

exports.updatePromotion = (promotion) => {
  return new Promise((resolve, reject) => {
    Promotion.findByIdAndUpdate(promotion._id, promotion)
      .then(() => resolve())
      .catch((error) => reject(error))
  })
}

exports.deletePromotion = (reviewId) => {
  return new Promise((resolve, reject) => {
    Promotion.findByIdAndRemove(reviewId)
      .then(() => resolve())
      .catch(() => reject())
  })
}
