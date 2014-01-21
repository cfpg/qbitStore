require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone'
	}
});

define(function (require) {
    'use strict';
	
	var $ = require('jquery'),
 		Backbone = require('backbone'),
 		Router = require('router'),
 		router = new Router();

 	Backbone.history.start();

});