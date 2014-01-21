define(function(require) {
	
	// Define a class for overlay showing, includes forms messages alerts etc
	'use strict';
	
	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone');
	
	return Backbone.View.extend({
		$el: $('#overlay'),
		
		events: {
			'click .overlay': 'overlayShow',
			'click #shadow': 'overlayClose'
		},
		
		overlayShow: function() {
			
		},
		
		overlayClose: function() {
			
		},
		
		render: function() {
			var tmpl = _.template( this.template );
			this.$el.html( tmpl( this.model.toJSON() ) );

			return this;
		}
	});
	
});