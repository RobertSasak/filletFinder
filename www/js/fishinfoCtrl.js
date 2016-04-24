angular.module('starter.controllers')
  .controller('fishInfoCtrl', ['$scope', '$stateParams', 'fillets', function (scope, stateParams, fillets) {

    var id = stateParams.id

    scope.info = fillets.getDetail(id);


    scope.consumptionRecommendation = function (info) {
      var url = "img/recommandation/";
      if (info.recommendation === 'Neutral') {
        return url + "1.png";
      } else if (info.recommendation === 'Recommended') {
        return url + "2.png";
      } else if (info.recommendation === 'Not recommended') {
        return url + "0.png";
      }

    };

    scope.location = function (location) {
      if (!location) {
        return '';
      }
      var translation = {
        northAmerica: 'North America',
        centralAmerica: 'Central America',
        southAmerica: 'South America',
      };

      return location.split(',').map(function (l) {
        return translation[l];
      });
    };

    scope.iucnCategory = function (info) {
      var lucn = info.iucnCategory;

      var url = "img/lucn/";

      if (lucn === 'Least concern') {
        return url + "Least concern.PNG";
      } else if (lucn === 'Near threatened') {
        return url + "Near threatened.PNG";
      } else if (lucn === 'Does not apply') {
        return url + "NADA.PNG";
      } else if (lucn === 'Vulnerable') {
        return url + "Vulnerable.PNG";
      } else if (lucn === 'Information lacking') {
        return url + "NADA.PNG";
      }

    }

  }])