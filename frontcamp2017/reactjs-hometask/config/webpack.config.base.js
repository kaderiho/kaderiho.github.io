const webpack           = require('webpack');
const path              = require('path');

module.exports = {
    context: path.resolve(__dirname, '../web-app/client/src/'),

    entry: {
        index: './index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../web-app/client/dist/'),
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
        new webpack.DefinePlugin({
            __isBrowser__: 'true'
        })
    ]
};
