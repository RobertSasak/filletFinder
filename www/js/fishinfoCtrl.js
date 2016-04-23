angular.module('starter.controllers')
.controller('fishInfoCtrl', ['$scope','$stateParams','fillets', function (scope,stateParams,fillets) {

  var id = stateParams.id

   scope.info = fillets.getDetail(id);


   scope.consumptionRecommendation = function(info){
     console.log(info);
     if(info.recommendation ==='Neutral'){
       return "img/recommandation/1.png";
     }else if(info.recommendation === 'Recommended'){
       return "img/recommandation/2.png";
     }else if(info.recommendation === 'Not recommended'){
       return "img/recommandation/0.png";
     }

   }

}])
