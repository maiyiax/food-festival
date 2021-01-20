const webpack = require("webpack");
const path = require("path");

module.exports = {
    // first, declare entry point (root of the bundle and beginning of dependency graph)
    entry: './assets/js/script.js',
    output: {
        // second, list output where the bundled code will be placed
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // third, provide mode we want webpack to run (default = production mode)
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
    ],
    mode: 'development'
};