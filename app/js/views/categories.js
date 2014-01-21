// views/categories
define(function ( require ) {
    'use strict';
 
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Categories = require('collections/categories'),
        CategoryView = require('views/category'),
        category = require('models/category'),
        formData = {};
       
    return Backbone.View.extend({
        el: '#categories',

	    initialize: function() {
	        this.collection = new Categories();
            this.collection.fetch({reset: true});
	        this.render();

	        this.listenTo(this.collection, 'add', this.renderCategory);
            this.listenTo(this.collection, 'reset', this.render);
	    },

	     events: {
        	'submit #addCategory': 'addCategory'
        },

        addCategory: function( e ) {
        	e.preventDefault();

        	$( '#addCategory div' ).children('input')
        					   	   .each( function( i, el ) {
        					   			if( $(el).val() != '' ) {
											if (el.id.length > 0) {
												formData[el.id] = $(el).val();
											}
        					   			}
        					   	   });

        	this.collection.create(formData);

        },

	    render: function() {
	        this.collection.each(function(item) {
	            this.renderCategory(item);
	        }, this);
	    },

	    renderCategory: function(item) {
	        var categoryView = new CategoryView({
	            model: item
	        });

	        this.$el.append(categoryView.render().el);
	    }
    });
 
});