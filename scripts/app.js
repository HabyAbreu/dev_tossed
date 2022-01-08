
// MODULE

var angularApp = angular.module('angularApp', ['ngRoute','ngAnimate']);

// ROUTE

// CONTROLLERS

angularApp.controller('mainController', ['$scope',  '$log',function ($scope,$log) { //STATE 1
$scope.fech_all_image={ img: "assets/img/header.png",
img1: "assets/img/media1.png"
},
$scope.header= 'hello@speedy-greens.com',
$scope.tcard= 'Produt 01',
$scope.pcard= '£2.99',
$scope.opcard= 'w',
$scope.opcard2= 'so',
$scope.opcard3= 'df',
$scope.opcard4= 'se',
$scope.opcard5= 'eg',
$scope.opcard6= 'pe',
$scope.opcard7= 'mu',
$scope.opcard8= 'ce',
$scope.opcard9= 'gl',
$scope.opcard10= 'vg',
$scope.opcard11= 'gf',
$scope.opcard12= 'v',
$scope.btnhelp= 'help',
$scope.btnhelp1= '?',
$scope.btngroupall= 'all products',
$scope.btngroups= 'salads',
$scope.btngroupw= 'wraps',
$scope.btngroupg= 'gym food',
$scope.btngroupd= 'drinks & snacks',
$scope.txtdisable= 'Sorry, out of stock',

$scope.filter= 'Filter by',
$scope.btnmenu= 'menu keys',
$scope.title= 'not sure what you fancy? browse our menu',


$scope.displayDetails= function ($params) {
  
    alert($params);
};
//console.log($scope.header);
}]);

angularApp.controller('basketController', function($scope) {//STATE 2
    $scope.fech_all_image={ img: "assets/img/headerb.png",imgc: "assets/img/splot.png",img1: "assets/img/media1.png"},
    $scope.header= 'hello@speedy-greens.com',
    $scope.btnhelp= 'help',
    $scope.btnhelp1= '?',
    $scope.txtdetail='chicken protein salad',
    $scope.pcard= '£2.50',
    $scope.total= 'Total',
    $scope.tprice= '£5.00*',
    $scope.btnadddiscount= 'Add discount voucher',
    $scope.btnemail= 'Email receipt',
    $scope.btnnext= 'Next customer',
    $scope.order= 'order summary',
    $scope.discountaply= 'Discount applied',
    $scope.valuediscount= '-£0.58'

    
 });


 //MODAL



