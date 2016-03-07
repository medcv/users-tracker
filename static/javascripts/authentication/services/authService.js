(function () {
    'use strict';

    angular
        .module('app.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http', '$rootScope'];

    function Authentication($cookies, $http, $rootScope) {
        var Authentication = {
            getAuthenticatedAccount: getAuthenticatedAccount,
            getLabName:getLabName,
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout,
            register: register,
            setAuthenticatedAccount: setAuthenticatedAccount,
            setLabName:setLabName,
            unauthenticate: unauthenticate
        };

        return Authentication;

        function register(email, password, username) {
            return $http.post('/api/v1/accounts/', {
                username: username,
                password: password,
                email: email
            });
        }


        function login(email, password, labName) {
            return $http.post('/api/v1/auth/login/', {
                email: email, password: password
            }).then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn(data, status, headers, config) {
                Authentication.setAuthenticatedAccount(data.data);
                Authentication.setLabName(labName);
                window.location = '/sign';
            }

            function loginErrorFn(data, status, headers, config) {
                console.error('Epic failure!');
            }
        }

        function getAuthenticatedAccount() {
            if (!$cookies.authenticatedAccount) {
                return;
            }

            return JSON.parse($cookies.authenticatedAccount);
        }

        function isAuthenticated() {
            return !!$cookies.authenticatedAccount;
        }

        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }

        function setLabName(labName) {
            $cookies.labName = labName;
        }

        function getLabName() {
            if (!$cookies.labName) {
                return;
            }
            return $cookies.labName;
        }

        function unauthenticate() {
            delete $cookies.authenticatedAccount;
        }

        function logout() {
            return $http.post('/api/v1/auth/logout/')
                .then(logoutSuccessFn, logoutErrorFn);

            function logoutSuccessFn(data, status, headers, config) {
                Authentication.unauthenticate();

                window.location = '/';
            }

            function logoutErrorFn(data, status, headers, config) {
                console.error('Epic failure!');
            }
        }
    }
})();