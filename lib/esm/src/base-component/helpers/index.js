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
export function logError(_a) {
    var attrName = _a.attrName, validate = _a.validate, expected = _a.expected, actual = _a.actual;
    if (validate)
        return;
    throw new Error("PropType mismatch for attribute \"" + attrName + "\": Expected value type is \"" + expected + "\" but received \"" + actual + "\"");
}
/**
 * serialize attribute value from string
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and returned as O
 */
export function serializeAttrValue(proto, attrName, value, type) {
    if (!value)
        return;
    // console.log(attrName, value, type);
    // when property is defined as string type
    if (type === String) {
        logError({
            attrName: attrName,
            validate: value.constructor === type,
            expected: 'string',
            actual: typeof value
        });
        return type(value);
    }
    // when property is defined as number type
    if (type === Number) {
        var parsedVal = type(value);
        logError({
            attrName: attrName,
            validate: !isNaN(parsedVal),
            expected: 'number',
            actual: typeof value
        });
        return parsedVal;
    }
    try {
        return JSON.parse(value);
    }
    catch (e) {
        throw new Error("Warning: Failed serializing attribute(" + attrName + ") value as JSON: " + value);
    }
}
//# sourceMappingURL=index.js.map