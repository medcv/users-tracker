(function () {
    'use strict';

    angular
        .module('app.lab', [])
        .service('LabName', function () {
            var map = {};
            var isValue = false;

            this.isValue = function () {
                return isValue;
            };

            this.setLabName = function (val) {
                isValue = true;
                map['labName'] = val;

            };
            this.getLabName = function () {
                return map;
            }

        });


})();