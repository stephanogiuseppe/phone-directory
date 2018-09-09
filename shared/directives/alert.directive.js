angular.module('phoneDirectory').directive('uiAlert', () => {
    return {
        restrict: 'AE',
        replace: false,
        scope: {
            title: '@',
            errorMessage: '@message'
        },
        transclude: true,
        template:   "<div class='ui-alert' ng-if='errorMessage'>" +
                        "<div class='ui-alert-title'>" +
                        "    {{ title }}" +
                        "</div>" +
                        "<div class='ui-alert-message' ng-transclude></div>" +
                    "</div>"
    };
})