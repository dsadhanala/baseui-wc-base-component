/**
 * set context to allow CE polyfill work as expected
 */
/**
 * serialize attribute value from string to number/object/boolean/null or string
 * this also checks if the given attribute is a boolean attribute(named as `has-*`) without value, then returns as boolean
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and returned as O
 */
export declare function serializeAttrValue(attrName: string, value: string): any;
/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} camelcase string
 */
export declare function toCamelCase(word: string): string;
/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} hyphennated string
 */
export declare function toHyphenCase(word: string): string;
