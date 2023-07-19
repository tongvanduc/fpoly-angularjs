let app = angular.module('ductv', ['ngRoute']);

app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html'
        })
        .when('/employees', {
          templateUrl: 'employee.html',
          controller: 'employeesController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });