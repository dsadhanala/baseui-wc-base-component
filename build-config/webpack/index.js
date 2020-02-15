const path = require('path');
const plugins = require('./plugins')();
const loaders = require('./loaders')();

module.exports = function () {
    const currentRoot = path.join(process.cwd());
    const ENV = process.env.NODE_ENV || 'development';
    const isProd = process.env.NODE_ENV === 'production';

    return {
        devtool: isProd ? 'source-map' : 'cheap-module-source-map',
        mode: ENV.trim(),
        target: 'web',
        output: {
            publicPath: '/',
            filename: '[name].js'
        },
        module: {
            rules: [...loaders]
        },
        plugins: [...plugins],
        resolve: {
            alias: {
                '@rootSrc': path.join(currentRoot, 'src/')
            },
            extensions: ['.ts', '.js', '.json']
        },
        performance: {
            hints: isProd ? 'warning' : false
        }
    };
};