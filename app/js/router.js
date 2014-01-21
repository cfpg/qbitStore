define(function (require) {
 
    "use strict";
 
    var $ = require('jquery'),
        Backbone = require('backbone'),
        $content = $("#content");
 
    return Backbone.Router.extend({
 
        routes: {
            '': 'home'
        },
 
        home: function () {
            console.log('home');
        }
 
    });
 
});