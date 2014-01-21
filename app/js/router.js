define(function (require) {
 
    "use strict";
 
    var $ = require('jquery'),
        Backbone = require('backbone'),
        StockView = require('views/stock'),
        CategoriesView = require('views/categories'),
        SingleView = require('views/single');
 
    return Backbone.Router.extend({
 
        routes: {
            '': 'stock',
            'categories': 'categories',
            'items/id': 'item'
        },
 
        stock: function() {
            var stockView = new StockView();
                stockView.render();
            
        },

        categories: function() {
            var CategoryView = new CategoryView();
                CategoryView.render();
        },

        single: function() {
            var singleView = new SingleView();
                singleView.render();
        } 
    });
 
});