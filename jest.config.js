module.exports = {
    verbose: true,
    collectCoverageFrom: [
        './src/**/*.{js,jsx}',
        '!**/_tests/**',
        '!**/node_modules/**'
    ],
    testMatch: ['**/_tests/**/*.js'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/demo/'
    ],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/test-mocks/styles.js'
    },
    transform: {
        '^.+\\.js$': 'babel-jest'
    }
};
