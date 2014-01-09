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
                country: 'USA',
                countryId: 0,
                stateProvinceId:0
            },
            countries: [
                {
                    id: 1,
                    abbreviation: 'USA',
                    name: 'United States',
                    stateProvinces: [
                        {
                            id: 1,
                            abbreviation: 'AL',
                            name: 'Alabama',
                        },
                        {
                            id: 2,
                            abbreviation: 'NY',
                            name: 'New York',
                        }
                    ]

                },
                {
                    id: 2,
                    abbreviation: 'CAN',
                    name: 'Canada',
                    stateProvinces: [
                        {
                            id: 1,
                            abbreviation: 'AL',
                            name: 'Alberta',
                        },
                        {
                            id: 2,
                            abbreviation: 'MN',
                            name: 'Manitoba',
                        }
                    ]

                }
            ]
        };
        return service;
    }

})();