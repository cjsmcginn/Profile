(function () {
    'use strict';

    // Service name is handy for logging
    var serviceId = 'datacontext';

    angular.module('profile').factory(serviceId,
           ['$rootScope', 'common', 'config','model.mapper','mock.data',
               datacontext]);
    function datacontext($rootScope, common, config,mapper,mockData) {
        var $q = common.$q;
        var logSuccess = common.logger.getLogFn(serviceId,'success');
        var service = {
            getModules: getModules,
            getProfile: getProfile,
            getCountries:getCountries
        };
        return service;

        function getModules() {

            var data = mockData.modules;
            return $q.when(data).then(function (response) {
                var result = [];
                logSuccess('Modules Loaded', null,true);
                return mapper.module.toModels(data);
            });
        }
        function getProfile() {
            var data = mockData.profile;
            return $q.when(data).then(function (response) {
                var result = mapper.profile.toModel(data);
                logSuccess('Profile Loaded', null, true);
                return result;
            });
        }
        function getCountries() {
            var data = mockData.countries;
            return $q.when(data).then(function (response) {
                var result = mapper.country.toModels(data);
                logSuccess('Countries Loaded', null, true);
                return result;
            });
        }
    }

})();