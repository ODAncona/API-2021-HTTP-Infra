const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const memberSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  function: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
});

memberSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Member', memberSchema);
