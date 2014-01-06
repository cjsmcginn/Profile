(function () {
    'use strict';

    // Module name is handy for logging
    var serviceId = 'model';
    angular.module('profile').factory(serviceId,
       ['$rootScope',
           model]);
    function model($rootScope) {
        var service = {
            Module: Module,
            Profile:Profile
        };
        return service;
        function Profile() {
            var result = {
                firstName: '',
                lastName: '',
                city: '',
                stateProvince: '',
                country: ''
            };
            return result;
        };
        function Module() {
            var result = {
                id:'',
                title: '',
                index:0
            };
            return result;
        };

    };

})();