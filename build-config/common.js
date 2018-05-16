
const path    = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const ENV    = process.env.NODE_ENV || 'development';
const isProd = (ENV === 'production');

const entry = {
    'baseui-wc-base-component': './src/index.js',
    'base-component': './src/base-component/index',
    'with-hyperHTML': './src/with-hyperHTML/index',
    'with-litHTML': './src/with-litHTML/index',
    'throw-error': './src/throw-error/index'
};

module.exports = {
    entry,
    plugins,
    mode: ENV,
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: 'dist/'
    },
    module: {
        rules: [...loaders]
    },
    performance: {
        hints: isProd ? 'warning' : false
    },
};
