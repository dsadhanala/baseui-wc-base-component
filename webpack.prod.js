const merge = require('webpack-merge');
const common = require('./build-config/webpack');

const entry = {
    'baseui-wc-base-component': './src/index.ts',
    'base-component': './src/base-component/index.ts',
    'with-hyperHTML': './src/with-hyperHTML/index.ts',
    'with-litHTML': './src/with-litHTML/index.ts',
    'throw-error': './src/throw-error/index.ts'
};

module.exports = env => {
    const isMinEnabled = !!((env && env.min));

    return merge(common, {
        entry,
        optimization: {
            minimize: isMinEnabled
        },
        output: {
            filename: (isMinEnabled) ? '[name].min.js' : '[name].js',
            library: '[name]',
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    });
};