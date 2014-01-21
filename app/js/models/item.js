define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        Backbone = require('backbone');
       
    return Backbone.Model.extend({
		defaults: {
			name: 'Unknown',
			description: 'Unknown',
			category: 'Unknown',
			cost: 'Unknown'
		},

		url: function () {
			return '/items';
		},
		
		parse: function( response ) {
		    response.id = response._id;
		    return response;
		}
    });
 
});