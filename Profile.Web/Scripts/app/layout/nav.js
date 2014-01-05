﻿(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'nav';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
        ['$scope', '$http','common','config', 'datacontext', nav]);

    function nav($scope, $http, common, config, datacontext) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
        var moduleViewPath = 'scripts/app/{path}/template.html';
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var $q = common.$q;
        vm.broadcast = common.$broadcast;
        vm.showModule = config.events.showModule;
        vm.modules = {
            interval: 5000,
            list: [],
            title: 'Modules'
        };
        vm.currentView = moduleViewPath.replace('{path}', 'login');
        $scope.$on(config.events.showModule, function(data,id) {
            vm.currentView = moduleViewPath.replace('{path}', id);
        });

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'nav';
        activate();
        function activate() {
            common.activateController([getModules()], controllerId)
                   .then(function () { log('Activated Nav View'); });
        }
        function getModules() {
            datacontext.getModules().then(function (data) {
                return vm.modules.list = data.sort(function (r1, r2) {
                    return r1.index > r2.index;
                });
            });
        }
        
        //#region Internal Methods        

        //#endregion
    }
})();
