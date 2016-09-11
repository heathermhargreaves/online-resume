'use strict';

$(document).ready(function () {
  console.log("ready!");

  $('.carousel').carousel({
    dist: 0,
    shift: 0,
    padding: 20
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.top').slideUp();
    } else {
      $('.top').slideDown();
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.middle').slideUp();
    } else {
      $('.middle').slideDown();
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.bottom').slideUp();
    } else {
      $('.bottom').slideDown();
    }
  });

  $('.carousel-slider').carousel({
    full_width: true
  });
}); //end jquery doc
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