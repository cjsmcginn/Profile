(function () {
    'use strict';

    // Service name is handy for logging
    var serviceId = 'datacontext';

    angular.module('profile').factory(serviceId,
           ['$rootScope', 'common', 'config',
               datacontext]);
    function datacontext($rootScope, common, config) {
        var $q = common.$q;
        var service = {
            getModules:getModules
        };
        return service;

        function getModules() {
            var modules = [
                { title: 'Account',id:'account',index:0},
                { title: 'Profile',id:'profile',index:1}
                ];
            return $q.when(modules);
        }
    }

})();