const path = require('path');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const TsChecker = require('fork-ts-checker-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = process.env.NODE_ENV === 'production';
const currentRoot = path.join(process.cwd());

const pathsToClean = ['dist', '@types'];

module.exports = () => [
    ...(!isProd ? [new webpack.HotModuleReplacementPlugin()] : []),
    new Clean(pathsToClean, { root: currentRoot, exclude: ['.git'] }),
    new TsChecker(),
    new webpack.DefinePlugin({
        DEV_FEATURE: JSON.stringify(!isProd),
        'process.env.NODE_ENV': JSON.stringify(ENV)
    })
];
