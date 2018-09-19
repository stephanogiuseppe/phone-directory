angular.module('phoneDirectory').config(($routeProvider) => {
    $routeProvider.when('/contacts', {
        templateUrl: 'pages/contacts.html'
    });
});