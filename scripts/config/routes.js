// ROUTE
angularApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    
    .when('/', {
       templateUrl: 'states/home.html',
       controller: 'mainController'
    })
    .when('/basket', {
     templateUrl: 'states/basket.html',
     controller: 'basketController'
  })
    .otherwise({
       redirectTo: '/'
    });
 }]);