const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, 'src/'),
        host: 'localhost',
        port: 3000
    },

    plugins: [
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
