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
            require(["views/home"], function (HomeView) {
                var view = new HomeView({el: $content});
                view.render();
            });
        }
 
    });
 
});