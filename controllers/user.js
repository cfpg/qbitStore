var mongoose = require('mongoose'),
	passport = require('passport');
var User = require('../models/userModel');

module.exports.controller = function(app) {

/**
 * a home page route
 */

/**
 * User.create
 */
	app.post('/signup',
		passport.authenticate('local'),
		function(req, res) {
		  var user = new User(req.body.user);
		  user.provider = 'local';
		  user.save(function (err) {
		    if (err) {
		      return res.render('users/signup', {
		        errors: utils.errors(err.errors),
		        user: user,
		        title: 'Sign up'
		      });
		    }

		    // manually login the user once successfully signed up
		    req.logIn(user, function(err) {
		      if (err) return next(err);
		      return res.redirect('/');
		    });
		  });
	});
	
	// User.login
	app.post('/login',
		passport.authenticate('local'),
		function(req, res) {
			// User logged in
			// Redirect
			return res.send('User logged in!');
		});

}