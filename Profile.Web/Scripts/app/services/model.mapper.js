(function () {
    'use strict';

    // Module name is handy for logging
    var serviceId = 'model.mapper';
    angular.module('profile').factory(serviceId,
       ['$rootScope','model',
           modelMapper]);
    function modelMapper($rootScope,model) {
        var module = {
            toModel: function(data) {
                var result = model.Module();
                result.title = data.title;
                result.id = data.id;
                result.index = data.index;
                return result;
            },
            toModels: function (data) {
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    result.push(module.toModel(data[i]));
                }
                return result;
            },
            fromModel: function (obj) { }
        };
        var service = {
            module:module
        };
        return service;
    };

})();