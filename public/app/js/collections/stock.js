// collections/stock
define(function (require) {
    'use strict';
 
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Item = require('models/item');
       
    return Backbone.Collection.extend({
 		model: Item
    });
 
});