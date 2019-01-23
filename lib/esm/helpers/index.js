/**
 * Converts string camelcase to hyphennated
 */
export function toHyphenCase(word) {
    return word.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
/**
 * Converts string hyphennated to camelcase
 */
export function toCamelCase(word) {
    return word.toLowerCase().replace(/[-_]+([a-z])/g, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args[1].toUpperCase();
    });
}
/**
 * Check if the given object is empty or not.
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
/**
 * Check if the given value is defined or not.
 */
export function isDefined(value) {
    return value !== null && value !== undefined;
}
export function throwError(reason) {
    var newErr = new Error(reason);
    return function (error) {
        newErr.originalError = error;
        throw newErr;
    };
}
//# sourceMappingURL=index.js.map