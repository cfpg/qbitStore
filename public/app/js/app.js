require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone'
	}
});

define(function (require) {
    "use strict";
 
 	var items = [
        { 
        	title: 'JavaScript: The Good Parts', 
        	author: 'Douglas Crockford', 
        	releaseDate: '2008', 
        	keywords: 'JavaScript Programming' 
        },
        { 
        	title: 'The Little Book on CoffeeScript', 
        	author: 'Alex MacCaw', 
        	releaseDate: '2012', 
        	keywords: 'CoffeeScript Programming' 
        },
        { 
        	title: 'Scala for the Impatient', 
        	author: 'Cay S. Horstmann', 
        	releaseDate: '2012', 
        	keywords: 'Scala Programming' 
        },
        { 
        	title: 'American Psycho', 
        	author: 'Bret Easton Ellis', 
        	releaseDate: '1991', 
        	keywords: 'Novel Splatter' 
        },
        { 
        	title: 'Eloquent JavaScript', 
        	author: 'Marijn Haverbeke', 
        	releaseDate: '2011', 
        	keywords: 'JavaScript Programming' 
        }
    ];
	
	var $ = require('jquery'),
		_ = require('underscore'),
 		Backbone = require('backbone'),
 		StockView = require('views/stock');

 	var stockView = new StockView;

 	console.log(stockView);

});