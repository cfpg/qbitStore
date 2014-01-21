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
 		StockView = require('views/stock');

 	var stockView = new StockView( items );

 	console.log(stockView);

});