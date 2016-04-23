angular.module('starter.controllers', [])

.controller('LocationCtrl', function ($scope, $routeParams, $state) {
	$scope.next = function (page, property, value) {
		var params = angular.copy($routeParams);
		if (value) {
			params[filter] = value;
		}
		$state.go('whole', params);
	};
});