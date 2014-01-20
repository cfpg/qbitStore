require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone'
	}
});

define(function (require) {
    "use strict";
 
	var $ = require('jquery'),
		_ = require('underscore'),
 		Backbone = require('backbone'),
 		StockView = require('views/stock');

 	var stockView = new StockView;

 	console.log(stockView);

});