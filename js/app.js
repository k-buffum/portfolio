angular.module('Portfolio', ['ui.router'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    //define routes
    $stateProvider
    .state('projects', {
      url: '/',
      templateUrl: 'views/projects.html'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      }
    );
  }
]);