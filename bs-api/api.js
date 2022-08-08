const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const database = require('./database/database');
const path = require('path');

const authRoute = require('./route/auth-route');
const serverRoute = require('./route/server-route');
const reviewRoute = require('./route/review-route');
const restaurantRoute = require('./route/restaurant-route');
const promotionRoute = require('./route/promotion-route');
const mailRoute = require('./route/mail-route');
const teamRoute = require('./route/team-route');
const api = express();

api.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, enctype');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
//api.use(bodyParser.urlencoded());
api.use(express.json({
  limit: '50mb'
}));
api.use(express.urlencoded({
  limit: '50mb',
  extended: true,
}));
api.use('/upload', express.static(path.join(__dirname, 'upload')));
api.use('/server', serverRoute);
api.use('/auth', authRoute);
api.use('/review', reviewRoute);
api.use('/restaurant', restaurantRoute);
api.use('/promotion', promotionRoute);
api.use('/mail', mailRoute);
api.use('/team', teamRoute);


module.exports = api;
