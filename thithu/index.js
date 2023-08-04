let app = angular.module('myApp', ['ngRoute', 'ngMessages']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/dang-ky', {
            templateUrl: 'pages/dang-ky.html',
            controller: 'RegisterController'
        })
        .otherwise('/');
});