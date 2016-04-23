angular.module('starter.controllers')
.controller('mainCtrl',['$scope','$state', function (scope,$state) {

  scope.viewAll= function(){
    $state.go('allfish')

  };


  scope.findFilet= function(){
    $state.go('location')

  };



}])
