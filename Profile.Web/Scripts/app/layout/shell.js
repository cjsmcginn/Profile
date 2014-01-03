(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'shell';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
        ['$rootScope','common','config', shell]);

    function shell($rootScope,common,config) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
        var logSuccess = common.logger.getLogFn(controllerId, 'success');
        var events = config.events;
        // Bindable properties and functions are placed on vm.
        //vm.activate = activate;
        vm.title = 'shell';
        activate();
        function activate() {
            logSuccess('Profiler Angular loaded!', null, true);
            common.activateController([], controllerId)
                .then(function () {
                    //vm.showSplash = false;
                });
        }

        $rootScope.$on(events.controllerActivateSuccess,
            function(data) { logSuccess(controllerId, true, null); });

        //#region Internal Methods        

        //#endregion
    }
})();
