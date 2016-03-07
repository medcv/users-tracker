(function () {
    'use strict';

    angular
        .module('app.main.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'Authentication'];
    function MainController($scope, Authentication) {
        var vm = this;

        vm.back = back;

        vm.labName = Authentication.getLabName();
        function back() {
            window.location = '/sign';
        }

    }
})();