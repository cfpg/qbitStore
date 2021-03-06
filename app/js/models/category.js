define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        Backbone = require('backbone');
       
    return Backbone.Model.extend({
		defaults: {
			name: 'Uncategorized',
			items: []
		},
		idAttribute: "_id",
		urlRoot: 'http://localhost:3000/api',
		url: function () {
			return this.urlRoot + '/categories';
		}
    });
 
});