const Review = require('../data-schematic/review-schematic');

exports.createReview = (req, res) => {
  new Review({
      ...req.body
    }).save()
    .then(() => res.status(201).json("Succes"))
    .catch(error => res.status(500).json("Failure: " + error))
}

exports.getAllReviews = (req, res) => {
  Review.find()
    .then((reviews) => res.status(200).json(reviews))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.getAllActiveReviews = (req, res) => {
  Review.find({
      active: req.params.isActive
    })
    .then((reviews) => res.status(200).json(reviews))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.updateReview = (req, res) => {
  Review.findByIdAndUpdate(req.body.reviewId, [{
      $set: {
        active: {
          $eq: [false, "$active"]
        }
      }
    }])
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.deleteReview = (req, res) => {
  Review.findByIdAndRemove(req.params.reviewId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}
