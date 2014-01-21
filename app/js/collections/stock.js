// collections/stock
define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Item = require('models/item');
       
    return Backbone.Collection.extend({
 		model: Item,
 		url: function () {
 			return '/items';
 		}
    });
 
});