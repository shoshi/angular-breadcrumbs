[angular-breadcrumbs](http://ianwalter.github.io/angular-breadcrumbs/)
===================

A better AngularJS service to help with breadcrumb-style navigation between views.

The full source code to the following example can be checked out from the 'gh-pages' brach.

#### Step 1: Include angular-breadcrumbs

Include angular-breadcrumb.min.js in your app under the angular.min.js reference

#### Step 2: Set up routing

In order to use breadcrumbs you'll need to use configure your app to use Angular's routeProvider. You'll also need to 
include the breadcrumbs service. You can then set a label for each route (breadcrumb) within the route options.


```javascript
  var app = angular.module('ab', ['services.breadcrumbs'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', { controller: 'HomeController', templateUrl: 'vw/home.html', label: 'Home' })
        .when('/stock/:stock', { controller: 'StockController', templateUrl: 'vw/stock.html', label: 'Stock' })
        .when('/stock/:stock/detail', { controller: 'StockDetailController', templateUrl: 'vw/stock-detail.html', label: 'Stock Detail' })
        .otherwise({ redirectTo: '/' });
```

#### Step 3: Make the breadcrumb object available to your app

Set the breadcrumb object in your app's main controller.

```javascript
  app.controller('HomeController', ['$scope', 'breadcrumbs', function($scope, breadcrumbs) {
    $scope.breadcrumbs = breadcrumbs;
```

#### Step 4: Display the breadcrumbs within your app

This HTML snippet will display your breadcrumb navigation and leave the last breadcrumb (the page you're currently on)
unlinked.

```html
  <ol class="breadcrumb">
    <li ng-repeat="breadcrumb in breadcrumbs.getAll()"><a href="#{{breadcrumb.path}}" ng-hide="$last">{{breadcrumb.label}}</a><span ng-show="$last">{{breadcrumb.label}}</span></li>
  </ol>
  <div ng-view ng-cloak></div>
```

That's it! You should now have breadcrumb navigation that can even handle nested routes.
