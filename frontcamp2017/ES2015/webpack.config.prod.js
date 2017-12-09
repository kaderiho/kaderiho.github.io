const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
    plugins: [
        new UglifyJsPlugin(),

        new HtmlWebpackPlugin({
            title: 'News feed',
            template: 'index.html'
        }),

        new CopyWebpackPlugin([
            {
                from: 'data/',
                to: '../dist/data'
            }
        ])
    ]
});
