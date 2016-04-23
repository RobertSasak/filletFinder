angular.module('starter.services', [])

.factory('fillets', function () {
    return {
        getDetail: function (id) {
            window.fillets.forEach(function (f) {
                if (f.id === id) {
                    return f;
                }
            });
        },
        getAll: function () {
            return window.fillets.filter(function (f) {
                return f.name;
            });
        }
    };
});