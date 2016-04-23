angular.module('starter.services', [])

.factory('fillets', function () {
    return {
        getDetail: function (id) {
          return window.fillets.filter(function (f) {
                return f.id == id;
            })[0];
        },
        getAll: function () {
            return window.fillets.filter(function (f) {
                return f.name;
            });
        }
    };
});
