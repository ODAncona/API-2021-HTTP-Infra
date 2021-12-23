const express = require('express');
const database = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://bs-database:27017/bs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = database;
