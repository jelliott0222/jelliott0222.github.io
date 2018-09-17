(function(){

  'use strict';

  angular.module('shop', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/shop', {
      templateUrl: 'partials/shop.html'
    });
  }]);

  // .controller('CartCtrl', ['$scope', 'CommonProp', function($scope,CommonProp) {
  //   $scope.items = CommonProp.getItems();
  //   $scope.total = CommonProp.getTotal();
  // }]);

})();
