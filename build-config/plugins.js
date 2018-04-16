const webpack            = require('webpack');

const ENV    = process.env.NODE_ENV || 'development';
const isProd = (ENV === 'production');

module.exports = [
    ...(!isProd ? [new webpack.HotModuleReplacementPlugin()] : []),
    new webpack.DefinePlugin({
        DEV_FEATURE: !isProd,
        'process.env.NODE_ENV': JSON.stringify(ENV)
    })
];
