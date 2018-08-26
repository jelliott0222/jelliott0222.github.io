(function() {

  var app = angular.module('tortoiseshellOptics', ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'resources/partials/home.html',
        controller: 'MainController'
      })
      .otherwise({redirectTo: '/home'});
  });

}());
