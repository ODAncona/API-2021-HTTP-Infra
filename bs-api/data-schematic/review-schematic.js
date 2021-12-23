const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reviewSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  rating: {
    type: Object,
    required: true,
    default: {
      clean: 10,
      service: 10,
      comfort: 10,
      spot: 10,
      amenity: 10,
      breakfast: 10
    }
  },
  active: {
    type: Boolean,
    default: false
  }
});

reviewSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Review', reviewSchema);
