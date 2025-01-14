require('dotenv').config();
const express = require('express');

const database = express();

const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/bs', {
//mongoose.connect('mongodb://bs-database:27017/bs', {
mongoose.connect(`mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@cluster0.12nxyui.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie :)'))
  .catch((e) => console.log('Connexion à MongoDB échouée :( ' + e));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = database;
