angular.module("phoneDirectory").controller("phoneDirectoryCtrl", ($scope, phoneService) => {
    $scope.app = "Phone Directory";

    $scope.contacts = [];

    $scope.phoneProviders = [];

    var loadContacts = (loadContacts = () => {
        phoneService.getContacts().then((contactsResponse) => {
            $scope.contacts = contactsResponse.data;
        });
        return loadContacts;
    })();

    var loadPhoneProviders = (() => {
        phoneService.getPhoneProviders().then((phoneProvidersResponse) => {
            $scope.phoneProviders = phoneProvidersResponse.data;
        });
    })();
    
    $scope.addContact = (contact) => {
        phoneService.createContact(contact).then((contactResponse) => {
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            loadContacts();
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