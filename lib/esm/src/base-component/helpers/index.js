/**
 * set context to allow CE polyfill work as expected
 */
// export class HTMLCustomElement extends HTMLElement {
//     constructor(_: any) { return (_ = super(_)).init(), _; } // eslint-disable-line
//     init() { } // eslint-disable-line
// }
/**
 * serialize attribute value from string to number/object/boolean/null or string
 * this also checks if the given attribute is a boolean attribute(named as `has-*`) without value, then returns as boolean
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and returned as O
 */
export function serializeAttrValue(attrName, value) {
    var isObjOrArray = /^[{|[]/g.test(value);
    var hasOrIsBooleanAttr = /^has-|^is-/g.test(attrName);
    var updatedValue;
    // parse attributue value
    try {
        updatedValue = JSON.parse(value);
    }
    catch (e) {
        updatedValue = value;
        if (isObjOrArray) {
            // this avoid unexpected rendering issues with invalid string passed in
            updatedValue = null;
            console.error("Warning: Failed serializing attribute(" + attrName + ") value as JSON: " + value);
        }
    }
    // check for has-* or is-* attributes
    if (hasOrIsBooleanAttr) {
        updatedValue = hasOrIsBooleanAttr;
    }
    return updatedValue;
}
/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} camelcase string
 */
export function toCamelCase(word) {
    return word.replace(/\b(_|-)([a-z])/g, function (s, f, c) { return c.toUpperCase(); });
}
/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} hyphennated string
 */
export function toHyphenCase(word) {
    return word.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
//# sourceMappingURL=index.js.map