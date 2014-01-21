// collections/categories
define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Category = require('models/category');
       
    return Backbone.Collection.extend({
 		model: Category,

		urlRoot: 'http://localhost:3000/api',
 		
 		url: function () {
 			return this.urlRoot + '/categories';
 		}
    });
 
});