const merge = require('webpack-merge');
const common = require('./build-config/common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: {
        tests : './demo/tests/index.js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 1919,
        hot: true,
        historyApiFallback: true,
        contentBase: './'
    }
});
