const Promotion = require('../data-schematic/promotion-schematic');

exports.createPromotion = (req, res) => {
  let payload = {
    ...req.body
  };

  // If req contains files
  if (req.files) {
    if(req.files['pdf']){
      payload.pdf = req.protocol + "://" + req.get('host') + "/" + req.files['pdf'][0].path;
    }
    if(req.files['image']){
      payload.image = req.protocol + "://" + req.get('host') + "/" + req.files['image'][0].path;
    }
  }

  // Save to database
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
  let payload = {
    ...req.body
  };

  // If req contains files
  if (req.files) {
    if(req.files['pdf']){
      payload.pdf = req.protocol + "://" + req.get('host') + "/" + req.files['pdf'][0].path;
    }
    if(req.files['image']){
      payload.image = req.protocol + "://" + req.get('host') + "/" + req.files['image'][0].path;
    }
  }

  // Update database
  Promotion.findByIdAndUpdate(payload._id, payload)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}

exports.deletePromotion = (req, res) => {
  Promotion.findByIdAndRemove(req.params.promotionId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error))
}
