angular.module('phoneDirectory').directive('alert', () => {
    return {
        template:   "<div class='ui-alert' ng-if='errorMessage'>" +
                        "<div class='ui-alert-title'>" +
                        "        {{ defaultErrorMessage }}" +
                        "</div>" +
                        "<div class='ui-alert-message'>" +
                        "    {{ errorMessage }}" +
                        "</div>" +
                    "</div>'" 
    };
})