const path = require('path');
const plugins = require('./plugins')();
const loaders = require('./loaders')();

module.exports = function({ devServerHost, publicPath }) {
    const currentRoot = path.join(process.cwd());
    const ENV = process.env.NODE_ENV || 'development';
    const isProd = process.env.NODE_ENV === 'production';

    return {
        devtool: isProd ? 'source-map' : 'cheap-module-source-map',
        mode: ENV,
        target: 'web',
        output: {
            // publicPath: '/',
            path: path.join(currentRoot, publicPath),
            filename: '[name].js'
        },
        module: {
            rules: [...loaders]
        },
        plugins: [...plugins],
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        performance: {
            hints: isProd ? 'warning' : false
        }
    };
};
