(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'login';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
    [
        '$scope', 'common','config', login]);

    function login($scope,common,config) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
        vm.newAccount = function() {
            common.$broadcast(config.events.showModule, 'account');
        };
       
        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Login';
        activate();
        function activate() {
            var promises = [common.$broadcast(config.events.showModule, controllerId)];
            common.activateController(promises, controllerId);
        }

        //#region Internal Methods        

        //#endregion
    }
})();
