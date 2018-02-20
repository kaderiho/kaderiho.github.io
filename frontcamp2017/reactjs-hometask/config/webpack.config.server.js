const nodeExternals = require('webpack-node-externals');
const webpack       = require('webpack');
const path          = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src/server'),

    entry: {
        server: './server.js'
    },

    output: {
        filename: '[name].bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, '..', 'dist'),
    },

    target: 'node',
    externals: nodeExternals(),

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    }
};
