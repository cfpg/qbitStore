var mongoose = require('mongoose')
var User = require('../models/user');

module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/signup', function(req, res) {
      // any logic goes here
      res.render('users/signup')
  });

/**
 * About page route
 */
	app.post('/login',
		passport.authenticate('local'),
		function(req, res) {
			// If auth is successful
			res.json(req.user);
	});

}