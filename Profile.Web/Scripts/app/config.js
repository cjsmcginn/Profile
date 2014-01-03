(function () {
    'use strict';

    var profile = angular.module('profile');
    var events = {
        controllerActivateSuccess: 'controller.activateSuccess'
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
})();