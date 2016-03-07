(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/login.html'
        }).when('/sign', {
            controller: 'SignInController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/signIn/signIn.html'
        }).when('/main', {
            controller: 'MainController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/main/main.html'
        }).otherwise('/login');
    }
})();