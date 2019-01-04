const path = require('path');
const merge = require('webpack-merge');
const common = require('./build-config/webpack')();

module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: {
        tests: './demo/tests/index.ts'
    },
    devServer: {
        host: '0.0.0.0',
        compress: true,
        port: 1919,
        historyApiFallback: true,
        open: true,
        contentBase: path.join(__dirname, './demo')
    }
});