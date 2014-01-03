(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'profile';

    // Create the module and define its dependencies.
    var profile = angular.module('profile', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing

        // Custom modules 
        'common'           // common functions, logger, spinner
        // 3rd Party Modules
        
    ]);

    // Execute bootstrapping code and any dependencies.
    profile.run(['$rootScope','common',
        function ($rootScope,$common) {
            var logSuccess = $common.logger.getLogFn(id, 'success');
            logSuccess('Application Started', true,null);
        }]);
})();