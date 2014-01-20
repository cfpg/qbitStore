define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
       
    return Backbone.View.extend({
		defaults: {
			name: 'Unknown',
			description: 'Unknown',
			category: 'Unknown',
			cost: 'Unknown'
		}
    });
 
});