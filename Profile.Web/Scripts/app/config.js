(function () {
    'use strict';
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
    var profile = angular.module('profile');
    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        showModule: 'showModule',
        spinnerToggle: 'spinner.toggle'
    };
    var config = {
        events:events
    };
    profile.value('config', config);
    profile.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
            
        }
    }]);
    //#region Configure the common services via commonConfig
    profile.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }]);
})();