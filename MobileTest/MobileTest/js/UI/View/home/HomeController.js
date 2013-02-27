(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var HomeController;
    HomeController = (function(_super) {

      __extends(HomeController, _super);

      HomeController.name = 'HomeController';

      function HomeController() {
        return HomeController.__super__.constructor.apply(this, arguments);
      }

      HomeController.prototype.el = $('#myTest');

      HomeController.prototype.index = function(router) {
        var self;
        self = this;
        return require(['text!view/home/index.html'], function(indexHtml) {
          self.template = _.template(indexHtml);
          return $(self.el).html(self.template()).trigger('create');
        });
      };

      return HomeController;

    })(Backbone.View);
    return HomeController;
  });

}).call(this);
