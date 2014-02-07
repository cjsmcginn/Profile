(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'login';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
    [
        '$scope', 'common','config','$http', login]);

    function login($scope,common,config,$http) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Login';
        
        vm.doLogin = doLogin;
        vm.logout = logout;
        activate();
        function activate() {
                var promises = [getAccount(),common.$broadcast(config.events.showModule, controllerId)];
                common.activateController(promises, controllerId);
        }
        function doLogin() {
            $http.post('/login', vm).success(function(data, status, headers, configuration) {
                vm.account = data.account;
                vm.isAuthenticated = data.isAuthenticated;
            });

        }
        function logout() {
            $http.post('/logout').success(function() {
                vm.isAuthenticated = false;
            });
        }
        function getAccount() {
            $http.get('/account').success(function(data, status, headers, configuration) {
                vm.account = data.account;
                vm.isAuthenticated = data.isAuthenticated;
            });
        }
        //#region Internal Methods        

        //#endregion
    }
})();
