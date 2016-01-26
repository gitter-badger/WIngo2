var Config = require('../Config');
var app = angular.module('wingo2', ['ngMaterial']);

app.config(function ($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('orange')
    .accentPalette('gray');
});

app.controller('AppCtrl', function ($scope) {
  $scope.Title = Config.windowTitle;
});