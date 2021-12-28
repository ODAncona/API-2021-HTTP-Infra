const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const database = require('./database/database');
const path = require('path');

const authRoute = require('./route/auth-route');
const serverRoute = require('./route/server-route');
const reviewRoute = require('./route/review-route');
const menuRoute = require('./route/menu-route');
const promotionRoute = require('./route/promotion-route');
const mailRoute = require('./route/mail-route');
const api = express();

api.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
api.use(bodyParser.json());
api.use('/upload', express.static(path.join(__dirname, 'upload')));
api.use('/api/server', serverRoute);
api.use('/api/auth', authRoute);
api.use('/api/review', reviewRoute);
api.use('/api/menu', menuRoute);
api.use('/api/promotion', promotionRoute);
api.use('/api/mail', mailRoute);


module.exports = api;
