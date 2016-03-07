(function () {
    'use strict';

    angular
        .module('app.signIn.controllers')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['SignIn', 'Authentication', '$rootScope'];
    function SignInController(SignIn, Authentication) {
        var vm = this;
        vm.signIn = signIn;
        vm.checkboxModel = {
            'lab_name':Authentication.getLabName(),
            'browser': false,
            'email': false,
            'resume': false,
            'job':false,
            'game':false,
            'video':false
        };
        function signIn() {
            SignIn.postDataSignIn(vm.checkboxModel);
        }
    }
})();