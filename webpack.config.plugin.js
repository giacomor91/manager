// erquire environment setup
require('./webpack.config.environment');

const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractSass = new ExtractTextPlugin({
//     filename: `${BUNDLE.beditaPluginsRoot}/OpenCorporation/${BUNDLE.webroot}/${BUNDLE.cssDir}/OpenCorporation.style.css`,
//     allChunks: true,
// });


// auto load installed plugins
const pluginsFound = readDirs(BUNDLE.beditaPluginsRoot);

const entries = {};
pluginsFound.forEach(plugin => {
    entries[plugin] = path.resolve(__dirname, `${BUNDLE.beditaPluginsRoot}/${plugin}/${BUNDLE.jsRoot}/index.js`);
});

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, `${BUNDLE.beditaPluginsRoot}`),
        filename: '[name]/webroot/js/[name].plugin.js',
        libraryTarget: 'window',
        library: '[name]',
    },

    externals: {
        vue: 'node_modules/vue/dist/vue',
    },

    resolve: {
        // aliases for import
        alias: {
            style: path.resolve(__dirname, `${BUNDLE.beditaPluginsRoot}/OpenCorporation/${BUNDLE.templateRoot}/Layout`),
        },

        extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    compact: false,
                    presets: [
                        ['@babel/preset-env', {
                            modules: false,
                            browsers: ['> 99%'],
                            useBuiltIns: "usage",
                        }]
                    ]
                }
            },
            // {
            //     test: /\.(css|scss)$/,
            //     include: [
            //         path.resolve(__dirname, `${BUNDLE.beditaPluginsRoot}/OpenCorporation/${BUNDLE.templateRoot}/Layout`),
            //     ],
            //     use: extractSass.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     minimize: !devMode,
            //                     sourceMap: devMode,
            //                 }
            //             },
            //             {
            //                 loader: 'sass-loader',
            //                 options: {
            //                     sourceMap: devMode
            //                 }
            //             }
            //         ],
            //     }),
            // },
        ]
    },
};
