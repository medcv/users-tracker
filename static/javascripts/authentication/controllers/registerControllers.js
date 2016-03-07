(function () {
    'use strict';

    angular
        .module('app.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', '$http', 'Authentication'];
    function RegisterController($location, $scope, $http ,Authentication) {
        var vm = this;

        vm.register = register;
        activate();
        getLabs();

        function register(email, password, username) {
            return $http.post('/api/v1/accounts/', {
                username: username,
                password: password,
                email: email
            }).then(registerSuccessFn, registerErrorFn);

            function registerSuccessFn(data, status, headers, config) {
                Authentication.login(email, password, vm.labName);
            }

            function registerErrorFn(data, status, headers, config) {
                console.error('Epic failure!');
            }
        }

        function activate() {
            // If the user is authenticated, they should not be here.
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }

        function getLabs() {
            $http.get('api/v1/labs/').then(function (response) {
                vm.labs = response.data;
                vm.defaultSelectedLab = vm.labs[0].id;
                vm.labName = vm.labs[0].lab_name;
            });
        }
    }
})();