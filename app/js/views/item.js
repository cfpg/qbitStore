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
			'click .delete': 'deleteItem',
			'click .edit': 'editItem',
			'submit #editForm': 'editItemSubmit'
		},
		
		// Edit item
		editItem: function() {
			var that = this;
			var tmpl = _.template($('#editItemTemplate').html());
			
			var data = that.model.toJSON();
			data.categories = ""; // ToDo: get list of categories and append to json item
			
			var html = tmpl( data );
			
			$('#overlay').html(html).show();
			$('#shadow').show().click(function() {
				$('#overlay').hide();
				$(this).hide();
			});
		},
		
		// Submit edit item form
		editItemSubmit: function(e) {
			e.preventDefault();
			
			var that = this;
			
		},

		// Remove both the model and view
		deleteItem: function() {
			var that = this;
			this.model.destroy({
				data: {
					_id: this.model.attributes._id
				},
				processData: true,
				success: function(model, res) {
					that.remove();
				},
				error: function(model, res) {

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