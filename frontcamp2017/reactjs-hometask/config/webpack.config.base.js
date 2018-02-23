const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src/client'),

    entry: {
        index: './index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/client'),
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Basic ReactJS app',
            template: 'index.html',
            inject: 'body'
        })
    ]
};
