import { isDefined, isEmptyObject, throwError, toCamelCase, toCapitalize, toHyphenCase } from '../index';

describe('toHyphenCase', () => {
    const actualVal = 'new-module';

    it('camelCase to lowercase with hyphen', () => {
        const expectedVal = toHyphenCase('newModule');
        expect(expectedVal).to.equal(actualVal);
    });

    it('PascalCase to lowercase with hyphen', () => {
        const expectedVal = toHyphenCase('NewModule');
        expect(expectedVal).to.equal(actualVal);
    });
});

describe('toCamelCase', () => {
    const actualVal = 'newModule';

    it('hyphen to camelCase', () => {
        let expectedVal = toCamelCase('new-module');
        expect(expectedVal).to.equal(actualVal);

        expectedVal = toCamelCase('NEW-module');
        expect(expectedVal).to.equal(actualVal);
    });

    it('underscore to camelCase', () => {
        let expectedVal = toCamelCase('new_module');
        expect(expectedVal).to.equal(actualVal);

        expectedVal = toCamelCase('NEW_MODULE');
        expect(expectedVal).to.equal(actualVal);
    });
});

describe('toCapitalize', () => {
    const actualVal = 'Newmodule';

    it('lowercase to Capitalize', () => {
        const expectedVal = toCapitalize('newmodule');
        expect(expectedVal).to.equal(actualVal);
    });
});

describe('isEmptyObject', () => {
    it('return `true` when passed in object is empty', () => {
        const expectedVal = isEmptyObject({});
        expect(expectedVal).to.equal(true);
    });

    it('return `false` when passed in object is not empty', () => {
        const expectedVal = isEmptyObject({ test: 'value' });
        expect(expectedVal).to.equal(false);
    });
});

describe('isDefined', () => {
    it('return `true` when passed in value is defined', () => {
        const value = 'string';
        const expectedVal = isDefined(value);
        expect(expectedVal).to.equal(true);
    });

    it('return `false` when passed in  value is undefined', () => {
        let value;
        const expectedVal = isDefined(value);
        expect(expectedVal).to.equal(false);
    });

    it('return `false` when passed in  value is null', () => {
        const value = null;
        const expectedVal = isDefined(value);
        expect(expectedVal).to.equal(false);
    });
});

describe('throwError', () => {
    it('throw error with provided error message', () => {
        const errorMsg = 'Failed, show error';
        const expectedVal = () => throwError(errorMsg)();
        expect(expectedVal).to.throw(errorMsg);
    });
});
