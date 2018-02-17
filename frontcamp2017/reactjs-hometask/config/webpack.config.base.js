const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src'),

    entry: {
        app: './app.jsx'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'News feed',
            inject: 'body'
        })
    ]
};
