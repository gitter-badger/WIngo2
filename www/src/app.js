var app = angular.module('wingo2', ['ngMaterial']);
app.controller('TestController', function($scope, $wnTest) {
  $scope.Title = $wnTest.getText();
});