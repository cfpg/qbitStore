// views/stock
define(function ( require ) {
    'use strict';
 
    var $ = require( 'jquery' ),
        Backbone = require( 'backbone' ),
        Stock = require( 'collections/stock' ),
        ItemView = require( 'views/item' ),
        Item = require( 'models/item' ),
        formData = {};
       
    return Backbone.View.extend({
        el: '#items',

	    initialize: function() {
	        this.collection = new Stock();
            this.collection.fetch({reset: true});
	        this.render();

	        this.listenTo( this.collection, 'add', this.renderItem );
            this.listenTo( this.collection, 'reset', this.render );
	    },

	     events: {
        	'click #add': 'addItem'
        },

        addItem: function( e ) {
        	e.preventDefault();

        	$( '#addItem div' ).children( 'input' )
        					   .each( function( i, el ) {
        					   		if( $( el ).val() != '' ) {
        					   			formData[ el.id ] = $( el ).val();
        					   		}
        					   });
										 
        	this.collection.create( formData );

        },

	    render: function() {
	        this.collection.each( function( item ) {
	            this.renderItem( item );
	        }, this );
	    },

	    renderItem: function( item ) {
	        var itemView = new ItemView({
	            model: item
	        });

	        this.$el.append( itemView.render().el );
	    }
    });
 
});