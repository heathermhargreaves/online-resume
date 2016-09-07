"use strict";
'use strict';

angular.module('app', ['ui.router']);
"use strict";
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