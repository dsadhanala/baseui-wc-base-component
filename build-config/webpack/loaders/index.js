const path = require('path');

module.exports = () =>  [
    {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(tsx?)|.(jsx?)$/
    },
    {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
    }
];
