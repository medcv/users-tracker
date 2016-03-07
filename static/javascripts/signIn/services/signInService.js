(function () {
    'use strict';

    angular
        .module('app.signIn.services')
        .factory('SignIn', SignIn);

    SignIn.$inject = ['$http'];

    function SignIn($http) {
        var signIn = {
            postDataSignIn: postDataSignIn
        };

        return signIn;

        function postDataSignIn(data) {
             return $http.post('/api/v1/posts/', {data:data})
                .then(logoutSuccessFn, logoutErrorFn);

            function logoutSuccessFn(data, status, headers, config) {

                window.location = '/main';
            }

            function logoutErrorFn(data, status, headers, config) {
                console.error('Epic failure!');
            }

        }

    }
})();