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

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules']
    },

    target: 'node',
    externals: nodeExternals(),

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
