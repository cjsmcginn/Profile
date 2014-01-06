(function () {
    'use strict';

    // Module name is handy for logging
    var serviceId = 'mock.data';

    // Create the module and define its dependencies.
    angular.module('profile').factory(serviceId, ['$rootScope', mockData]);
    function mockData($rootScope) {
        var service = {
            modules: [
                { title: 'Account', id: 'account', index: 0 },
                { title: 'Profile', id: 'profile', index: 1 }
            ],
            profile: {
                firstName: 'John',
                lastName: 'Doe',
                city: 'Anywhere',
                stateProvince: 'New York',
                country:'USA'
            }
        };
        return service;
    }

})();