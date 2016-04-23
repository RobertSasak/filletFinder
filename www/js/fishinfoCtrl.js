angular.module('starter.controllers')
.controller('fishInfoCtrl', ['$scope','$stateParams','fillets', function (scope,stateParams,fillets) {

  var id = stateParams.id

   scope.info = fillets.getDetail(id);
  
}])
