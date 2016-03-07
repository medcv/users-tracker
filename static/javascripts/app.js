(function () {
    'use strict';

    angular
        .module('app', [
            'app.config',
            'app.routes',
            'app.authentication',
            'app.layout',
            'app.signIn',
            'app.main'
        ])
        .run(run);


    run.$inject = ['$http', '$rootScope', '$location', 'Authentication'];
    function run($http, $rootScope, $location, Authentication) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';

        $rootScope.$on('$routeChangeStart', function (event) {

            if (!($location.path() === '/register')) {
                if (!Authentication.isAuthenticated()) {
                    console.log('DENY : Redirecting to Login');
                    $location.path('/login');
                }
            }
            else {
                console.log('ALLOW');
            }
        });
    }

    angular
        .module('app.config', []);
    angular
        .module('app.routes', ['ngRoute']);
})();