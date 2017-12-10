const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'channels.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: [{
                    loader: 'json-loader'
                }, {
                    loader: 'remove-number-attributes-webpack-loader'
                }]
            },

            /**
             * Bundling CSS files (bundling starts from the last item in use):
             *
             * sass-loader  : compile SASS to CSS
             * css-loader   : resolve import inside of js files
             * style-loader : creates styles nodes
             *
             */
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },

            /**
             * Compile .js files running babel
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            /**
             * File loader for supporting fonts inside of CSS files
             */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'src/styles/fonts/'
                    }
                }
            }]
    },

    plugins: [

        /**
         * Put to the output directory html file with already attached entry points
         */
        new HtmlWebpackPlugin({
            title: 'News feed',
            template: 'index.html'
        })
    ]
};
