'use strict';

require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone'
	}
});

define(function (require) {
	
	var $ = require('jquery'),
 		Backbone = require('backbone'),
 		StockView = require('views/stock');

 	var stockView = new StockView(items);

});