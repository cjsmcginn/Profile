(function () {
    'use strict';

    var profile = angular.module('profile');
    var config = {};
    profile.value('config', config);
    profile.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
            
        }
    }]);
})();