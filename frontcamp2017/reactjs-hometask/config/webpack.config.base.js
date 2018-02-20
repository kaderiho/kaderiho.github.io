const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src/client'),

    entry: {
        app: './app.jsx',
        index: './index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/client'),
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.js/,
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
