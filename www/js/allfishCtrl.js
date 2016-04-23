angular.module('starter.controllers')
.controller('allFishCtrl', ['$scope','$state' ,function (scope,state) {

  scope.fillets = window.fillets;
  scope.input ={};
  scope.inputsearchText = "";

  scope.clear = function(){
    console.log("toooo");
      scope.input.searchText = "";

  }



}])
