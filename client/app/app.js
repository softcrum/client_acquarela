'use strict';

angular.module('clientAcquarelaApp', [
  'clientAcquarelaApp.auth',
  'clientAcquarelaApp.admin',
  'clientAcquarelaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
