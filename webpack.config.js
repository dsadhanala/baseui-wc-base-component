/* eslint-disable */
// TODO move this to common build
const webpack            = require('webpack');
const path               = require('path');
const Dashboard          = require('webpack-dashboard');
const DashboardPlugin    = require('webpack-dashboard/plugin');
const UglifyJsPlugin     = require('uglifyjs-webpack-plugin');

const pkg                = require(path.join(process.cwd(), 'package.json'));
const ENV                = process.env.NODE_ENV || 'development';
const nodeModulesPath    = path.resolve(__dirname, './node_modules');
const modulesPath        = path.resolve(__dirname, './src');
const resolveModulesPath = [modulesPath, nodeModulesPath];

function toCamelCase(word) {
    return word.replace(/\b(_|-)([a-z])/g, (s, f, c) => c.toUpperCase());
}

function setloaders(isProd) {
    return [{
        test: /\.(js)$/,
        use: [{
            loader: 'babel-loader',
            options: {
                babelrc: false,
                cacheDirectory: true,
                presets: [
                    'stage-0',
                    ['env',
                        {
                            targets: { browsers: ['last 2 Chrome versions', 'last 2 Firefox versions', 'last 2 Edge versions', 'last 2 Safari versions', 'ie 11']},
                            modules: false,
                            useBuiltIns: true
                        }
                    ]
                ],
                plugins: [
                    'transform-object-rest-spread',
                    ['babel-plugin-transform-builtin-classes', { globals: ['HTMLElement'] }]
                ]
            }
        }]
    }];
}

function setPlugins(isProd) {
    const plugins = [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            options: {
                context: __dirname
            }
        }),

        new webpack.DefinePlugin({
            DEV_FEATURE: JSON.stringify(!isProd),
            'process.env.NODE_ENV': JSON.stringify(ENV)
        })
    ];

    if (isProd) {
        plugins.push(
            new UglifyJsPlugin({ parallel: 4, sourceMap: true })
        );
    }

    if (!isProd) {
        // const dashboard = new Dashboard();

        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            // new DashboardPlugin(dashboard.setData)
        );
    }

    return plugins;
}

module.exports = function () {
    const isProd = (ENV === 'production');

    const config = {
        mode: ENV,
        devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
        entry: {
            [pkg.name] : './src/index.js',
            'tests' : './demo/tests/index.js'
        },
        performance: {
            hints: isProd ? 'warning' : false
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: 'dist/',
            library: toCamelCase(pkg.name),
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            rules: setloaders(isProd)
        },
        devServer: {
            host: '0.0.0.0',
            port: 1919,
            hot: true,
            // quiet: true,
            historyApiFallback: true,
            contentBase: './'
        },
        plugins: setPlugins(isProd)
    };

    return config;
}
