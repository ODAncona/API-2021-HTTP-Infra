const action = require('../action/action');

exports.createReview = (req, res) => {
  action.createReview(req.body)
    .then(() => res.status(200))
    .catch((err) => res.status(400))
}

exports.getAllReviews = (req, res) => {
  action.getAllReviews()
    .then((reviews) => res.status(200).json(reviews))
    .catch(() => res.status(400).json("Failure"))
}

exports.getAllActiveReviews = (req, res) => {
  action.getAllActiveReviews(req.params.isActive)
    .then((reviews) => res.status(200).json(reviews))
    .catch(() => res.status(400).json("Failure"))
}

exports.updateReview = (req, res) => {
  action.updateReview(req.body.reviewId)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(400).json("no" + error))
}

exports.deleteReview = (req, res) => {
  action.deleteReview(req.params.reviewId)
    .then(() => res.status(200).json())
    .catch(() => res.status(400).json())
}
