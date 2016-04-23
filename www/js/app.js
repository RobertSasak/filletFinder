// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

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
    .config(function ($ionicConfigProvider) {
        //$ionicConfigProvider.backButton.previousTitleText(false);
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        var filters = {
            color: undefined,
            skin: undefined,
            part: undefined,
            location: undefined,
            freshness: undefined,
            segmentWidth: undefined,
        };
        var urlParams = '?color&skin&part&location&freshness&segmentWidth';

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
                url: '/fishinfo/:id',
                controller: 'fishInfoCtrl',
                templateUrl: 'templates/fishinfo.html'
            })
            .state('results', {
                url: '/results' + urlParams,
                params: filters,
                controller: 'resultsCtrl',
                templateUrl: 'templates/results.html'
            })
            .state('location', {
                url: '/location' + urlParams,
                params: filters,
                controller: 'locationCtrl',
                templateUrl: 'templates/location.html'
            })
            .state('part', {
                url: '/part' + urlParams,
                params: filters,
                controller: 'partCtrl',
                templateUrl: 'templates/part.html'
            })
            .state('skin', {
                url: '/skin' + urlParams,
                params: filters,
                controller: 'skinCtrl',
                templateUrl: 'templates/skin.html'
            })
            .state('freshness', {
                url: '/freshness' + urlParams,
                params: filters,
                controller: 'freshnessCtrl',
                templateUrl: 'templates/freshness.html'
            })
            .state('color', {
                url: '/color' + urlParams,
                params: filters,
                controller: 'colorCtrl',
                templateUrl: 'templates/color.html'
            })
            .state('segmentWidth', {
                url: '/segmentWidth' + urlParams,
                params: filters,
                controller: 'segmentWidthCtrl',
                templateUrl: 'templates/segmentWidth.html'
            })
            .state('segmentBending', {
                url: '/segmentBending' + urlParams,
                params: filters,
                controller: 'segmentBendingCtrl',
                templateUrl: 'templates/segmentBending.html'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/main');

    });