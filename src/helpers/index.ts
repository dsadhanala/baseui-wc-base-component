/**
 * Converts string camelcase to hyphennated
 */
export function toHyphenCase(word: string): string {
    return word.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

/**
 * Converts string hyphennated to camelcase
 */
export function toCamelCase(word: string): string {
    return word.toLowerCase().replace(/[-_]+([a-z])/g, (...args) => args[1].toUpperCase());
}

/**
 * Converts string to Capitalize
 */
export function toCapitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Check if the given object is empty or not.
 */
export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

/**
 * Check if the given value is defined or not.
 */
export function isDefined(value: any): boolean {
    return value !== null && value !== undefined;
}

interface IError {
    originalError?: any;
}

/**
 * Simple error wrapper, helpful and re-usable, can be called inside catch when promise failed
 */
export function throwError(reason: string) {
    const newErr = new Error(reason) as IError;

    return (error: Error) => {
        newErr.originalError = error;
        throw newErr;
    };
}
