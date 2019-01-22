// To keep code DRY add frequently used modules to global
Object.assign(global, { DEV_FEATURE: false });

// test files
const testsContext = require.context('../src/', true, /_tests\/index.ts$/);
testsContext.keys().forEach(testsContext);

// source files
const componentsContext = require.context('../src/', true, /component.ts$/);
componentsContext.keys().forEach((file) => {
    if (file.includes('_tests/')) return;
    componentsContext(file);
});
