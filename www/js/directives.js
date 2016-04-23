angular.module('starter.directives', ['starter.services'])
	.directive('list', function (fillets) {
		return {
			templateUrl: 'templates/list.html',
			scope: {
				params: '=',
			},
			link: function (scope) {
				scope.fillets = fillets.getAll();
			}
		};
	})
	.directive('teaser', function (fillets) {
		return {
			templateUrl: 'templates/teaser.html',
			scope: {
				params: '=',
			},
			link: function (scope) {
				scope.fillets = fillets.getAll();
			}
		};
	});