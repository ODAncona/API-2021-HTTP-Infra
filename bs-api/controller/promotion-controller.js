const action = require('../action/action');
const Promotion = require('../data-schematic/promotion-schematic');

exports.createPromotion = (req, res) => {
  let payload = req.file ? {
    ...req.body,
    pdf: req.protocol + "://" + req.get('host') + "/uploads/" + req.file.filename
  } : {
    ...req.body
  };
  action.createPromotion(payload)
    .then(() => res.status(201).json("Success"))
    .catch((err) => res.status(500).json("Failure: " + error))
}

exports.getAllPromotions = (req, res) => {
  action.getAllPromotions()
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json("Failure: " + error))
}

exports.getAPromotion = (req, res) => {
  action.getAPromotion(req.params.promotionId)
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json("Failure: " + error))
}

exports.updatePromotion = (req, res) => {
  let payload = req.file ? {
    ...req.body,
    pdf: req.protocol + "://" + req.get('host') + "/uploads/" + req.file.filename
  } : {
    ...req.body
  };
  action.updatePromotion(payload)
    .then(() => res.status(200).json("Success"))
    .catch((err) => res.status(500).json("Failure: " + error))
}

exports.deletePromotion = (req, res) => {
  action.deletePromotion(req.params.promotionId)
    .then(() => res.status(204).json("Success"))
    .catch((err) => res.status(500).json("Failure: " + error))
}
