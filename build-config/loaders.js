module.exports = [
    {
        test: /\.(js)$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    cacheDirectory: true,
                    presets: [
                        'stage-0',
                        [
                            'env', {
                                targets: {
                                    browsers: ['last 2 Chrome versions', 'last 2 Firefox versions', 'last 2 Edge versions', 'last 2 Safari versions', 'ie 11']
                                },
                                modules: false,
                                useBuiltIns: true
                            }
                        ]
                    ],
                    plugins: [
                        'transform-object-rest-spread',
                        [
                            'babel-plugin-transform-builtin-classes', {
                                globals: ['HTMLElement']
                            }
                        ]
                    ]
                }
            }
        ]
    }
];
