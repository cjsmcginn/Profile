(function () {
    'use strict';

    // Define the directive on the module.
    // Inject the dependencies. 
    // Point to the directive definition function.
    angular.module('profile').directive('uiValidateEquals', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {


                elm.on('blur', function (e, n) {
                    var source = scope.$eval(attrs.uiValidateEquals);
                    var target = ctrl.$modelValue;
                    if (source && target) {
                        ctrl.$setValidity('equal', source == target);
                        var content = attrs.uiValidateEqualsError;
                        elm.popover({
                            placement: 'bottom',
                            conatiner: 'body',
                            content: content
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
    /// ng-minlength appears to have a bug in this release 
    angular.module('profile').directive('uiMinlength', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                elm.on('blur', function (e, n) {
                    var min = Number(scope.$eval(attrs.uiMinlength));
                    var target = ctrl.$modelValue;
                    
                    if (target) {
                        var valid = target.length >= min;
                        ctrl.$setValidity('minlength', valid);
                        if (!valid) {
                            var content = 'Value must be at least ' + min.toString() + ' characters';
                            elm.popover({
                                placement: 'bottom',
                                conatiner: 'body',
                                content: content
                            });
                            elm.popover('show');
                            elm.focus();
                        } else if (ctrl.$valid) {
                            elm.popover('destroy');
                        }
                    }
                });

            }
        };
    });
    angular.module('profile').directive('uiMaxlength', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                elm.on('blur', function (e, n) {
                    var max = Number(scope.$eval(attrs.uiMaxlength));
                    var target = ctrl.$modelValue;
                    if (target) {
                        var valid = target.length <= max;
                        ctrl.$setValidity('maxlength', valid);
                        if (!valid) {
                            var content = 'Value cannot exceed ' + max.toString() + ' characters';
                            elm.popover({
                                placement: 'bottom',
                                conatiner: 'body',
                                content: content
                            });
                            elm.popover('show');
                            elm.focus();
                        } else if(ctrl.$valid){
                            elm.popover('destroy');
                        }
                    }
                });

            }
        };
    });

})();