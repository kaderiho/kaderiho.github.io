const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    devServer: {},

    plugins: [
        new UglifyJsPlugin({

        })
    ]
});
