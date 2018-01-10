import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import { minify } from 'uglify-es';

const defaultPlugins = [
    babel({ exclude: 'node_modules/**' }),
    resolve({ main: true }),
    commonjs()
];

const defaultConfig = (dest, plugins, sourcemap = true) => ({
    input: 'src/index.js',
    output: {
        file: dest,
        format: ['umd'],
        name: 'baseuiWcBaseComponent',
        sourcemap
    },
    plugins
});

const bundle = defaultConfig('dist/baseui-wc-base-component.js', defaultPlugins, false);
const minifiedBundle = defaultConfig('dist/baseui-wc-base-component.min.js', [...defaultPlugins, uglify({}, minify)]);

export default [bundle, minifiedBundle];
