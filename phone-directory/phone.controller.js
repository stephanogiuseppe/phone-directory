angular.module('phoneDirectory').controller('phoneDirectoryCtrl', ($scope, phoneService, config) => {
    $scope.app = 'Phone Directory';
    $scope.defaultErrorMessage = config.defaultErrorMessage;
    $scope.errorMessage = null;

    $scope.contacts = [];

    $scope.phoneProviders = [];

    var loadContacts = (loadContacts = () => {
        phoneService.getContacts().then((contactsResponse) => {
            $scope.contacts = contactsResponse.data;
            $scope.errorMessage = null;
        }).catch(() => {
            $scope.errorMessage = `${ config.loadErrorMessage } contacts list`
        });
        return loadContacts;
    })();

    var loadPhoneProviders = (() => {
        phoneService.getPhoneProviders().then((phoneProvidersResponse) => {
            $scope.phoneProviders = phoneProvidersResponse.data;
            $scope.errorMessage = null;
        }).catch(() => {
            $scope.errorMessage = `${ config.loadErrorMessage } phone providers list`
        });
    })();
    
    $scope.addContact = (contact) => {
        phoneService.createContact(contact).then((contactResponse) => {
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            $scope.errorMessage = null;
            loadContacts();
        }).catch(() => {
            $scope.errorMessage = `${ config.saveErrorMessage } contact`
        });
    };

    $scope.removeContact = (contacts) => {
        $scope.contacts = contacts.filter((contact) => {
            return !contact.selected;
        });
    }

    $scope.hasContactSelected = (contacts) => {
        return contacts.some((contact) => {
            return contact.selected
        });
    }

    $scope.orderBy = (field) => {
        $scope.orderSelected = field;
        $scope.direction = !$scope.direction;
    }
});