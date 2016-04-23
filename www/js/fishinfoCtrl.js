angular.module('starter.controllers')
.controller('fishInfoCtrl', ['$scope','$stateParams','fillets', function (scope,stateParams,fillets) {

  var id = stateParams.id

  var info = fillets.getDetail(id);
  console.log(info);
}])
