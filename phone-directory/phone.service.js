angular.module('phoneDirectory').service('phoneService' , function ($http, config) {

    var BASE_URL = config.baseUrl;

    this.getContacts = () => {
        return $http.get(`${ BASE_URL }/contacts`);
    };

    this.createContact = (contact) => {
        return $http.post(`${ BASE_URL }/contacts`, contact);
    };

    this.getPhoneProviders = () => {
        return $http.get(`${ BASE_URL }/phone-providers`);
    };
});