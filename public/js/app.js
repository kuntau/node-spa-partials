// public/js/app.js

// create the module and name it kuntauApp
var kuntauApp = angular.module('kuntauApp', ['ui.router']);

// configure our routes
kuntauApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // for any unmatched url, redirect here
  $urlRouterProvider.otherwise('/');

  $stateProvider

    // route for the home page
    .state('root', {
      url         : '/home',
      templateUrl : 'views/home.html',
      controller  : 'MainCtrl'
    })

    .state('root.home', {
      url         : '/home',
      templateUrl : 'views/home.index.html'
    })

    .state('root.message1', {
      url         : '/message1',
      templateUrl : 'views/home.message1.html'
    })

    .state('root.message2', {
      url         : '/message2',
      templateUrl : 'views/home.message2.html',
      controller  : function ($scope) {
        $scope.names = ["nizam", "hassan", "adam", "burhan"];
      }
    })

    // route for about
    .state('about', {
      url         : '/about',
      templateUrl : 'views/about.html',
      controller  : 'aboutController'
    })

    .state('contact', {
      url         : '/contact',
      templateUrl : 'views/contact.html',
      controller  : 'contactController'
    })

    .state('login', {
      url         : '/login',
      templateUrl : 'views/login.html',
      controller  : 'LoginCtrl'
    });

    $locationProvider.html5Mode(true);

});

// create the controller and inject Angular's $scope
kuntauApp.controller('mainController', function($scope) {

  // create a message to display in our view
  $scope.message = 'Everyone come and see how good id look';
});

kuntauApp.controller('aboutController', function ($scope) {
  $scope.message = 'This is about page!';
});

kuntauApp.controller('contactController', function ($scope) {
  $scope.message = 'Contact us!!';
});
