angular.module('ui', []);
angular.module('ui').directive('uiAccordions', () => {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = (accordion) => {
                accordions.push(accordion);                
            };

            this.closeAll = () => {
                accordions.map((accordion) => {
                    accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module('ui').directive('uiAccordion', () => {
    return {
        require: '^uiAccordions',
        restrict: 'AE',
        replace: false,
        scope: {
            title: '@'
        },
        transclude: true,
        link: (scope, element, attrs, ctrl) => {
            ctrl.registerAccordion(scope);
            scope.open = () => {
                ctrl.closeAll();
                scope.isOpened = true;
            }
        },
        template:   "<div class='ui-accordion-title' ng-click='open()'>" +
                    "{{ title }}" +
                    "</div>" +
                    "<div class='ui-accordion-content' ng-transclude ng-show='isOpened'>" +
                    "</div>"
    };
})