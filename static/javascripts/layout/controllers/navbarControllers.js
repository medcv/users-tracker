(function () {
  'use strict';

  angular
    .module('app.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    function logout() {
      Authentication.logout();
    }
  }
})();