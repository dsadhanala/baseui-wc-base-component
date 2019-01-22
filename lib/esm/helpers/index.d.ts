/**
 * Converts string camelcase to hyphennated
 */
export declare function toHyphenCase(word: string): string;
/**
 * Converts string hyphennated to camelcase
 */
export declare function toCamelCase(word: string): string;
/**
 * Check if the given object is empty or not.
 */
export declare function isEmptyObject(obj: object): boolean;
/**
 * Check if the given value is defined or not.
 */
export declare function isDefined(value: any): boolean;
export declare function throwError(reason: string): (error: Error) => never;
