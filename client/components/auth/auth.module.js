'use strict';

angular.module('clientAcquarelaApp.auth', [
  'clientAcquarelaApp.constants',
  'clientAcquarelaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
