const Review = require('../data-schematic/review-schematic');

exports.createReview = (payload) => {
  return new Promise((resolve, reject) => {
    let review = new Review({
      ...payload
    });
    review.save()
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

exports.getAllReviews = () => {
  return new Promise((resolve, reject) => {
    Review.find()
      .then(reviews => resolve(reviews))
      .catch(error => reject(error))
  })
}

exports.getAllActiveReviews = (isActive) => {
  return new Promise((resolve, reject) => {
    Review.find({
        active: isActive
      })
      .then(reviews => resolve(reviews))
      .catch(error => reject(error))
  })
}

exports.updateReview = (reviewId) => {
  return new Promise((resolve, reject) => {
    Review.findByIdAndUpdate(reviewId, [{
        $set: {
          active: {
            $eq: [false, "$active"]
          }
        }
      }])
      .then(() => resolve())
      .catch(() => reject())
  })
}

exports.deleteReview = (reviewId) => {
  return new Promise((resolve, reject) => {
    Review.findByIdAndRemove(reviewId)
      .then(() => resolve())
      .catch(() => reject())
  })
}
