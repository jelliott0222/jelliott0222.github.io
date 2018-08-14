(function() {

  var app = angular.module('tortoiseshellOptics');

  var MainController = function($scope, $http) {

    $http.get('resources/js/services.json').then(function(response) {
      $scope.services = response.data;
    })

  };

  app.controller('MainController', MainController);
}());
