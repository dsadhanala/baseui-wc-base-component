/* eslint-disable */
// TODO move this to common build
const webpack           = require('webpack');
const path               = require('path');
const Dashboard          = require('webpack-dashboard');
const DashboardPlugin    = require('webpack-dashboard/plugin');
const camelCase          = require('lodash.camelcase');

const pkg                = require(path.join(process.cwd(), 'package.json'));
const ENV                = process.env.NODE_ENV || 'development';
const nodeModulesPath    = path.resolve(__dirname, './node_modules');
const modulesPath        = path.resolve(__dirname, './src');
const resolveModulesPath = [modulesPath, nodeModulesPath];

function setloaders(isProd) {
    return [
        {
            test: /\.(js)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            targets: {
                                browsers: ['last 2 Chrome versions', 'last 2 Firefox versions', 'last 2 Edge versions', 'last 2 Safari versions', 'ie 11']
                            },
                            modules: false,
                            useBuiltIns: true
                        }],
                        'stage-0'
                    ]
                }
            }],
            include: resolveModulesPath
        }
    ];
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

    if (!isProd) {
        // const dashboard = new Dashboard();

        plugins.push(
            new webpack.HotModuleReplacementPlugin()
            // new DashboardPlugin(dashboard.setData)
        );
    }

    return plugins;
}

module.exports = function () {
    const isProd = (ENV === 'production');

    const config = {
        devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
        entry: {
            [pkg.name] : './src/index'
        },
        performance: {
            hints: isProd ? 'warning' : false
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: 'dist/',
            library: camelCase(pkg.name),
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
