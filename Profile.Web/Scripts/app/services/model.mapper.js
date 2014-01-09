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
                var result = new model.Module();
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
        var profile = {
            toModel:function(data) {
                var result = new model.Profile();
                result.firstName = data.firstName;
                result.lastName = data.lastName;
                result.city = data.city;
                result.stateProvince = data.stateProvince;
                result.country = data.country;
                result.countryId = data.countryId;
                result.stateProvinceId = data.stateProvinceId;
                return result;
            },
            toModels:function(data) {
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    result.push(profile.toModel(data[i]));
                }
                return result;
            },
            fromModel:function(obj) {
                
            }
        };
        var country = {
            toModel:function(data) {
                var result = new model.Country();
                result.id = data.id;
                result.abbreviation = data.abbreviation;
                result.name = data.name;
                result.stateProvinces = [];
                for (var i = 0; i < data.stateProvinces.length; i++) {
                    var sp = {
                        id: data.stateProvinces[i].id,
                        abbreviation: data.stateProvinces[i].abbreviation,
                        name : data.stateProvinces[i].name,
                    };
                    result.stateProvinces.push(sp);
                }
                return result;
            },
            toModels:function(data) {
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    result.push(country.toModel(data[i]));
                }
                return result;
            }
        };
        var service = {
            module: module,
            profile: profile,
            country:country
        };
        return service;
    };

})();