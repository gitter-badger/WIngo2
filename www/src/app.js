var app = angular.module('wingo2', ['ngMaterial']);
app.controller('AppCtrl', function($scope, $wnTest) {
  $scope.Title = $wnTest.getText();
});