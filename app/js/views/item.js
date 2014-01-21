// views/item
define(function ( require ) {
    'use strict';
 
    var $ = require( 'jquery' ),
    	_ = require( 'underscore' );
        Backbone = require( 'backbone' );
       
    return Backbone.View.extend({
		tagName: 'div',
		
		className: 'itemContainer',
		
		template: $( '#itemTemplate' ).html(),

		events: {
			'click .delete': 'deleteItem'
		},

		// Remove both the model and view
		deleteItem: function() {
			this.model.destroy();

			this.remove();
		},

		render: function() {
			var tmpl = _.template( this.template );
			
			this.$el.html( tmpl( this.model.toJSON() ) );

			return this;
		}
    });
 
});