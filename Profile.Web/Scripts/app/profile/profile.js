(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'profile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('profile').controller(controllerId,
        ['$scope', 'common', 'datacontext', profile]);

    function profile($scope, common, datacontext, $filter) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'Profile';
        vm.profile = {};
        vm.countries = [];
        vm.stateProvinces = [];
        activate();
        function activate() {
            common.activateController([loadData()], controllerId);
        }
        function loadData() {
            common.$q.all([datacontext.getProfile(), datacontext.getCountries()]).then(function (d) {
                vm.profile = d[0];
                vm.countries = d[1];
                vm.selectedCountry = _.find(vm.countries, function (el) { return el.id == vm.profile.countryId; });
                if (vm.selectedCountry) {
                    vm.stateProvinces = vm.selectedCountry.stateProvinces;
                    vm.selectedStateProvince = _.find(vm.stateProvinces, function (el) { return el.id == vm.profile.stateProvinceId; });
                }
               
                return d;
            });
        }
        //#region Internal Methods        

        //#endregion
    }
})();
