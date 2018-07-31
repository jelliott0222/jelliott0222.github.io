(function(){

  'use strict';

  angular.module('cart', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/cart', {
      templateUrl: 'partials/cart.html'
    });
  }]);

  // .controller('CartCtrl', ['$scope', 'CommonProp', function($scope,CommonProp) {
  //   $scope.items = CommonProp.getItems();
  //   $scope.total = CommonProp.getTotal();
  // }]);

})();
