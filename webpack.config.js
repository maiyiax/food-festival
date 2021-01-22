const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");

module.exports = {
    // first, declare entry point (root of the bundle and beginning of dependency graph)
    entry: {
        app: './assets/js/script.js',
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    output: {
        // second, list output where the bundled code will be placed
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                // preprocess any file with extension .jpg
                test: /\.jpg$/i,
                use: [
                    {
                        // where actual loader is implemented
                        loader: 'file-loader',
                        options: {
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    // third, provide mode we want webpack to run (default = production mode)
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file in the dist folder called report.html
        })
    ],
    mode: 'development'
};