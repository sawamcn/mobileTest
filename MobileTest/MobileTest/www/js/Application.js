(function() {

  define(['jquery', 'underscore', 'backbone', 'MyRouter', 'jqconfig'], function($, _, Backbone, MyRouter) {
    var Application;
    Application = (function() {

      Application.name = 'Application';

      function Application() {}

      Application.prototype.initialize = function() {
        var router;
        router = new MyRouter();
        return Backbone.history.start();
      };

      return Application;

    })();
    return Application;
  });

}).call(this);
