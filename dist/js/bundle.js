"use strict";
'use strict';

angular.module('app', ['ui.router']);
'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "./src/angular/views/home.html"
    // controller: 'mainCtrl'
  }).state('portfolio', {
    url: '/portfolio',
    templateUrl: './src/angular/views/portfolio.html'
    // controller: 'mainCtrl'
  }).state('contact', {
    url: '/contact',
    templateUrl: './src/angular/views/contact.html'
    // controller: 'mainCtrl'
  });

  $urlRouterProvider.otherwise('/');
}); //end config
'use strict';

angular.module('app').controller('navbarCtrl', function ($scope) {

  $scope.test = 'testing navbarCtrl';
});
'use strict';

angular.module('app').directive('navBarFixed', function () {

  return {
    restrict: 'E',
    templateUrl: 'src/angular/components/navbar/navbarTmpl.html',
    controller: 'navbarCtrl'
  };
}); //end directive