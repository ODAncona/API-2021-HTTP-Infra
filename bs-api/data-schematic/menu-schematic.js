const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const menuSchema = mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  pdf: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  active: {
    type: Boolean,
    required: true,
  }
});

menuSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Menu', menuSchema);
