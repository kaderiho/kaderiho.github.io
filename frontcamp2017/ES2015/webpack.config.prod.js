const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        new UglifyJsPlugin(),

        /**
         * Copy mocha data to the dist folder
         */
        new CopyWebpackPlugin([
            {
                from: 'data/',
                to: '../dist/data'
            }
        ])
    ]
});
