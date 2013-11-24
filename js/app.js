/**
 * Example application for angular-breadcrumbs.js (https://github.com/ianwalter/angular-breadcrumbs)
 *
 * @author Ian Kennington Walter (http://www.iankwalter.com)
 */
"use strict";

var app = angular.module('ab', ['services.breadcrumbs'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/', { controller: 'HomeController', templateUrl: 'vw/home.html', label: 'Home' })
          .when('/stock/:stock', { controller: 'StockController', templateUrl: 'vw/stock.html', label: 'Stock' })
          .when('/stock/:stock/detail', { controller: 'StockDetailController', templateUrl: 'vw/stock-detail.html', label: 'Stock Detail' })
          .otherwise({ redirectTo: '/' });
  }]);

app.stocks = {
  'AAPL': { symbol: 'AAPL', price: '493.03', revenue: '3,303,403,203' },
  'TSLA': { symbol: 'TSLA', price: '182.45', revenue: '121,203,542' }
};

app.controller('HomeController', ['$scope', 'breadcrumbs', function($scope, breadcrumbs) {
  $scope.breadcrumbs = breadcrumbs;

  $scope.summary = "This is the Home page.";
  $scope.stocks = app.stocks;
}]);

app.controller('StockController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.stock = app.stocks[$routeParams['stock']];
  $scope.summary = "This is the Stock page.";
}]);

app.controller('StockDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.stock = app.stocks[$routeParams['stock']];
  $scope.summary = "This is the Stock Detaill page.";
}]);