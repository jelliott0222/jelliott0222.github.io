(function() {

  var app = angular.module('portfolio', ["ngRoute"]);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

  }]);

}());
