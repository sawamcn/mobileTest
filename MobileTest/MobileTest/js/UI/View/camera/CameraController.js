(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var CameraController;
    CameraController = (function(_super) {

      __extends(CameraController, _super);

      CameraController.name = 'CameraController';

      function CameraController() {
        return CameraController.__super__.constructor.apply(this, arguments);
      }

      CameraController.prototype.el = '#myTest';

      CameraController.prototype.index = function(router) {
        var self;
        self = this;
        return require(['text!view/camera/index.html'], function(indexHtml) {
          self.template = _.template(indexHtml);
          return $(self.el).html(self.template()).trigger('create');
        });
      };

      CameraController.prototype.camera = function(router) {
        var onFile, onSuccess;
        onSuccess = function(imageUrl) {
          return alert(imageUrl);
        };
        onFile = function(message) {
          return alert(message);
        };
        return navigator.camera.getPicture(onSuccess, onFail, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI
        });
      };

      return CameraController;

    })(Backbone.View);
    return CameraController;
  });

}).call(this);
