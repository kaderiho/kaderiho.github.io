const nodeExternals = require('webpack-node-externals');
const webpack       = require('webpack');
const path          = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src/server'),

    entry: {
        app: './server.js'
    },

    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, '../src/server'),
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
