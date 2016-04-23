angular.module('starter.controllers')
.controller('allFishCtrl', ['$scope','$state','fillets' ,function (scope,state,fillets) {

  scope.fillets = fillets.getAll();
  scope.input ={};
  scope.inputsearchText = "";

  scope.clear = function(){
    console.log("toooo");
      scope.input.searchText = "";

  }



}])
