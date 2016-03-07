(function () {
    'use strict';

    angular
        .module('app.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', 'Authentication'];

    function LoginController($http, Authentication) {
        var vm = this;
        vm.login = login;

        getLabs();
        function login() {
            Authentication.login(vm.email, vm.password, vm.labName);
        }

        function getLabs() {
            $http.get('api/v1/labs/').then(function (response) {
                vm.labs = response.data;
                vm.defaultSelectedLab = vm.labs[0].id;
            });
        }
    }
})();