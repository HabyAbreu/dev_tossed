// ROUTE
angularApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    
    .when('/', {
       templateUrl: 'states/home.htm',
       controller: 'mainController'
    })
    .when('/basket', {
     templateUrl: 'states/basket.htm',
     controller: 'basketController'
  })
    .otherwise({
       redirectTo: '/'
    });
 }]);