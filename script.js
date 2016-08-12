var app = angular.module('app', ['fc']);

app.controller('DemoController', ['$scope', function($scope) {
  $scope.items = [{
    id: 1,
    name: 'One'
  }, {
    id: 2,
    name: 'Two'
  }, {
    id: 3,
    name: 'Three'
  }];
  $scope.itemId = 1;
  $scope.id = 2;
}]);
