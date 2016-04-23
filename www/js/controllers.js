angular.module('starter.controllers', ['starter.services'])

.controller('resultsCtrl', function ($scope, $stateParams, fillets) {
	$scope.fillets = fillets.getAll();
	$scope.params = $stateParams;
})

.controller('locationCtrl', function ($scope, $stateParams, $state, fillets, $filter) {
	$scope.next = nextHandler('skin', $stateParams, $state);
	$scope.params = $stateParams;
	$scope.active = active($stateParams, fillets.getAll(), $filter);
})

.controller('partCtrl', function ($scope, $stateParams, $state, fillets, $filter) {
	$scope.next = nextHandler('skin', $stateParams, $state);
	$scope.params = $stateParams;
	$scope.active = active($stateParams, fillets.getAll(), $filter);
})

.controller('skinCtrl', function ($scope, $stateParams, $state, fillets, $filter) {
	$scope.next = nextHandler('freshness', $stateParams, $state);
	$scope.params = $stateParams;
	$scope.active = active($stateParams, fillets.getAll(), $filter);
})

.controller('freshnessCtrl', function ($scope, $stateParams, $state, fillets, $filter) {
	$scope.next = nextHandler('color', $stateParams, $state);
	$scope.params = $stateParams;
	$scope.active = active($stateParams, fillets.getAll(), $filter);
})

.controller('colorCtrl', function ($scope, $stateParams, $state, fillets, $filter) {
	$scope.next = nextHandler('results', $stateParams, $state);
	$scope.params = $stateParams;
	$scope.active = active($stateParams, fillets.getAll(), $filter);
})

.controller('segmentWidthCtrl', function ($scope, $stateParams, $state, fillets, $filter) {
	$scope.next = nextHandler('results', $stateParams, $state);
	$scope.params = $stateParams;
	$scope.active = active($stateParams, fillets.getAll(), $filter);
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

function active($stateParams, fillets, $filter) {
	return function (property, value) {
		var params = angular.copy($stateParams);
		params[property] = value;
		var filtered = $filter('filter')(fillets, params);
		return filtered.length > 0;
	};
}