const Promotion = require('../data-schematic/promotion-schematic');

exports.createPromotion = (req, res) => {
  let payload = req.file ? {
    ...req.body,
    pdf: req.protocol + "://" + req.get('host') + "/uploads/document/" + req.file.filename,
    image: req.protocol + "://" + req.get('host') + "/uploads/image/" + req.file.filename,
  } : {
    ...req.body
  };
  let promotion = new Promotion({
      ...payload
    }).save()
    .then(() => res.status(201).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.getAllPromotions = (req, res) => {
  Promotion.find()
    .then((promotions) => res.status(200).json(promotions))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.getAPromotion = (req, res) => {
  Promotion.findById(req.params.promotionId)
    .then((promotions) => res.status(200).json(promotions))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.updatePromotion = (req, res) => {
  let payload = req.file ? {
    ...req.body,
    pdf: req.protocol + "://" + req.get('host') + "/uploads/document/" + req.file.filename,
    image: req.protocol + "://" + req.get('host') + "/uploads/image/" + req.file.filename,
  } : {
    ...req.body
  };
  Promotion.findByIdAndUpdate(payload._id, payload)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.deletePromotion = (req, res) => {
  Promotion.findByIdAndRemove(req.params.promotionId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}
