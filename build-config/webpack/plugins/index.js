const path = require('path');
const webpack = require('webpack');
const TsChecker = require('fork-ts-checker-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = process.env.NODE_ENV === 'production';
const currentRoot = path.join(process.cwd());

module.exports = () => [
    ...(!isProd ? [new webpack.HotModuleReplacementPlugin()] : []),
    new TsChecker(),
    new webpack.DefinePlugin({
        DEV_FEATURE: JSON.stringify(!isProd),
        'process.env.NODE_ENV': JSON.stringify(ENV)
    })
];