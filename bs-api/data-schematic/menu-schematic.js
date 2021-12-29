const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const menuSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
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
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

menuSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Menu', menuSchema);
