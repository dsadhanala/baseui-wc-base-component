const merge = require('webpack-merge');
const common = require('./build-config/webpack')();

const entry = {
    index: './src/index'
};

module.exports = (env) => {
    const isMinEnabled = !!(env && env.min);

    return merge(common, {
        entry,
        optimization: {
            minimize: isMinEnabled
        },
        output: {
            filename: isMinEnabled ? '[name].min.js' : '[name].js',
            library: 'baseuiWcBaseComponent',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        externals: {
            'lit-html': 'lit-html',
            'hyperhtml/esm': 'hyperhtml'
        }
    });
};
