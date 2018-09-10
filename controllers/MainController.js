(function() {

  var app = angular.module('portfolio');

  var MainController = function($scope, $http) {

    $http.get('resources/js/projects.json').then(function(response) {
      $scope.projects = response.data;
    });

    $http.get('resources/js/resume.json').then(function(response) {
      $scope.resume = response.data;
    });

  };

  app.controller('MainController', MainController);
}());
