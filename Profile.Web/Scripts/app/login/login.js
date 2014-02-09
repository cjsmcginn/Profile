(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'login';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
    [
        '$scope', 'common','config','$http','spinner', login]);

    function login($scope,common,config,$http,spinner) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Login';
        
        vm.doLogin = doLogin;
        vm.logout = logout;
        vm.activated = false;
        activate();
        spinner.spinnerShow();
        function activate() {
            var p = getAccount().then(function() {
                spinner.spinnerHide();
            });
            var promises = [p,common.$broadcast(config.events.showModule, controllerId)];
            common.activateController(promises, controllerId);
            common.$broadcast(config.events.showErrors, { show: true, errors:['You','Fucked','Up'] });

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
            return $http.get('/account').success(function(data, status, headers, configuration) {
                vm.account = data.account;
                vm.isAuthenticated = data.isAuthenticated;
                
            });
        }
        function setStuff() {
            vm.activated = true;
            console.log('STuffed');
        }
        //#region Internal Methods        

        //#endregion
    }
})();
