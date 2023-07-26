let app = angular.module('myApp', ['ngRoute', 'ngMessages']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/dang-ky-nhap-hoc', {
            templateUrl: 'pages/dang-ky-nhap-hoc.html',
            controller: 'dangkynhaphocController'
        })
        .otherwise('/');
});