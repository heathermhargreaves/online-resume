angular.module('app')
  .directive('navBarFixed', function() {

    return {
      restrict: 'E',
      templateUrl: 'src/angular/components/navbar/navbarTmpl.html',
      controller: 'navbarCtrl'
    };

  }); //end directive
