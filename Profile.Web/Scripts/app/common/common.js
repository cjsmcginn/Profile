(function () {
    'use strict';

    // Define the common module 
    // Contains services:
    //  - common
    //  - logger
    //  - spinner
    var commonModule = angular.module('common', []);

    // Must configure the common service and set its 
    // events via the commonConfigProvider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: '',
            //spinnerToggleEvent: ''
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common',
    ['$q','$rootScope', 'commonConfig','logger', common]);

    function common($q,$rootScope, commonConfig,logger) {
        var service = {
            activateController:activateController,
            logger: logger,
            $q:$q

        };
        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                var logSuccess = logger.getLogFn(controllerId, 'success');
                logSuccess(controllerId,'Shell Loaded', true);
                //$broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
            });
        }
        return service;
    }

})();