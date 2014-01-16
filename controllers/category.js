var mongoose = require('mongoose')
var Item = require('../models/item');

module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/:category', function(req, res) {
      // any logic goes here
      res.send("category");
  });

/**
 * About page route
 */
  app.get('/:category/:p', function(req, res) {
      // any logic goes here
      res.send('users/login');
  });

}