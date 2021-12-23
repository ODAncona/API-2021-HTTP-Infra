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
    .then(() => res.status(200).json("Success"))
    .catch((err) => res.status(400).json("Failure " + err))
}

exports.getAllPromotions = (req, res) => {
  action.getAllPromotions()
    .then((reviews) => res.status(200).json(reviews))
    .catch(() => res.status(400).json("Failure"))
}

exports.getAPromotion = (req, res) => {
  action.getAPromotion(req.params.promotionId)
    .then((reviews) => res.status(200).json(reviews))
    .catch(() => res.status(400).json("Failure"))
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
    .catch((error) => res.status(400).json("Failure " + error))
}

exports.deletePromotion = (req, res) => {
  action.deletePromotion(req.params.promotionId)
    .then(() => res.status(200).json())
    .catch(() => res.status(400).json())
}
