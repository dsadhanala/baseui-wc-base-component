const webpackConfig = require('./build-config/webpack')();
const watchMode = process.env.NODE_ENV === 'test-watch';

module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai', 'sinon'],
        files: ['./test-config/index.js'],
        preprocessors: {
            './test-config/index.js': ['webpack', 'sourcemap']
        },
        webpack: {
            devtool: 'inline-source-map',
            mode: 'development',
            module: {
                rules: [
                    ...webpackConfig.module.rules,
                    {
                        test: /\.ts|js$/,
                        enforce: 'post',
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: { esModules: true }
                        },
                        exclude: /(_tests|test-config|types|node_modules)\//
                    }
                ]
            },
            resolve: webpackConfig.resolve
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-coverage-istanbul-reporter',
            'karma-sinon'
        ],
        reporters: ['mocha', 'coverage-istanbul'],
        port: 2424,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: !watchMode,
        concurrency: Infinity,
        coverageIstanbulReporter: {
            includeAllSources: true,
            fixWebpackSourcePaths: true,
            dir: './coverage/',
            reports: watchMode ? ['html', 'lcovonly'] : ['html', 'lcovonly', 'text'],
            thresholds: watchMode
                ? {}
                : {
                      emitWarning: true,
                      global: {
                          statements: 90,
                          lines: 90,
                          branches: 90,
                          functions: 90
                      }
                  }
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        }
    });
};
