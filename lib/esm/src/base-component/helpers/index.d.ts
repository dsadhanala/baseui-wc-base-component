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
/**
 * logError helps log composed error when property types mismatch
 */
interface LogErrorTypes {
    attrName: string;
    validate: boolean;
    expected: string;
    actual: string;
}
export declare function logError({ attrName, validate, expected, actual }: LogErrorTypes): void;
/**
 * serialize attribute value from string
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and returned as O
 */
export declare function serializeAttrValue(proto: any, attrName: string, value: string | null, type: (val: any) => any): any;
export {};
