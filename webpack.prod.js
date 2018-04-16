const merge = require('webpack-merge');
const common = require('./build-config/common.js');

module.exports = env => {
    const isMinEnabled = !!((env && env.min));

    return merge(common, {
        optimization: {
            minimize: isMinEnabled
        },
        output: {
            filename: (isMinEnabled) ? '[name].min.js' : '[name].js',
            library: '[name]',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
    });
};
