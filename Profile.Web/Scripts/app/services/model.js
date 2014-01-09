(function () {
    'use strict';

    // Module name is handy for logging
    var serviceId = 'model';
    angular.module('profile').factory(serviceId,
       ['$rootScope',
           model]);
    function model($rootScope) {
        var service = {
            Country:Country,
            Module: Module,
            Profile:Profile
        };
        return service;
        function Country() {
            var result = {
                id: 0,
                abbreviation: '',
                name: '',
                stateProvinces:[]
            };
            return result;
        }
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