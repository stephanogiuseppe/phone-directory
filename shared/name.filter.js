angular.module("phoneDirectory").filter("nameFilter", () => {
    return (input) => {
        var names = input.split(' ');
        var formattedNames = names.map((name) => {
            if (/(da|de)/.test(name)) {
                return name;
            }
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        });
        return formattedNames.join(' ');
    }
});