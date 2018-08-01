 (function(){

  'use strict';

  angular.module('teaCozy', ['ngRoute', 'cart', 'shop'])
  // .config(['$routeProvider', function($routeProvider){
  //   $routeProvider.
  //     when('/home', {
  //       templateUrl: 'partials/home.html',
  //       controller: 'StoreController'
  //     }).
  //     when('/cart', {
  //       templateUrl: 'partials/cart.html',
  //       controller: 'StoreController'
  //     }).
  //     when('/products', {
  //       templateUrl: 'partials/products.html',
  //       controller: 'StoreController'
  //     }).
  //     otherwise({
  //       redirectTo: '/home'
  //     });
  // }])
  .controller('StoreController', ['$scope', '$route', '$routeParams', '$location', function($scope, CommonProp, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.products = [];
    $scope.cart = {
      itemTotal: 0,
      items: [

      ],
      totalPrice: 0
    };

    function initProducts() {
      $scope.products = [
        {
          name: 'Fall Berry Blitz Tea',
          price: 4.49,
          image: 'img-berryblitz.jpg',
          id: 0,
          inCart: false
        },
        {
          name: 'Spiced Rum Tea',
          price: 7.49,
          image: 'img-spiced-rum.jpg',
          id: 1,
          inCart: false
        },
        {
          name: 'Seasonal Donuts',
          price: 4.99,
          image: 'img-donut.jpg',
          id: 2,
          inCart: false
        },
        {
          name: 'Myrtle Ave Tea',
          price: 3.99,
          image: 'img-myrtle-ave.jpg',
          id: 3,
          inCart: false
        },
        {
          name: 'Bedford Bizarre Tea',
          price: 6.99,
          image: 'img-bedford-bizarre.jpg',
          id: 4,
          inCart: false
        },
      ]
    };

    initProducts();

    $scope.addCartItem = function(product) {
      if(!product.inCart) {
        $scope.cart.items.push({name: product.name, quantity: 1, id: product.id, price: product.price, image: product.image});
        product.inCart = !product.inCart;
        $scope.cart.itemTotal++;
        $scope.cart.totalPrice = $scope.cart.totalPrice + product.price;
        console.log($scope.cart.items);
        console.log($scope.cart.totalPrice);
      }
    };

    $scope.removeCartItem = function(item, id) {
      if(item.quantity > 0) {
        item.quantity = 0;
        $scope.cart.itemTotal--;
        $scope.cart.totalPrice = $scope.cart.totalPrice - item.price;
        $scope.products[id].inCart = false;
        console.log($scope.cart.items);
        console.log($scope.cart.totalPrice);
      }
    };

    // $scope.$watch('products',function(){
    //   CommonProp.setItem($scope.products);
    // });

  }])

  .directive('featuredProducts', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/featured-products.html',
      replace: true
    };
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'StoreController'
    })
    .otherwise({
      redirectTo: '/home'
    });
  }])
  .service('CommonProp', function() {
    var Items = '';
    var Total = 0;

    return {
      getItems: function() {
        return Items;
      },
      setItem: function(value) {
        Items = value;
      },
      getTotal: function(){
        return Total;
      },
      setTotal: function(value){
        Total = value;
      }
    };
  });

})();
