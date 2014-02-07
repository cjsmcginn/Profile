(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'account';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
        ['$scope','common','$http', account]);

    function account($scope,common,$http) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
   
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Account';
        vm.validateEmailMatch = function() {
            if (vm.currentAccount.email !== '' && vm.currentAccount.emailConfirm !=='') {
                if (vm.currentAccount.emailConfirm != vm.currentAccount.email)
                    log(this);
            }
        };
        vm.save = save;
        activate();
        function activate() {
            $http.get('/account').success(function (data, status, headers, config) {
                console.log(data);
                common.activateController([], controllerId);
            });
            
        }
        function getModel() {
            return $http.get('/account');
        }
        function save() {
            console.log('saving');
            $http.post('/account', vm);
        }
        //#region Internal Methods        

        //#endregion
    }
})();
