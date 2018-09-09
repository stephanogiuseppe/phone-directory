angular.module('phoneDirectory').directive('uiDate', () => {
    return {
        require: 'ngModel',
        link: (scope, element, attrs, ctrl) => {

            var formatDate = (date) => {
                date = date.replace(/[^0-9]+/g, '');
                if (date.length > 2) {
                    date = `${ date.substring(0, 2) }/${ date.substring(2) }`;
                    if (date.length > 5) {
                        date = `${ date.substring(0, 5) }/${ date.substring(5, 9) }`;
                    }
                }
                return date;
            }

            element.bind('keyup', () => {
                ctrl.$setViewValue(formatDate(ctrl.$viewValue));
                ctrl.$render();
            })
        }
    };
})