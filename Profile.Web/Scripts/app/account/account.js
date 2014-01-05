(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'account';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
        ['$scope','common', account]);

    function account($scope,common) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
   
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Account';
        vm.currentAccount = {
            username: '',
            emailAddress: '',
            emailAddressConfirm:'',
            currentPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
            newUser: true
           

        };
        vm.validateEmailMatch = function() {
            if (vm.currentAccount.email !== '' && vm.currentAccount.emailConfirm !=='') {
                if (vm.currentAccount.emailConfirm != vm.currentAccount.email)
                    log(this);
            }
        };

        activate();
        function activate() {
        }

        //#region Internal Methods        

        //#endregion
    }
})();
