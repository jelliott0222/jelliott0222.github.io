(function() {

  var app = angular.module('portfolio');

  var MainController = function($scope, $http) {

    $http.get('resources/js/projects.json').then(function(response) {
      $scope.projects = response.data;
    })

  };

  app.controller('MainController', MainController);
}());
