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
        vm.spinnerOptions = {
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#F58A00'


        };
        // Bindable properties and functions are placed on vm.
        //vm.activate = activate;
        vm.title = 'shell';
        vm.busyMessage = 'Please Wait...';
        function toggleSpinner(on) { vm.isBusy = on; }

        vm.isBusy = true;

        activate();
        function activate() {
            logSuccess('Profiler Angular loaded!', null, true);
            common.activateController([], controllerId)
                .then(function () {
                    //vm.showSplash = false;
                });
        }
        $rootScope.$on(events.spinnerToggle,
            function (data, args) {

                 toggleSpinner(args.show);
            }
        );
        $rootScope.$on(events.controllerActivateSuccess,
            function(data, args) {
                logSuccess('Loaded ' + args.controllerId, null, true);

            });
        //#region Internal Methods        

        //#endregion
    }
})();
