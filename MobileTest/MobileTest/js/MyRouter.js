(function() {

  define(['require', 'jquery', 'underscore', 'backbone', 'jqmobile'], function(require, $, _, Backbone) {
    var MyRouter;
    MyRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        '!/index': 'index',
        '!/contactIndex': 'contactIndex',
        '!/contactDetail/:id': 'contactDetail',
        '!/cameraIndex': 'cameraIndex',
        '!/camera': 'camera',
        '*actions': 'defaultAction'
      },
      firstPage: true,
      defaultAction: function(action) {},
      getRouter: function() {
        return {
          'router': this
        };
      },
      index: function() {
        var self;
        self = this;
        return require(['view/home/HomeController'], function(HomeController) {
          var controller;
          controller = new HomeController();
          controller.index(self);
          return self.changePage(controller.el);
        });
      },
      contactIndex: function() {
        var self;
        self = this;
        return require(['view/contact/ContactController'], function(ContactController) {
          var controller;
          controller = new ContactController();
          controller.index(self);
          return self.changePage(controller.el);
        });
      },
      contactDetail: function(id) {
        var self;
        self = this;
        return require(['view/contact/ContactController'], function(ContactController) {
          var controller;
          controller = new ContactController();
          controller.detail(self, id);
          return self.changePage(controller.el);
        });
      },
      cameraIndex: function() {
        var self;
        self = this;
        return require(['view/camera/CameraController'], function(CameraController) {
          var controller;
          controller = new CameraController();
          return controller.index(self);
        });
      },
      camera: function() {
        var self;
        self = this;
        return require(['view/camera/CameraController'], function(CameraController) {
          var controller;
          controller = new CameraController();
          controller.camera(self);
          return self.navigate("!/cameraIndex", true);
        });
      },
      changePage: function(el) {
        $(el).attr('data-role', 'page');
        $('body').append($(el));
        return $.mobile.changePage($(el), {
          changeHash: false,
          transition: 'none',
          reloadPage: false
        });
      },
      initialize: function() {
        return console.log("setup router");
      }
    });
    return MyRouter;
  });

}).call(this);
