(function() {
    'use strict';

    // Define the directive on the module.
    // Inject the dependencies. 
    // Point to the directive definition function.
    angular.module('profile').directive('uiValidateEquals', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                
                elm.on('blur', function(e,n) {
                    var source = scope.$eval(attrs.uiValidateEquals);
                    var target = ctrl.$modelValue;
                    if (source && target) {
                        ctrl.$setValidity('equal', source == target);
                        var content = attrs.uiValidateEqualsError;
                        elm.popover({
                            placement: 'bottom',
                            conatiner:'body',
                            content:content
                        });
                        if (ctrl.$invalid) {
                            elm.popover('show');
                            elm.focus();
                        } else {
                            elm.popover('hide');
                        }
                    }
                    return undefined;
                });

            }
        };
    });
    
 

})();