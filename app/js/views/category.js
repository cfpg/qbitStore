// views/item
define(function ( require ) {
    'use strict';
 
    var $ = require( 'jquery' ),
    	_ = require( 'underscore' );
        Backbone = require( 'backbone' );
       
    return Backbone.View.extend({
		tagName: 'div',
		
		className: 'categoryContainer',
		
		template: $( '#categoryTemplate' ).html(),

		events: {
			'click .delete': 'deleteCategory'
		},

		// Remove both the model and view
		deleteCategory: function() {
			var that = this;
			
			this.model.destroy({
				data: {
					_id: this.model.attributes._id
				},
				
				processData: true,
				
				success: function( model, res ) {
					that.remove();
				},
				
				error: function( model, res ) {
					console.log(res);
				}
			});

		},

		render: function() {
			var tmpl = _.template( this.template );
			
			this.$el.html( tmpl( this.model.toJSON() ) );

			return this;
		}
    });
 
});