angular.module("phoneDirectory").controller("phoneDirectoryCtrl", ($scope, $filter, $http) => {
    $scope.app = "Phone Directory";

    $scope.contacts = [];

    $scope.phoneProviders = [];

    var loadContacts = (loadContacts = () => {
        $http.get('http://localhost:3412/contacts').then((contactsResponse) => {
            $scope.contacts = contactsResponse.data;
        });
        return loadContacts;
    })();

    var loadPhoneProviders = (() => {
        $http.get('http://localhost:3412/phone-providers').then((phoneProvidersResponse) => {
            $scope.phoneProviders = phoneProvidersResponse.data;
        });
    })();
    
    var saveContacts = (contact) => {
        $http.post('http://localhost:3412/contacts', contact).then((contactResponse) => {
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            loadContacts();
        });
    };

    $scope.addContact = (contact) => {
        saveContacts(contact);
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