(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'service/ContactService'], function($, _, Backbone, ContactService) {
    var ContactController;
    ContactController = (function(_super) {

      __extends(ContactController, _super);

      ContactController.name = 'ContactController';

      function ContactController() {
        return ContactController.__super__.constructor.apply(this, arguments);
      }

      ContactController.prototype.contactService = new ContactService();

      ContactController.prototype.el = '#myTest';

      ContactController.prototype.index = function(router) {
        var self;
        self = this;
        return require(['text!view/contact/index.html'], function(indexHtml) {
          self.template = _.template(indexHtml);
          return $(self.el).html(self.template({
            'data': self.contactService.getAllUser()
          })).trigger('create');
        });
      };

      ContactController.prototype.detail = function(router, id) {
        var self;
        self = this;
        return require(['text!view/contact/detail.html'], function(detailHtml) {
          self.template = _.template(detailHtml);
          return $(self.el).html(self.template(self.contactService.getUserById(id))).trigger('create');
        });
      };

      ContactController.prototype.add = function(router) {
        this.contactService.add({
          id: 0,
          name: '',
          age: 0
        });
        return router.navigate("!/user/index", true);
      };

      ContactController.prototype["delete"] = function(router, userId) {
        this.contactService.remove(userId);
        return router.navigate("!/user/index", true);
      };

      return ContactController;

    })(Backbone.View);
    return ContactController;
  });

}).call(this);
