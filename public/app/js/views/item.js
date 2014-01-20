// views/item
define(function ( require ) {
    'use strict';
 
    var $ = require( 'jquery' ),
        _ = require( 'underscore' ),
        Backbone = require( 'backbone' );
       
    return Backbone.Views.extend({
		tagName: 'div',
		
		className: 'itemContainer',
		
		template: _.template( $( '#itemTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		}
    });
 
});