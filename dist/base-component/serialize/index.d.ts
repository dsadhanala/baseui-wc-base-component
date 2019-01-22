/**
 * logError helps log composed error when property types mismatch
 */
interface LogErrorTypes {
    attrName: string;
    validate: boolean;
    expected: string;
    actual: string;
}
/**
 * Log error when serialization failed due to type mismatch, this will help identify the issues during runtime
 */
export declare function logError({ attrName, validate, expected, actual }: LogErrorTypes): void;
/**
 * serialize attribute value from string, log error if type mismatched
 */
export declare function serializeAttrValue(attrName: string, value: string | null, type: (val: any) => any): any;
export default serializeAttrValue;
