const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    plugins: [
        /**
         * Clean dist directory each run time
         */
        new CleanWebpackPlugin(['dist']),

        /**
         * Minification js files
         */
        new UglifyJsPlugin()
    ]
});
