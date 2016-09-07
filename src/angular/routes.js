angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: "./src/angular/views/home.html"
          // controller: 'mainCtrl'
        })
        .state('portfolio', {
          url: '/portfolio',
          templateUrl: './src/angular/views/portfolio.html'
          // controller: 'mainCtrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: './src/angular/views/contact.html'
          // controller: 'mainCtrl'
        });

    $urlRouterProvider
      .otherwise('/');


  });  //end config
