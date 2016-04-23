// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  
    .state('main', {
    url: '/main',
    controller: 'mainCtrl',
    templateUrl: 'templates/main.html'
  })
  .state('allfish', {
    url: '/allfish',
    controller: 'allFishCtrl',
    templateUrl: 'templates/all-fish.html'
  })
    .state('fishinfo', {
    url: '/fishinfo',
    controller: 'fishInfoCtrl',
    templateUrl: 'templates/fishinfo.html'
  })

  .state('location', {
    url: '/location',
    controller: 'locationCtrl',
    templateUrl: 'templates/location.html'
  })

  .state('part', {
    url: '/part',
    controller: 'partCtrl',
    templateUrl: 'templates/part.html'
  })

  .state('skin', {
    url: '/skin',
    controller: 'skinCtrl',
    templateUrl: 'templates/skin.html'
  })

  .state('freshness', {
    url: '/freshness',
    controller: 'freshnessCtrl',
    templateUrl: 'templates/freshness.html'
  })

  .state('color', {
    url: '/color',
    controller: 'colorCtrl',
    templateUrl: 'templates/color.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/location');

});