const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const dailyMenuSchema = mongoose.Schema({
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

dailyMenuSchema.plugin(uniqueValidator);

module.exports = mongoose.model('DailyMenu', dailyMenuSchema);
