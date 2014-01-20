// views/stock
define(function ( require ) {
    'use strict';
 
    var $ = require( 'jquery' ),
        _ = require( 'underscore' ),
        Backbone = require( 'backbone' ),
        Stock = require( 'collection/stock' ),
        ItemView = require( 'view/item' );
       
    return Backbone.Views.extend({
        el: '#items',

	    initialize: function( initialItems ) {
	        this.collection = new Stock( initialItems );
	        this.render();
	    },

	    render: function() {
	        this.collection.each( function( item ) {
	            this.renderItem( item );
	        }, this );
	    },

	    renderBook: function( item ) {
	        var itemView = new ItemView({
	            model: item
	        });

	        this.$el.append( itemView.render().el );
	    }
    });
 
});