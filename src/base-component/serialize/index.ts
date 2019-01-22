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
export function logError({ attrName, validate, expected, actual }: LogErrorTypes): void {
    if (validate) return;

    throw new Error(
        `PropType mismatch for attribute "${attrName}": Expected value type is "${expected}" but received "${actual}"`
    );
}

/**
 * serialize attribute value from string, log error if type mismatched
 */
export function serializeAttrValue(attrName: string, value: string | null, type: (val: any) => any): any {
    // when the value is undefined/null
    if (value == null) return value;

    // when property is defined as string type
    if (type === String) {
        logError({
            attrName,
            validate: value.constructor === type,
            expected: 'string',
            actual: typeof value
        });

        return String(value);
    }

    // when property is defined as number type
    if (type === Number) {
        const parsedVal = Number(value);

        logError({
            attrName,
            validate: !isNaN(parsedVal),
            expected: 'number',
            actual: typeof value
        });

        return parsedVal;
    }

    // when property is defined as object or array type
    try {
        return JSON.parse(value);
    } catch (e) {
        throw new Error(`Warning: Failed serializing attribute(${attrName}) value as JSON: ${value}`);
    }
}

export default serializeAttrValue;
