const merge = require('webpack-merge');
const common = require('./build-config/webpack')();

const entry = {
    'baseui-wc-base-component': './src/index',
    'base-component': './src/base-component/custom-element',
    'with-hyperHTML': './src/with-hyperHTML',
    'with-litHTML': './src/with-litHTML',
    'throw-error': './src/throw-error'
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