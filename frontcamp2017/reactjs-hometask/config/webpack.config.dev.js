const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, 'web-app/client/'),
        host: 'localhost',
        port: 3000
    }
});
