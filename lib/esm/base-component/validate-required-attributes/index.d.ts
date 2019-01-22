export interface ValidateRequiredAttributesTypes {
    attrs: {
        [index: string]: string;
    };
    ele: string;
}
/**
 * Takes in attributes and element to determine if each attribute for that
 * element is defined. Emits a console error for each missing attribute. If
 * an attribute is an empty string, it will emit a console error to be sure
 *
 * @param {Object} attrs required attributes list
 * @param {string} ele HTML element name
 */
export declare function validateRequiredAttributes({ attrs, ele }: ValidateRequiredAttributesTypes): boolean;
export default validateRequiredAttributes;
