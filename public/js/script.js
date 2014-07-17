// public/js/script.js

// create the module and name it kuntauApp
var kuntauApp = angular.module('kuntauApp', ['ngRoute']);

// configure our routes
kuntauApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

    // route for the home page
    .when('/home', {
      templateUrl : 'views/home.html',
      controller  : 'mainController'
    })

    // route for about
    .when('/about', {
      templateUrl : 'views/about.html',
      controller  : 'aboutController'
    })

    .when('/contact', {
      templateUrl : 'views/contact.html',
      controller  : 'contactController'
    })

    .when('/signin', {
      templateUrl : 'views/signin.html',
      controller  : 'signinController'
    })

    .otherwise({ redirectTo: '/home' });

    $locationProvider.html5Mode(true);

});

// create the controller and inject Angular's $scope
kuntauApp.controller('mainController', function($scope) {

  // create a messag to display in our view
  $scope.message = 'Everyone come and see how good id look';
});

kuntauApp.controller('aboutController', function ($scope) {
  $scope.message = 'This is about page!';
});

kuntauApp.controller('contactController', function ($scope) {
  $scope.message = 'Contact us!!';
});

kuntauApp.controller('signinController', function ($scope) {
  $scope.message = 'Please sign in!';
})
