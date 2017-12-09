const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, 'src/'),
        host: 'localhost',
        port: 3000
    }
});
