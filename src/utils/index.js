/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
export function toHyphenCase(word) {
    return word.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
export function toCamelCase(word) {
    return word.toLowerCase().replace(/[-_]+([a-z])/g, (...args) => args[1].toUpperCase());
}
