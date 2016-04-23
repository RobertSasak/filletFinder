angular.module('starter.controllers', [])

.controller('locationCtrl', function ($scope, $stateParams, $state) {
	$scope.next = nextHandler('part', $stateParams, $state);
})

.controller('partCtrl', function ($scope, $stateParams, $state) {
	$scope.next = nextHandler('skin', $stateParams, $state);
})

.controller('skinCtrl', function ($scope, $stateParams, $state) {
	$scope.next = nextHandler('freshness', $stateParams, $state);
})

.controller('freshnessCtrl', function ($scope, $stateParams, $state) {
	$scope.next = nextHandler('color', $stateParams, $state);
})

.controller('colorCtrl', function ($scope, $stateParams, $state) {
	$scope.next = nextHandler('results', $stateParams, $state);
});

function nextHandler(page, $stateParams, $state) {
	return function (filter, value) {
		var params = angular.copy($stateParams);
		if (value) {
			params[filter] = value;
		}
		$state.go(page, params);
	};
}