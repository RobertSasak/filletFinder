angular.module('starter.controllers')
.controller('fishInfoCtrl', ['$scope','$stateParams', function (scope,stateParams) {

  var id = stateParams.id
  console.log(id);


}])
