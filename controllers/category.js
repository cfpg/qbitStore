var mongoose = require('mongoose')
var Item = require('../models/itemModel');

module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/category/:cat', function(req, res) {
      // any logic goes here
      res.send("category");
  });

/**
 * About page route
 */
  app.get('/category/:category/:p', function(req, res) {
      // any logic goes here
      res.send('users/login');
  });

}