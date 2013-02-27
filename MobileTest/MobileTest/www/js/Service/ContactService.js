(function() {

  define(['underscore'], function(_) {
    var ContactService;
    ContactService = (function() {

      ContactService.name = 'ContactService';

      function ContactService() {
        this.contactList = [
          {
            'id': '1',
            'name': '老大',
            'phone': '80000001',
            'discription': '我是老大'
          }, {
            'id': '2',
            'name': '老二',
            'phone': '80000002',
            'discription': '我是老二'
          }, {
            'id': '3',
            'name': '老三',
            'phone': '80000003',
            'discription': '我是老三'
          }, {
            'id': '4',
            'name': '老四',
            'phone': '80000004',
            'discription': '我是老四'
          }
        ];
      }

      ContactService.prototype.getAllUser = function() {
        return this.contactList;
      };

      ContactService.prototype.getUserById = function(id) {
        var user, _i, _len, _ref;
        _ref = this.contactList;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          user = _ref[_i];
          if (user.id === id) {
            return user;
          }
        }
        return null;
      };

      return ContactService;

    })();
    return ContactService;
  });

}).call(this);
