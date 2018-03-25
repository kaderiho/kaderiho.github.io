app.directive('kaMinLength', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var min = parseInt(attrs.kaMinLength || 0, 10);

            ctrl.$parsers.unshift(function(viewValue) {
                var len = viewValue ? viewValue.length - (viewValue.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[]).length : 0;

                if (len <= min) {
                    ctrl.$setValidity("minlength", false);
                    return undefined;
                } else {
                    ctrl.$setValidity("minlength", true);
                    return viewValue;
                }
            });
        }
    };
});