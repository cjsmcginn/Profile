(function () {
    'use strict';

    // Service name is handy for logging
    var serviceId = 'datacontext';

    angular.module('profile').factory(serviceId,
           ['$rootScope', 'common', 'config','model.mapper',
               datacontext]);
    function datacontext($rootScope, common, config,mapper) {
        var $q = common.$q;
        var service = {
            getModules:getModules
        };
        return service;

        function getModules() {

            var data = [
                { title: 'Account',id:'account',index:0},
                { title: 'Profile',id:'profile',index:1}
                ];
            return $q.when(data).then(function (response) {
                var result = [];
                return mapper.module.toModels(data);
            });
        }
    }

})();