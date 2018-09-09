angular.module("phoneDirectory").filter("ellipsisFilter", (config) => {
    return (input, size = config.limitDisplayNameDefault) => {
        if (input.length <= size) {
            return input;
        }
        return `${ input.substring(0, size) }...`;
    }
});