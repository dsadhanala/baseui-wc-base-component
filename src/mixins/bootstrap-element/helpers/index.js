/**
 * serialize attribute value from string to number/object/boolean/null or string
 * this also checks if the given attribute is a boolean attribute(named as `has-*`) without value, then returns as boolean
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and sent as that type
 */
function serializeAttrValue(attrName, value) {
    const isObjOrArray = (/^[{|[]/g).test(value);
    const hasBooleanAttr = (/^has-/g).test(attrName);
    let updatedValue;

    // parse attributue value
    try {
        updatedValue = JSON.parse(value);
    } catch (e) {
        updatedValue = value;

        if (isObjOrArray) {
            updatedValue = null;
            console.error(`Warning: Failed serializing attribute(${attrName}) value as JSON: ${value}`);
        }
    }

    // check for has-* attributes
    if (hasBooleanAttr) {
        updatedValue = hasBooleanAttr;
    }

    return updatedValue;
}

export default serializeAttrValue;
