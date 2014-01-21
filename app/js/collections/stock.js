// collections/stock
define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Item = require('models/item');
       
    return Backbone.Collection.extend({
 		model: Item,
		urlRoot: 'http://localhost:3000/api',
 		url: function () {
 			return this.urlRoot+'/items';
 		}
    });
 
});