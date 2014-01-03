(function () {
    'use strict';

    // Service name is handy for logging
    var serviceId = 'datacontext';

    angular.module('profile').factory(serviceId,
           ['$rootScope', 'common', 'config',
               datacontext]);
    function datacontext($rootScope, $common, $config) {
        
    }

})();