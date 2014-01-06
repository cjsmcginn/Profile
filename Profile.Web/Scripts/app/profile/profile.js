(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'profile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
        ['$scope','common','datacontext', profile]);

    function profile($scope,common,datacontext) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Profile';
        vm.profile = {};
        activate();
        function activate() {
            common.activateController([getProfile()], controllerId);
        }
        function getProfile() {
            datacontext.getProfile().then(function (data) {
                return vm.profile = data;
                });
        }
        //#region Internal Methods        

        //#endregion
    }
})();
