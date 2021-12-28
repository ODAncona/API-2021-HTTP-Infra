const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const promotionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: false
  },
  pdf: {
    type: String,
    required: false
  }
});

promotionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Promotion', promotionSchema);
