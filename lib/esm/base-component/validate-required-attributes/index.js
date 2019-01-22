import { isDefined } from '../../helpers';
/**
 * Takes in attributes and element to determine if each attribute for that
 * element is defined. Emits a console error for each missing attribute. If
 * an attribute is an empty string, it will emit a console error to be sure
 *
 * @param {Object} attrs required attributes list
 * @param {string} ele HTML element name
 */
export function validateRequiredAttributes(_a) {
    var attrs = _a.attrs, ele = _a.ele;
    var validate = true;
    Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (!isDefined(value)) {
            console.error(ele + ": Missing attribute '" + key + "'");
            validate = false;
            return;
        }
        if (typeof value === 'string' && value.length === 0) {
            console.error(ele + ": attribute '" + key + "' value is empty, is this expected?");
            validate = false;
            return validate;
        }
    });
    return validate;
}
export default validateRequiredAttributes;
//# sourceMappingURL=index.js.map